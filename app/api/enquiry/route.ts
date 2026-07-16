import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

type EnquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const apiKey = process.env.RESEND_API_KEY;
  // Until you verify globify.in in Resend, sending from the built-in
  // onboarding@resend.dev address works. Once verified, set
  // RESEND_FROM_EMAIL=noreply@globify.in (or similar) in your env.
  const from = process.env.RESEND_FROM_EMAIL ?? "Globify Enquiries <onboarding@resend.dev>";
  const to = siteConfig.email;

  // Fallback so we never silently lose a lead if email delivery is misconfigured.
  console.log("[enquiry]", { name, email, phone, message, at: submittedAt });

  if (!apiKey) {
    console.warn(
      "[enquiry] RESEND_API_KEY not set — enquiry was logged but not emailed."
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `New enquiry from ${name}`;
    const text = [
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Phone:   ${phone || "(not provided)"}`,
      "",
      "Message:",
      message,
      "",
      `Submitted: ${submittedAt}`,
    ].join("\n");
    const html = `
      <div style="font-family:system-ui,sans-serif;color:#111;line-height:1.55">
        <h2 style="margin:0 0 12px">New enquiry from ${escapeHtml(name)}</h2>
        <table style="border-collapse:collapse;margin-bottom:20px">
          <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td style="padding:4px 0"><strong>${escapeHtml(name)}</strong></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Phone</td><td style="padding:4px 0">${phone ? escapeHtml(phone) : "<em style='color:#999'>not provided</em>"}</td></tr>
        </table>
        <div style="padding:16px;background:#f6f6f6;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
        <p style="margin-top:20px;font-size:12px;color:#999">Submitted ${submittedAt}</p>
      </div>
    `.trim();

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[enquiry] Resend error:", error);
      // Still return success so the visitor sees confirmation — the console
      // log above is our backup, and we can retry from logs if needed.
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    console.error("[enquiry] send failed:", err);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}
