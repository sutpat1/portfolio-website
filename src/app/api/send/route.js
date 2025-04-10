import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Load API key from environment variable
const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

// Initialize Resend with error handling
let resend;
try {
  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is not set!");
  } else {
    resend = new Resend(apiKey);
  }
} catch (err) {
  console.error("Error initializing Resend:", err);
}

export async function POST(req) {
  try {
    // Check if Resend was properly initialized
    if (!resend) {
      console.error("Resend was not initialized properly");
      return NextResponse.json(
        { error: "Email service configuration error." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Sharv's Portfolio <${fromEmail}>`,
      to: ["sutpat1@gmail.com"],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message from: {email}</p>
          <p>Message:</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error in email API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}