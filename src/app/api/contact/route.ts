import { NextResponse } from 'next/server';
import { sendContactFormEmails } from '@/lib/mail';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName || body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const companyName = String(body.companyName || '').trim();
    const message = String(body.message || '').trim();

    // Server-side validation
    if (!fullName) {
      return NextResponse.json({ error: 'Full Name is required.' }, { status: 400 });
    }
    if (fullName.length > 150) {
      return NextResponse.json({ error: 'Full Name exceeds maximum length.' }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 200) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (phone && phone.length > 50) {
      return NextResponse.json({ error: 'Phone number exceeds maximum length.' }, { status: 400 });
    }

    if (companyName && companyName.length > 150) {
      return NextResponse.json({ error: 'Company Name exceeds maximum length.' }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message exceeds maximum length.' }, { status: 400 });
    }

    // Send emails via Nodemailer
    await sendContactFormEmails({
      fullName,
      email,
      phone,
      companyName,
      message,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing contact form submission:', error?.message || error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
