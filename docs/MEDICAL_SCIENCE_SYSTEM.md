# Medical Science System — Reusable Visual Foundation

This repository provides two complementary health-education styles:

- **Medical Science Storytelling** — cinematic, question-led public education; human → organ → tissue → takeaway.
- **Anatomy Atlas** — calm, precise, label-led anatomy and physiology; orientation → structure → pathway → recap.

Neither style is a diagnostic, clinical-imaging, treatment-planning or procedural-guidance system.

## Reusable anatomy asset library

The `assets/anatomy/` directory contains original simplified SVG primitives:

| Asset | Suggested educational use |
|---|---|
| `stomach.svg` | Digestive-system orientation |
| `heart.svg` | Circulation and cardiac-flow explainers |
| `lungs.svg` | Respiratory-system orientation |
| `brain.svg` | Nervous-system overview |
| `blood-vessel.svg` | Conceptual vessel-wall / lumen explanation |
| `cell.svg` | Basic cell-structure overview |

These are starting shapes for motion scenes. They are intentionally labeled as simplified and not to scale. A production scene must validate structure, labels, direction and proportions against topic-appropriate authoritative sources. Do not present them as scans, histology, or medical-grade anatomical references.

## Reusable scene composition

Build each scene from independently animated layers:

1. **Body locator:** a neutral silhouette or region marker, only when useful.
2. **Organ layer:** selected organ, with stable identity across shots.
3. **Mechanism layer:** flow paths, tissue barriers, signals, exchange or feedback loops.
4. **Callout layer:** labels and leader lines attached to the correct structure.
5. **Evidence layer:** source note, number, uncertainty or qualification.
6. **Screen layer:** captions, safe-area title and disclaimer; never scale these with the anatomy camera.

Keep the anatomy camera and the screen-space label/caption layer separate. A camera move should not cause labels to drift off-screen or lose their targets.

## Camera language

- **Wide:** body / system orientation.
- **Medium:** organ or anatomical region.
- **Close:** relevant tissue or mechanism.
- **Return:** restore context before the takeaway.

Use deterministic camera keyframes. Avoid extreme perspective, fake depth, rapid shaking, and transitions that imply a diagnostic scan.

## Evidence and health safety gate

Before rendering, record:
- Claim and intended audience.
- Source title, publisher, URL and access date for each medical claim.
- What is established, simplified, uncertain or still debated.
- Whether professional review is needed.

Use reputable public-health agencies, professional medical societies, peer-reviewed reviews and institutional patient-education sources. For diagnosis, treatment, medication, red flags or clinical training, obtain review by a qualified health professional. Do not infer an individual viewer's condition or advise them to start, stop or change prescribed treatment.

A disclaimer is not a substitute for evidence. Never fabricate prevalence, thresholds, anatomical details, treatment effects or source citations.

## Content-style selection

| Topic / communication goal | Recommended style |
|---|---|
| How an organ or body process works | `medical-science` |
| Detailed anatomy and labeled pathways | `anatomy-atlas` |
| Health myth with nuanced evidence | `myth-breaker` |
| Safe, controlled science demonstration | `curiosity-lab` |
| Population-level health statistics | `data-shock` |
| Children's hygiene / basic health habits | `playful-doodle`, `kartun-flat`, `chibi-explainer` |
| Gentle family wellbeing story | `watercolor` |
| Simple prevention steps / behavior change | `flat-vector` |
| Whiteboard-style learning recap | `whiteboard-doodle` |
| Sourced public-health issue or policy | `visual-journalism` |

Select by the explanatory job, not by a presumed virality score. Do not force a medical topic into a style whose visual metaphor makes the information harder to understand.

## Production QA checklist

- [ ] One clear educational question and audience.
- [ ] Every medical claim has a traceable source.
- [ ] Anatomy and flow paths reviewed against appropriate references.
- [ ] Simplifications and uncertainty are explicitly labeled.
- [ ] No diagnosis, unsupported treatment advice or fear-based exaggeration.
- [ ] Motion demonstrates a real relationship, not decorative movement.
- [ ] Labels point to the correct structure and remain readable on mobile.
- [ ] Opening, middle, transition and closing frames checked.
- [ ] Qualified professional review completed where needed.
- [ ] MP4 is only claimed after a real render is verified.
