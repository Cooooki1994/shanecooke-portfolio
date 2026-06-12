#!/usr/bin/env bash
# Generate 15s muted MP4 previews from source clips for portfolio hover autoplay.
# Requires ffmpeg. Usage:
#   ./scripts/generate-previews.sh /path/to/source.mp4 my-wife-my-abuser

set -euo pipefail

SRC="${1:?Source video required}"
SLUG="${2:?Output slug required (e.g. my-wife-my-abuser)}"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/videos"
mkdir -p "$OUT_DIR"

ffmpeg -y -ss 00:00:30 -i "$SRC" -t 15 \
  -vf "scale=1280:-2" \
  -an -c:v libx264 -preset slow -crf 23 -movflags +faststart \
  "$OUT_DIR/${SLUG}-preview.mp4"

echo "Wrote $OUT_DIR/${SLUG}-preview.mp4"
echo "Add to src/data/projects.ts:"
echo "  videoSrc: \"/videos/${SLUG}-preview.mp4\","
