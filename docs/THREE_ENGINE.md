# Motion Story 3D Engine (three.js)

An optional engine for stories that need real 3D: a hero object, a directed camera, models that transform as evidence.
It is a small, original implementation of a proven architecture: **one paused GSAP timeline, one WebGL layer, and a
renderer that seeks every frame**. Use it when a style calls for depth (Storyflow's signal orb, Product X-Ray,
Blueprint Mechanism, Isometric Flow, Anatomy Atlas models). Flat 2D styles do not need it.

Inspired by the architecture of [zeative/motion-educator](https://github.com/zeative/motion-educator) (MIT). No code,
assets or starter files are copied; the engine here is written for Motion Story's own quality gates.

## Install

```sh
npm install                    # three@0.170.0 and gsap from package.json
npx playwright install chromium  # only if Playwright has no browser yet
```

Rendering also needs `ffmpeg` and `ffprobe` on PATH. With no GPU, Chromium falls back to SwiftShader (slower, same pixels).

## Layout

```
engine/story.js        createStory(): the timeline, scene windows, text helpers, playback controls, window.__seek
engine/stage3d.js      createStage3D(): three.js scene, studio light, materials, directed camera, pins, rng(seed)
engine/film.css        base look: frame, safe area, headline, pins, controls (removed in ?capture)
engine/tools/render.mjs  stills / MP4 / live server
engine/tools/selftest.mjs  proves a frame is a pure function of time
examples/signal-orb-3d/  a 10 s 9:16 reference story using all of it
```

## Writing a story

```html
<link rel="stylesheet" href="../../engine/film.css" />
<script type="importmap">{ "imports": {
  "three": "../../node_modules/three/build/three.module.min.js",
  "three/addons/": "../../node_modules/three/examples/jsm/",
  "gsap": "../../node_modules/gsap/index.js" } }</script>
<div id="root"><canvas class="space" id="space"></canvas> <!-- .scene sections: the screen layer --> </div>
<script type="module" src="film.js"></script>
```

```js
import { createStory } from "../../engine/story.js";
import { createStage3D, rng, THREE } from "../../engine/stage3d.js";

const story = await createStory({ width: 1080, height: 1920, duration: 10, fps: 30 });
const { tl, $, each, scene, land, split, typeIn, count } = story;
const space = createStage3D($("#space"), { width: 1080, height: 1920 });

space.scene.add(myModel);
space.onFrame((t) => { myModel.rotation.y = t * 0.4; });          // pure function of t
tl.to(space.cam, { az: 40, el: 18, dist: 30, duration: 2.4, ease: "power2.inOut" }, 3);  // camera move
scene("#hook", 0, 2.4); typeIn(split("#title"), 0.3);              // text arrives after the camera
each((t) => space.render(t));                                       // the only call that draws
story.finish();                                                     // always last
```

`space.cam` = `az el dist tx ty tz fov roll sway`. `space.pin(object, html, { dx, dy })` pins a label to a 3D point.
`space.M` has `ceramic metal graphite glass glow`. `story.count(...)` counts numbers; `story.land(...)` rises into place.

## Determinism rules (the Motion Story gate, applied to 3D)

- No `requestAnimationFrame`/`Date.now()`/`performance.now()`/`setTimeout` in a story, and no CSS animations.
- No `Math.random()`: use `rng(seed)`. Layout is generated once from a seed; motion is a function of `t`.
- Do not accumulate state per render (particle integration, physics steps). Compute position from `t` (`(t*speed + offset) % 1`).
- `fromTo`/`from` apply start values immediately and can leak backwards in time: use `tl.set` then `tl.to`.
- Await every texture/model/font before `story.finish()`.
- Captions and labels live in the screen layer (`.scene` DOM), outside the camera.

## Commands

```sh
npm run engine:test                                          # determinism self-test (forward/backward/revisit)
npm run serve -- examples/signal-orb-3d                      # watch live: Space pause, R restart, arrows step, slider scrub
node engine/tools/render.mjs examples/signal-orb-3d --stills 1,5,9
node engine/tools/render.mjs examples/signal-orb-3d          # -> out/signal-orb-3d.mp4, probed after encoding
```

Open a page with `?capture` for clean frame-capture mode (no controls, no fit-to-window scale) and `?t=3.2` to open at a
time. The renderer prints the probed codec, size and frame count; an MP4 counts as delivered only after that check.

## Mapping to Motion Story styles

| Need | Use |
| --- | --- |
| Storyflow | persistent signal orb (see the example), orbiting nodes, packets on paths |
| Product X-Ray | `M.glass` shell over `M.metal` internals, camera push-in, `pin` labels; needs the real product image first |
| Blueprint Mechanism / Isometric Flow | low `fov` (10–15) camera for near-isometric views, `az: 45, el: 35` |
| Anatomy Atlas | keep simplified primitives; follow `docs/MEDICAL_SCIENCE_SYSTEM.md` for sourcing and review |

## Not included (yet)

Depth of field, shadow floor helpers, exploded views, cutaways, model loaders and a segment cache for long renders.
Add them to `stage3d.js` as a style needs them, keeping `render(t)` the only drawing entry point.
