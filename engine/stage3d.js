// A deterministic three.js layer for Motion Story.
//
//   const space = createStage3D(document.querySelector("#space"), { width: 1080, height: 1920, shadows: true });
//   space.scene.add(myModel);
//   tl.to(space.cam, { az: 40, el: 18, dist: 30, duration: 2.4, ease: "power2.inOut" }, 3);   // a directed camera move
//   each((t) => space.render(t));                                                             // draws one frame for time t
//
// Rules that keep 3D seekable:
//  - space.render(t) is the ONLY thing that draws, and it is called with the timeline's time. Nothing here reads the
//    clock; the hand-held drift is a sum of sines of t.
//  - Anything random is seeded: use rng(seed) below, never Math.random().
//  - Per-frame model animation goes in space.onFrame((t) => ...), which render(t) runs before drawing.
//  - Load textures and models BEFORE story.finish(): a frame drawn before its asset arrived renders differently.
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export { THREE };

/** Seeded random numbers (mulberry32). Same seed, same sequence, on every machine. */
export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createStage3D(canvas, { width = canvas.width, height = canvas.height, fov = 32, exposure = 1.05, environment = 0.5, shadows = false, dist = 40 } = {}) {
  canvas.width = width;
  canvas.height = height;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = exposure;
  renderer.setClearColor(0x000000, 0); // transparent: the page's background (and any 2D layer under it) shows through
  renderer.localClippingEnabled = true;
  if (shadows) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  const scene = new THREE.Scene();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.03).texture;
  scene.environmentIntensity = environment;
  const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 4000);

  // A white three-point rig. Colour comes from materials, so a style can recolour the world without relighting it.
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  const rim = new THREE.DirectionalLight(0xffffff, 1.4);
  const fill = new THREE.DirectionalLight(0xffffff, 0.4);
  rim.position.set(60, 20, -50);
  fill.position.set(30, -40, 60);
  scene.add(key, key.target, rim, fill);
  if (shadows) {
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.radius = 5;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.02;
  }
  /** Size the key light's shadow box to cover `radius` world units around the camera target. */
  function fitShadow(radius) {
    const c = key.shadow.camera;
    c.left = c.bottom = -radius;
    c.right = c.top = radius;
    c.near = 1;
    c.far = radius * 10;
    c.updateProjectionMatrix();
  }
  if (shadows) fitShadow(30);

  // ---- the directed camera -------------------------------------------------------------------------------
  // az/el in degrees around and above the target (tx, ty, tz); roll tilts the horizon; sway (0..1) is a slow drift.
  const cam = { az: 0, el: 0, dist, tx: 0, ty: 0, tz: 0, fov, roll: 0, sway: 0 };
  const rad = THREE.MathUtils.degToRad;
  const tmp = new THREE.Vector3();
  function placeCamera(t) {
    const s = cam.sway;
    const az = rad(cam.az + s * (0.9 * Math.sin(t * 0.41) + 0.4 * Math.sin(t * 1.13 + 1.7)));
    const el = rad(cam.el + s * (0.6 * Math.sin(t * 0.53 + 0.6) + 0.25 * Math.sin(t * 1.31 + 2.9)));
    camera.position.set(cam.tx + cam.dist * Math.cos(el) * Math.sin(az), cam.ty + cam.dist * Math.sin(el), cam.tz + cam.dist * Math.cos(el) * Math.cos(az));
    camera.up.set(Math.sin(rad(cam.roll)), Math.cos(rad(cam.roll)), 0);
    camera.lookAt(cam.tx, cam.ty, cam.tz);
    if (camera.fov !== cam.fov) {
      camera.fov = cam.fov;
      camera.updateProjectionMatrix();
    }
    // The key keeps its angle to the lens, so a model that turns stays lit like a subject on a set.
    tmp.set(-0.45, 0.75, 0.5).normalize().multiplyScalar(cam.dist * 3).applyAxisAngle(new THREE.Vector3(0, 1, 0), az);
    key.position.set(cam.tx + tmp.x, cam.ty + tmp.y, cam.tz + tmp.z);
    key.target.position.set(cam.tx, cam.ty, cam.tz);
  }

  // ---- materials that read as real things under this light -------------------------------------------------
  const M = {
    ceramic: (color = 0xf1f1f4) => new THREE.MeshPhysicalMaterial({ color, metalness: 0.05, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 }),
    metal: (color = 0xc8ccd6) => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness: 0.28, clearcoat: 0.4, clearcoatRoughness: 0.2 }),
    graphite: (color = 0x1c1c20) => new THREE.MeshPhysicalMaterial({ color, metalness: 0.55, roughness: 0.36, clearcoat: 1, clearcoatRoughness: 0.46 }),
    glass: (color = 0xffffff) => new THREE.MeshPhysicalMaterial({ color, metalness: 0, roughness: 0.06, transmission: 0.92, thickness: 2, ior: 1.45 }),
    /** Emissive: pair with a bright colour; the render tool's finishing pass can add bloom on top. */
    glow: (color = 0x6ae3ff, power = 1.4) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: power, roughness: 0.4 }),
  };

  // ---- pins: labels that stay on a 3D point as the camera moves ----------------------------------------------
  const overlay = document.createElement("div");
  overlay.className = "pins3d";
  overlay.style.cssText = `width:${width}px;height:${height}px;`;
  canvas.insertAdjacentElement("afterend", overlay);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.style.cssText = "position:absolute;inset:0;overflow:visible";
  overlay.appendChild(svg);
  const pins = [];
  /** Pin `html` to `target` (an Object3D; `at` is a point in its local space). Tween the returned `.show` from 0 to 1. */
  function pin(target, html, { dx = 220, dy = -160, at = null } = {}) {
    const el = document.createElement("div");
    el.className = "pin3d";
    el.innerHTML = html;
    overlay.appendChild(el);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("class", "pin3d-line");
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("class", "pin3d-dot");
    svg.append(line, dot);
    const state = { show: 0, dx, dy };
    pins.push({ state, el, line, dot, target, at });
    return state;
  }
  const v = new THREE.Vector3();
  function placePins() {
    for (const { state, el, line, dot, target, at } of pins) {
      const on = state.show > 0.001;
      el.style.display = line.style.display = dot.style.display = on ? "" : "none";
      if (!on) continue;
      v.copy(at ?? tmp.set(0, 0, 0));
      target.localToWorld(v).project(camera);
      const x = (v.x * 0.5 + 0.5) * width;
      const y = (-v.y * 0.5 + 0.5) * height;
      const k = Math.min(1, state.show * 1.6);
      const lx = x + state.dx * k;
      const ly = y + state.dy * k;
      line.setAttribute("points", `${x},${y} ${x + state.dx * 0.55 * k},${ly} ${lx},${ly}`);
      dot.setAttribute("cx", x);
      dot.setAttribute("cy", y);
      dot.setAttribute("r", 8 * Math.min(1, state.show * 3));
      const a = Math.max(0, Math.min(1, (state.show - 0.4) / 0.6));
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const edge = 48; // keep labels inside the frame
      const left = Math.max(edge, Math.min(width - edge - w, state.dx >= 0 ? lx + 10 : lx - w - 10));
      const top = Math.max(edge, Math.min(height - edge - h, ly - h / 2));
      el.style.opacity = a;
      el.style.transform = `translate(${left}px, ${top}px) translateY(${(1 - a) * 10}px)`;
    }
  }

  // ---- the frame ---------------------------------------------------------------------------------------------
  const updaters = [];
  /** Register per-frame model animation. fn(t) must be a pure function of t (and of state the timeline tweens). */
  const onFrame = (fn) => updaters.push(fn);
  function render(t = 0) {
    for (const fn of updaters) fn(t);
    placeCamera(t);
    renderer.render(scene, camera);
    placePins();
  }

  return { THREE, renderer, scene, camera, cam, key, rim, fill, M, pin, fitShadow, onFrame, render, width, height };
}
