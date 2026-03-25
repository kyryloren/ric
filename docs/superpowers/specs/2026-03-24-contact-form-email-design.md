# Contact Form Email Submission — Design Spec

## Overview

Wire the existing "Book Now" modal form (`components/book/index.js`) to send an email via the Resend API when submitted. The form currently `alert()`s the JSON — this replaces that with a real submission flow.

## Decisions

- **Approach:** Next.js API Route (`app/api/contact/route.js`)
- **Email provider:** Resend (SDK already installed, API key in `.env` as `RESEND_API_KEY`)
- **From address:** `noreply@contact.roboticimplantsnyc.com` (verified domain)
- **To address:** `Aboutfacedds@gmail.com`
- **Email format:** Plain text (field labels + values)
- **Success UX:** Show success message inside modal, auto-close after ~3 seconds
- **Error UX:** Show inline error message, keep form open for retry

## Files Changed

### 1. `app/api/contact/route.js` (new file)

POST handler that:

1. Parses JSON body: `fname`, `lname`, `dob`, `email`, `phone`, `details`
2. Validates required fields server-side (safety net — client validates too)
3. Instantiates `Resend` with `process.env.RESEND_API_KEY`
4. Calls `resend.emails.send()`:
   - **from:** `noreply@contact.roboticimplantsnyc.com`
   - **to:** `Aboutfacedds@gmail.com`
   - **subject:** `New Booking Request from {fname} {lname}`
   - **text:** Plain text with all form fields labeled
5. Returns `{ success: true }` on success
6. Returns `{ error: message }` with status 500 on failure

### 2. `components/book/index.js` (modified)

Changes to the existing Book component:

1. **New state:** `submitted` (boolean) and `submitError` (string|null) via `useState`
2. **`onSubmit` handler** becomes async:
   - `POST`s to `/api/contact` with form values as JSON
   - On success: sets `submitted = true`
   - On error: sets `submitError` with a user-friendly message
   - Uses Formik's `setSubmitting` for loading state
3. **Success state:** When `submitted` is true, the form content is replaced with a success message ("Thank you! We'll be in touch within 1-2 business days."). After ~3 seconds, the existing `onClose` animation fires (which resets form and closes modal).
4. **Error state:** An inline error message appears below the submit button. Form stays open for retry. Error clears on next submission attempt.
5. **Loading state:** Submit button already respects `isSubmitting` via `disabled` prop — no visual changes needed beyond what Formik provides.
6. **Reset behavior:** The existing `onClose` callback already calls `resetForm()`. The `submitted` and `submitError` states also reset when the modal closes.

## Data Flow

```
User fills form → Formik validates (Yup) → onSubmit fires
  → POST /api/contact (JSON body)
    → API route validates fields
    → Resend sends email to Aboutfacedds@gmail.com
    → Returns { success: true }
  → Component sets submitted = true
  → Success message shown for ~3 seconds
  → onClose animation → modal closes, form resets
```

## Error Handling

- **Client-side validation:** Yup schema (already exists) prevents submission of invalid data
- **Server-side validation:** API route checks required fields are present before calling Resend
- **Resend failure:** API route catches errors, returns 500 with message. Component shows inline error, form stays open.
- **Network failure:** Fetch catch block sets `submitError`, same UX as Resend failure.

## No New Dependencies

- `resend` — already installed
- `formik` — already installed
- No new packages needed
