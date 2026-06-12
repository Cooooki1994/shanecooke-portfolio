#!/usr/bin/env bash
# Fetch History Hit SVOD thumbnails (og:image from access.historyhit.com)
set -euo pipefail

OUT="$(cd "$(dirname "$0")/.." && pwd)/public/images/history-hit"
mkdir -p "$OUT"

fetch() {
  local slug="$1" url="$2"
  local thumb
  thumb=$(curl -sL "$url" | rg -o 'property="og:image"[^>]+content="([^"]+)"|content="([^"]+)"[^>]+property="og:image"' -r '$1$2' | head -1)
  thumb="${thumb%%\?*}"
  echo "→ $slug"
  curl -sL "${thumb}?auto=format,compress&fit=crop&w=1280&h=720" -o "$OUT/${slug}.jpg"
}

fetch "icelandic-vikings-arrival" "https://access.historyhit.com/videos/icelandic-vikings-arrival"
fetch "icelandic-vikings-survival" "https://access.historyhit.com/icelandic-vikings/season:1/videos/icelandic-vikings-survival"
fetch "churchills-secret-war" "https://access.historyhit.com/videos/churchills-secret-army"
fetch "rise-of-caesar" "https://access.historyhit.com/videos/rise-of-caesar"
fetch "rise-of-augustus" "https://access.historyhit.com/videos/rise-of-augustus"

echo "Saved to $OUT"
