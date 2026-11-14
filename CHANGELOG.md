# Changelog

All notable changes to Motion Story are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version numbers match the `version` field in
[`styles/catalog.json`](styles/catalog.json); entries without a version number
did not change the catalog.

## [Unreleased]

### Added

- **Chibi Explainer** style (`chibi-explainer`) — flat chibi presenter in a
  layered scene with a work board, speech bubble, and area annotation chip.
  In preparation; will ship as catalog 1.5.0 (37 styles).

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
