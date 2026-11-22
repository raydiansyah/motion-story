// Renders a Motion Story page by seeking its paused timeline one frame at a time (no frame is ever dropped).
//
//   node engine/tools/render.mjs examples/signal-orb-3d                 -> examples/signal-orb-3d/out/<name>.mp4
//   node engine/tools/render.mjs examples/signal-orb-3d --stills 1.5,6  -> out/stills/still-001.50.png ...
//   node engine/tools/render.mjs examples/signal-orb-3d --serve         -> prints a URL to watch it live (controls, scrub)
//   --fps 24 overrides the story's fps; --out FILE sets the MP4 path.
// Needs `npm install`, Playwright with Chromium, and FFmpeg (+ ffprobe) on PATH.
import { spawn, execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { openStory, serve } from "./lib.mjs";

const args = process.argv.slice(2);
const flag = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const dir = resolve(args.find((a) => !a.startsWith("--") && existsSync(join(a, "index.html"))) ?? ".");
if (!existsSync(join(dir, "index.html"))) throw new Error("pass the story's folder (the one holding index.html)");
const out = join(dir, "out");
mkdirSync(out, { recursive: true });

const server = await serve(args.includes("--serve") ? Number(flag("--port") ?? 4700) : 0);
const url = server.url(join(dir, "index.html"));

if (args.includes("--serve")) {
  console.log(`${url}\nOpen it in a browser: Space pauses, R restarts, arrows step a frame, the slider scrubs.`);
} else {
  const { browser, page, info, problems, seek, capture } = await openStory(url);
  try {
    const stills = flag("--stills")?.split(",").map(Number).sort((a, b) => a - b);
    if (stills) {
      mkdirSync(join(out, "stills"), { recursive: true });
      for (const t of stills) {
        await seek(t);
        const file = join(out, "stills", `still-${t.toFixed(2).padStart(6, "0")}.png`);
        writeFileSync(file, await page.screenshot({ type: "png" }));
        console.log(file);
      }
    } else {
      const fps = Number(flag("--fps") ?? info.fps);
      const frames = Math.round(info.duration * fps);
      const file = flag("--out") ?? join(out, `${basename(dir)}.mp4`);
      const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-preset", "medium", "-crf", "16", "-pix_fmt", "yuv420p", "-r", String(fps), "-movflags", "+faststart", file], { stdio: ["pipe", "inherit", "inherit"] });
      const closed = new Promise((ok, fail) => ff.on("close", (c) => (c === 0 ? ok() : fail(new Error(`ffmpeg exited ${c}`)))));
      const began = Date.now();
      for (let i = 0; i < frames; i++) {
        await seek(i / fps);
        const shot = Buffer.from((await capture.send("Page.captureScreenshot", { format: "jpeg", quality: 96 })).data, "base64");
        if (!ff.stdin.write(shot)) await new Promise((r) => ff.stdin.once("drain", r));
        if ((i + 1) % 30 === 0 || i + 1 === frames) console.log(`${i + 1}/${frames} frames, ${((Date.now() - began) / 1000).toFixed(0)}s`);
      }
      ff.stdin.end();
      await closed;
      // Never claim an MP4 exists until it has been probed.
      const probe = JSON.parse(execFileSync("ffprobe", ["-v", "error", "-count_frames", "-select_streams", "v:0", "-show_entries", "stream=width,height,nb_read_frames,codec_name", "-show_entries", "format=duration", "-of", "json", file]));
      const s = probe.streams[0];
      console.log(`verified: ${file}\n  ${s.codec_name} ${s.width}x${s.height}, ${s.nb_read_frames} frames (expected ${frames}), ${Number(probe.format.duration).toFixed(2)} s`);
      if (Number(s.nb_read_frames) !== frames) process.exitCode = 1;
    }
    if (problems.length) console.warn(`page reported:\n  ${[...new Set(problems)].join("\n  ")}`);
  } finally {
    await browser.close();
    server.close();
  }
}
