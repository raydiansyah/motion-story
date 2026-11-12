# Motion Story

**Motion Story** is an original, browser-first motion storytelling toolkit for educational shorts, explainers, and brand narratives. Its first visual style is **Storyflow / Living Narrative Motion**.

Inspired by the *principles* of timeline-driven motion design studied in [Bang Motion](https://github.com/bangtutorial/bang-motion), but built with an original visual language and standalone implementation. No code, starter templates, or image assets are copied from Bang Motion.

## Quick start

1. Open [`styles/storyflow/demo.html`](styles/storyflow/demo.html) in a modern browser (no build, CDN, or dependencies).
2. The demo autoplays and loops. Press **Space** to pause, **R** to restart.
3. Append `?debug=1` for a timeline scrubber. Append `?clean=1&t=4.2` for a deterministic still at 4.2 seconds.
4. Read [the Storyflow design guide](styles/storyflow/STYLE.md) and [the agent instructions](SKILL.md) when adapting the style.

## Storyflow

- A continuous narrative built around a persistent **signal orb** and connected infographics.
- Distinctive ink-navy background, luminous cyan, warm coral and parchment typography.
- Layered orbital diagrams, dimensional camera pushes, typography and reactive numbers.
- Native Canvas 2D at a fixed 1080 × 1920 design coordinate system, responsive letterbox scaling.
- Render is a **pure function of time**: seeking to a timestamp always shows the same image.
- No stock images, character assets or trademarked branding.

## Rendering

The HTML is immediately viewable. To produce frames, open `demo.html?clean=1&t=SECONDS` in a headless browser at your target resolution and screenshot the page. Assemble the frames with FFmpeg, for example 30 fps, then add properly licensed music or voiceover. For production, use a browser automation tool (Playwright or Puppeteer) to iterate timestamps. The demo itself does not export MP4.

## Repository structure

```text
README.md
SKILL.md
styles/storyflow/STYLE.md
styles/storyflow/demo.html
```

## License

MIT. See [LICENSE](LICENSE). The repository's original implementation is independent of Bang Motion. Attribution above is provided for conceptual research transparency.
