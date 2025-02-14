import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { submitContactForm } from "./helper";

// Add GET handler to return a proper error response
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(request: NextRequest) {
  try {
    // Get the form data
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

    await submitContactForm({
      name: name.toString(),
      email: email.toString(),
      subject: subject.toString(),
      message: message.toString(),
    });

    // Redirect to success page
    return NextResponse.redirect(
      new URL("/success/contact-form-submission", request.url)
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
