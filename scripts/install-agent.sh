#!/bin/sh
# Motion Story installer: run from the cloned repository with "sh scripts/install-agent.sh ..."
set -eu
usage() {
  cat <<'HELP'
Usage: sh scripts/install-agent.sh <claude|codex|hermes|custom> <global|project> [target-project-or-custom-skill-root]
Examples:
  sh scripts/install-agent.sh claude global
  sh scripts/install-agent.sh codex project /path/to/your-project
  sh scripts/install-agent.sh hermes global
  sh scripts/install-agent.sh custom project /path/to/agent/skills
Notes:
  project for claude/codex uses <project>/.claude/skills or <project>/.agents/skills
  custom expects the actual skills root directory, independent of scope
  ChatGPT Web uses Skills > Create > Upload; no local installer.
HELP
}
[ "$#" -ge 2 ] || { usage; exit 2; }
agent=$1
scope=$2
target=${3:-}
case "$scope" in global|project) ;; *) usage; exit 2 ;; esac
case "$agent" in
  claude)
    if [ "$scope" = global ]; then dest="${HOME:?}/.claude/skills/motion-story"
    else dest="${target:-$PWD}/.claude/skills/motion-story"; fi ;;
  codex)
    if [ "$scope" = global ]; then dest="${HOME:?}/.agents/skills/motion-story"
    else dest="${target:-$PWD}/.agents/skills/motion-story"; fi ;;
  hermes)
    if [ "$scope" = global ]; then dest="${HERMES_HOME:-${HOME:?}/.hermes}/skills/motion-story"
    else
      echo "Hermes default skill discovery is global; use 'hermes global', or configure Hermes external skill directories for a project-specific location." >&2
      exit 2
    fi ;;
  custom)
    [ -n "$target" ] || { echo "Custom requires a destination skills root." >&2; usage; exit 2; }
    dest="$target/motion-story" ;;
  *) usage; exit 2 ;;
esac
repo=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
[ -f "$repo/SKILL.md" ] && [ -f "$repo/styles/catalog.json" ] || {
  echo "Run this script from a full motion-story repository checkout." >&2; exit 1;
}
[ "$dest" != "$repo" ] || { echo "Refusing to overwrite source repository." >&2; exit 1; }
if [ -e "$dest" ] && [ ! -d "$dest" ]; then echo "Target exists and is not a directory: $dest" >&2; exit 1; fi
mkdir -p "$dest"
for file in SKILL.md README.md LICENSE; do
  if [ -f "$repo/$file" ]; then cp "$repo/$file" "$dest/$file"; fi
done
for dir in styles research docs assets agents; do
  if [ -d "$repo/$dir" ]; then
    rm -rf "$dest/$dir"
    cp -R "$repo/$dir" "$dest/$dir"
  fi
done
[ -f "$dest/SKILL.md" ] && [ -f "$dest/styles/catalog.json" ] || {
  echo "Installation did not pass file verification." >&2; exit 1;
}
printf 'Motion Story installed: %s\n' "$dest"
printf 'Restart your agent session, then request: Use the motion-story skill for a 9:16 explainer about AI.\n'
