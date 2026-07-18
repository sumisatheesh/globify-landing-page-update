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
  const message = body.message?.trim() || "";

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  // Format submission date/time in Dubai/Gulf Standard Time (GST)
  let submittedAtFormatted = submittedAt;
  try {
    submittedAtFormatted = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " (GST)";
  } catch {
    // Fallback if timezone not supported
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromSales = process.env.RESEND_FROM_EMAIL || "Globify Enquiries <noreply@globify.in>";
  const fromNoreply = process.env.RESEND_NOREPLY_EMAIL || "Globify <noreply@globify.in>";
  const salesEmail = process.env.SALES_EMAIL || siteConfig.email || "sales@globify.in";

  // Fallback logging so leads are never lost even if Resend encounters issues
  console.log("[enquiry] Lead received:", { name, email, phone, message, at: submittedAt });

  if (!apiKey) {
    console.warn(
      "[enquiry] RESEND_API_KEY not set — enquiry was logged but not emailed."
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);

    const messageText = message || "(not provided)";
    const messageHtml = message
      ? escapeHtml(message)
      : `<em style="color: #94a3b8; font-style: italic;">Not provided</em>`;

    // Draft Sales Notification email content (Plain Text fallback)
    const textSales = [
      `[New Lead] Enquiry from ${name}`,
      "",
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Phone:   ${phone}`,
      "",
      "Message:",
      messageText,
      "",
      `Submitted At: ${submittedAtFormatted}`,
    ].join("\n");

    // Draft Sales Notification email content (Premium HTML)
    const htmlSales = `
<div style="background-color: #f8fafc; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); border: 1px solid #e2e8f0;">
    <!-- Top brand border -->
    <div style="height: 4px; background-color: #ff6b00;"></div>
    
    <!-- Header -->
    <div style="background-color: #070707; padding: 24px 32px; text-align: left;">
      <span style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em;">GLOBIFY</span><span style="color: #ff6b00; font-size: 22px; font-weight: 800;">.</span>
    </div>
    
    <!-- Body -->
    <div style="padding: 32px;">
      <h1 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 24px;">New Lead Submitted</h1>
      
      <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px;">
        A new contact enquiry has been submitted on the Globify website. Here are the details:
      </p>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
        <tbody>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b; width: 30%;">Full Name</td>
            <td style="padding: 12px 0; font-size: 14px; font-weight: 700; color: #0f172a;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b;">Email Address</td>
            <td style="padding: 12px 0; font-size: 14px; font-weight: 700; color: #ff6b00;"><a href="mailto:${escapeHtml(email)}" style="color: #ff6b00; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b;">Phone Number</td>
            <td style="padding: 12px 0; font-size: 14px; font-weight: 700; color: #0f172a;"><a href="tel:${escapeHtml(phone)}" style="color: #0f172a; text-decoration: none;">${escapeHtml(phone)}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b;">Submitted At</td>
            <td style="padding: 12px 0; font-size: 14px; color: #475569;">${submittedAtFormatted}</td>
          </tr>
        </tbody>
      </table>
      
      <div style="font-size: 14px; font-weight: 600; color: #64748b; margin-bottom: 8px;">Message:</div>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; font-family: inherit;">${messageHtml}</div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f1f5f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 12px; line-height: 1.5; color: #64748b; margin: 0;">
        This is an automated notification. To reply to this enquiry, click reply in your email client to email <strong>${escapeHtml(email)}</strong> directly.
      </p>
    </div>
  </div>
</div>
`.trim();

    // Draft Customer Acknowledgment email content (Plain Text fallback)
    const textCustomer = [
      `Hi ${name},`,
      "",
      "Thank you for reaching out to Globify!",
      "We have successfully received your enquiry and our Shopify developers are reviewing your requirements. We will get back to you within one business day.",
      "",
      "Copy of Your Submission:",
      `Phone:   ${phone}`,
      "Message:",
      messageText,
      "",
      "If you have any urgent questions, feel free to chat with us on WhatsApp (+971 54 730 8673).",
      "",
      "Best regards,",
      "The Globify Team",
      "https://globify.in",
    ].join("\n");

    // Draft Customer Acknowledgment email content (Premium HTML)
    const htmlCustomer = `
<div style="background-color: #f8fafc; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); border: 1px solid #e2e8f0;">
    <!-- Top brand border -->
    <div style="height: 4px; background-color: #ff6b00;"></div>
    
    <!-- Header -->
    <div style="background-color: #070707; padding: 28px 32px; text-align: center;">
      <div style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em;">GLOBIFY<span style="color: #ff6b00;">.</span></div>
      <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;">Dubai's Shopify Development Experts</div>
    </div>
    
    <!-- Body -->
    <div style="padding: 32px;">
      <h1 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 16px;">We've received your enquiry!</h1>
      
      <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 20px;">
        Hi ${escapeHtml(name)},
      </p>
      
      <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px;">
        Thank you for reaching out to Globify. We have successfully received your enquiry and our Shopify developers are reviewing your requirements. We will get back to you within one business day with standard steps and a proposed strategy.
      </p>
      
      <!-- Summary Card -->
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 28px;">
        <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; tracking: 0.05em; color: #475569; margin-top: 0; margin-bottom: 16px;">Your Submission Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #64748b; width: 25%;">Phone</td>
              <td style="padding: 8px 0; font-size: 13px; color: #0f172a;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0 0 0; font-size: 13px; font-weight: 600; color: #64748b; vertical-align: top;">Message</td>
              <td style="padding: 10px 0 0 0; font-size: 13px; color: #334155; white-space: pre-wrap; line-height: 1.5;">${messageHtml}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- What's next section -->
      <h3 style="font-size: 15px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 16px;">What Happens Next?</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
        <tr>
          <td style="width: 32px; vertical-align: top; padding-bottom: 16px;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #ff6b00; color: #ffffff; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">1</div>
          </td>
          <td style="padding-left: 12px; padding-bottom: 16px; font-size: 14px; line-height: 1.5; color: #475569; vertical-align: top;">
            <strong style="color: #0f172a;">Expert Review:</strong> We analyze your brand and custom requirements.
          </td>
        </tr>
        <tr>
          <td style="width: 32px; vertical-align: top; padding-bottom: 16px;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #ff6b00; color: #ffffff; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">2</div>
          </td>
          <td style="padding-left: 12px; padding-bottom: 16px; font-size: 14px; line-height: 1.5; color: #475569; vertical-align: top;">
            <strong style="color: #0f172a;">Discovery Chat:</strong> We reach out via email or WhatsApp to schedule a quick call.
          </td>
        </tr>
        <tr>
          <td style="width: 32px; vertical-align: top;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #ff6b00; color: #ffffff; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">3</div>
          </td>
          <td style="padding-left: 12px; font-size: 14px; line-height: 1.5; color: #475569; vertical-align: top;">
            <strong style="color: #0f172a;">Roadmap & Quote:</strong> We provide you with a detailed strategy and pricing tailored to your goals.
          </td>
        </tr>
      </table>

      <!-- WhatsApp CTA -->
      <div style="text-align: center; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px;">
        <div style="font-size: 14px; font-weight: 600; color: #166534; margin-bottom: 8px;">Need to speak with us urgently?</div>
        <a href="https://wa.me/971547308673" style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; padding: 10px 20px; font-size: 14px; font-weight: bold; border-radius: 20px; box-shadow: 0 2px 4px rgba(37, 211, 102, 0.25);">
          Chat on WhatsApp
        </a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #070707; padding: 24px 32px; text-align: center; border-top: 1px solid #1e293b; color: #94a3b8;">
      <p style="font-size: 12px; line-height: 1.5; margin: 0 0 8px 0;">
        © ${new Date().getFullYear()} Globify. All rights reserved.
      </p>
      <p style="font-size: 12px; line-height: 1.5; margin: 0;">
        Dubai, United Arab Emirates | <a href="https://globify.in" style="color: #ff6b00; text-decoration: none;">www.globify.in</a>
      </p>
    </div>
  </div>
</div>
`.trim();

    // Trigger both emails concurrently
    const [salesRes, ackRes] = await Promise.all([
      resend.emails.send({
        from: fromSales,
        to: [salesEmail],
        replyTo: email,
        subject: `[New Lead] ${name} - Globify Enquiry`,
        text: textSales,
        html: htmlSales,
      }),
      resend.emails.send({
        from: fromNoreply,
        to: [email],
        subject: "We've received your enquiry - Globify",
        text: textCustomer,
        html: htmlCustomer,
      }),
    ]);

    if (salesRes.error) {
      console.error("[enquiry] Resend error (Sales Notification):", salesRes.error);
    } else {
      console.log("[enquiry] Sales Notification email sent successfully, id:", salesRes.data?.id);
    }

    if (ackRes.error) {
      console.error("[enquiry] Resend error (Customer Acknowledgment):", ackRes.error);
    } else {
      console.log("[enquiry] Customer Acknowledgment email sent successfully, id:", ackRes.data?.id);
    }

  } catch (err) {
    console.error("[enquiry] Resend execution failed:", err);
  }

  return NextResponse.json({ ok: true });
}
