# Whiteboard Doodle

![Whiteboard Doodle visual reference](../../assets/styles/whiteboard-doodle.svg)

**Style ID:** `whiteboard-doodle`  
**Status:** visual keyframe and motion design reference (not a finished MP4)  
**Best niches:** tutorial, business, education  
**Hook mechanism:** drawn-explanation

## Art direction

**Palette:** #FFFFFF, #1A1A1A, #E5322D, #2743E8.  
**Recurring visual motif:** marker-doodle-board.  
**Motion signature:** a marker hand draws the explanation live; doodles underline and circle the key point.

Use the [gallery illustration](../../assets/styles/whiteboard-doodle.svg) as a visual style reference, **not** one flat picture to zoom and fade. Rebuild its component shapes in an original time-based scene using SVG, Canvas, CSS or GSAP with an explicit deterministic timeline.

## Storyboard beats

1. **blank** — animate evidence and subjects, connecting this beat to the previous one.
2. **sketch** — animate evidence and subjects, connecting this beat to the previous one.
3. **chart** — animate evidence and subjects, connecting this beat to the previous one.
4. **takeaway** — animate evidence and subjects, connecting this beat to the previous one.

## Simple Indonesian hook

> Gambar ini menjelaskan kenapa bisnismu mandek.

## Copy-ready agent prompt

```text
Gunakan skill motion-story dengan style Whiteboard Doodle (whiteboard-doodle).
Buat video motion graphic 30 detik format 9:16 (1080x1920)
tentang [TOPIK] untuk penonton Indonesia.
Gunakan assets/styles/whiteboard-doodle.svg sebagai referensi komposisi,
warna, dan identitas visual, bukan sebagai slide statis.
Hook: "Gambar ini menjelaskan kenapa bisnismu mandek."
Gerak utama: a marker hand draws the explanation live; doodles underline and circle the key point.
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
- Doodles must stay legible; never let sketchy lines cross or cover important text.
- Retention improvement is a hypothesis; test against actual channel analytics.

[All styles](../../README.md#style-gallery) · [Motion generation guide](../../docs/MOTION_GUIDE.md)
