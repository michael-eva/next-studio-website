import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/app/services/stripe";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const session = await createCheckoutSession(email);
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
