import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail({ to, subject, text, html }: EmailData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Extensa Studio <michael@notifications.extensa.studio>",
      to: [to],
      subject,
      text,
      html: html || text.replace(/\n/g, "<br>"),
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    return data;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

export async function sendEmailWithAccessCode(
  accessCode: string,
  email: string
) {
  const text = `Hello,\n\nThank you for signing in to Extensa Studio!\n\nYour access code is: ${accessCode}\n\nPlease enter this code to complete your sign-in. If you did not request this code, you can safely ignore this email.\n\nBest regards,\nThe Extensa Studio Team`;
  const html = `
    <p>Hello,</p>
    <p>Thank you for signing in to <strong>Extensa Studio</strong>!</p>
    <p style="font-size: 1.2em; margin: 20px 0;">
      <strong>Your access code is:</strong><br>
      <span style="font-size: 1.5em; letter-spacing: 2px; background: #f4f4f4; padding: 8px 16px; border-radius: 6px; display: inline-block;">
        ${accessCode}
      </span>
    </p>
    <p>Please enter this code to complete your sign-in.<br>
    If you did not request this code, you can safely ignore this email.</p>
    <p style="margin-top: 32px;">Best regards,<br>The Extensa Studio Team</p>
  `;
  await sendEmail({ to: email, subject: "Your access code", text, html });
}
