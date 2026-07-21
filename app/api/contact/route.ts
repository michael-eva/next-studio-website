import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { sendEmail } from '@/app/services/resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await sendEmail({
      to: 'michael@extensa.studio',
      subject: `New contact form submission from ${name}`,
      replyTo: String(email),
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
