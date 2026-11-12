#!/bin/sh
# Package the checked-out Motion Story skill for ChatGPT upload.
set -eu
repo=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
command -v zip >/dev/null 2>&1 || { echo "Install the zip command first." >&2; exit 1; }
[ -f "$repo/SKILL.md" ] && [ -f "$repo/styles/catalog.json" ] || { echo "Incomplete Motion Story checkout" >&2; exit 1; }
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
mkdir -p "$tmp/motion-story"
for f in SKILL.md README.md LICENSE; do
  [ ! -f "$repo/$f" ] || cp "$repo/$f" "$tmp/motion-story/$f"
done
for dir in agents assets docs research styles; do
  [ ! -d "$repo/$dir" ] || cp -R "$repo/$dir" "$tmp/motion-story/$dir"
done
mkdir -p "$repo/dist"
(cd "$tmp" && zip -qr "$repo/dist/skill.zip" motion-story)
echo "Created: $repo/dist/skill.zip"
echo "Review ZIP contents before uploading to ChatGPT Skills."
