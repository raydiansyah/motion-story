// Shared by the render tool and the self-test: a static file server for the repo and a headless Chromium.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".glb": "model/gltf-binary", ".woff2": "font/woff2" };

/** Serves the repo root so a page can load /node_modules/three and /engine/*. Returns { url(path), close }. */
export async function serve(port = 0) {
  const server = createServer((req, res) => {
    const file = normalize(join(repo, decodeURIComponent(new URL(req.url, "http://x").pathname)));
    if (!file.startsWith(repo) || !existsSync(file) || !statSync(file).isFile()) return res.writeHead(404).end();
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream", "cache-control": "no-store" });
    createReadStream(file).pipe(res);
  });
  await new Promise((ready) => server.listen(port, "127.0.0.1", ready));
  const origin = `http://127.0.0.1:${server.address().port}`;
  return { origin, url: (path) => `${origin}/${relative(repo, resolve(path)).split("\\").join("/")}`, close: () => server.close() };
}

function loadPlaywright() {
  const candidates = [process.env.PLAYWRIGHT_PATH, "playwright", "/opt/node-tools/node_modules/playwright", "/opt/node22/lib/node_modules/playwright"].filter(Boolean);
  const require = createRequire(import.meta.url);
  for (const id of candidates) {
    try {
      return require(id);
    } catch {}
  }
  throw new Error("Playwright not found. Run `npm i -D playwright && npx playwright install chromium`, or set PLAYWRIGHT_PATH.");
}

/** Opens `url` (a story page) in headless Chromium at the story's own frame size and waits until it says it is ready. */
export async function openStory(url) {
  const { chromium } = loadPlaywright();
  // WebGL falls back to SwiftShader (software) when the machine has no GPU: slower, same pixels.
  const browser = await chromium.launch({ args: ["--ignore-gpu-blocklist", "--enable-unsafe-swiftshader", "--use-angle=swiftshader", "--hide-scrollbars"] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const problems = [];
  page.on("pageerror", (e) => problems.push(e.message));
  page.on("console", (m) => m.type() === "error" && problems.push(m.text()));
  page.on("response", (r) => r.status() >= 400 && problems.push(`${r.status()} ${r.url()}`));
  await page.goto(`${url}${url.includes("?") ? "&" : "?"}capture`);
  try {
    await page.waitForFunction(() => window.__ready, null, { timeout: 60000 });
  } catch {
    await browser.close();
    throw new Error(`story never became ready. ${problems.length ? `Page errors:\n  ${[...new Set(problems)].join("\n  ")}` : "Check that film.js ends with story.finish()."}`);
  }
  const info = await page.evaluate(() => window.__story);
  await page.setViewportSize({ width: info.width, height: info.height });
  const capture = await page.context().newCDPSession(page);
  const seek = (t) => page.evaluate((time) => window.__seek(time), t);
  return { browser, page, info, problems, seek, capture };
}
