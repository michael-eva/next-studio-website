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
  price: 49.0, // $49 USD
  currency: "usd",
  duration: 30, // days
};

/**
 * Create a Stripe checkout session for AI Agent access
 */
export async function createCheckoutSession(email?: string) {
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
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/extensa-offer/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/extensa-offer/payment-cancelled`,
    customer_email: email,
    metadata: {
      product: "ai_agent_access",
      duration_days: AI_AGENT_PRODUCT.duration.toString(),
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
