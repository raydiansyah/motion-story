# Changelog

All notable changes to Motion Story are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version numbers match the `version` field in
[`styles/catalog.json`](styles/catalog.json); entries without a version number
did not change the catalog.

## [Unreleased]

### Added

- Optional deterministic **three.js 3D engine** (`engine/`): paused GSAP timeline, seekable WebGL stage with directed camera, pins and seeded randomness, headless stills/MP4 renderer with post-encode probing, and a determinism self-test (`npm run engine:test`). Architecture studied from zeative/motion-educator; implementation is original.
- `examples/signal-orb-3d/`: a 10-second 9:16 Storyflow-style story in real 3D, and `docs/THREE_ENGINE.md`.
- README gallery entries for Medical Science Storytelling and Anatomy Atlas, with SVG keyframes and links to their 8-second interactive motion studies.
- The browser Style Lab now includes a dedicated Medical Science scene alongside Anatomy Atlas.

### Changed

- Interactive Style Lab duration reduced from 12 to 8 seconds so each sample works as a compact 5–10 second style preview.
- README now distinguishes static style images, interactive browser motion studies and rendered MP4 exports.

## [1.6.0] - 2026-11-22

### Added

- **Anatomy Atlas** (`anatomy-atlas`) — a label-led anatomy and physiology style, distinct from cinematic Medical Science Storytelling.
- Reusable simplified SVG anatomy primitives for stomach, heart, lungs, brain, blood-vessel cross-section and cell.
- Medical Science System guide defining source, accuracy, review, camera, scene-layer and style-selection gates.

### Changed

- Medical Science Storytelling metadata expanded for public-health and physiology explainers.
- Nine existing style guides now include health-topic suitability and safety boundaries, so style selection follows the communication task.
- Interactive preview now includes Anatomy Atlas as a seventh style; Medical Science Storytelling retains its standalone HTML example.
- Catalog corrected to 39 styles and version 1.6.0.

### Fixed

- README style-count badges and preview coverage statements aligned with the catalog and actual preview implementation.

## [1.5.0] - 2026-11-14

### Added

- **Chibi Explainer** style (`chibi-explainer`) — flat chibi presenter in a
  layered scene with a work board, speech bubble, and area annotation chip,
  taking the catalog from 36 to 37 styles. Reference scene: an original
  coffee-shop ("kedai kopi") explainer frame.
- This changelog, so future changes are easy to track.

## 2026-11-13 — Project logo

### Added

- Project logo (`assets/logo.svg`): stacked storyboard frames with a play
  triangle, shown in the README header. (#3)

## [1.4.0] - 2026-11-12

### Added

- 6 styles from the 2D character & illustration picker, taking the catalog
  from 30 to 36 styles: `stickman`, `kartun-flat`, `whiteboard-doodle`,
  `kolase-kertas`, `watercolor`, `anime`. (#2)

## [1.3.0] - 2026-11-12

### Added

- 11 styles inspired by the Bang Motion gallery, taking the catalog from 19
  to 30 styles: `grainy-gradient`, `poster-colorblock`, `product-tour`,
  `flat-vector`, `flat-pop-photo`, `continuous-action`, `visual-journalism`,
  `white-catalog`, `vintage-sketch`, `cartoon-collage`, `cartoon-stage`. (#2)

## [1.2.0] - 2026-11-12

### Added

- `docs/MOTION_GUIDE.md`: two new chapters — "Shot size — camera to element"
  (deterministic `camAt(t)` keyframe camera rig) and "Video as a footage
  layer" (`syncClip()` helper), plus matching quality-gate checks.
- `styles/preview.html`: working camera rig (Wide / Medium / Close-up shots)
  and an inert footage-clip registry demonstrating both new chapters.
- Catalog entries gained `image` and `guide` fields for 11 styles.

### Fixed

- Reference images of the original 19 styles aligned with their style
  definitions: hook text now matches the catalog samples exactly, all
  reference images normalized to 1080×1440, `product-xray` rebuilt on a
  light background, and palette labels, footer contrast, and pill colors
  corrected. (#1)

## [1.0.0] - 2026-11-12

### Added

- Initial release: agent skill (`SKILL.md`), motion guide
  (`docs/MOTION_GUIDE.md`), interactive style preview
  (`styles/preview.html`), and viral-style research notes.
- 19 styles, each with a `STYLE.md` brief and a 1080×1440 SVG reference
  image: `storyflow`, `curiosity-lab`, `data-shock`, `myth-breaker`,
  `micro-drama`, `product-xray`, `kinetic-burst`, `isometric-flow`,
  `editorial-cutout`, `blueprint-mechanism`, `playful-doodle`, `vintage`,
  `modern`, `product-review`, `cartoon`, `manga`, `pixel`, `roblox`,
  `game`.
