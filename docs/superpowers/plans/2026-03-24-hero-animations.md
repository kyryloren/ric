# Hero Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the standard GSAP hero intro animation to the articles listing page and fix the broken button animation on the finances page.

**Architecture:** Each page hero uses a scoped GSAP timeline (via `useGSAP` + `useRef`) that animates `.anim-word` elements up, `.anim-button` elements in via scale, and optionally `.anim-image`/`.anim-video` elements up. The articles page needs this pattern added from scratch. The finances page already has the code but the buttons aren't animating — requires debugging.

**Tech Stack:** GSAP 3.12.7, `@gsap/react` (`useGSAP` hook), Next.js App Router, styled-components via twin.macro

---

## File Structure

| File | Responsibility |
|------|---------------|
| `app/articles/components/hero/index.js` | **New** — Articles hero component with GSAP timeline |
| `app/articles/components/hero/styles.js` | **New** — HeroSection styled-component |
| `app/articles/page.js` | **Modify** — Render new Hero as top-level sibling |
| `app/articles/styles/index.js` | **Modify** — Remove old `Header` export |
| `app/finances/components/hero/index.js` | **Modify** — Fix button animation bug |

---

### Task 1: Create Articles Hero Styles

**Files:**
- Create: `app/articles/components/hero/styles.js`

- [ ] **Step 1: Create the styles file**

```js
'use client'

import tw from 'twin.macro'

export const HeroSection = tw.section`
  relative
`
```

This matches the home hero's `HeroSection` — a minimal wrapper that serves as the GSAP scope boundary.

- [ ] **Step 2: Commit**

```bash
git add app/articles/components/hero/styles.js
git commit -m "Add articles hero styles"
```

---

### Task 2: Create Articles Hero Component

**Files:**
- Create: `app/articles/components/hero/index.js`
- Reference: `app/home/components/hero/index.js` (pattern to follow)

- [ ] **Step 1: Create the hero component**

```js
'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import { HeroSection } from './styles'
import { CustomHeader } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function Hero({ data }) {
  const sectionEl = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

      tl.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.02,
      }).from(
        '.anim-button',
        {
          scale: 0,
          duration: 1,
        },
        0.5,
      )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <HeroSection id="hero" ref={sectionEl}>
      <Container>
        <CustomHeader
          title={data?.title}
          description={data?.description}
          book={data?.book}
          call={data?.call}
          buttons={data?.button}
          center
          padded
        />
      </Container>
    </HeroSection>
  )
}
```

Key details:
- The `data` prop receives `allArticlesDoc?.all_articles_header` directly (not the full page doc). This is the same shape the old `Header` component received.
- The timeline has two steps (words + buttons) — no media step since this hero has no image/video.
- `gsap.utils.toArray` is used for `.anim-word` (matching the home hero pattern). `.anim-button` uses a plain string selector (also matching home hero).

- [ ] **Step 2: Commit**

```bash
git add app/articles/components/hero/index.js
git commit -m "Add articles hero component with GSAP intro animation"
```

---

### Task 3: Wire Up Articles Page

**Files:**
- Modify: `app/articles/page.js`
- Modify: `app/articles/styles/index.js`

- [ ] **Step 1: Update the page to use the new Hero component**

In `app/articles/page.js`, make these changes:

1. Replace the `Header` import with `Hero`:

Old import:
```js
import { ArticleItem, Header, ImageWrapper, ListWrapper } from './styles'
```

New import:
```js
import { ArticleItem, ImageWrapper, ListWrapper } from './styles'
import Hero from './components/hero'
```

2. Restructure the JSX — render `Hero` before `ListWrapper` as a top-level sibling, remove the extra `Container` that previously wrapped `Header`:

