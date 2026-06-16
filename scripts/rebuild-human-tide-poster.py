#!/usr/bin/env python3
"""Rebuild the Human Tide poster.

Original poster artefacts to remove:
- dispersed/glitch TIDE row (y ~ 340-470)
- credits strip + dots pattern (y ~ 470-1080)
- 'humantidepictures.com' and 'Atticus Films' baked-in bottom corners

Preserved:
- 'Shane Cooke / Editor' top-left
- laurel top-right
- HUMAN serif title centered (y ~ 200-340)
- snowy treetops above HUMAN
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/human-tide-poster.jpg"
OUT = SRC

W, H = 1920, 1080

base = Image.open(SRC).convert("RGB")
if base.size != (W, H):
    base = base.resize((W, H), Image.LANCZOS)

KEEP_Y = 600  # keep original up to here (sky + trees + 'Shane Cooke' + laurel + HUMAN)
FILL_END_Y = 1040  # leave the bottom letterbox alone

# Source band of clean snowy tree texture (no overlays sit in this region)
band = base.crop((0, 150, W, 420))              # 270 tall, clean snowy trees (skips Shane Cooke text + laurel area)
band_flip = band.transpose(Image.FLIP_TOP_BOTTOM)

# Compose the replacement region by repeating band + flipped band
fill_h = FILL_END_Y - KEEP_Y
fill = Image.new("RGB", (W, fill_h))
y = 0
i = 0
while y < fill_h:
    src = band if i % 2 == 0 else band_flip
    h = min(band.height, fill_h - y)
    fill.paste(src.crop((0, 0, W, h)), (0, y))
    y += h
    i += 1

# Heavy-ish blur to defocus seams and any subtle artefacts
fill = fill.filter(ImageFilter.GaussianBlur(radius=6))

# Soft gradient darken toward bottom for depth
overlay = Image.new("RGBA", (W, fill_h), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for i in range(fill_h):
    a = int(120 * (i / fill_h) ** 1.2)
    od.line([(0, i), (W, i)], fill=(6, 12, 18, a))
fill = Image.alpha_composite(fill.convert("RGBA"), overlay).convert("RGB")

# Feather the seam at KEEP_Y so the transition is invisible
SEAM = 40
seam_top = base.crop((0, KEEP_Y - SEAM, W, KEEP_Y)).convert("RGBA")
seam_bot = fill.crop((0, 0, W, SEAM)).convert("RGBA")
mask = Image.new("L", (W, SEAM))
for i in range(SEAM):
    ImageDraw.Draw(mask).line([(0, i), (W, i)], fill=int(255 * (i / SEAM)))
blended = Image.composite(seam_bot, seam_top, mask)

result = base.copy()
result.paste(fill, (0, KEEP_Y))
result.paste(blended.convert("RGB"), (0, KEEP_Y - SEAM))

# Render clean TIDE beneath HUMAN, matching its size
def find_font():
    for p in [
        "/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf",
        "/System/Library/Fonts/Times.ttc",
        "/System/Library/Fonts/Supplemental/Baskerville.ttc",
    ]:
        if Path(p).exists():
            return p
    return None

font_path = find_font()
assert font_path, "No serif font found"

# HUMAN in source is ~920px wide; TIDE should match for visual balance.
target_w = 880
size = 320
for s in range(220, 520, 4):
    f = ImageFont.truetype(font_path, s)
    bbox = f.getbbox("TIDE")
    if (bbox[2] - bbox[0]) >= target_w:
        size = s
        break
font = ImageFont.truetype(font_path, size)

text = "TIDE"
bbox = font.getbbox(text)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
x = (W - tw) // 2 - bbox[0]
y = 700 - bbox[1]  # just below HUMAN (HUMAN ends ~y=590)

# Soft drop shadow
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.text((x + 3, y + 5), text, font=font, fill=(0, 0, 0, 170))
shadow = shadow.filter(ImageFilter.GaussianBlur(radius=8))

result_rgba = result.convert("RGBA")
result_rgba.alpha_composite(shadow)
draw = ImageDraw.Draw(result_rgba)
draw.text((x, y), text, font=font, fill=(245, 245, 240))
result = result_rgba.convert("RGB")

result.save(OUT, quality=92, optimize=True)
print(f"Wrote {OUT} ({result.size}) — TIDE rendered at size {size}, x={x}, y={y}")
