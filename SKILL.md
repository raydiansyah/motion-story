---
name: motion-story
description: Design and build original, narrative-driven browser motion graphics for educational explainers, social shorts, product storytelling, infographic sequences and kinetic typography. Use this skill when a user requests a motion-story video, motion graphics style, or short-form animated explainer.
---

# Motion Story — Agent Skill

Motion Story creates genuine time-based visual storytelling rather than a slideshow. Choose the visual identity from the topic and intended audience; Storyflow is an available original style, not an obligation for every project.

## Start here
1. Choose one style from `styles/catalog.json`, then read `styles/<style-id>/STYLE.md`. Read `assets/styles/<style-id>.svg` as the visual reference. `styles/preview.html?style=<style-id>` currently supports only the initial six styles; do not claim animated previews for the additional five.
2. Define audience, platform, aspect ratio, duration, narrative thesis and emotional tone. If omitted, default to a 30-second 9:16 educational short with no audio, without blocking implementation.
3. Write a short beat sheet: **hook → curiosity → visual proof → reveal → takeaway**. Treat this as a narrative function, not a rigid scene template.
4. Plan continuous subject identity: one object, connected graphic, or visual motif persists across transitions.
5. Use `styles/preview.html` as a deterministic visual reference and timing example, not as a ready-to-publish video or a generic template to repeat across topics.

## Quality gates
- **No PowerPoint effect**: never present a static headline atop a static image, fade it out, then replace it with another static card. Move the visual world or transform the evidence itself.
- Animate meaningful evidence: numbers, relationships, causal connections, or spatial comparisons.
- Text is concise and legible at phone size. One primary headline and no more than one secondary world label at a time.
- Every frame must be a deterministic function of timeline time: no unseeded randomness, wall clock, increment-per-render particles, or non-deterministic physics.
- Maintain safe areas for mobile platforms and preserve contrast.
- Render-preview opening, middle, closing, and transition moments and fix cropping or collisions.
- Ensure a functioning pause, restart, debug scrub, and clean frame-capture mode.
- Do not claim an MP4 exists unless a real MP4 was rendered and verified.

## Storyflow requirements
- Read the style guide for palette, type system, recurring motif and motion signatures.
- Maintain an evolving connected graphic around the **signal orb**.
- Use transitions motivated by the narrative: a connection line becomes a route; a number grows into a diagram; the orb pushes the virtual camera.
- Original shapes and layout only; do not copy visual assets or starter files from other projects.

## Suggested deliverables
- Standalone browser implementation with a full time-based timeline.
- A shot/beat script and optional voiceover script.
- Duration, aspect ratio and exact render commands if exporting video.

## Research-backed style selection
Consult `research/viral-styles-2026.md` for cited YouTube, TikTok and Indonesia insights. Select a style by the content's hook mechanism and explanatory evidence, not by presumed virality. The eleven reference styles are `storyflow`, `curiosity-lab`, `data-shock`, `myth-breaker`, `micro-drama`, `product-xray`, `kinetic-burst`, `isometric-flow`, `editorial-cutout`, `blueprint-mechanism`, and `playful-doodle`. Test one variable per matched variant, log retention and satisfaction indicators, and refine style choices based on observed channel performance.

## Cross-agent installation
For Claude Code, Codex, Hermes, ChatGPT, and custom agents, read [docs/AGENT_INSTALL.md](docs/AGENT_INSTALL.md). Install the full skill directory, not just this file. For ChatGPT upload, package using `sh scripts/package-skill.sh` from a complete checkout. Do not assume cloud agents share a local filesystem.
