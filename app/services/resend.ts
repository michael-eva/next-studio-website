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
