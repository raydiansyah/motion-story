// Motion Story timeline engine.
//
// A story is a page with ONE paused GSAP timeline. Every visible value is a function of the timeline's time, so a
// renderer can seek any frame in any order and get the same pixels. Playback in a browser is only a convenience that
// chooses which time to show; it never advances state of its own.
//
//   const story = await createStory({ width: 1080, height: 1920, duration: 10 });
//   const { tl, gsap, $, scene, each } = story;
//   scene("#hook", 0, 2.4);
//   each((t) => space.render(t));      // runs after the timeline on every frame (canvases, WebGL, anything GSAP can't hold)
//   story.finish();                    // always last: exposes window.__seek / window.__ready for the renderer
//
// URL flags: ?capture  clean frame-capture mode (no controls, no fit-to-window scale), #paused  open paused,
// ?t=3.2  open at a time (handy for screenshots and debugging).
import gsap from "gsap";

export async function createStory({ width = 1080, height = 1920, duration = 10, fps = 30, root = "#root" } = {}) {
  const params = new URLSearchParams(location.search);
  const capture = params.has("capture");
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
  const rootEl = $(root);
  rootEl.style.width = `${width}px`;
  rootEl.style.height = `${height}px`;
  document.documentElement.toggleAttribute("data-capture", capture);

  const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });
  tl.set({}, {}, duration); // the timeline is exactly `duration` long, whatever is animated inside it
  const jobs = [];
  const each = (fn) => jobs.push(fn);
  const draw = () => {
    const t = tl.time();
    for (const job of jobs) job(t);
  };
  const seek = (t) => {
    tl.time(Math.min(Math.max(t, 0), duration), false);
    draw();
  };

  // ---- helpers ------------------------------------------------------------------------------------------
  /** Shows a `.scene` only inside [start, end). */
  const scene = (sel, start, end) => {
    tl.set(sel, { autoAlpha: 0 }, 0);
    tl.set(sel, { autoAlpha: 1 }, start);
    if (end < duration) tl.set(sel, { autoAlpha: 0 }, end);
  };
  const show = (sel, at, dur = 0.4) => tl.to(sel, { autoAlpha: 1, duration: dur }, at);
  const hide = (sel, at, dur = 0.3) => tl.to(sel, { autoAlpha: 0, duration: dur }, at);
  /** Rises into place from below. `from` states are set with tl.set so they never leak backwards in time. */
  const land = (sel, at, { y = 40, dur = 0.7, ease = "power3.out" } = {}) => {
    tl.set(sel, { autoAlpha: 0, y }, 0);
    tl.to(sel, { autoAlpha: 1, y: 0, duration: dur, ease }, at);
  };
  /** Wraps each character of an element in a span and returns them, for typeIn. */
  const split = (sel) => {
    const el = typeof sel === "string" ? $(sel) : sel;
    const text = el.textContent;
    el.setAttribute("aria-label", text);
    el.textContent = "";
    return [...text].map((ch) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.setAttribute("aria-hidden", "true");
      span.textContent = ch === " " ? " " : ch;
      el.appendChild(span);
      return span;
    });
  };
  const typeIn = (chars, at, stagger = 0.035) => {
    tl.set(chars, { autoAlpha: 0, y: 18 }, 0);
    tl.to(chars, { autoAlpha: 1, y: 0, duration: 0.4, stagger, ease: "power2.out" }, at);
  };
  /** Counts a number shown in an element. The value is written from the tween, so any seek lands on the right text. */
  const count = (sel, from, to, at, dur = 1, format = (v) => Math.round(v).toString()) => {
    const el = typeof sel === "string" ? $(sel) : sel;
    const state = { v: from };
    el.textContent = format(from);
    tl.to(state, { v: to, duration: dur, ease: "power1.out", onUpdate: () => (el.textContent = format(state.v)) }, at);
  };

  // ---- fit-to-window and controls (interactive only) ----------------------------------------------------
  function fit() {
    if (capture) return;
    const k = Math.min(innerWidth / width, (innerHeight - 56) / height);
    rootEl.style.transform = `scale(${k})`;
  }

  let playing = false;
  let clock = 0;
  function installControls() {
    if (capture) return;
    const bar = document.createElement("div");
    bar.className = "story-controls";
    bar.innerHTML = `<button data-act="play" aria-label="Play or pause">Pause</button><button data-act="restart" aria-label="Restart">Restart</button><input type="range" min="0" max="${duration}" step="0.01" value="0" aria-label="Scrub" /><output>0.00s</output>`;
    document.body.appendChild(bar);
    const play = $('[data-act="play"]', bar);
    const range = $("input", bar);
    const out = $("output", bar);
    const sync = () => {
      range.value = tl.time();
      out.textContent = `${tl.time().toFixed(2)}s / ${duration.toFixed(1)}s`;
      play.textContent = playing ? "Pause" : "Play";
    };
    const setPlaying = (on) => {
      playing = on;
      sync();
    };
    play.onclick = () => setPlaying(!playing);
    $('[data-act="restart"]', bar).onclick = () => {
      seek(0);
      setPlaying(true);
    };
    range.oninput = () => {
      setPlaying(false);
      seek(Number(range.value));
      sync();
    };
    addEventListener("keydown", (e) => {
      if (e.code === "Space") (e.preventDefault(), setPlaying(!playing));
      else if (e.key === "r") (seek(0), setPlaying(true));
      else if (e.key === "ArrowRight") (setPlaying(false), seek(tl.time() + 1 / fps), sync());
      else if (e.key === "ArrowLeft") (setPlaying(false), seek(tl.time() - 1 / fps), sync());
    });
    // Wall-clock time is used here and only here: it picks which story time to show, nothing is stored in the frame.
    let last = 0;
    const loop = (ms) => {
      if (playing) {
        seek((tl.time() + (ms - last) / 1000) % duration);
        sync();
      }
      last = ms;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    playing = !location.hash.includes("paused");
    sync();
  }

  /** Call last. Everything loaded from a file must be awaited before this, or early frames render differently. */
  function finish() {
    fit();
    addEventListener("resize", fit);
    installControls();
    seek(Number(params.get("t") ?? 0));
    window.__story = { width, height, duration, fps };
    window.__seek = seek;
    window.__timelines = { root: tl };
    window.__ready = true;
  }

  return { gsap, tl, $, $$, width, height, duration, fps, capture, each, seek, scene, show, hide, land, split, typeIn, count, finish };
}
