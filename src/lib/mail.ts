import nodemailer from 'nodemailer';

/**
 * Helper to escape HTML characters in user input to prevent HTML injection in emails.
 */
export function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Retrieves the four required recipient email addresses from environment variables.
 * Fails safely if any of the four environment variables are missing or empty.
 */
export function getInternalRecipients(): string[] {
  const r1 = process.env.FORM_RECIPIENT_1?.trim();
  const r2 = process.env.FORM_RECIPIENT_2?.trim();
  const r3 = process.env.FORM_RECIPIENT_3?.trim();
  const r4 = process.env.FORM_RECIPIENT_4?.trim();

  if (!r1 || !r2 || !r3 || !r4) {
    throw new Error('Server configuration error: All four recipient email addresses (FORM_RECIPIENT_1, FORM_RECIPIENT_2, FORM_RECIPIENT_3, FORM_RECIPIENT_4) must be set.');
  }

  return [r1, r2, r3, r4];
}

/**
 * Creates and returns the shared Nodemailer transporter.
 */
export function createTransporter() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();

  if (!user || !pass) {
    throw new Error('Server configuration error: GMAIL_USER and GMAIL_APP_PASSWORD must be configured.');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user,
      pass,
    },
  });
}

export interface ContactMailOptions {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
}

export interface CareersMailOptions {
  fullName: string;
  email: string;
  phone: string;
  resume: {
    filename: string;
    content: Buffer;
    contentType: string;
  };
}

/**
 * Handles sending Contact Form Emails:
 * 1. Internal notification to 4 recipients (Reply-To: visitor email)
 * 2. Visitor acknowledgement email
 */
