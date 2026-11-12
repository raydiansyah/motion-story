# Use Motion Story in Claude Code, Codex, ChatGPT, Hermes and custom agents

Motion Story uses the open **Agent Skills** format: one folder named `motion-story` containing `SKILL.md`, referenced style documents, gallery images and examples. The skill is instruction material, **not** a video-rendering service. Rendering requires the selected agent to have appropriate filesystem/browser/video tooling.

## At a glance

| Agent | Personal / global skill path | Project skill path | How to invoke |
|---|---|---|---|
| Claude Code / Claude CLI | `~/.claude/skills/motion-story/` | `.claude/skills/motion-story/` | `/motion-story` or natural language |
| OpenAI Codex (CLI / IDE) | `~/.agents/skills/motion-story/` | `.agents/skills/motion-story/` | `$motion-story` or natural language |
| Hermes Agent | `~/.hermes/skills/motion-story/` | Additional external skills directory must be configured | `/motion-story` or natural language |
| ChatGPT | Managed by ChatGPT Skills UI | No universal local project-folder discovery in ChatGPT chat | Mention Motion Story in a chat after installing |
| Custom agent | Any configured skill root | Any configured skill root | Depends on agent discovery and tool capabilities |

**Do not assume one global skill install synchronizes across cloud and local environments.** Each machine, container, or cloud agent has a distinct filesystem unless the provider explicitly supports synchronization.

## 1. Clone the repository

```bash
git clone https://github.com/raydiansyah/motion-story.git
cd motion-story
```

Run the following POSIX shell script from this checkout (Linux/macOS/WSL/Git Bash):

```bash
sh scripts/install-agent.sh claude global
sh scripts/install-agent.sh codex global
sh scripts/install-agent.sh hermes global
```

Install to a specific project:

```bash
sh scripts/install-agent.sh claude project /path/to/your-project
sh scripts/install-agent.sh codex project /path/to/your-project
```

Install for a custom tool with an explicitly known `skills` folder:

```bash
sh scripts/install-agent.sh custom project /path/to/my-agent/skills
```

The installer copies the complete content required by the skill, not only `SKILL.md`. It updates files under the destination skill folder; keep personal modifications elsewhere to avoid overwrites. The script must not be invoked as a network-loaded command without reviewing the source.

## 2. Claude Code / Claude CLI

**Personal scope:** `~/.claude/skills/motion-story/SKILL.md` — available to local Claude Code projects.

**Project scope:** `<project>/.claude/skills/motion-story/SKILL.md` — commit the folder for team-shared project behavior.

From the cloned Motion Story checkout:

```bash
sh scripts/install-agent.sh claude global
```

Restart Claude Code; inspect discovered skills using `/skills` if available in your version. Example prompt:

```text
/motion-story Create a 30-second 9:16 Indonesian tech explainer about
how AI prompts are processed. Select Storyflow, build an original
continuous timeline, deliver a standalone HTML preview and VO script.
```

If using Claude Code signed in with a linked claude.ai account, Claude may also sync skills enabled in Claude's web settings on eligible versions. Local filesystem installation remains the predictable approach for project reproducibility. Do not assume sync is supported for API-key or cloud-provider sessions.

Official reference: https://code.claude.com/docs/en/skills

## 3. OpenAI Codex CLI / IDE

**Personal scope:** `~/.agents/skills/motion-story/SKILL.md`.

**Project scope:** `<project>/.agents/skills/motion-story/SKILL.md`.

```bash
sh scripts/install-agent.sh codex global
```

Restart Codex so it rescans skill metadata. Example:

```text
$motion-story Build a 25-second curiosity-lab explainer about
why ice melts at different rates. Use 9:16, Indonesian copy,
sourced science, a deterministic HTML timeline, and debug scrubbing.
```

A repository-level `AGENTS.md` may instruct Codex to *consider* the skill, but it is not a replacement for installation. Avoid injecting all style guides into every session.

Official references: https://developers.openai.com/codex/skills and https://developers.openai.com/api/reference/cli

## 4. ChatGPT (web / mobile)

ChatGPT skills are managed in the product rather than copied to your laptop's `.agents` directory. For eligible accounts:

