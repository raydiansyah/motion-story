# Motion Generation Guide

This guide explains how to transform each **static style key visual** into a genuinely animated short-form explainer. Each gallery SVG is art direction, **not** a video frame to pan-and-zoom for the full duration.

## Quick command for an AI coding agent

```text
Read SKILL.md, research/viral-styles-2026.md, styles/catalog.json,
and styles/[STYLE_ID]/STYLE.md in this repository.
Use assets/styles/[STYLE_ID].svg as the visual art direction.
Create an original [DURATION]-second, [ASPECT]-ratio motion graphic
in Indonesian about [TOPIC] for [AUDIENCE].
Start with a specific hook in the first second, demonstrate evidence
through moving objects and continuous spatial relationships,
and resolve the opening premise. Build a standalone HTML timeline.
Include pause/restart, ?debug=1 scrubbing, ?clean=1&t=<time> frame capture,
mobile-safe typography, voiceover script, sources, and render instructions.
Do not just animate the single reference SVG as one flat image.
```

## What to supply

| Field | Example |
|---|---|
| STYLE_ID | `data-shock` |
| TOPIC | `Perbandingan 1 juta dan 1 miliar detik` |
| AUDIENCE | `Pelajar SMA Indonesia` |
| DURATION | `25` seconds |
| ASPECT | `9:16` |
| HOOK | `Ternyata beda waktunya sejauh ini!` |
| ASSETS | Verified data, licensed photos, brand logo, product photos |
| AUDIO | No audio, recorded VO, or explicitly licensed soundtrack |

## Six practical motion recipes

### 01 Storyflow — connected explanation

![Storyflow](../assets/styles/storyflow.svg)

- **Visual continuity:** glowing signal orb travels from question to interconnected explanations.
- **Motion:** pulse starts immediately; orbital nodes connect and become a simplified process diagram; camera approaches one causal link; return to original signal.
- **Hook prompt:** “Ke mana sebenarnya prompt AI pergi?”
- **Agent prompt:**

```text
Use Storyflow to create a 30-second 9:16 Indonesian explainer about
how an AI request is processed, clearly marked as a simplified model.
The first second shows a luminous signal escaping a question.
Build one coherent animated network, show request and response
direction, use smooth camera travel, then answer the initial question.
```

### 02 Curiosity Lab — visual experiment

![Curiosity Lab](../assets/styles/curiosity-lab.svg)

- **Visual continuity:** two test vessels share a visible measurement reference.
- **Motion:** show outcome first; replay the setup, introduce changed conditions, measure differences, explain the actual cause.
- **Hook prompt:** “Kenapa es di dua gelas ini beda cepat mencair?”
- **Agent prompt:**

```text
Use Curiosity Lab for a 25-second, 9:16 comparison of ice melting
under two clearly labeled conditions. Open with two different results.
Animate the process, measurements and explanatory arrows in the same
scene. Never claim an unperformed experiment was actually recorded.
```

### 03 Data Shock — scale transformation

![Data Shock](../assets/styles/data-shock.svg)

- **Visual continuity:** one large quantity transforms into a comparison scale.
- **Motion:** start from a striking figure, zoom out to reveal scale, morph counters into bars or a timeline, reveal proper units.
- **Hook prompt:** “Beda 1 juta dan 1 miliar detik ternyata ekstrem!”
- **Agent prompt:**

```text
Use Data Shock in a 20-second 9:16 short contrasting one million
and one billion seconds. Verify the day/year conversions. Create
a continuous number-to-timeline transformation with clear units
and a visual payoff; do not use slide transitions.
```

### 04 Myth Breaker — test and correction

![Myth Breaker](../assets/styles/myth-breaker.svg)

- **Visual continuity:** a split MITOS / FAKTA panel becomes a single evidence diagram.
- **Motion:** reveal a common assumption, simulate a transparent test flow, animate evidence, then display nuance and limitations.
- **Hook prompt:** “Mode incognito benar-benar bikin kamu anonim?”
- **Agent prompt:**

```text
Create a 30-second 9:16 Myth Breaker video about incognito browsing.
Open with an animated myth/fact split, follow a simplified browser
privacy diagram, explain what local browsing history protection does
and does not cover, and cite official documentation.
```

### 05 Micro Drama — consequential choice

![Micro Drama](../assets/styles/micro-drama.svg)

- **Visual continuity:** one character/object follows a branching choice.
- **Motion:** open on a decisive moment; reveal the stakes, branch timeline into real alternatives where evidence supports them, show verified consequences.
- **Hook prompt:** “Satu keputusan ini mengubah sejarah komputer.”
- **Agent prompt:**

