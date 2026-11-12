# White Catalog

![White Catalog visual reference](../../assets/styles/white-catalog.svg)

**Style ID:** `white-catalog`  
**Status:** visual keyframe and motion design reference (not a finished MP4)  
**Best niches:** products, brands, reviews  
**Hook mechanism:** closer-look

## Art direction

**Palette:** #FAFAF7, #FF6B35, #D64541, #161616.  
**Recurring visual motif:** annotated-product-cutout.  
**Motion signature:** product cutouts slide across a white grid; handwritten notes point at the details that matter.

Use the [gallery illustration](../../assets/styles/white-catalog.svg) as a visual style reference, **not** one flat picture to zoom and fade. Rebuild its component shapes in an original time-based scene using SVG, Canvas, CSS or GSAP with an explicit deterministic timeline.

## Storyboard beats

1. **grid** — animate evidence and subjects, connecting this beat to the previous one.
2. **product** — animate evidence and subjects, connecting this beat to the previous one.
3. **detail** — animate evidence and subjects, connecting this beat to the previous one.
4. **verdict** — animate evidence and subjects, connecting this beat to the previous one.

## Simple Indonesian hook

> Lihat lebih dekat: 248 gram untuk lari jauh.

## Copy-ready agent prompt

```text
Gunakan skill motion-story dengan style White Catalog (white-catalog).
Buat video motion graphic 30 detik format 9:16 (1080x1920)
tentang [TOPIK] untuk penonton Indonesia.
Gunakan assets/styles/white-catalog.svg sebagai referensi komposisi,
warna, dan identitas visual, bukan sebagai slide statis.
Hook: "Lihat lebih dekat: 248 gram untuk lari jauh."
Gerak utama: product cutouts slide across a white grid; handwritten notes point at the details that matter.
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
- Specs, weights and prices must be verified against the real product.
- Retention improvement is a hypothesis; test against actual channel analytics.

[All styles](../../README.md#style-gallery) · [Motion generation guide](../../docs/MOTION_GUIDE.md)
