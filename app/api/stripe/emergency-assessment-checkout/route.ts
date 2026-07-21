import { NextRequest, NextResponse } from "next/server";
import { createEmergencyAssessmentCheckoutSession } from "@/app/services/stripe";

export async function POST(req: NextRequest) {
  try {
    const { email, urgency, cancelUrl } = await req.json();

    if (!urgency || !["standard", "rush"].includes(urgency)) {
      return NextResponse.json(
        { error: "Urgency must be 'standard' or 'rush'" },
        { status: 400 }
      );
    }

    const session = await createEmergencyAssessmentCheckoutSession(
      urgency,
      email,
      cancelUrl
    );
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Emergency assessment checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