Old JSX (lines 53-78):
```jsx
return (
  <>
    <Nav hideNav={allArticlesDoc?.all_articles_header?.book} />

    <ListWrapper>
      <Container>
        <Header data={allArticlesDoc?.all_articles_header} />
        <CustomGrid>
          {articlesDoc.map((_, index) => (
            <ArticleItem
              key={index}
              href={`/articles/${_?.attributes?.slug}`}
            >
              <ImageWrapper>
                <RenderMedia data={_?.attributes?.media?.data?.attributes} />
              </ImageWrapper>
              <H4>{_?.attributes?.title}</H4>
            </ArticleItem>
          ))}
        </CustomGrid>
      </Container>
    </ListWrapper>

    <Footer />
  </>
)
```

New JSX:
```jsx
return (
  <>
    <Nav hideNav={allArticlesDoc?.all_articles_header?.book} />
    <Hero data={allArticlesDoc?.all_articles_header} />

    <ListWrapper>
      <Container>
        <CustomGrid>
          {articlesDoc.map((_, index) => (
            <ArticleItem
              key={index}
              href={`/articles/${_?.attributes?.slug}`}
            >
              <ImageWrapper>
                <RenderMedia data={_?.attributes?.media?.data?.attributes} />
              </ImageWrapper>
              <H4>{_?.attributes?.title}</H4>
            </ArticleItem>
          ))}
        </CustomGrid>
      </Container>
    </ListWrapper>

    <Footer />
  </>
)
```

- [ ] **Step 2: Remove the Header export from the styles file**

In `app/articles/styles/index.js`, remove the `Header` component (lines 37-50) and the unused `CustomHeader` import (line 3):

Old file:
```js
'use client'

import { CustomHeader } from 'components'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const ListWrapper = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const ArticleItem = styled(Link)`
  ${tw`
    flex
    flex-col
    gap-xs

    xl:gap-xs-xl
  `}

  &:nth-child(odd) {
    ${tw`col-start-1 col-end-13 sm:col-end-7`}
  }
  &:nth-child(even) {
    ${tw`col-start-1 col-end-13 sm:col-start-7`}
  }
`
export const ImageWrapper = tw.div`
  relative
  w-full
  h-[25rem]
  [border-radius: 10px]

  sm:h-[25svw]
`
export const Header = ({ data }) => {
  return (
    <CustomHeader
      title={data?.title}
      description={data?.description}
      book={data?.book}
      call={data?.call}
      buttons={data?.button}
      id={'hero'}
      center
      padded
    />
  )
}
```

New file:
```js
'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const ListWrapper = tw.section`
  relative
  pb-xxl

  xl:pb-xxl-xl
`
export const ArticleItem = styled(Link)`
  ${tw`
    flex
    flex-col
    gap-xs

    xl:gap-xs-xl
  `}

  &:nth-child(odd) {
    ${tw`col-start-1 col-end-13 sm:col-end-7`}
  }
  &:nth-child(even) {
    ${tw`col-start-1 col-end-13 sm:col-start-7`}
  }
`
export const ImageWrapper = tw.div`
  relative
  w-full
  h-[25rem]
  [border-radius: 10px]

  sm:h-[25svw]
`
```

- [ ] **Step 3: Verify the build compiles**

```bash
npm run build
```

Expected: No build errors. The articles page should render with the hero section separated from the article list.

- [ ] **Step 4: Visually verify the animation**

Start the dev server and navigate to `/articles`. Verify:
- Title words slide up with stagger
- Description words slide up in the same stagger sequence
- Buttons (if present) scale in from 0 after a slight delay
- No flash of content before animation starts

- [ ] **Step 5: Commit**

```bash
git add app/articles/page.js app/articles/styles/index.js
git commit -m "Wire up articles hero animation and clean up old Header"
```

---

### Task 4: Debug and Fix Finances Button Animation

**Files:**
- Modify: `app/finances/components/hero/index.js`
- Reference: `app/home/components/hero/index.js` (working version)
- Reference: `app/services/[slug]/components/hero/index.js` (uses `gsap.utils.toArray` on buttons)