```text
Use Micro Drama for a 35-second 9:16 historically sourced story.
Begin in medias res with one real decision; stage the tension through
camera, light, subject gestures and branching timeline. Resolve the
historical outcome and distinguish narration from dramatization.
```

### 06 Product X-Ray — mechanism demonstration

![Product X-Ray](../assets/styles/product-xray.svg)

- **Visual continuity:** the same product stays in frame while layers physically separate.
- **Motion:** visible user problem, accurate object reveal, exploded component assembly, demo, honest advantages and drawbacks.
- **Hook prompt:** “Apa sebenarnya yang membuat produk ini berguna?”
- **Agent prompt:**

```text
Create a 25-second 9:16 Product X-Ray demo for [PRODUCT].
Start with a specific problem, then separate and label actual product
components based on supplied specs and photos. Show a real function,
avoid unverified performance claims, and disclose affiliation if any.
```

## Recommended time structure (starting hypothesis)

For a 30-second video:

| Time | Purpose |
|---|---|
| 0.0–1.0s | Visually clear question, result, surprise, or conflict |
| 1.0–4.0s | Why the audience should care; early evidence |
| 4.0–12.0s | First explanation with objects transforming |
| 12.0–22.0s | Demonstration or meaningful comparison |
| 22.0–28.0s | Resolve and explain |
| 28.0–30.0s | Brief CTA or memorable loop to opening |

Pacing and duration vary by topic; retention measurements should determine revisions.

## Programmatic motion versus AI video

**Programmatic HTML / Canvas / SVG / GSAP:** best for exact numbers, chart accuracy, branded text, reproducible frames, deterministic seeking, and controllable edits.

**Image-to-video generators:** suitable for atmosphere, character action and illustrative shots. If supported, upload the relevant SVG or a rendered PNG as an image reference and request clear object/camera action. Avoid depending on generated text overlays for exact facts or names.

Example image-to-video prompt:

```text
Animate this key visual as a single cinematic 5-second vertical shot,
maintaining the exact palette, subject identity and composition.
Move the camera forward gently while the primary diagram objects
move and change state in a coherent causal sequence.
No new logos, no invented text, no sudden scene swaps, no slideshow.
9:16 aspect ratio, smooth natural motion, original art direction.
```

## Shot size — camera to element

"Zooming" in a motion graphic means **changing shot size**: the camera moves toward the element that is currently telling the story, then pulls back. A gentle constant push or a breathing wobble is background texture, not a shot change — if the framing never changes, the piece still feels static.

**Shot vocabulary** (scale is measured from the element, never a fixed number):

| Shot | Framing | Use it for |
|---|---|---|
| Wide | The whole composition is visible | Several elements or a wide label must be read together; openings and resets |
| Medium close-up | The main element plus a little context; the target fills roughly ⅓–½ of the frame | The working state of a diagram, a comparison in progress |
| Close-up | One element or detail fills most of the frame | Emphasis, an action moment, a small detail that must be legible |

**Rules**

- The focus point is the centre of the element that is *currently* speaking: the text that just arrived, the object that just landed, the detail the narration names. The camera greets the story beat; it does not chase it.
- Shots change on story beats. A common rhythm: close on element A → pull wide when the whole composition matters → close on element B. Vary the sizes; two same-sized shots in a row feel flat.
- Two movement tempos: a **shot change** is brisk (ease in-out), a **hold** keeps a slow push (sine ease) so a held frame — logo, CTA, takeaway — never freezes dead.
- A scene may be *born* in close-up at a cut, with no transition, then pull back. Openings may start in close-up too.
- Text appears **after** the camera arrives, not mid-move. Never oscillate near–far faster than the viewer can read.
- Keep captions, labels and interface (the screen layer) **outside** the camera rig, so they never swell or get cropped. Animate impact shake on a separate wrapper, not on the camera.
- The world must be larger than the frame (overscan) and the camera must clamp so world edges are never exposed.
- Check the peak frame of every shot: no cropped text, no exposed world edge, and raster assets must stay sharp at close-up scale (resolution ≥ scale × displayed size).

**Deterministic camera (pure function of `t`)** — keyframe the shots and interpolate; no per-frame accumulation:

