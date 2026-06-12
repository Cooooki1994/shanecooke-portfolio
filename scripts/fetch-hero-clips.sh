#!/usr/bin/env bash
# Muted 12s hero background clips — no player UI (self-hosted MP4).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/videos/hero"
mkdir -p "$OUT"

clip() {
  local name="$1"
  local url="$2"
  local start="${3:-0}"
  local tmp="$OUT/.tmp-$name.mp4"
  local out="$OUT/$name.mp4"

  echo "→ $name"
  yt-dlp -f "bv*[height<=1080][ext=mp4]/bv*[height<=1080]/bv*+ba/b" \
    --merge-output-format mp4 -o "$tmp" "$url"
  ffmpeg -y -hide_banner -loglevel error -ss "$start" -i "$tmp" -t 12 \
    -an -vf "scale=1920:-2:flags=lanczos" \
    -c:v libx264 -crf 22 -preset fast -movflags +faststart "$out"
  rm -f "$tmp"
  ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "$out"
}

clip "my-wife-my-abuser" "https://www.youtube.com/watch?v=3a9YIyQQBPY" 8
clip "willem-frieda" "https://www.youtube.com/watch?v=IfxHSX2Az18" 0
clip "who-killed-billie-jo" "https://vimeo.com/678141708" 0
clip "babes-in-the-woods" "https://www.youtube.com/watch?v=gKPLOZdgPfE" 15
clip "human-tide" "https://www.youtube.com/watch?v=zV4xTVH90-8" 5

echo "Done — hero clips in $OUT"
