import { NextResponse } from 'next/server';
import { sendCareersFormEmails } from '@/lib/mail';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = String(formData.get('fullName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const resumeFile = formData.get('resume');

    // Server-side field validation
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

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }
    if (phone.length > 50) {
      return NextResponse.json({ error: 'Phone number exceeds maximum length.' }, { status: 400 });
    }

    // Resume Validation
    if (!resumeFile || typeof resumeFile === 'string') {
      return NextResponse.json({ error: 'Please upload a valid resume file.' }, { status: 400 });
    }

    const file = resumeFile as File;
    const fileName = file.name || 'resume';
    const fileSize = file.size;
    const fileType = file.type?.toLowerCase() || '';
    const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();

    // 1. Validate file size
    if (fileSize > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Resume file size exceeds the 5 MB limit. Please upload a smaller file.' },
        { status: 400 }
      );
    }

    // 2. Validate file extension
    if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
      return NextResponse.json(
        { error: 'Invalid file format. Only .pdf, .doc, and .docx files are allowed.' },
        { status: 400 }
      );
    }

    // 3. Validate MIME type if provided
    if (fileType && !ALLOWED_MIME_TYPES.includes(fileType)) {
      return NextResponse.json(
        { error: 'Invalid file MIME type. Only PDF and Word document formats are allowed.' },
        { status: 400 }
      );
    }

    // Convert file to Buffer for in-memory attachment (no permanent storage)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Send emails via Nodemailer
    await sendCareersFormEmails({
      fullName,
      email,
      phone,
      resume: {
        filename: fileName,
        content: buffer,
        contentType: fileType || 'application/pdf',
      },
    });

    return NextResponse.json(
      { success: true, message: 'Job application submitted successfully.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing careers application submission:', error?.message || error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit job application. Please try again later.' },
      { status: 500 }
    );
  }
}
