# Contact Form Email Submission — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire the "Book Now" modal form to send an email via Resend when submitted, with success/error UX.

**Architecture:** Next.js API Route receives form data via POST, sends email through Resend SDK, returns success/error. The existing Formik-based Book component calls this endpoint and manages submitted/error/loading states.

**Tech Stack:** Next.js 16 App Router, Resend SDK (v6, already installed), Formik (already installed), styled-components/twin.macro

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `app/api/contact/route.js` | Create | POST handler: validate fields, send email via Resend |
| `components/book/index.js` | Modify | Async onSubmit, success/error/loading states, auto-close timer |
| `components/book/styles.js` | Modify | Add `SuccessMessage` and `ErrorMessage` styled components |

---

### Task 1: Create the API Route

**Files:**
- Create: `app/api/contact/route.js`

- [ ] **Step 1: Create the route file with the POST handler**

Create `app/api/contact/route.js` with this exact content:

```javascript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { fname, lname, dob, email, phone, details } = await request.json()

    const requiredFields = { fname, lname, dob, email, phone, details }
    const missing = Object.entries(requiredFields)
      .filter(([, v]) => !v || typeof v !== 'string' || v.trim() === '')
      .map(([k]) => k)

    if (missing.length > 0) {
      return Response.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 },
      )
    }

    const { error } = await resend.emails.send({
      from: 'noreply@contact.roboticimplantsnyc.com',
      to: 'Aboutfacedds@gmail.com',
      replyTo: email,
      subject: `New Booking Request from ${fname} ${lname}`,
      text: [
        `Name: ${fname} ${lname}`,
        `Date of Birth: ${dob}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        `Details:`,
        details,
      ].join('\n'),
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 },
    )
  }
}
```

- [ ] **Step 2: Verify the route file exists and has correct structure**

Run: `cat app/api/contact/route.js | head -5`
Expected: The import and Resend instantiation lines.

- [ ] **Step 3: Commit**

```bash
git add app/api/contact/route.js
git commit -m "feat: add contact form API route with Resend email"
```

---

### Task 2: Add Styled Components for Success and Error States

**Files:**
- Modify: `components/book/styles.js`

- [ ] **Step 1: Add SuccessMessage and ErrorMessage exports**

At the end of `components/book/styles.js`, add:

```javascript
export const SuccessMessage = tw.div`
  flex
  flex-col
  items-center
  justify-center
  gap-sm
  text-center
  mt-lg

  xl:mt-lg-xl
  xl:gap-sm-xl
`
export const ErrorMessage = tw.span`
  text-red
  text-p
  font-sans
  xl:text-p-xl
`
```

- [ ] **Step 2: Commit**

```bash
git add components/book/styles.js
git commit -m "feat: add success and error styled components for book form"
```

---

### Task 3: Wire Up the Book Component Submission

**Files:**
- Modify: `components/book/index.js`

- [ ] **Step 1: Update imports**

In `components/book/index.js`, change the `useContext, useRef` import to include `useState`:

Replace:
```javascript
import { useContext, useRef } from 'react'
```
With:
```javascript
import { useContext, useRef, useState } from 'react'
```

Also add `SuccessMessage` and `ErrorMessage` to the styles import:

Replace:
```javascript
import {
  BookWrapper,
  FormWrapper,
  Input,
  InputLabel,
  Question,
  ScreenOverlay,
  SideBar,
  Split,
  SubmitWrapper,
  TextArea,
  TitleLine,
} from './styles'
```
With:
```javascript
import {
  BookWrapper,
  ErrorMessage,
  FormWrapper,
  Input,
  InputLabel,
  Question,
  ScreenOverlay,
  SideBar,
  Split,
  SubmitWrapper,
  SuccessMessage,
  TextArea,
  TitleLine,
} from './styles'
```

- [ ] **Step 2: Add state and timer ref**

Inside the `Book` function, right after the existing refs and context lines:

```javascript
const sectionEl = useRef()
const { modal, setModal } = useContext(ModalContext)
const globalAPI = useContext(GlobalAPIContext)
```

Add:
```javascript
const [submitted, setSubmitted] = useState(false)
const [submitError, setSubmitError] = useState(null)
const autoCloseTimer = useRef(null)
```

- [ ] **Step 3: Replace the onSubmit handler**

Replace the entire `useFormik` call:

```javascript
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      dob: '',
      email: '',
      phone: '',
      details: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
```

With:

```javascript
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      dob: '',
      email: '',
      phone: '',
      details: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitError(null)
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
        const data = await res.json()

        if (!res.ok) {
          setSubmitError(data.error || 'Something went wrong. Please try again.')
          return
        }

        setSubmitted(true)
        autoCloseTimer.current = setTimeout(() => {
          onClose()
        }, 3000)
      } catch {
        setSubmitError('Something went wrong. Please try again.')
      } finally {
        setSubmitting(false)
      }
    },
  })