This task requires live debugging. Follow the investigation steps in order — each narrows the root cause.

- [ ] **Step 1: Verify selector matches at runtime**

In `app/finances/components/hero/index.js`, add a temporary `console.log` inside the `useGSAP` callback, right before the timeline creation:

```js
useGSAP(
  () => {
    console.log('anim-button elements:', gsap.utils.toArray('.anim-button'))

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })
    // ... rest of timeline
  },
  { dependencies: [sectionEl], scope: sectionEl },
)
```

Start the dev server, navigate to `/finances`, and check the browser console.

- **If the array is empty:** The buttons aren't in the DOM when GSAP runs. This points to a render timing issue — likely related to the `Marquee` component's `useIntersectionObserver` causing a re-render cycle. Proceed to Step 2a.
- **If the array has elements:** The buttons are found but the animation isn't visually playing. This points to a CSS conflict or GSAP override. Skip to Step 2b.

- [ ] **Step 2a: If buttons not found — check render timing**

The finances hero is unique in having a `<Marquee>` inside the GSAP scope. The Marquee uses `useIntersectionObserver` which triggers state updates. If this causes the hero to re-render after the GSAP context initializes, the buttons may re-mount and lose their GSAP-applied `scale: 0` initial state.

Test by temporarily removing the Marquee from the hero JSX and checking if buttons animate. If they do, the fix is to ensure the GSAP timeline re-runs when needed, or to restructure the scope boundary.

- [ ] **Step 2b: If buttons found — check CSS conflicts**

Inspect the button elements in browser DevTools:
1. Check `Computed` styles for any `transform` or `transition` that could override GSAP
2. Check if the `transition-opacity ease-default duration-500` from `SharedButtonStyles` is interfering
3. Check if `will-change: transform` (from the global `[class^="anim-"]` rule) is causing compositing issues with the `h-[90vh]` container

- [ ] **Step 3: Apply the fix**

Based on findings from Step 2a or 2b, apply the appropriate fix in `app/finances/components/hero/index.js`. Remove the temporary `console.log`.

If the root cause remains unclear after the investigation, a safe fallback fix is to wrap all selectors in `gsap.utils.toArray()` (matching the services hero pattern) and add `data` to the dependencies array so the timeline re-creates if data arrives after initial mount:

```js
useGSAP(
  () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

    tl.from(gsap.utils.toArray('.anim-word'), {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.02,
    })
      .from(
        gsap.utils.toArray('.anim-button'),
        {
          scale: 0,
          duration: 1,
        },
        0.5,
      )
      .from(
        gsap.utils.toArray('.anim-image'),
        {
          yPercent: 10,
          opacity: 0,
          duration: 1,
          stagger: 0.02,
        },
        0.75,
      )
  },
  { dependencies: [sectionEl, data], scope: sectionEl },
)
```

- [ ] **Step 4: Visually verify the fix**

Navigate to `/finances`. Verify:
- Title words slide up (should already work)
- Buttons scale in from 0 after the word animation starts
- Marquee images fade up (should already work)
- Compare timing with the home page hero to ensure they feel consistent

- [ ] **Step 5: Verify no regressions**

Spot-check hero animations on:
- `/` (home) — words, buttons, video
- `/services/<any-slug>` — words, back button, buttons, image

- [ ] **Step 6: Remove any remaining debug code and commit**

```bash
git add app/finances/components/hero/index.js
git commit -m "Fix finances hero button animation not playing"
```

---

### Task 5: Final Verification

- [ ] **Step 1: Full build check**

```bash
npm run build
```

Expected: Clean build with no errors.

- [ ] **Step 2: End-to-end animation check**

Navigate through all pages and verify hero animations:
- `/` — words slide up, buttons scale in, video fades up
- `/articles` — words slide up, buttons scale in (if present)
- `/finances` — words slide up, buttons scale in, marquee images fade up
- `/services/<any-slug>` — words slide up, buttons scale in, image fades up
