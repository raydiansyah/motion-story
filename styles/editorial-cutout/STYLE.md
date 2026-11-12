# Editorial Cutout

![Editorial Cutout visual reference](../../assets/styles/editorial-cutout.svg)

**Style ID:** `editorial-cutout`  
**Status:** visual keyframe and motion design reference (not a finished MP4)  
**Best niches:** history, documentary, human stories  
**Hook mechanism:** archival-mystery

## Art direction

**Palette:** #E8D6B8, #7C2730, #2E4B5B, #1D2024.  
**Recurring visual motif:** torn-paper-archival-collage.  
**Motion signature:** paper reveals, pinboard camera journeys, annotation tracing.

Use the [gallery illustration](../../assets/styles/editorial-cutout.svg) as a visual style reference, **not** one flat picture to zoom and fade. Rebuild its component shapes in an original time-based scene using SVG, Canvas, CSS or GSAP with an explicit deterministic timeline.

## Storyboard beats

1. **artifact** — animate evidence and subjects, connecting this beat to the previous one.
2. **context** — animate evidence and subjects, connecting this beat to the previous one.
3. **evidence** — animate evidence and subjects, connecting this beat to the previous one.
4. **revelation** — animate evidence and subjects, connecting this beat to the previous one.

## Simple Indonesian hook

> Satu foto ini menyimpan cerita yang terlupakan.

## Copy-ready agent prompt

```text
Gunakan skill motion-story dengan style Editorial Cutout (editorial-cutout).
Buat video motion graphic 30 detik format 9:16 (1080x1920)
tentang [TOPIK] untuk penonton Indonesia.
Gunakan assets/styles/editorial-cutout.svg sebagai referensi komposisi,
warna, dan identitas visual, bukan sebagai slide statis.
Hook: "Satu foto ini menyimpan cerita yang terlupakan."
Gerak utama: paper reveals, pinboard camera journeys, annotation tracing.
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
- Use licensed archival imagery and label reconstructions.
- Retention improvement is a hypothesis; test against actual channel analytics.

[All styles](../../README.md#style-gallery) · [Motion generation guide](../../docs/MOTION_GUIDE.md)
