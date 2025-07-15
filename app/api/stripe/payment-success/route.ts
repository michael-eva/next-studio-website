import { NextRequest, NextResponse } from "next/server";
import { getCheckoutSession } from "@/app/services/stripe";
import { accessCodeService } from "@/app/lib/access-code-service";
import { sendEmail, sendEmailWithAccessCode } from "@/app/services/resend";

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Retrieve the Stripe checkout session
    const session = await getCheckoutSession(sessionId);

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    // Check if payment was successful
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    // Determine product type from session metadata
    const productType = session.metadata?.product;

    if (productType === "ai_agent_access") {
      // Handle AI Agent access code creation
      let accessCode = await accessCodeService.getAccessCodeByPaymentId(
        session.payment_intent as string
      );

      // If no access code exists, create one
      if (!accessCode) {
        accessCode = await accessCodeService.createAccessCodeForPayment(
          session.customer_details?.email || "unknown@example.com",
          session.payment_intent as string,
          session.customer as string
        );
      }

      // Send email with access code
      await sendEmailWithAccessCode(accessCode.code, accessCode.email);

      // Return the payment success data for AI Agent
      return NextResponse.json({
        productType: "ai_agent_access",
        accessCode: accessCode.code,
        email: accessCode.email,
        expiresAt: accessCode.expiresAt.toISOString(),
        sessionId: sessionId,
      });
    } else if (productType === "emergency_assessment") {
      // Handle Emergency Assessment booking
      const urgency = session.metadata?.urgency || "standard";
      const delivery = session.metadata?.delivery || "3-5 business days";

      await sendEmail({
        bcc: ["michael@extensa.studio"],
        to: session.customer_details?.email || "unknown@example.com",
        subject: "Emergency Assessment Checkout",
        text: "Thank you for booking your emergency assessment with Extensa Studio! Your assessment has been successfully scheduled. Our team will contact you shortly to arrange your strategy call and discuss your project requirements in detail. We'll reach out soon to schedule your strategy call. If you have any immediate questions, feel free to reply to this email or contact us directly. Best regards, The Extensa Studio Team",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; margin-bottom: 20px;">Emergency Assessment Confirmation</h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 16px;">
              Thank you for booking your emergency assessment with Extensa Studio!
            </p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 16px;">
              Your assessment has been successfully scheduled. Our team will contact you shortly to arrange your strategy call and discuss your project requirements in detail.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 12px;">What's Next?</h3>
              <ul style="color: #555; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>We'll reach out within 24 hours to schedule your strategy call</li>
                <li>Prepare any relevant project details or questions you'd like to discuss</li>
                <li>Our team will review your requirements and provide tailored recommendations</li>
              </ul>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 16px;">
              If you have any immediate questions, feel free to reply to this email or contact us directly.
            </p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 0;">
              Best regards,<br>
              <strong>The Extensa Studio Team</strong>
            </p>
          </div>
        `,
      });

      return NextResponse.json({
        productType: "emergency_assessment",
        email: session.customer_details?.email || "unknown@example.com",
        urgency: urgency,
        delivery: delivery,
        sessionId: sessionId,
        message:
          "Your emergency assessment has been booked successfully. We'll contact you shortly to schedule your strategy call.",
      });
    } else {
      return NextResponse.json(
        { error: "Unknown product type" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Payment success processing error:", error);
    return NextResponse.json(
      { error: "Failed to process payment success" },
      { status: 500 }
    );
  }
}