1. Clone/download this repository locally.
2. Run `sh scripts/package-skill.sh` to generate `dist/skill.zip` (requires `zip`).
3. Open ChatGPT **Plugins → Skills → Create → Upload from your computer**; select the ZIP.
4. Review installation/security status and install the skill.
5. Request: `Gunakan skill Motion Story. Pilih style Data Shock untuk video edukasi 9:16 tentang ...`

A ChatGPT skill gives instructions and resources but does not on its own grant direct access to GitHub, arbitrary binaries, FFmpeg, or an unrestricted filesystem. Available creation/rendering actions depend on the current ChatGPT tools and workspace configuration. If you need GitHub repo mutations, connect GitHub separately.

Official reference: https://help.openai.com/en/articles/20001066-skills-in-chatgpt

## 5. Hermes Agent (NousResearch)

Hermes Agent scans `~/.hermes/skills/` by default.

```bash
sh scripts/install-agent.sh hermes global
hermes skills list
```

Start a new Hermes session and invoke:

```text
/motion-story Create a 30-second Product X-Ray video about
[product] with verified specs and an honest hook.
```

Hermes also supports **external skill directories**; consult its own configuration documentation if you need skills outside the default home location. Unlike Claude/Codex, the provided installer does not claim that arbitrary `<project>/.hermes/skills` folders are automatically discovered.

Official references:
- https://hermes-agent.nousresearch.com/docs/user-guide/features/skills/
- https://hermes-agent.nousresearch.com/docs/guides/work-with-skills/

## 6. Other or custom agents

Implement a skill loader that:
1. Scans configured roots for a subdirectory containing `SKILL.md`.
2. Parses YAML frontmatter `name` and `description`.
3. Offers the matching skill in task routing; load the `SKILL.md` body *only when a video/motion request matches*.
4. Resolves local relative references to `styles/catalog.json`, `styles/<style-id>/STYLE.md` and `assets/styles/<style-id>.svg`.
5. Exposes tools separately for generating code, opening a preview, capturing frames and (optionally) encoding MP4.
6. Preserves source attribution and user permissions; never grant shell/network access simply because a skill asks for it.

For agents with no native Skills feature, paste this lightweight project rule into their local instruction system:

```text
For motion graphics, video explainers, educational shorts, and animated
product demos, load <installed-motion-story>/SKILL.md. Read
styles/catalog.json; choose the appropriate styles/<id>/STYLE.md.
Reference the gallery SVG for art direction, not as a static slideshow.
Design meaningful, time-based motion; verify data; provide timeline,
debug/clean capture and clearly state whether MP4 was actually rendered.
```

## 7. Updating installations

From your existing checkout:

```bash
git pull --ff-only
sh scripts/install-agent.sh claude global
sh scripts/install-agent.sh codex global
sh scripts/install-agent.sh hermes global
```

Do not use `git pull` in a modified checkout without inspecting changes. Package a fresh ChatGPT ZIP after updating. For remote/cloud environments, repeat installation in each persistent environment or configure a controlled bootstrapping step.

## 8. Verification

Check that the installed folder contains these core files:

```text
motion-story/
  SKILL.md
  agents/openai.yaml
  styles/catalog.json
  styles/preview.html
  styles/storyflow/STYLE.md
  styles/data-shock/STYLE.md
  assets/styles/storyflow.svg
  docs/MOTION_GUIDE.md
```

Ask your agent to **list the six styles and identify the best one for a niche**, then make a 5-second HTML sample with `?clean=1&t=2`. If it cannot read the style or catalog, installation/discovery is not verified. If it can describe the style but cannot render MP4, that is a rendering-tool limitation, not a missing skill.

### Troubleshooting

- Skill not listed: restart the agent, inspect your absolute install path, ensure file is named exactly `SKILL.md` and directory is named `motion-story`.
- Multiple agents behave differently: compare skill paths and the runtime's available tools; do not assume that shared instructions yield identical model outputs.
- A cloud agent ignores your local skill: install it in that cloud workspace or use the product's supported skill distribution mechanism.
- ChatGPT does not show Skills: account/workspace eligibility or admin permissions may restrict it.
- Render looks like a slideshow: explicitly request an evolving visual subject and inspect the generated timeline.
- Broken gallery: ensure the `assets/styles` directory was copied alongside the style guides.

## Security

Treat skill instructions as potentially executable guidance. Inspect `SKILL.md` and scripts before installing. Do not let an external skill override system safety rules. Validate and constrain resources, secrets, permissions and writes in the host agent environment.
