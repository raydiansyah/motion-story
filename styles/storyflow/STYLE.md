# Storyflow — Living Narrative Motion

**Style ID:** `storyflow`  
**Version:** 1.0.0  
**Format:** Canvas 2D, portrait-first, 1080 × 1920 stage  
**Best for:** AI education, software concepts, cause-and-effect explainers, data storytelling, Indonesian short-form video.

## Identity

**Feeling:** curious, precise, cinematic.  
**Visual metaphor:** an illuminated **signal orb** carries a question into a network of evidence; connections become diagrams as the story advances.  
**Distinctiveness:** warm paper-white editorial type against deep ink/navy; cyan nodes and coral counterpoints; light trails that resolve into explanatory connections, not random decorative streaks.

### Palette
| Role | Value | Use |
|---|---|---|
| Background | `#071321` | Deep ink navy |
| Surface | `#10253B` | Raised diagram geometry |
| Primary signal | `#53E2D0` | Active routes and focus |
| Counterpoint | `#FF916D` | Contrasts and surprise |
| Headline | `#F5F1E8` | High-contrast text |
| Secondary type | `#A6B7C8` | Supporting labels |

These are original defaults for the style. Adapt colors to a brand only when the brand palette is known.

## Type

Bold geometric system sans for demo portability. Prefer a distinctive editorial display font with licensing clearance in production. Hierarchy: hero 90–135 px, figures 95–140 px, labels 36–50 px at 1080 width. Avoid paragraph cards.

## Motion signatures
1. **Signal pulse:** a small orb emits successive, time-based radial rings.
2. **Path-to-proof:** lines reveal a causal relationship and transform into a graph.
3. **Camera continuation:** the same visual motif glides forward and reappears inside the next graphic.
4. **Elastic emphasis:** one intentional overshoot for a new fact; do not bounce all elements.
5. **Background life:** layered dots, glow and slow radial movement without random frame drift.

## Narrative sample: “IDE MENJADI CERITA”
- 0–2.8s **Hook:** signal orb grows from darkness; big question arrives.
- 2.8–5.8s **Connection:** orbit branches form a small network; the question becomes linked evidence.
- 5.8–8.7s **Insight:** network smoothly resolves into rising bars and a numeral.
- 8.7–12s **Takeaway:** orb returns at larger scale and resolves into a concise call-to-thought.

This is a *demo only*, not a fixed script for future videos.

## Technical contract
- Pure `draw(t)` function, fixed durations, seeded or analytical particle positions.
- Responsive device-pixel-aware Canvas scaling and stable letterbox fit.
- `?debug=1` scrubber; `?clean=1&t=4.5` fixed frame for rendering.
- Space pause, R restart, autoplay loop by default.
- Independent drawing routines for background, graph, labels and transitions.
- Preserve 1080 × 1920 composition even on a wide viewport.
- Respect mobile safe area: avoid headline text in top/bottom ~160px.

## Anti-patterns
- No carousel of generic feature cards.
- No repeated center headline + subtitle + fade on every beat.
- No random neon streaks solely to imply motion.
- No unreadably small footer data.
- No external source image embedded without permission.

## QA
Capture frames at 0, 1.5, 3.6, 5.9, 7.5, 9.5 and 11.5 seconds. Inspect type bounds, animation coherence, signal continuity and contrast. For exact frame parity, compare screenshots from the same timestamp across independent browser reloads.