```js
// keys: [time, scale, focusX, focusY] in world coordinates (1080 x 1920 stage)
const SHOTS = [
  [0.0, 1.00, 540, 960],   // wide
  [2.0, 1.00, 540, 960],
  [5.5, 1.45, 540, 1050],  // close-up on the working graphic
  [8.5, 1.45, 540, 1050],  // hold with the slow push baked into the keyframes
  [10.0, 1.00, 540, 960],  // back to wide for the takeaway
  [12.0, 1.08, 540, 900]   // gentle push on the closing card
];
const smooth = p => { p = Math.max(0, Math.min(1, p)); return p * p * (3 - 2 * p); };
function camAt(t) {
  let a = SHOTS[0], b = SHOTS[SHOTS.length - 1];
  for (let i = 0; i < SHOTS.length - 1; i++)
    if (t >= SHOTS[i][0] && t <= SHOTS[i + 1][0]) { a = SHOTS[i]; b = SHOTS[i + 1]; break; }
  const p = a === b ? 0 : smooth((t - a[0]) / (b[0] - a[0]));
  return { s: a[1] + (b[1] - a[1]) * p, fx: a[2] + (b[2] - a[2]) * p, fy: a[3] + (b[3] - a[3]) * p };
}
// Canvas: apply to the WORLD layer only; draw titles/labels after restore()
function applyCam(ctx, t, W, H) {
  const c = camAt(t);
  ctx.translate(W / 2, H / 2); ctx.scale(c.s, c.s); ctx.translate(-c.fx, -c.fy);
}
```

`styles/preview.html` implements exactly this rig: the animated graphic is the world layer, while the style name, hook title and labels stay on the screen layer.

## Video as a footage layer

A real clip can be a **layer inside the timeline** — trimmed, positioned, masked, graded and animated with everything else — instead of a full-screen video pasted between animated scenes. Use it when real motion is itself the evidence: a screen recording of the product, a person using the product, a process actually running, the atmosphere of a place. One emphasis moment of roughly 3–8 seconds is usually stronger than replacing the motion design; text, numbers and annotations stay animated above and around the clip. If a still image explains it just as well, use the image — it is lighter and exports faster.

**Sources**, in priority order: the user's own files (screen recordings, brand B-roll, event footage); licensed stock; generated clips, only with approval and labelled *illustration / reconstruction* in factual contexts (news, history, data) — never present a generated clip as a real recording, and never generate a real person's face.

**Clip rules**

- The clip's clock is the timeline's clock. **Never** `autoplay`, `loop`, or call `play()` freely: on every frame (and on scrub/pause) set the clip position from timeline time, and hide/pause the wrapper outside the clip's range.
- Animate the **wrapper**, not the `<video>` element: put the clip inside a device screen, a rounded card, a circle or a giant letter (mask/`clip-path`), a split screen beside the claim, or full-bleed under a palette grade/tint, vignette and contrast-pocket text.
- Trim `in`/`out` points, set `rate` for slow/fast motion, and `hold` to freeze the last frame. Entries and exits use the same transitions as any other element.
- Format: MP4 H.264 (`yuv420p`, `+faststart`) or WebM VP9, muted (music/VO stay separate tracks), 720p–1080p, pre-trimmed to the used range. The deliverable becomes `index.html` + an `assets/` folder containing the clips — say so when handing over.
- At most 2–3 clips visible at once. Frame-capture export must wait until the clip's frame for time `t` is actually seeked and ready, or the export drifts from the preview.

```js
// Deterministic clip sync: clip time is a pure function of timeline time t (seconds)
function syncClip(video, t, o) { // o = {at, in, out, rate = 1, hold = false}
  const local = o.in + (t - o.at) * (o.rate || 1);
  const active = t >= o.at && (o.hold || local <= o.out);
  video.style.visibility = active ? "visible" : "hidden";
  if (!active) { video.pause(); return; }
  const target = Math.min(local, o.out);
  if (Math.abs(video.currentTime - target) > 0.04) video.currentTime = target;
  if (video.paused) video.play().catch(() => {});
}
```

## Quality checklist

- Does frame zero already contain a meaningful visual hook?
- Are facts sourced, numbers labeled and comparisons correct?
- Do camera moves reveal new information instead of decorating text?
- Does the shot size actually change across beats (wide ↔ medium close-up ↔ close-up), with text arriving after the camera?
- If a real clip appears, is it a timeline-locked footage layer (trimmed, masked or graded) rather than a full-screen autoplay insert?
- Is there a recurring visual subject, with a clear payoff?
- Are type, colors and safe areas readable on a phone?
- Does scrubbing to the same time reproduce the same frame?
- Are third-party visual assets and music appropriately licensed?
- Are affiliate / sponsored relationships disclosed when relevant?
- Is an actual MP4 exported and inspected before claiming delivery?

For strategy and measurement, see [the research ledger](../research/viral-styles-2026.md).
