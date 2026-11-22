// Signal Orb: a Storyflow-style beat sheet in real 3D.
//   hook (0-2.4) -> curiosity: split into paths (2.4-5) -> visual proof: one node, close-up (5-7.6) -> reveal: converge (7.6-10)
// One subject persists through every shot: the signal orb. Paths, packets and nodes are its evidence.
import { createStory } from "../../engine/story.js";
import { createStage3D, rng, THREE } from "../../engine/stage3d.js";

const story = await createStory({ width: 1080, height: 1920, duration: 10, fps: 30 });
const { tl, $, each, scene, land, split, typeIn, count } = story;
const space = createStage3D($("#space"), { width: 1080, height: 1920, fov: 30, environment: 0.45, dist: 46 });
const { M, cam } = space;

// ---- the model: an orb, a ring of nodes, a line to each, a packet on each line ----------------------------------
const N = 7;
const rand = rng(7); // seeded: the same layout on every render
const orb = new THREE.Group();
const core = new THREE.Mesh(new THREE.IcosahedronGeometry(2.4, 4), M.glow(0x2bb8e8, 0.85));
const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(3.3, 2), new THREE.MeshBasicMaterial({ color: 0x6ae3ff, wireframe: true, transparent: true, opacity: 0.35 }));
orb.add(core, shell);
space.scene.add(orb);

const nodes = [];
const lines = [];
const packets = [];
const lineMat = new THREE.LineBasicMaterial({ color: 0x6ae3ff, transparent: true, opacity: 0.9 });
for (let i = 0; i < N; i++) {
  const a = (i / N) * Math.PI * 2 + rand() * 0.25;
  const r = 13 + rand() * 4;
  const home = new THREE.Vector3(Math.cos(a) * r, (rand() - 0.5) * 9, Math.sin(a) * r);
  const node = new THREE.Mesh(new THREE.OctahedronGeometry(1.15, 1), i === 2 ? M.glow(0xe0a020, 0.55) : M.metal(0xd7dcff));
  node.position.copy(home);
  node.userData.home = home;
  space.scene.add(node);
  nodes.push(node);
  const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
  const line = new THREE.Line(geo, lineMat);
  line.frustumCulled = false;
  space.scene.add(line);
  lines.push(line);
  const packet = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), M.glow(0xffffff, 1.2));
  space.scene.add(packet);
  packets.push(packet);
}

// ---- state the timeline tweens (the 3D scene is a pure function of this and of t) --------------------------------
const S = { nodes: 0, lines: 0, packets: 0, converge: 0, pulse: 1 };
const a = new THREE.Vector3();
const b = new THREE.Vector3();
space.onFrame((t) => {
  orb.rotation.y = t * 0.35;
  orb.rotation.x = Math.sin(t * 0.5) * 0.15;
  const pulse = S.pulse * (1 + 0.06 * Math.sin(t * 5));
  core.scale.setScalar(pulse);
  nodes.forEach((node, i) => {
    const grow = THREE.MathUtils.clamp(S.nodes * N - i, 0, 1); // nodes pop in one after another
    node.scale.setScalar(Math.max(grow, 1e-4));
    // slow orbit around the orb; converge pulls every node back onto it
    const ang = t * 0.18;
    a.copy(node.userData.home).applyAxisAngle(new THREE.Vector3(0, 1, 0), ang);
    node.position.copy(a).multiplyScalar(1 - 0.7 * S.converge);
    node.rotation.set(t * 0.8 + i, t * 0.6, 0);
    // line from the orb surface towards the node, drawn out by S.lines
    const reach = THREE.MathUtils.clamp(S.lines * N - i, 0, 1);
    a.copy(node.position).normalize().multiplyScalar(3.4);
    b.copy(a).lerp(node.position, reach);
    const pos = lines[i].geometry.attributes.position;
    pos.setXYZ(0, a.x, a.y, a.z);
    pos.setXYZ(1, b.x, b.y, b.z);
    pos.needsUpdate = true;
    lines[i].visible = reach > 0.001;
    // a packet rides the line, looping as a pure function of t
    const u = (t * 0.55 + i * 0.137) % 1;
    packets[i].position.copy(a).lerp(node.position, u);
    packets[i].scale.setScalar(Math.max(S.packets * reach, 1e-4));
  });
});

// ---- camera and text: the camera moves first, words arrive after ------------------------------------------------
Object.assign(cam, { az: 20, el: 14, dist: 62, sway: 1 });
// hook: wide
tl.to(cam, { az: -10, el: 10, dist: 44, duration: 2.4, ease: "power2.inOut" }, 0);
tl.to(S, { pulse: 1.15, duration: 1.2, ease: "sine.inOut", yoyo: true, repeat: 1 }, 0.2);
// curiosity: nodes and paths appear while the camera swings round and rises
tl.to(S, { nodes: 1, duration: 1.6, ease: "power1.inOut" }, 2.4);
tl.to(S, { lines: 1, duration: 1.6, ease: "power1.inOut" }, 2.8);
tl.to(S, { packets: 1, duration: 0.6 }, 3.6);
tl.to(cam, { az: 70, el: 28, dist: 62, duration: 2.6, ease: "power2.inOut" }, 2.4);
// proof: close-up on node 03 (index 2); a pin follows it
const target = nodes[2];
const pin = space.pin(target, "Node 03 · gold path", { dx: 260, dy: -240 });
tl.to(cam, { az: 15, el: 8, dist: 26, fov: 26, duration: 1.6, ease: "power3.inOut" }, 5);
tl.to(pin, { show: 1, duration: 0.5 }, 6.1);
tl.to(pin, { show: 0, duration: 0.3 }, 7.3);
// the camera target follows the node's position per frame (deterministic: derived from t, not stored)
space.onFrame(() => {
  const k = THREE.MathUtils.clamp(S.follow, 0, 1);
  cam.tx = target.position.x * k;
  cam.ty = target.position.y * k;
  cam.tz = target.position.z * k;
});
S.follow = 0;
tl.to(S, { follow: 1, duration: 1.2, ease: "power2.inOut" }, 5);
tl.to(S, { follow: 0, duration: 1.2, ease: "power2.inOut" }, 7.6);
// reveal: pull back wide while everything converges onto the orb
tl.to(cam, { az: -30, el: 12, dist: 56, fov: 30, duration: 2.4, ease: "power2.inOut" }, 7.6);
tl.to(S, { converge: 1, duration: 2.2, ease: "power2.inOut" }, 7.8);
tl.to(S, { pulse: 1.25, duration: 0.5, ease: "power2.out", yoyo: true, repeat: 1 }, 9.2);

// screen layer
scene("#hook", 0, 2.4);
typeIn(split("#hookTitle"), 0.35, 0.025);
scene("#split", 2.4, 5);
land("#splitTitle", 3.2);
scene("#proof", 5, 7.6);
land("#proof .readout", 6.0);
count("#ms", 0, 12, 6.1, 1.0);
scene("#reveal", 7.6, 10);
land("#revealTitle", 8.4);

each((t) => space.render(t));
story.finish();
