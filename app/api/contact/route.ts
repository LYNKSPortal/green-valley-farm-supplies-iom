import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  category?: string;
  message?: string;
  consent?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, consent } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
    return NextResponse.json(
      { error: "Please complete all required fields and provide consent." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // TODO: Wire this up to an email provider (e.g. Resend, SendGrid) or CRM
  // before launch. For now we log the enquiry server-side so nothing is lost
  // during development.
  console.log("New contact enquiry received:", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
