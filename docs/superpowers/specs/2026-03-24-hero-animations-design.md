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

**Current state:** `app/articles/styles/index.js` exports a `Header` component that wraps `CustomHeader` with no animation logic. The page (`app/articles/page.js`) renders `<Header>` inside a `<ListWrapper>` section. There is no dedicated hero component.

**Change:** Create a dedicated hero component following the established codebase convention. Every other page hero lives in its own component directory (`app/<page>/components/hero/index.js` + `styles.js`). The articles page should follow this same pattern rather than embedding animation logic in a styles file.

**New files:**
- `app/articles/components/hero/index.js` — Hero component with `useRef`, `useGSAP` timeline, and `gsap.registerPlugin(useGSAP)` at module scope. Renders a `HeroSection` ref wrapper around `CustomHeader`.
- `app/articles/components/hero/styles.js` — `HeroSection` styled-component (simple, matching home hero's minimal styling).

**Modified files:**
- `app/articles/page.js` — Render `Hero` as a top-level sibling before `ListWrapper` (matching how every other page renders its hero). Remove the `Header` import and its wrapping `Container` from inside `ListWrapper`. Target structure:
  ```jsx
  <>
    <Nav hideNav={allArticlesDoc?.all_articles_header?.book} />
    <Hero data={allArticlesDoc?.all_articles_header} />
    <ListWrapper>
      <Container>
        <CustomGrid>
          {articlesDoc.map(...)}
        </CustomGrid>
      </Container>
    </ListWrapper>
    <Footer />
  </>
  ```
- `app/articles/styles/index.js` — Remove the `Header` export (moved to the new hero component).

**Required imports for the hero component:**
```
import { useRef } from 'react'
import { Container } from 'styles'
import { HeroSection } from './styles'
import { CustomHeader } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)
```

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

**Edge case:** If the CMS returns no buttons (`book: false`, `call: false`, empty or null `buttons`), the `.anim-button` selector finds zero elements and GSAP silently skips that step — the timeline still plays the word animation normally.

### 2. Finances Page — Debug and Fix Button Animation

**Current state:** `app/finances/components/hero/index.js` has a GSAP timeline that targets `.anim-button` with `scale: 0, duration: 1` at position 0.5. The `CustomHeader` correctly passes `book`, `call`, and `buttons` props, and the buttons receive the `anim-button` class. Yet the buttons appear instantly without animation.

**Key observation:** The finances hero animation code is character-for-character identical to the home hero's `.anim-button` animation. Both use a plain string selector (not wrapped in `gsap.utils.toArray`), both use `scope: sectionEl`. The home hero buttons animate correctly. So the root cause is not the selector format — it must be something specific to the finances hero's environment.

**Structured investigation plan:**

1. **Verify selector matches:** Add a temporary `console.log` inside the `useGSAP` callback to log `gsap.utils.toArray('.anim-button')` within the scoped context. If the array is empty, the buttons aren't in the DOM when the animation fires.

2. **Check the Marquee component interaction:** The finances hero is unique in that it includes a `<Marquee>` component inside the scoped `HeroSection`. The Marquee uses `useIntersectionObserver` which triggers state updates and re-renders. Investigate whether the Marquee's re-render cycle disrupts the GSAP context or causes buttons to remount after the timeline has already set their initial `scale: 0` state.

3. **Compare CSS stacking:** The finances `HeroSection` has `h-[90vh]`, `bg-azure`, and `mb-[15%]` — unlike the home hero which is just `relative`. Check whether `overflow` or layout clipping is hiding the scale animation visually.

4. **Check CSS transition conflict:** All buttons have `transition-opacity ease-default duration-500` from `SharedButtonStyles`. While this affects all pages (so it shouldn't be finances-specific), verify it isn't interacting with GSAP's `from` differently when combined with the finances-specific layout.

5. **Compare with the services hero:** The services `[slug]` hero is the only one that wraps `.anim-button` in `gsap.utils.toArray()` and adds `stagger: 0.02`. If services buttons animate correctly, compare its CSS/structure with finances to isolate the difference.

**File changes:**
- `app/finances/components/hero/index.js` — Apply the fix identified through investigation.

## Files Affected

| File | Change |
|------|--------|
| `app/articles/components/hero/index.js` | **New** — Hero component with GSAP timeline |
| `app/articles/components/hero/styles.js` | **New** — HeroSection styled-component |
| `app/articles/page.js` | Import new Hero instead of Header, pass data |
| `app/articles/styles/index.js` | Remove `Header` export |
| `app/finances/components/hero/index.js` | Fix `.anim-button` animation not firing |

## Testing

- Navigate to `/articles` — title words should slide up, description words should follow in the stagger, buttons (if present in CMS) should scale in at 0.5s offset
- Navigate to `/articles` with no CMS buttons — animation should play title/description normally without errors
- Navigate to `/finances` — buttons should scale in from 0, matching the home page hero behavior
- Verify no regressions on other pages (home, technology, services) by spot-checking their hero animations
- Check that animations respect the global `ResetAnimation` reveal timing (no flash of content before animation starts)
