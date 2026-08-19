import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, reason, stayDetails, message, sourcePage } = data;

    let toEmail = '';
    switch (sourcePage) {
      case 'condotels':
        toEmail = 'condotel@rna-ksa.com';
        break;
      case 'production':
        toEmail = 'production@rna-ksa.com';
        break;
      case 'services':
        toEmail = 'services@rna-ksa.com';
        break;
      case 'traders':
        toEmail = 'contact@rna-ksa.com';
        break;
      case 'travels':
        toEmail = 'travels@rna-ksa.com';
        break;
      default:
        toEmail = 'contact@rna-ksa.com';
    }

    const port = Number(process.env.SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });


    let htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Source Page:</strong> ${sourcePage}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Reason for Contact:</strong> ${reason || 'Not specified'}</p>
    `;

    if (stayDetails) {
      htmlContent += `<p><strong>Stay Details:</strong> ${stayDetails}</p>`;
    }

    htmlContent += `
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: toEmail,
      replyTo: email,
      subject: `New Submission from ${name} on ${sourcePage} page`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
