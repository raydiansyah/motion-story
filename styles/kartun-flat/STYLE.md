# Kartun Flat

![Kartun Flat visual reference](../../assets/styles/kartun-flat.svg)

**Style ID:** `kartun-flat`  
**Status:** visual keyframe and motion design reference (not a finished MP4)  
**Best niches:** science, facts, education  
**Hook mechanism:** curiosity-question

## Art direction

**Palette:** #2E8C82, #FFD23F, #FF8FA3, #FFFFFF.  
**Recurring visual motif:** flat-character-explainer.  
**Motion signature:** flat characters gesture at floating props; expressions swap in one-frame pops.

Use the [gallery illustration](../../assets/styles/kartun-flat.svg) as a visual style reference, **not** one flat picture to zoom and fade. Rebuild its component shapes in an original time-based scene using SVG, Canvas, CSS or GSAP with an explicit deterministic timeline.

## Storyboard beats

1. **question** — animate evidence and subjects, connecting this beat to the previous one.
2. **prop** — animate evidence and subjects, connecting this beat to the previous one.
3. **reaction** — animate evidence and subjects, connecting this beat to the previous one.
4. **answer** — animate evidence and subjects, connecting this beat to the previous one.

## Simple Indonesian hook

> Kenapa cairan ini bisa menyala hijau?

## Copy-ready agent prompt

```text
Gunakan skill motion-story dengan style Kartun Flat (kartun-flat).
Buat video motion graphic 30 detik format 9:16 (1080x1920)
tentang [TOPIK] untuk penonton Indonesia.
Gunakan assets/styles/kartun-flat.svg sebagai referensi komposisi,
warna, dan identitas visual, bukan sebagai slide statis.
Hook: "Kenapa cairan ini bisa menyala hijau?"
Gerak utama: flat characters gesture at floating props; expressions swap in one-frame pops.
Bangun satu dunia visual yang berkembang secara kontinu;
perlihatkan objek, hubungan, atau bukti baru seiring narasi.
Buat HTML standalone dengan timeline deterministik, pause,
restart, scrub debug dan ?clean=1&t=4.2 untuk render frame.
Sertakan naskah VO dan petunjuk render MP4.
```

## Quality constraints

- Hook must be understandable within the first second.
- Avoid generic title/body/card slideshow transitions and static image-only parallax.
- Maintain readable typography at mobile size and safe areas for UI overlays.
- Science facts must be checked; character expressions must not contradict the narration.
- Retention improvement is a hypothesis; test against actual channel analytics.

[All styles](../../README.md#style-gallery) · [Motion generation guide](../../docs/MOTION_GUIDE.md)
