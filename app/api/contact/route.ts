import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sendEmail } from "@/app/services/resend";

export async function POST(request: NextRequest) {
  try {
    // Get the form data
    const { origin } = new URL(request.url);
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("_replyto");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    // send the contact email to michael@extensa.studio
    const responseEmail = await sendEmail({
      to: "michael@extensa.studio",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    // Instead of redirect, return a success response with the redirect URL
    return NextResponse.json({
      success: true,
      redirectUrl: `/success/contact-form-submission`,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
