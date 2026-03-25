# Hero Animations: Articles Page + Finances Button Fix

**Date:** 2026-03-24
**Status:** Draft

## Problem

Two pages are missing hero intro animations that every other page in the site has:

1. **Articles listing page (`/articles`)** — The hero has no entry animation at all. Title, description, and buttons appear instantly.
2. **Finances page (`/finances`)** — The hero animation code exists but the buttons appear instantly instead of animating in with `scale: 0 → 1`.

## Context

The site uses a consistent GSAP-based intro animation across all page heroes:

- **Library:** GSAP 3.12.7 with `@gsap/react` (`useGSAP` hook)
- **Pattern:** A scoped GSAP timeline with `power3.out` easing and a 0.5s base delay
- **Standard sequence:**
  1. Words slide up: `.anim-word` elements animate `yPercent: 100, opacity: 0 → 0, 1` over 1.5s with 0.02s stagger
  2. Buttons scale in: `.anim-button` elements animate `scale: 0 → 1` over 1s, starting at timeline position 0.5
  3. Media fades up: `.anim-video` or `.anim-image` elements animate `yPercent: 10, opacity: 0 → 0, 1` over 1s, starting at position 0.75
- **Infrastructure:** `splitText()` utility wraps each word in `<AnimWord className="anim-word">`, `CustomHeader` assigns `anim-button` class to all buttons, global CSS applies `will-change: transform` to all `anim-*` elements, and `ResetAnimation` reveals `<main>` via `gsap.set('#main', { autoAlpha: 1 })`.

Pages that already follow this pattern: Home, Technology, Services, Finances (partially — text and images animate, buttons don't), Contact, About (custom variant).

## Design

### 1. Articles Listing Page — Add Hero Animation

**Current state:** `app/articles/styles/index.js` exports a `Header` component that wraps `CustomHeader` with no animation logic. The page (`app/articles/page.js`) renders `<Header>` inside a `<ListWrapper>` section — there is no dedicated hero section element.

**Change:** Convert the `Header` wrapper into a proper animated hero component. This requires:

- Adding a `useRef` for GSAP scoping
- Wrapping the `CustomHeader` in a section element with the ref
- Adding the standard `useGSAP` timeline

**Elements to animate:**
- Title and description words (`.anim-word`) — already wrapped by `splitText()` inside `CustomHeader`
- Buttons (`.anim-button`) — already classed by `CustomHeader`
- No media element in this hero, so the timeline has two steps instead of three

**Timeline spec:**

| Step | Target | From values | Duration | Position |
|------|--------|-------------|----------|----------|
| 1 | `.anim-word` (via `gsap.utils.toArray`) | `yPercent: 100, opacity: 0` | 1.5s, stagger 0.02 | 0 (default) |
| 2 | `.anim-button` | `scale: 0` | 1s | 0.5 |

Timeline defaults: `ease: 'power3.out', delay: 0.5`

**File changes:**
- `app/articles/styles/index.js` — Rewrite the `Header` export to include `useRef`, `useGSAP`, `gsap`, and the timeline. Add a wrapper section element with the ref for GSAP scoping.

### 2. Finances Page — Debug and Fix Button Animation

**Current state:** `app/finances/components/hero/index.js` has a GSAP timeline that targets `.anim-button` with `scale: 0, duration: 1` at position 0.5. The `CustomHeader` correctly passes `book`, `call`, and `buttons` props, and the buttons receive the `anim-button` class. Yet the buttons appear instantly without animation.

**Debugging approach:**
1. Verify the `.anim-button` elements exist in the DOM when the `useGSAP` callback fires (the scope is `sectionEl` which wraps the entire hero including `CustomHeader`)
2. Check for CSS conflicts — the buttons have `transition-opacity ease-default duration-500` in their shared styles which could interact with GSAP transforms
3. Verify GSAP's `from` is actually setting initial values on the button elements (not finding zero matches for the selector)
4. Test whether the issue is that `gsap.utils.toArray` is needed (like the `.anim-word` selector uses) vs a plain string selector

**Most likely fix:** The `.anim-button` selector may need `gsap.utils.toArray()` wrapping to properly find elements within the scoped ref, matching how `.anim-word` is handled. If the selector returns zero matches, GSAP silently does nothing — which would explain buttons appearing instantly with no error.

**File changes:**
- `app/finances/components/hero/index.js` — Apply the fix to the `.anim-button` selector (likely wrapping with `gsap.utils.toArray` or similar). Verify the fix resolves the issue.

## Files Affected

| File | Change |
|------|--------|
| `app/articles/styles/index.js` | Rewrite `Header` to animated hero with GSAP timeline |
| `app/finances/components/hero/index.js` | Fix `.anim-button` animation not firing |

## Testing

- Navigate to `/articles` — title words should slide up, description words should follow in the stagger, buttons should scale in at 0.5s offset
- Navigate to `/finances` — buttons should scale in from 0, matching the home page hero behavior
- Verify no regressions on other pages (home, technology, services) by spot-checking their hero animations
- Check that animations respect the global `ResetAnimation` reveal timing
