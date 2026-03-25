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
