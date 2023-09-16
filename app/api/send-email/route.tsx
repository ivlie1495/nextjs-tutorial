import { Resend } from 'resend'

import { NextResponse } from 'next/server'
import WelcomeTemplate from '@/emails/WelcomeTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  await resend.emails.send({
    from: '',
    to: 'ivlie1495@gmail.com',
    subject: 'Welcome Template',
    react: <WelcomeTemplate name="ivan" />,
  })

  return NextResponse.json({})
}