export async function sendContactFormEmails(data: ContactMailOptions) {
  const recipients = getInternalRecipients();
  const transporter = createTransporter();
  const gmailUser = process.env.GMAIL_USER?.trim();

  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || 'N/A');
  const safeCompany = escapeHtml(data.companyName || '');
  const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br />');

  // Dynamic Subject
  const internalSubject = safeCompany
    ? `New Contact Enquiry — ${data.fullName} — ${data.companyName}`
    : `New Contact Enquiry — ${data.fullName}`;

  // 1. Internal Notification Email
  const internalHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #0C2C4D; padding: 24px; text-align: center; border-bottom: 3px solid #BFA052; }
          .header h2 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
          .header p { color: #BFA052; margin: 4px 0 0 0; font-size: 13px; font-weight: 600; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
          .value { font-size: 15px; color: #0f172a; font-weight: 500; word-break: break-word; }
          .message-box { background: #f8fafc; border-left: 4px solid #BFA052; padding: 16px; border-radius: 4px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #334155; }
          .footer { background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>NEW CONTACT ENQUIRY</h2>
            <p>Conservve Infra Solutionss Website Notification</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${safeName}</div>
            </div>
            ${safeCompany ? `
            <div class="field">
              <div class="label">Company Name</div>
              <div class="value">${safeCompany}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${safeEmail}" style="color: #0C2C4D; text-decoration: none;">${safeEmail}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${safePhone}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${safeMessage}</div>
            </div>
          </div>
          <div class="footer">
            This enquiry was submitted via the official website contact form.
          </div>
        </div>
      </body>
    </html>
  `;

  const internalText = `
NEW CONTACT ENQUIRY
----------------------------------------
Full Name: ${data.fullName}
${data.companyName ? `Company Name: ${data.companyName}\n` : ''}Email: ${data.email}
Phone: ${data.phone || 'N/A'}

Message:
${data.message}
----------------------------------------
Submitted via Conservve Infra Solutionss Website
  `.trim();

  // Send Internal Notification to all 4 recipients
  await transporter.sendMail({
    from: gmailUser,
    to: recipients,
    replyTo: data.email,
    subject: internalSubject,
    html: internalHtml,
    text: internalText,
  });

  // 2. Visitor Acknowledgement Email
  const ackHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #0C2C4D; padding: 24px; text-align: center; border-bottom: 3px solid #BFA052; }
          .header h2 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
          .header p { color: #BFA052; margin: 4px 0 0 0; font-size: 13px; font-weight: 600; }
          .content { padding: 30px; font-size: 15px; line-height: 1.6; color: #334155; }
          .footer { background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>THANK YOU FOR CONTACTING US</h2>
            <p>Conservve Infra Solutionss</p>
          </div>
          <div class="content">
            <p>Dear <strong>${safeName}</strong>,</p>
            <p>Thank you for reaching out to Conservve Infra Solutionss. We have successfully received your enquiry.</p>
            <p>Our team is reviewing your message and will get back to you shortly.</p>
            <br />
            <p style="margin: 0;">Best regards,</p>
            <p style="margin: 0; font-weight: 700; color: #0C2C4D;">Conservve Infra Solutionss Team</p>
          </div>
          <div class="footer">
            &copy; 2026 Conservve Infra Solutionss. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  const ackText = `
Dear ${data.fullName},

Thank you for reaching out to Conservve Infra Solutionss. We have successfully received your enquiry.

Our team is reviewing your message and will get back to you shortly.

Best regards,
Conservve Infra Solutionss Team
  `.trim();

  await transporter.sendMail({
    from: gmailUser,
    to: data.email,
    subject: 'Thank You for Contacting Us',
    html: ackHtml,
    text: ackText,
  });
}

/**
 * Handles sending Careers Form Emails:
 * 1. Internal application notification to 4 recipients (Reply-To: applicant email, with resume attachment)
 * 2. Applicant acknowledgement email (no attachment)
 */
export async function sendCareersFormEmails(data: CareersMailOptions) {
  const recipients = getInternalRecipients();
  const transporter = createTransporter();
  const gmailUser = process.env.GMAIL_USER?.trim();

  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);

  const internalSubject = `New Job Application — ${data.fullName}`;

  // 1. Internal Application Notification
  const internalHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #0C2C4D; padding: 24px; text-align: center; border-bottom: 3px solid #BFA052; }
          .header h2 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
          .header p { color: #BFA052; margin: 4px 0 0 0; font-size: 13px; font-weight: 600; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
          .value { font-size: 15px; color: #0f172a; font-weight: 500; word-break: break-word; }
          .attachment-badge { display: inline-block; background: #f8fafc; border: 1px solid #cbd5e1; padding: 8px 14px; border-radius: 6px; font-size: 13px; color: #0C2C4D; font-weight: 600; margin-top: 4px; }
          .footer { background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>NEW JOB APPLICATION</h2>
            <p>Conservve Infra Solutionss Recruitment</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${safeName}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${safeEmail}" style="color: #0C2C4D; text-decoration: none;">${safeEmail}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${safePhone}</div>
            </div>
            <div class="field">
              <div class="label">Resume Attachment</div>
              <div class="attachment-badge">📎 ${escapeHtml(data.resume.filename)}</div>
            </div>
          </div>
          <div class="footer">
            This job application was submitted via the Careers page on the website.
          </div>
        </div>
      </body>
    </html>
  `;

  const internalText = `
NEW JOB APPLICATION
----------------------------------------
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Resume Attached: ${data.resume.filename}
----------------------------------------
Submitted via Conservve Infra Solutionss Careers Page
  `.trim();

  // Send Internal Notification to 4 recipients with resume attachment
  await transporter.sendMail({
    from: gmailUser,
    to: recipients,
    replyTo: data.email,
    subject: internalSubject,
    html: internalHtml,
    text: internalText,
    attachments: [
      {
        filename: data.resume.filename,
        content: data.resume.content,
        contentType: data.resume.contentType,
      },
    ],
  });

  // 2. Applicant Acknowledgement Email (no attachment)
  const ackHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #0C2C4D; padding: 24px; text-align: center; border-bottom: 3px solid #BFA052; }
          .header h2 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
          .header p { color: #BFA052; margin: 4px 0 0 0; font-size: 13px; font-weight: 600; }
          .content { padding: 30px; font-size: 15px; line-height: 1.6; color: #334155; }
          .footer { background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>APPLICATION RECEIVED</h2>
            <p>Conservve Infra Solutionss Recruitment</p>
          </div>
          <div class="content">
            <p>Dear <strong>${safeName}</strong>,</p>
            <p>Thank you for applying to join <strong>Conservve Infra Solutionss</strong>. We have successfully received your application and resume.</p>
            <p>Our recruitment team is reviewing your profile and will contact you if your experience aligns with our current openings.</p>
            <br />
            <p style="margin: 0;">Best regards,</p>
            <p style="margin: 0; font-weight: 700; color: #0C2C4D;">Recruitment Team</p>
            <p style="margin: 0; color: #64748b; font-size: 13px;">Conservve Infra Solutionss</p>
          </div>
          <div class="footer">
            &copy; 2026 Conservve Infra Solutionss. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  const ackText = `
Dear ${data.fullName},

Thank you for applying to join Conservve Infra Solutionss. We have successfully received your application and resume.

Our recruitment team is reviewing your profile and will contact you if your experience aligns with our current openings.

Best regards,
Recruitment Team
Conservve Infra Solutionss
  `.trim();

  await transporter.sendMail({
    from: gmailUser,
    to: data.email,
    subject: 'Application Received',
    html: ackHtml,
    text: ackText,
  });
}
