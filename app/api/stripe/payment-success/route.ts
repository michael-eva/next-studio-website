import { NextRequest, NextResponse } from "next/server";
import { getCheckoutSession } from "@/app/services/stripe";
import { accessCodeService } from "@/app/lib/access-code-service";
import { sendEmailWithAccessCode } from "@/app/services/resend";

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

      // For emergency assessment, we don't create access codes
      // Instead, we'll send a confirmation email and return booking details
      // TODO: Implement emergency assessment email service

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
