/**
 * Re-implementation of the homepage interactions that the original site runs
 * through Webflow IX2 + its custom GSAP script.
 *
 * The timings below were extracted from the site's published IX2 config
 * (webflow.schunk.*.js) so they match the original 1:1:
 *   fadeIn       – Webflow "Fade In" preset: opacity 0 → 1, 1000ms outQuart
 *   fadeSlide    – a-44 "Fade Slide": opacity 0 → 1, y 25% → 0, 500ms outQuad
 *   highlight    – a-46 "Highlight": .img-highlight scaleX 1 → 0, 500ms outQuart (image wipe)
 *   eventsTitle  – a-45 "Events Title"
 *   stagger      – a-43 "Logo Stack" / a-49 "Exclusive Sponsorships"
 * Elements are addressed by their original data-w-id attributes.
 */
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const OUT_QUART = 'power3.out';
const OUT_QUAD = 'power1.out';

// [data-w-id, type, scrollOffset %, delay ms]
const REVEALS = [
  // Hero
  ['89cb5670-34e8-0c6e-446c-3cf8042ad807', 'fadeSlide', 0, 0],
  ['bc15710d-80b4-a115-6608-2920df532de2', 'fadeIn', 0, 600],
  ['695ce6e7-caf8-f750-6ff6-9c2d94243da1', 'highlight', 0, 0],
  ['f07441b9-7b41-922f-6d72-bb9d0a411d9d', 'highlight', 0, 0],
  ['10f99069-2465-6554-3e5c-040ecb29225f', 'highlight', 0, 0],
  ['5b0ea01c-209d-3867-1ddb-7211d66f72f3', 'highlight', 0, 0],
  // Trusted logos
  ['21ef2c0d-5db0-00af-aa33-d53cf610cad7', 'logoStack', 0, 0],
  // Events
  ['c03be895-ccf2-0912-70ed-27083bde1a79', 'fadeIn', 20, 0],
  ['e86f0303-d10b-5543-9b2a-0cbe41e23f40', 'eventsTitle', 0, 0],
  ['541dd206-23bf-a984-673b-84a7b91ca994', 'fadeSlide', 0, 0],
  ['541dd206-23bf-a984-673b-84a7b91ca99e', 'fadeIn', 0, 400],
  ['f173d2d7-b62e-4bf6-04e0-5ffa16ca05b9', 'fadeIn', 20, 0],
  ['f173d2d7-b62e-4bf6-04e0-5ffa16ca05d6', 'fadeIn', 0, 0],
  ['b01b4fa8-d019-f8bc-f357-74137982041c', 'fadeSlide', 0, 0],
  // Learn from the best
  ['9928ca7b-955a-2e3c-edaa-c2b220ce90e4', 'fadeIn', 20, 0],
  ['9928ca7b-955a-2e3c-edaa-c2b220ce90f5', 'highlight', 0, 0],
  ['9928ca7b-955a-2e3c-edaa-c2b220ce90fa', 'fadeIn', 0, 400],
  // Expand your network
  ['d00b4efb-2092-3ead-b0f8-a86feaedc090', 'fadeIn', 20, 0],
  ['4b12c222-8028-4274-5105-e2b52b12ae83', 'fadeIn', 0, 400],
  // Stay ahead
  ['a520830d-fc92-00a8-add6-55ecb6f8574f', 'fadeIn', 20, 0],
  ['f7f38999-15d8-a1fb-5a89-e6c4be7d940b', 'highlight', 0, 0],
  ['d3d1d825-197c-c390-2869-7b537fb1388e', 'fadeIn', 0, 400],
  // Member benefits
  ['4f0978ae-6696-e7f7-e7bc-315a1819265d', 'fadeIn', 20, 0],
  ['603abce1-4a7c-059e-d8e5-54ad2ae1bd6b', 'fadeSlide', 10, 0],
  ['70089f71-ac41-4178-4531-6391544536c1', 'fadeSlide', 0, 0],
  ['c654fdc3-737c-602b-7b00-6c923f8ec9c5', 'fadeSlide', 10, 0],
  // Newsletter
  ['aa6c8ccb-b4a2-2e73-5e27-53a6c6137579', 'fadeSlide', 20, 0],
  // Sponsorships
  ['bf418e48-711c-d77e-849f-3945261b7091', 'fadeIn', 20, 0],
  ['06b22815-caf7-f09c-b229-a0b60d155446', 'sponsors', 25, 0],
];

const LOGO_STACK = [
  '21ef2c0d-5db0-00af-aa33-d53cf610cad8',
  '7da3bbf3-8f8b-ea8a-1996-5c45993bac63',
  '94f97c73-c136-463a-f2a1-49a1e9daf043',
  'a3e6dfbc-797e-d371-107f-46b7ded3b2ce',
  '28aa4f18-fd77-c968-096e-38f1bd407fa4',
];

const SPONSORS = [
  'e3611ba3-b5ff-81ba-fc40-81bf59eda3bd',
  '9894c9c2-ea55-1f5a-9418-3c9af54a0dfc',
  'd20460ee-5380-6ad2-179d-07898cc2b8b0',
  'd20460ee-5380-6ad2-179d-07898cc2b8b7',
  '30ca1f7f-8f9b-ee63-aeca-9895aa4b3179',
];

const byId = (root, id) => root.querySelector(`[data-w-id="${id}"]`);

