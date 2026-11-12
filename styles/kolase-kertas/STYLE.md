# Kolase Kertas

![Kolase Kertas visual reference](../../assets/styles/kolase-kertas.svg)

**Style ID:** `kolase-kertas`  
**Status:** visual keyframe and motion design reference (not a finished MP4)  
**Best niches:** documentary, journalism, human stories  
**Hook mechanism:** photo-evidence

## Art direction

**Palette:** #E7DCC8, #B3402A, #5A6148, #232323.  
**Recurring visual motif:** torn-paper-photo-collage.  
**Motion signature:** torn paper layers slide and pin into place; photo cutouts land with tape and captions.

Use the [gallery illustration](../../assets/styles/kolase-kertas.svg) as a visual style reference, **not** one flat picture to zoom and fade. Rebuild its component shapes in an original time-based scene using SVG, Canvas, CSS or GSAP with an explicit deterministic timeline.

## Storyboard beats

1. **photo** — animate evidence and subjects, connecting this beat to the previous one.
2. **layer** — animate evidence and subjects, connecting this beat to the previous one.
3. **context** — animate evidence and subjects, connecting this beat to the previous one.
4. **reveal** — animate evidence and subjects, connecting this beat to the previous one.

## Simple Indonesian hook

> Satu gulungan film, seribu cerita tak terucap.

## Copy-ready agent prompt

```text
Gunakan skill motion-story dengan style Kolase Kertas (kolase-kertas).
Buat video motion graphic 30 detik format 9:16 (1080x1920)
tentang [TOPIK] untuk penonton Indonesia.
Gunakan assets/styles/kolase-kertas.svg sebagai referensi komposisi,
warna, dan identitas visual, bukan sebagai slide statis.
Hook: "Satu gulungan film, seribu cerita tak terucap."
Gerak utama: torn paper layers slide and pin into place; photo cutouts land with tape and captions.
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
- Photos need sources and releases; torn-paper collage must not fake archival evidence.
- Retention improvement is a hypothesis; test against actual channel analytics.

[All styles](../../README.md#style-gallery) · [Motion generation guide](../../docs/MOTION_GUIDE.md)
