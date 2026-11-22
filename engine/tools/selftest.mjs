// Verifies the engine's core promise: a frame is a pure function of time.
//   node engine/tools/selftest.mjs [story-folder]     (default: examples/signal-orb-3d)
// 1. the story becomes ready with no page errors; 2. the same time renders to identical pixels after seeking
// forwards, backwards and out of order; 3. the 3D canvas is not blank; 4. different times differ.
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";
import { openStory, serve } from "./lib.mjs";

const dir = resolve(process.argv[2] ?? "examples/signal-orb-3d");
const server = await serve();
const { browser, page, info, problems, seek } = await openStory(server.url(join(dir, "index.html")));
const hash = async (t) => (await seek(t), createHash("sha256").update(await page.screenshot({ type: "png" })).digest("hex").slice(0, 12));
const fails = [];
const check = (ok, msg) => (console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`), ok || fails.push(msg));
try {
  check(problems.length === 0, `no page errors${problems.length ? `: ${problems.join("; ")}` : ""}`);
  const times = [0.5, info.duration * 0.35, info.duration * 0.65, info.duration - 0.2].map((t) => Math.round(t * 100) / 100);
  const first = [];
  for (const t of times) first.push(await hash(t));
  const back = [];
  for (const t of [...times].reverse()) back.push(await hash(t));
  check(first.join() === back.reverse().join(), `same pixels seeking forwards then backwards (${times.join(", ")} s)`);
  check((await hash(times[1])) === first[1], "same pixels when a time is revisited");
  check(new Set(first).size === first.length, "different times give different frames");
  const lit = await page.evaluate(() => {
    const c = document.querySelector("canvas.space");
    const gl = document.createElement("canvas");
    gl.width = c.width; gl.height = c.height;
    const ctx = gl.getContext("2d");
    ctx.drawImage(c, 0, 0);
    const d = ctx.getImageData(0, 0, gl.width, gl.height).data;
    let n = 0;
    for (let i = 3; i < d.length; i += 4 * 97) if (d[i] > 8) n++;
    return n;
  });
  check(lit > 200, `3D canvas has content (${lit} sampled pixels drawn)`);
} finally {
  await browser.close();
  server.close();
}
if (fails.length) process.exit(1);
console.log("engine self-test passed");
