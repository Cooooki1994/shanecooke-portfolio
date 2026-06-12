#!/usr/bin/env bash
# Re-encode HH social clips: portrait -> 16:9 face-focused crop for card previews.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$ROOT/public/videos/hh-originals"

# Crop upper-centre band (faces / presenters) then scale to 1280x720.
crop_face_16x9() {
  local in="$1" out="$2" trim="${3:-0}"
  local vf="crop=iw:iw*9/16:0:ih*0.12,scale=1280:720"
  if [ "$trim" != "0" ]; then
    ffmpeg -y -i "$in" -t "$trim" -vf "$vf" -c:v libx264 -crf 26 -preset fast \
      -c:a aac -b:a 128k -movflags +faststart "$out"
  else
    ffmpeg -y -i "$in" -vf "$vf" -c:v libx264 -crf 26 -preset fast \
      -c:a aac -b:a 128k -movflags +faststart "$out"
  fi
}

crop_face_16x9 "$DIR/icelandic-vikings-arrival.mp4" "$DIR/.tmp.mp4" 55 && mv "$DIR/.tmp.mp4" "$DIR/icelandic-vikings-arrival.mp4"
crop_face_16x9 "$DIR/icelandic-vikings-survival.mp4" "$DIR/.tmp.mp4" && mv "$DIR/.tmp.mp4" "$DIR/icelandic-vikings-survival.mp4"
crop_face_16x9 "$DIR/churchills-secret-war.mp4" "$DIR/.tmp.mp4" 55 && mv "$DIR/.tmp.mp4" "$DIR/churchills-secret-war.mp4"
crop_face_16x9 "$DIR/rise-of-caesar.mp4" "$DIR/.tmp.mp4" && mv "$DIR/.tmp.mp4" "$DIR/rise-of-caesar.mp4"

echo "Done — 16:9 face-cropped clips:"
ls -lh "$DIR"/*.mp4
