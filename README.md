<div align="center">

# Motion Story

**An agent-ready library for motion graphics that tell a story — not a slideshow.**

Educational shorts · visual explainers · data storytelling · product demos · kinetic typography

[![Agent Skills](https://img.shields.io/badge/format-Agent%20Skills-6848ed)](SKILL.md) [![Styles](https://img.shields.io/badge/styles-6-08a89a)](styles/catalog.json) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

**[Style gallery](#style-gallery) · [Workflow](#workflow) · [Example prompts](#example-prompts) · [Install & use](#install--use) · [FAQ](#faq)**

</div>

> Motion Story uses original visual systems informed by research into short-form storytelling. The [Bang Motion](https://github.com/bangtutorial/bang-motion) project helped inspire the anti-slideshow approach; these assets and implementations are independently authored. A good style is **not a guarantee of virality**.

## Why

Most automatic motion graphics are slides with transitions: headline appears, fades away, another headline appears. Motion Story instead asks for a **continuous visual argument**, where subjects, diagrams, and camera movement follow an evolving idea. Each style defines a motif, hook, palette, evidence visualization, and motion grammar so an AI coding agent can turn a topic into a coherent animation.

## What you can make

| Content | Recommended styles |
|---|---|
| AI / tech / educational explainers | Storyflow, Myth Breaker |
| Surprising science and everyday facts | Curiosity Lab |
| Economy, statistics and comparisons | Data Shock |
| Historical narratives and human stories | Micro Drama |
| Gadgets, product demos and affiliate explainers | Product X-Ray |

## Style gallery

**The pictures below are static concept/keyframes, not finished videos.** Click a card's style guide for its visual vocabulary. The animated [browser preview](styles/preview.html) is an independent 12-second reference; future production prompts should build a new story rather than simply animate these static images.

<table>
<tr>
<td width="50%" valign="top"><a href="styles/storyflow/STYLE.md"><img alt="Storyflow — connected AI narrative visual" src="assets/styles/storyflow.svg" width="100%"></a><br><strong><a href="styles/storyflow/STYLE.md">01 — Storyflow</a></strong><br>Living Narrative Motion<br><sub>AI · technology · education. Signal orb, connections, connected proofs, camera push-through.</sub><br><br><strong>Hook:</strong> “Ke mana pertanyaanmu pergi saat memakai AI?”</td>
<td width="50%" valign="top"><a href="styles/curiosity-lab/STYLE.md"><img alt="Curiosity Lab — two vessels representing an experiment" src="assets/styles/curiosity-lab.svg" width="100%"></a><br><strong><a href="styles/curiosity-lab/STYLE.md">02 — Curiosity Lab</a></strong><br>Experiment & Discovery<br><sub>Science · unusual facts. Side-by-side experiment, cause–effect, explanatory annotations.</sub><br><br><strong>Hook:</strong> “Kenapa dua gelas ini mencair berbeda?”</td>
</tr>
<tr>
<td width="50%" valign="top"><a href="styles/data-shock/STYLE.md"><img alt="Data Shock — striking rising bars and scale comparison" src="assets/styles/data-shock.svg" width="100%"></a><br><strong><a href="styles/data-shock/STYLE.md">03 — Data Shock</a></strong><br>Numbers & Insights<br><sub>Technology · economy · statistics. Number morphs and meaningful animated comparisons.</sub><br><br><strong>Hook:</strong> “Seberapa beda satu juta dan satu miliar detik?”</td>
<td width="50%" valign="top"><a href="styles/myth-breaker/STYLE.md"><img alt="Myth Breaker — myths versus verified facts" src="assets/styles/myth-breaker.svg" width="100%"></a><br><strong><a href="styles/myth-breaker/STYLE.md">04 — Myth Breaker</a></strong><br>Belief vs Evidence<br><sub>Digital literacy · consumer education. Visual split, test, proof, nuanced conclusion.</sub><br><br><strong>Hook:</strong> “Mode incognito bikin kamu anonim?”</td>
</tr>
<tr>
<td width="50%" valign="top"><a href="styles/micro-drama/STYLE.md"><img alt="Micro Drama — a branching decision with two consequences" src="assets/styles/micro-drama.svg" width="100%"></a><br><strong><a href="styles/micro-drama/STYLE.md">05 — Micro Drama</a></strong><br>Cinematic Storytelling<br><sub>History · biography · life. Character choices, emotional stakes, branching visual narratives.</sub><br><br><strong>Hook:</strong> “Satu keputusan kecil mengubah semuanya.”</td>
<td width="50%" valign="top"><a href="styles/product-xray/STYLE.md"><img alt="Product X-Ray — exploded diagram of a generic gadget" src="assets/styles/product-xray.svg" width="100%"></a><br><strong><a href="styles/product-xray/STYLE.md">06 — Product X-Ray</a></strong><br>Product Mechanism & Demo<br><sub>Gadgets · comparisons · affiliate. Exploded components, mechanism reveal, honest trade-offs.</sub><br><br><strong>Hook:</strong> “Apa yang sebenarnya dilakukan alat ini?”</td>
</tr>
</table>

[**Open all style definitions →**](styles/catalog.json) · [**Open animated style preview →**](styles/preview.html) · [**Read evidence & hook research →**](research/viral-styles-2026.md)

## Workflow

1. **Select the niche and hook.** Identify one specific question, misconception, surprising fact, problem, or story conflict. Promise only what the video actually delivers.
2. **Choose a style.** Read its `styles/<style-id>/STYLE.md`, inspect its gallery image, and extract **visual grammar**: color, texture, motif, lens, typography and movement.
3. **Ask the AI agent for a motion brief.** Define 9:16 or 16:9, duration, audience, visual beats, evidence sources, voiceover (if any), and the signature movement. Use the image as a **style reference**, not as the only frame of a Ken Burns animation.
4. **Build the motion.** Ask for HTML/CSS/SVG/Canvas with a deterministic timeline: the camera or world transforms continuously, visuals demonstrate the explanation, and the opening is meaningful from frame one.
5. **Review and export.** Scrub opening/middle/end, check mobile safe areas and factual accuracy. Render frames and encode MP4 using suitable browser automation and FFmpeg if needed. Never claim an MP4 exists before actually rendering it.
6. **Measure and iterate.** Compare hooks using retention and engaged views, rather than choosing solely by raw views.

### Make motion from a gallery image

Choose one of the six pictures above and give your agent this instruction:

```text
Read SKILL.md and styles/catalog.json in raydiansyah/motion-story.
Use style: [STYLE_ID] and read styles/[STYLE_ID]/STYLE.md.
Treat assets/styles/[STYLE_ID].svg as a visual keyframe and art direction,
NOT as a static image to zoom or fade.

Create an ORIGINAL 30-second motion graphic about [TOPIK],
for [AUDIENS], in Indonesian, 9:16 (1080x1920).
Make the first second visually compelling with hook [HOOK].
Build a time-based story: hook -> evidence -> explanation -> payoff.
Animate the same visual world with purposeful camera, typography,
object transformations and transitions (not a slideshow).
Use verified evidence; label simplifications.
Deliver a standalone HTML preview, debug timeline, scene/VO script,
and steps to render MP4. Only deliver an MP4 if rendered and tested.
```

For image-to-video generators, use the SVG as a composition reference where supported. Ask for camera movement, object motion, entry and exit actions, preservation of text/visual identity, duration and aspect ratio. Generative video tools may distort typography; for exact text use programmatic motion or compositing.

## Example prompts

Copy a short example into your coding agent and attach the corresponding gallery SVG or link:

**Storyflow — AI explainer**
```text
Create a 30-second 9:16 Indonesian explainer: "Ke mana prompt AI pergi?"
Use Motion Story's storyflow style and its SVG image as art direction.
Start with a glowing question node; the node travels into a network,
reveals a simplified request flow, then returns as a clear answer.
No slideshow. Add a scrub-able deterministic HTML timeline.
```

**Curiosity Lab — science**
```text
Create a 25-second 9:16 science explainer using curiosity-lab.
Hook: "Kenapa dua gelas es ini mencair berbeda?"
Begin with two visible glasses, animate temperature/conditions
and the comparison, then explain the cause with accurate evidence.
Use fluid object motion, not fading slide cards.
```

**Data Shock — statistics**
```text
Create a 20-second 9:16 motion graphic using data-shock:
"1 juta detik vs 1 miliar detik". Start with a striking scale mismatch.
Morph numbers into a visual timeline, display correct units,
verify calculations, and finish with a clear comparison.
```

**Myth Breaker — digital literacy**
```text
Build a 30-second 9:16 myth-breaker explainer:
"Apakah incognito membuat kita anonim?" Open with MITOS vs FAKTA.
Animate a simplified browser/network diagram, show what incognito
does and does not do, cite accurate sources. Keep the conclusion nuanced.
```

**Micro Drama — storytelling**
```text
Make a 35-second 9:16 micro-drama about a verified moment in
computer history. Open in the middle of a consequential decision.
Use a branching choice motif, purposeful character/camera movement,
and show the historical consequence without fabricating facts.
```

**Product X-Ray — gadget / affiliate**
```text
Create a 25-second 9:16 product-xray video about [PRODUCT].
Show a real problem before any sales pitch. Animate a product
exploded view, explain the verified mechanism and real trade-offs,
then close with an honest buying takeaway and affiliate disclosure.
```

**[Full style-specific motion prompts and visual guidance →](docs/MOTION_GUIDE.md)**

## Getting better results

- **Say which style, not which copied scenes.** Request “Curiosity Lab / experimental split-screen”, not a frame-by-frame recreation of someone else's video.
- **Provide the real assets.** Brand logo, screenshots, permitted photos, product specs, verified data and voiceover improve specificity.
- **Be clear about the one unforgettable moment.** A graph morph, revelation, object close-up or character decision should carry the story.
- **Keep text short.** One compelling visual claim at a time; the visuals do the explaining.
- **Avoid meaningless movement.** More zooms, glows and transitions are not equivalent to higher retention.
- **Test hooks.** The style examples are hypotheses informed by creator guidance, not audited viral rankings.

## Install & use

### In an AI coding agent

Clone the repo locally, then ask your agent to read its instructions and the chosen style guide:

```bash
git clone https://github.com/raydiansyah/motion-story.git
cd motion-story
```

```text
Read SKILL.md, research/viral-styles-2026.md and
styles/curiosity-lab/STYLE.md. Build my short explainer
following the style guide and the example prompts in README.
```

The repository follows an Agent Skill-friendly layout. To use it across Claude Code, Codex, Cursor or other tools, configure that tool to load `SKILL.md` as project instructions or install/link it according to the agent's supported skill path. Loading conventions differ by agent; cloning alone does not globally enable a skill.

### In the browser

Download or clone this repository and open [`styles/preview.html`](styles/preview.html) in a modern browser. Add `?style=data-shock` to choose a style.

| Control | Action |
|---|---|
| Space | Pause / play |
| R | Restart |
| Slider | Scrub motion timeline |
| `?style=storyflow&clean=1&t=4.2` | Freeze a deterministic reference frame |

The current preview is an **illustrative 12-second multi-style demo**, not six fully produced commercial videos or an MP4 exporter.

## FAQ

**Are these styles guaranteed to go viral?** No. They are creative reference styles; hook, topic, audience, execution, evidence and distribution all affect performance. Measure retention and repeat tests.

**Can I make a 9:16 Shorts/Reels/TikTok video?** Yes. Request that aspect ratio from the agent; the static gallery illustrates the visual direction, while the resulting timeline/video must be built or rendered separately.

**Can I use the gallery picture directly as a full motion video?** Not recommended. An animated zoom on a static picture isn't a real explainer. Transform objects and evidence into successive story beats instead.

**Does this require GSAP?** No. SVG, CSS, Canvas, GSAP or a video renderer can all be used depending on the production; prioritise deterministic timing and a standalone preview.

**Does the repository already export MP4?** Not automatically. Frame capture and video encoding are a separate production step.

**What is the difference from Bang Motion?** Bang Motion inspired the anti-slideshow approach. Motion Story supplies independent visual identities, Indonesian niche/hook references, an original preview and agent guidance for these six concepts.

## Research & license

Research and sources: [Exa + Firecrawl report](research/viral-styles-2026.md).  
Machine-readable styles: [`styles/catalog.json`](styles/catalog.json).  
License: [MIT](LICENSE).
