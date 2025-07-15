import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Product configuration
export const AI_AGENT_PRODUCT = {
  name: "AI Recovery Agent Access",
  description:
    "30-day access to the AI Recovery Agent for troubleshooting AI-generated applications",
  price: 197.0,
  currency: "aud",
  duration: 30, // days
};

// Emergency Assessment Product configuration
export const EMERGENCY_ASSESSMENT_PRODUCT = {
  name: "Emergency Project Rescue Assessment",
  description:
    "Professional assessment and recovery roadmap for failing AI-generated applications. We'll be in touch shortly after payment to schedule your strategy call.",
  standardPrice: 2000.0,
  rushPrice: 3500.0,
  currency: "aud",
  standardDelivery: "3-5 business days",
  rushDelivery: "24-48 hours",
};

/**
 * Create a Stripe checkout session for AI Agent access
 */
export async function createCheckoutSession(
  email?: string,
  cancelUrl?: string
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: AI_AGENT_PRODUCT.currency,
          product_data: {
            name: AI_AGENT_PRODUCT.name,
            description: AI_AGENT_PRODUCT.description,
          },
          unit_amount: Math.round(AI_AGENT_PRODUCT.price * 100), // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/secretroute/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:
      cancelUrl ||
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/secretroute/payment-cancelled`,
    customer_email: email,
    metadata: {
      product: "ai_agent_access",
      duration_days: AI_AGENT_PRODUCT.duration.toString(),
    },
  });

  return session;
}

/**
 * Create a Stripe checkout session for Emergency Assessment
 */
export async function createEmergencyAssessmentCheckoutSession(
  urgency: "standard" | "rush",
  email?: string,
  cancelUrl?: string
) {
  const price =
    urgency === "rush"
      ? EMERGENCY_ASSESSMENT_PRODUCT.rushPrice
      : EMERGENCY_ASSESSMENT_PRODUCT.standardPrice;

  const delivery =
    urgency === "rush"
      ? EMERGENCY_ASSESSMENT_PRODUCT.rushDelivery
      : EMERGENCY_ASSESSMENT_PRODUCT.standardDelivery;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: EMERGENCY_ASSESSMENT_PRODUCT.currency,
          product_data: {
            name: `${EMERGENCY_ASSESSMENT_PRODUCT.name} (${urgency === "rush" ? "Rush" : "Standard"})`,
            description: `${EMERGENCY_ASSESSMENT_PRODUCT.description} - ${delivery} delivery`,
          },
          unit_amount: Math.round(price * 100), // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/secretroute/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:
      cancelUrl ||
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/secretroute/payment-cancelled`,
    customer_email: email,
    metadata: {
      product: "emergency_assessment",
      urgency: urgency,
      delivery: delivery,
    },
  });

  return session;
}

/**
 * Retrieve a checkout session
 */
export async function getCheckoutSession(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId);
}

/**
 * Verify webhook signature
 */
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string,
  secret: string
) {
  return stripe.webhooks.constructEvent(payload, signature, secret);
}

/**
 * Get payment intent details
 */
export async function getPaymentIntent(paymentIntentId: string) {
  return await stripe.paymentIntents.retrieve(paymentIntentId);
}
