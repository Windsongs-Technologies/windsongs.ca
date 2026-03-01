import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Windsongs Contact <website@windsongs.ca>',
      to: ['info@windsongs.ca'],
      subject: `New contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