```

- [ ] **Step 4: Update the onClose handler to clear timer and reset state**

Replace the existing `onClose` function:

```javascript
  const onClose = contextSafe(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        onComplete: () => {
          setModal(false)
          resetForm()
        },
      },
    })

    tl.to('.sidebar', { xPercent: 100, duration: 0.5 }, 0)
      .to('.overlay', { '--blur': '0px', duration: 0.5 }, 0)
      .to(
        sectionEl.current,
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        0,
      )
  })
```

With:

```javascript
  const onClose = contextSafe(() => {
    if (autoCloseTimer.current) {
      clearTimeout(autoCloseTimer.current)
      autoCloseTimer.current = null
    }

    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        onComplete: () => {
          setModal(false)
          resetForm()
          setSubmitted(false)
          setSubmitError(null)
        },
      },
    })

    tl.to('.sidebar', { xPercent: 100, duration: 0.5 }, 0)
      .to('.overlay', { '--blur': '0px', duration: 0.5 }, 0)
      .to(
        sectionEl.current,
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        0,
      )
  })
```

- [ ] **Step 5: Update the JSX to show success/error states**

Replace the `<FormWrapper>` and everything inside it (lines 171-275 of the current file). The full replacement for the content inside `<SideBar>`, after the closing `</P>` tag for the description, is:

Replace the `<FormWrapper onSubmit={handleSubmit}>` block (from `<FormWrapper onSubmit={handleSubmit}>` through its closing `</FormWrapper>`) with:

```jsx
        {submitted ? (
          <SuccessMessage>
            <H1>{splitText('Thank You!')}</H1>
            <P>
              {splitText(
                `We've received your request and will be in touch within 1-2 business days.`,
              )}
            </P>
          </SuccessMessage>
        ) : (
          <FormWrapper onSubmit={handleSubmit}>
            <Split>
              <Question className="anim-question">
                <InputLabel htmlFor="fname">Patient First Name</InputLabel>
                <Input
                  id="fname"
                  name="fname"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fname}
                  placeholder="First Name"
                />
                {touched.fname && errors.fname && <span>{errors.fname}</span>}
              </Question>

              <Question className="anim-question">
                <InputLabel htmlFor="lname">Patient Last Name</InputLabel>
                <Input
                  id="lname"
                  name="lname"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                  placeholder="Last Name"
                />
                {touched.lname && errors.lname && <span>{errors.lname}</span>}
              </Question>
            </Split>

            <Question className="anim-question">
              <InputLabel htmlFor="dob">Patient Date of Birth</InputLabel>
              <Input
                id="dob"
                name="dob"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
              />
              {touched.dob && errors.dob && <span>{errors.dob}</span>}
            </Question>

            <Question className="anim-question">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email@domain.com"
              />
              {touched.email && errors.email && <span>{errors.email}</span>}
            </Question>

            <Question className="anim-question">
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="(XXX) XXX-XXXX"
                value={values.phone}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value)
                  setFieldValue('phone', formatted)
                }}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && <span>{errors.phone}</span>}
            </Question>

            <Question className="anim-question">
              <InputLabel htmlFor="details">Details</InputLabel>
              <TextArea
                id="details"
                name="details"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.details}
                placeholder="Any details we should know about?"
              />
              {touched.details && errors.details && <span>{errors.details}</span>}
            </Question>

            <SubmitWrapper className="anim-question">
              <P>
                Need further assistance? Call{' '}
                <CustomLink href={`tel:${globalAPI?.contact?.phone}`} className="call-button">
                  {formatPhone(globalAPI?.contact?.phone || '')}
                </CustomLink>
              </P>
              {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
              <CustomButton
                disabled={isSubmitting || !dirty || !isValid}
                type="submit"
                $primary
                className="submit"
              >
                {isSubmitting ? 'Sending...' : 'Submit Form'}
              </CustomButton>
            </SubmitWrapper>
          </FormWrapper>
        )}
```

- [ ] **Step 6: Commit**

```bash
git add components/book/index.js
git commit -m "feat: wire book form to /api/contact with success/error UX"
```

---

### Task 4: Verify Everything Works Together

- [ ] **Step 1: Run the dev server**

Run: `npm run dev`
Expected: Server starts without errors.

- [ ] **Step 2: Check for linter/build errors**

Run: `npm run build`
Expected: Build completes without errors. If there are build errors, fix them before proceeding.

- [ ] **Step 3: Final commit (if any fixes were needed)**

```bash
git add -A
git commit -m "fix: address any build issues from contact form integration"
```
