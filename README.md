# Motion Story

**Motion Story** is an original, browser-first collection of research-informed motion storytelling styles for Indonesian short-form creators. Its starting point is the design principles of [Bang Motion](https://github.com/bangtutorial/bang-motion); the implementation and visual references here are original and do not copy its starter files.

## Style library

| Style | Niche | Hook |
|---|---|---|
| [Storyflow](styles/storyflow/STYLE.md) | AI, technology, education | Curiosity question |
| [Curiosity Lab](styles/curiosity-lab/STYLE.md) | Science, unusual facts | Show the result first |
| [Data Shock](styles/data-shock/STYLE.md) | Statistics, economics | Counterintuitive scale |
| [Myth Breaker](styles/myth-breaker/STYLE.md) | Digital literacy | Belief vs evidence |
| [Micro Drama](styles/micro-drama/STYLE.md) | History, stories | Start at the conflict |
| [Product X-Ray](styles/product-xray/STYLE.md) | Gadgets and affiliate | Visible problem / demonstration |

## Open the visual reference

Open [`styles/preview.html`](styles/preview.html) in a modern browser. Choose a style with the navigation at the top, or add `?style=data-shock` to the URL. This is a **12-second deterministic reference animation**, not a complete production video.

- **Space:** pause / play
- **R:** restart
- **Scrub:** use the visible timeline slider
- **Still capture:** `?style=curiosity-lab&clean=1&t=4.2`

The preview runs from one file, with no CDN or installation. Browser frame captures can be assembled into a video using external tools such as FFmpeg. No MP4 is included.

## Research and agent instructions

- [Exa + Firecrawl findings, hook patterns, measurement plan and cited sources](research/viral-styles-2026.md)
- [AI agent skill instructions](SKILL.md)
- [Machine-readable style catalog](styles/catalog.json)

**Note:** These are creative hypotheses informed by platform guidance and Indonesian market research. No audited view-based ranking or guaranteed virality is claimed. Validate each style on actual channel analytics, testing hooks and topics separately.

## Structure

```text
SKILL.md
research/viral-styles-2026.md
styles/catalog.json
styles/preview.html
styles/{storyflow,curiosity-lab,data-shock,myth-breaker,micro-drama,product-xray}/STYLE.md
```

## License

MIT. See [LICENSE](LICENSE).
