import { NextRequest, NextResponse } from "next/server";
import { getCheckoutSession } from "@/app/lib/stripe";
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

    // Check if access code already exists for this payment
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

    // Return the payment success data
    return NextResponse.json({
      accessCode: accessCode.code,
      email: accessCode.email,
      expiresAt: accessCode.expiresAt.toISOString(),
      sessionId: sessionId,
    });
  } catch (error) {
    console.error("Payment success processing error:", error);
    return NextResponse.json(
      { error: "Failed to process payment success" },
      { status: 500 }
    );
  }
}
