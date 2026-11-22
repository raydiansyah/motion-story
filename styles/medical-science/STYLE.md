# Medical Science Storytelling

A cinematic, evidence-first visual language for explaining human biology, anatomy, physiology and preventive-health concepts. The style should feel like a premium science documentary translated into a short vertical motion graphic: precise, warm, accessible and visually memorable.

## Best for
- How organs and body systems work.
- Everyday physiology: digestion, breathing, circulation, sleep and hydration.
- Explaining a health concept or a common misconception without diagnosing the viewer.
- Prevention and health-literacy explainers for a general audience.

Not a substitute for a clinician, diagnostic imaging, medical advice or an individualized treatment plan.

## Core visual identity

- **Canvas:** portrait-first 1080×1920 (9:16); compose a 16:9 adaptation only when requested.
- **Background:** deep ink navy `#071321`.
- **Primary text:** warm white `#F5F1E8`.
- **Science signal:** cyan `#53E2D0`.
- **Human / tissue accent:** coral `#FF916D`.
- **Secondary tissue tone:** muted rose `#D98C91`.
- **Evidence panel:** pale warm `#E8E4DA` with dark ink text.
- **Typography:** bold modern sans for the hook; restrained sans for labels; short captions, high contrast and generous safe areas.
- **Recurring motif:** a luminous cyan evidence path that travels through an anatomical cutaway, then resolves into one clear takeaway.

## Visual grammar

1. **Human scale → organ scale → tissue scale.** Begin with a familiar human context, travel into a simplified organ, then reveal only the tissue or mechanism needed to answer the question.
2. **Anatomy as a connected world.** Use a continuous camera move, cutaway, magnification ring or tracked callout. Avoid unrelated floating cards.
3. **Show mechanisms, not decorative anatomy.** Animate the relevant flow, barrier, contraction, exchange or feedback loop. Every movement must explain a relationship.
4. **Evidence stays visible.** Place concise labels beside the structure they identify. Add source / evidence notes in a stable lower-third or end frame when claims or numbers appear.
5. **Return to the person.** End by translating the mechanism into a proportionate, actionable health-literacy takeaway.

## Motion signatures

- **Scale journey:** wide human silhouette → medium organ cutaway → close-up tissue barrier.
- **Path-to-proof:** a cyan tracer follows the process being explained; it pauses at the causal point.
- **Layer reveal:** tissue layers separate gently to reveal a simplified cross-section; no gore or sensational damage.
- **Pulse / flow:** use restrained pulses to show movement, never as arbitrary decoration.
- **Camera:** deliberate push-ins and lateral tracking; no rapid shake, excessive zoom or flashing.
- **Typography:** labels follow the camera but remain on a stable screen layer; reveal after the visual focus lands.

## Narrative structure

Use a question-led arc, not a fixed slideshow:

1. **Hook (0–3s):** a surprising but accurate question or visual contradiction.
2. **Orientation (3–7s):** establish the body part and what it normally does.
3. **Mechanism (7–18s):** show the causal process at the right scale.
4. **Meaning (18–25s):** connect the mechanism to the viewer's original question.
5. **Takeaway (25–30s):** one useful, proportionate action or a clear boundary on what the animation can explain.

For a longer video, expand the mechanism rather than adding unrelated facts.

## Medical accuracy and safety gates

- Start from reputable, topic-appropriate sources (e.g. government health agencies, WHO, peer-reviewed reviews, professional medical societies or institutional patient-education pages). Record title, publisher, URL and access date in the production brief.
- Distinguish established evidence, simplified teaching models and uncertainty. Never turn correlation into causation.
- Do not invent prevalence, thresholds, treatment effects, anatomy labels or clinical recommendations.
- Label diagrams **“ilustrasi sederhana”** or **“model konseptual”** when they are not anatomically to scale or are not diagnostic images.
- Do not portray a conceptual animation as a scan, endoscopy, histology slide or real patient footage.
- Do not diagnose a viewer, recommend changing prescribed treatment, or imply that one symptom has one certain cause.
- For red flags, medication, diagnosis or treatment content, require review by a qualified health professional before publication.
- Keep disclaimers readable but concise. A disclaimer does not repair an inaccurate claim.
- Avoid gore, fear-based exaggeration and claims such as “racun”, “detoks”, “pasti sembuh” unless the exact claim is scientifically supported and appropriately qualified.

## Production rules

- Every frame is a deterministic function of timeline time.
- Keep one continuous anatomical world across transitions; do not build a sequence of static title cards.
- One primary claim and at most one supporting label at a time.
- Use original vector anatomy or properly licensed assets. Do not copy proprietary medical illustrations.
- Ensure labels remain readable on a phone and do not obscure the structure being explained.
- Review opening, mechanism close-up, transition and closing frames for factual accuracy and visual clarity.
- Do not claim an MP4 exists until it has actually been rendered and verified.

## Example brief

**Topic:** Bagaimana lambung melindungi dirinya dari asam?

**Audience:** General audience, Indonesian, non-clinical.

**Thesis:** Lambung memiliki lapisan mukus dan mekanisme pertahanan lain yang membantu melindungi permukaan mukosanya dari lingkungan asam.

**Visual beats:** human torso → stomach cutaway → magnified mucosal surface → acid / mucus boundary → return to full stomach with a concise takeaway.

**Required nuance:** This is a simplified educational model. Do not imply that the barrier is perfect or that this animation explains the cause of an individual's symptoms.

## Copy-ready prompt

```text
Read styles/medical-science/STYLE.md and use style: medical-science.
Create a 30-second Indonesian 9:16 educational motion graphic about:
[TOPIC]. Audience: general public.

Start with one accurate curiosity hook. Build a continuous visual journey
from human scale to organ scale to the relevant tissue / mechanism.
Use a deep navy, warm white, cyan and coral palette; original clean
anatomical cutaways; purposeful camera movement; concise labels; and
a visible evidence/source note. Animate the mechanism itself, not a
sequence of static cards.

Use reputable sources and list them in the production brief.
Label simplified anatomy as an illustration. Do not diagnose, prescribe,
exaggerate risk, invent statistics or imply certainty beyond the evidence.
Deliver a deterministic standalone HTML preview, timeline scrubber,
beat sheet, voiceover, source list and render instructions.
Only claim an MP4 if it has been rendered and verified.
```
