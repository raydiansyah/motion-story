---
name: motion-story
description: Design and build original, narrative-driven browser motion graphics for educational explainers, social shorts, product storytelling, infographic sequences and kinetic typography. Use this skill when a user requests a motion-story video, motion graphics style, or short-form animated explainer.
---

# Motion Story — Agent Skill

Motion Story creates genuine time-based visual storytelling rather than a slideshow. Choose the visual identity from the topic and intended audience; Storyflow is an available original style, not an obligation for every project.

## Start here
1. Read `styles/catalog.json`. If the user explicitly names a style, use it. If no style is named, randomly select one from the styles compatible with the topic and audience (not blindly from all styles). Record the chosen style and sampling seed/draw in the brief; keep that style fixed throughout editing and rendering. Avoid recently repeated styles where history is available. Then read `styles/<style-id>/STYLE.md`. Read `assets/styles/<style-id>.svg` as the visual reference. `styles/preview.html?style=<style-id>` currently supports the six original styles plus `anatomy-atlas`. `medical-science` has a standalone HTML demo at `examples/medical-science-storytelling.html`. Other catalog styles have static SVG references and written motion guides unless a dedicated preview is present.
2. Define audience, platform, aspect ratio, duration, narrative thesis and emotional tone. If omitted, default to a 30-second 9:16 educational short with no audio, without blocking implementation.
3. Write a short beat sheet: **hook → curiosity → visual proof → reveal → takeaway**. Treat this as a narrative function, not a rigid scene template.
4. Plan continuous subject identity: one object, connected graphic, or visual motif persists across transitions.
5. Use `styles/preview.html` as a deterministic visual reference and timing example, not as a ready-to-publish video or a generic template to repeat across topics.

## Quality gates
- **No PowerPoint effect**: never present a static headline atop a static image, fade it out, then replace it with another static card. Move the visual world or transform the evidence itself.
- Animate meaningful evidence: numbers, relationships, causal connections, or spatial comparisons.
- Vary shot size deliberately (wide ↔ medium close-up ↔ close-up) on story beats, with text arriving after the camera; keep captions and labels on the screen layer, outside the camera rig. See `docs/MOTION_GUIDE.md` § "Shot size — camera to element" (the preview implements this rig).
- If a real video clip is used, treat it as a footage layer locked to the timeline clock — trimmed, masked or graded, animated via its wrapper, never a full-screen autoplay insert. See `docs/MOTION_GUIDE.md` § "Video as a footage layer".
- Text is concise and legible at phone size. One primary headline and no more than one secondary world label at a time.
- Every frame must be a deterministic function of timeline time: no unseeded randomness, wall clock, increment-per-render particles, or non-deterministic physics.
- Maintain safe areas for mobile platforms and preserve contrast.
- Render-preview opening, middle, closing, and transition moments and fix cropping or collisions.
- Ensure a functioning pause, restart, debug scrub, and clean frame-capture mode.
- Do not claim an MP4 exists unless a real MP4 was rendered and verified.

## Product review mandatory image gate
If the user wants a Product Review (or a product-specific review using Product X-Ray) and no image of that actual product has been provided or is accessible in the current context, ask for the product image and defer final product visual/motion generation. Do not fabricate its appearance, silently use a placeholder, or use the generic style illustration as product evidence. If images are already attached or otherwise available, use them without asking again. Validate specifications and disclosure independently.

## Style-specific requirements
- Read the style guide for palette, type system, recurring motif and motion signatures.
- For Storyflow specifically, maintain an evolving connected graphic around the **signal orb**. For Medical Science Storytelling, maintain a connected anatomy-to-evidence path and follow its medical accuracy gates. For Anatomy Atlas, use measured callouts, a warm-paper atlas layout and the orientation → structure → pathway → recap arc; use anatomy assets only as simplified primitives and verify all anatomy against authoritative references. For other styles, follow their own motifs and rules.
- Use transitions motivated by the narrative and the chosen style; do not impose Storyflow's orb or connections on other visual systems.
- Original shapes and layout only; do not copy visual assets or starter files from other projects.

## 3D engine (optional)
When the topic needs real depth (a hero object, a directed camera, an X-ray or mechanism that transforms), use the three.js engine in `engine/` instead of faking 3D in 2D. Read `docs/THREE_ENGINE.md`, copy `examples/signal-orb-3d/` as the starting point, and run `npm install` first (three.js is not assumed to be installed). 3D must obey the same determinism gate: draw only via `space.render(t)`, seed all randomness with `rng()`, no accumulated state. Verify with `npm run engine:test`, review stills from `engine/tools/render.mjs --stills`, and only claim an MP4 after the renderer's probe line confirms it. Flat 2D styles do not need it.

## Suggested deliverables
- Standalone browser implementation with a full time-based timeline.
- A shot/beat script and optional voiceover script.
- Duration, aspect ratio and exact render commands if exporting video.

## Research-backed style selection
Consult `research/viral-styles-2026.md` for cited YouTube, TikTok and Indonesia insights. Select a style by the content's hook mechanism and explanatory evidence, not by presumed virality. Do not hardcode style counts or fixed option lists; always read `styles/catalog.json`. For `medical-science` and `anatomy-atlas`, follow `docs/MEDICAL_SCIENCE_SYSTEM.md`, source claims, label simplified anatomy and obtain qualified review for diagnosis, medication, treatment, red-flag or clinical-training content. The anatomy SVG library is conceptual and not diagnostic. Test one variable per matched variant, log retention and satisfaction indicators, and refine style choices based on observed channel performance.

## Cross-agent installation
For Claude Code, Codex, Hermes, ChatGPT, and custom agents, read [docs/AGENT_INSTALL.md](docs/AGENT_INSTALL.md). Install the full skill directory, not just this file. For ChatGPT upload, package using `sh scripts/package-skill.sh` from a complete checkout. Do not assume cloud agents share a local filesystem.
