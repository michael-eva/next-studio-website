import { supabaseAdmin } from "./supabase";
import {
  AccessCode,
  generateUniqueAccessCode,
  createExpirationDate,
} from "./access-code";

/**
 * Check if an access code exists in the database
 */
export async function checkAccessCodeExists(code: string): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("access_codes")
    .select("id")
    .eq("code", code)
    .single();

  if (error && error.code !== "PGRST116") {
    // PGRST116 = no rows returned
    throw new Error(`Database error: ${error.message}`);
  }

  return !!data;
}

/**
 * Create a new access code in the database
 */
export async function createAccessCode(
  email: string,
  stripePaymentId: string,
  stripeCustomerId?: string
): Promise<AccessCode> {
  // Generate unique access code
  const code = await generateUniqueAccessCode(checkAccessCodeExists);
  const expiresAt = createExpirationDate();

  const { data, error } = await supabaseAdmin
    .from("access_codes")
    .insert({
      code,
      email,
      stripe_payment_id: stripePaymentId,
      stripe_customer_id: stripeCustomerId,
      expires_at: expiresAt.toISOString(),
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create access code: ${error.message}`);
  }

  return {
    id: data.id,
    code: data.code,
    email: data.email,
    stripePaymentId: data.stripe_payment_id,
    stripeCustomerId: data.stripe_customer_id,
    createdAt: new Date(data.created_at),
    expiresAt: new Date(data.expires_at),
    isUsed: data.is_used,
    usedAt: data.used_at ? new Date(data.used_at) : undefined,
  };
}

/**
 * Validate an access code and return its details
 */
export async function validateAccessCode(
  code: string
): Promise<AccessCode | null> {
  const { data, error } = await supabaseAdmin
    .from("access_codes")
    .select("*")
    .eq("code", code)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows found
      return null;
    }
    throw new Error(`Database error: ${error.message}`);
  }

  // Check if code is expired
  const expiresAt = new Date(data.expires_at);
  if (new Date() > expiresAt) {
    return null;
  }

  return {
    id: data.id,
    code: data.code,
    email: data.email,
    stripePaymentId: data.stripe_payment_id,
    stripeCustomerId: data.stripe_customer_id,
    createdAt: new Date(data.created_at),
    expiresAt: expiresAt,
    isUsed: data.is_used,
    usedAt: data.used_at ? new Date(data.used_at) : undefined,
  };
}

/**
 * Mark an access code as used
 */
export async function markAccessCodeAsUsed(code: string): Promise<void> {
  const { error } = await supabaseAdmin
    .from("access_codes")
    .update({
      is_used: true,
      used_at: new Date().toISOString(),
    })
    .eq("code", code);

  if (error) {
    throw new Error(`Failed to mark access code as used: ${error.message}`);
  }
}

/**
 * Get access code by Stripe payment ID
 */
export async function getAccessCodeByPaymentId(
  stripePaymentId: string
): Promise<AccessCode | null> {
  const { data, error } = await supabaseAdmin
    .from("access_codes")
    .select("*")
    .eq("stripe_payment_id", stripePaymentId)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows found
      return null;
    }
    throw new Error(`Database error: ${error.message}`);
  }

  return {
    id: data.id,
    code: data.code,
    email: data.email,
    stripePaymentId: data.stripe_payment_id,
    stripeCustomerId: data.stripe_customer_id,
    createdAt: new Date(data.created_at),
    expiresAt: new Date(data.expires_at),
    isUsed: data.is_used,
    usedAt: data.used_at ? new Date(data.used_at) : undefined,
  };
}

/**
 * Get all access codes for an email
 */
export async function getAccessCodesByEmail(
  email: string
): Promise<AccessCode[]> {
  const { data, error } = await supabaseAdmin
    .from("access_codes")
    .select("*")
    .eq("email", email)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }

  return data.map((row) => ({
    id: row.id,
    code: row.code,
    email: row.email,
    stripePaymentId: row.stripe_payment_id,
    stripeCustomerId: row.stripe_customer_id,
    createdAt: new Date(row.created_at),
    expiresAt: new Date(row.expires_at),
    isUsed: row.is_used,
    usedAt: row.used_at ? new Date(row.used_at) : undefined,
  }));
}

/**
 * Clean up expired access codes
 */
export async function cleanupExpiredAccessCodes(): Promise<number> {
  const { count, error } = await supabaseAdmin
    .from("access_codes")
    .delete()
    .lt("expires_at", new Date().toISOString());

  if (error) {
    throw new Error(`Failed to cleanup expired codes: ${error.message}`);
  }

  return count || 0;
}