/** Initial (pre-trigger) state, mirroring the first action group of each IX2 list. */
function setInitial(el, type, root) {
  switch (type) {
    case 'fadeIn':
      gsap.set(el, { opacity: 0 });
      break;
    case 'fadeSlide':
      gsap.set(el, { opacity: 0, yPercent: 25, y: 0, x: 0 });
      break;
    case 'highlight':
      gsap.set(el.querySelectorAll('.img-highlight'), { scaleX: 1, x: 0, y: 0 });
      break;
    case 'eventsTitle':
      // y: 0 discards the px offset GSAP parses from the inline translate3d(0, 25%, 0).
      gsap.set(el, { opacity: 0, yPercent: 25, y: 0 });
      gsap.set(root.querySelectorAll('.events-subheading'), { opacity: 0 });
      break;
    case 'logoStack':
      LOGO_STACK.forEach(id => gsap.set(byId(el, id), { opacity: 0, y: '2rem' }));
      break;
    case 'sponsors':
      SPONSORS.forEach(id => gsap.set(byId(el, id), { opacity: 0, yPercent: 20, y: 0 }));
      break;
  }
}

function play(el, type, delay, root) {
  const d = delay / 1000;
  switch (type) {
    case 'fadeIn':
      gsap.to(el, { opacity: 1, duration: 1, ease: OUT_QUART, delay: d });
      break;
    case 'fadeSlide':
      gsap.to(el, { opacity: 1, yPercent: 0, duration: 0.5, ease: OUT_QUAD, delay: d });
      break;
    case 'highlight':
      gsap.to(el.querySelectorAll('.img-highlight'), { scaleX: 0, duration: 0.5, ease: OUT_QUART, delay: d });
      break;
    case 'eventsTitle': {
      const tl = gsap.timeline({ delay: d });
      tl.to(el, { opacity: 1, duration: 0.5, ease: 'none' }, 0)
        .to(el, { yPercent: 0, duration: 0.5, ease: OUT_QUART }, 0)
        .to(el.querySelectorAll('.img-highlight'), { scaleX: 0, duration: 0.5, ease: OUT_QUART }, 0.2)
        .to(root.querySelectorAll('.events-subheading'), { opacity: 1, duration: 0.5, ease: 'none' }, 0.7);
      break;
    }
    case 'logoStack':
      LOGO_STACK.forEach((id, i) =>
        gsap.to(byId(el, id), { opacity: 1, y: 0, duration: 0.5, ease: OUT_QUART, delay: d + i * 0.1 }),
      );
      break;
    case 'sponsors':
      SPONSORS.forEach((id, i) =>
        gsap.to(byId(el, id), { opacity: 1, yPercent: 0, duration: 0.5, ease: OUT_QUART, delay: d + i * 0.1 }),
      );
      break;
  }
}

/** Fires `cb` once when the element's top passes `offset`% above the viewport bottom. */
function onceInView(el, offset, cb) {
  const io = new IntersectionObserver(
    entries => {
      if (entries.some(e => e.isIntersecting)) {
        io.disconnect();
        cb();
      }
    },
    { rootMargin: `0px 0px -${offset}% 0px`, threshold: 0 },
  );
  io.observe(el);
  return () => io.disconnect();
}

/** Scroll-into-view reveals (Webflow IX2 equivalents). */
function initReveals(root) {
  const cleanups = [];
  for (const [id, type, offset, delay] of REVEALS) {
    // CMS list items share one data-w-id, so every match gets its own trigger.
    root.querySelectorAll(`[data-w-id="${id}"]`).forEach(el => {
      setInitial(el, type, root);
      cleanups.push(onceInView(el, offset, () => play(el, type, delay, root)));
    });
  }
  return () => cleanups.forEach(fn => fn());
}

/** `[scramble]` headings scramble into view once (original custom GSAP code). */
function initScrambleHeadings(root) {
  const cleanups = [];
  root.querySelectorAll('[scramble]').forEach((heading, index) => {
    const timer = setTimeout(() => {
      cleanups.push(
        onceInView(heading, 5, () =>
          gsap.to(heading, {
            duration: 0.4,
            scrambleText: { text: '{original}', chars: 'weruoaszxcvnm', speed: 0.3 },
          }),
        ),
      );
    }, index * 100);
    cleanups.push(() => clearTimeout(timer));
  });
  return () => cleanups.forEach(fn => fn());
}

/** Buttons scramble their label on hover (delegated so re-mounted buttons keep working). */
function initButtonScramble(root) {
  const running = new WeakMap();
  const onOver = e => {
    const el = e.target.closest?.('.button');
    if (!el || !root.contains(el) || el.contains(e.relatedTarget)) return;
    if (el.tagName === 'INPUT' || running.has(el)) return;
    const original = el.textContent;
    const reset = () => {
      el.textContent = original;
      running.delete(el);
    };
    running.set(el, true);
    gsap.to(el, {
      duration: 0.3,
      scrambleText: { text: '{original}', chars: 'lowerCase' },
      onComplete: reset,
      onInterrupt: reset,
    });
  };
  root.addEventListener('mouseover', onOver);
  return () => root.removeEventListener('mouseover', onOver);
}

/** "Slight bounce for the images" – infinite yoyo on every .img-parallax. */
function initImageBounce(root) {
  const targets = root.querySelectorAll('.img-parallax');
  if (!targets.length) return () => {};
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  tl.to(targets, { y: '-0.8rem', duration: 2, ease: 'power1.inOut' });
  return () => tl.kill();
}

export function initInteractions(root = document) {
  const cleanups = [initReveals(root), initScrambleHeadings(root), initButtonScramble(root), initImageBounce(root)];
  return () => cleanups.forEach(fn => fn());
}
