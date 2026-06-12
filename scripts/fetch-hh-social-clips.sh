#!/usr/bin/env bash
# Download official HH Originals promo clips from Instagram + SVOD, compress for portfolio hover.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/videos/hh-originals"
mkdir -p "$OUT"

download() {
  local name="$1" url="$2" trim="${3:-0}"
  local tmp="$OUT/.tmp-$name.mp4"
  echo "→ $name from $url"
  yt-dlp -f "bv*+ba/b" --merge-output-format mp4 -o "$tmp" "$url"
  if [ "$trim" != "0" ]; then
    ffmpeg -y -i "$tmp" -t "$trim" -vf "scale=-2:1280" -c:v libx264 -crf 28 -preset fast \
      -c:a aac -b:a 128k -movflags +faststart "$OUT/$name.mp4"
    rm -f "$tmp"
  else
    ffmpeg -y -i "$tmp" -vf "scale=-2:1280" -c:v libx264 -crf 28 -preset fast \
      -c:a aac -b:a 128k -movflags +faststart "$OUT/$name.mp4"
    rm -f "$tmp"
  fi
}

download icelandic-vikings-arrival "https://www.instagram.com/reel/DSkllh9Eyd3/" 55
download icelandic-vikings-survival "https://www.instagram.com/reel/DTvUwClj9tK/"
download churchills-secret-war "https://www.instagram.com/reel/DW_uRr3FnnQ/" 55
echo "→ rise-of-augustus + rise-of-caesar from SVOD ris26-trailer (shared clip)"
yt-dlp -f "bv*+ba/b" --merge-output-format mp4 -o "$OUT/rise-of-augustus-raw.mp4" \
  "https://access.historyhit.com/videos/ris26-trailer"
ffmpeg -y -i "$OUT/rise-of-augustus-raw.mp4" -vf scale=1280:720 -c:v libx264 -crf 26 -preset fast \
  -c:a aac -b:a 128k -movflags +faststart "$OUT/rise-of-augustus.mp4"
cp "$OUT/rise-of-augustus.mp4" "$OUT/rise-of-caesar.mp4"
rm -f "$OUT/rise-of-augustus-raw.mp4"

echo ""
echo "Done. Clips in public/videos/hh-originals/"
ls -lh "$OUT"/*.mp4
