#!/usr/bin/env bash
# List official History Hit documentary uploads on YouTube
set -euo pipefail

echo "Scraping youtube.com/@HistoryHit for documentary titles..."
echo ""

yt-dlp --flat-playlist --print "%(id)s|%(title)s" "https://www.youtube.com/@HistoryHit/videos" 2>/dev/null \
  | rg -i "icelandic vikings|churchill.?s secret|rise of caesar|rise of augustus" \
  || echo "No matches — check channel manually"

echo ""
echo "Update src/data/history-hit-trailers.ts and projects.ts with any new IDs."
