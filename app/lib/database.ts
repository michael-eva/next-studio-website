import { supabaseAdmin } from "./supabase";
import { AccessCode } from "./access-code";

export interface DatabaseAccessCode {
  id: string;
  code: string;
  email: string;
  stripe_payment_id: string;
  stripe_customer_id?: string;
  created_at: string;
  expires_at: string;
  is_used: boolean;
  used_at?: string;
}

export interface CreateAccessCodeParams {
  code: string;
  email: string;
  stripePaymentId: string;
  stripeCustomerId?: string;
  expiresAt: Date;
}

export interface UpdateAccessCodeParams {
  isUsed?: boolean;
  usedAt?: Date;
  expiresAt?: Date;
}

/**
 * Database layer for access code operations
 */
export class AccessCodeDatabase {
  private tableName = "access_codes";

  /**
   * Check if an access code exists
   */
  async exists(code: string): Promise<boolean> {
    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .select("id")
      .eq("code", code)
      .single();

    if (error && error.code !== "PGRST116") {
      throw new Error(
        `Database error checking code existence: ${error.message}`
      );
    }

    return !!data;
  }

  /**
   * Create a new access code
   */
  async create(params: CreateAccessCodeParams): Promise<AccessCode> {
    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .insert({
        code: params.code,
        email: params.email,
        stripe_payment_id: params.stripePaymentId,
        stripe_customer_id: params.stripeCustomerId,
        expires_at: params.expiresAt.toISOString(),
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create access code: ${error.message}`);
    }

    return this.mapDatabaseToAccessCode(data);
  }

  /**
   * Find access code by code
   */
  async findByCode(code: string): Promise<AccessCode | null> {
    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .select("*")
      .eq("code", code)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      throw new Error(`Database error finding access code: ${error.message}`);
    }

    return this.mapDatabaseToAccessCode(data);
  }

  /**
   * Find access code by Stripe payment ID
   */
  async findByStripePaymentId(
    stripePaymentId: string
  ): Promise<AccessCode | null> {
    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .select("*")
      .eq("stripe_payment_id", stripePaymentId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      throw new Error(
        `Database error finding access code by payment ID: ${error.message}`
      );
    }

    return this.mapDatabaseToAccessCode(data);
  }

  /**
   * Find all access codes by email
   */
  async findByEmail(email: string): Promise<AccessCode[]> {
    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .select("*")
      .eq("email", email)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(
        `Database error finding access codes by email: ${error.message}`
      );
    }

    return data.map((row) => this.mapDatabaseToAccessCode(row));
  }

  /**
   * Update an access code
   */
  async update(
    code: string,
    params: UpdateAccessCodeParams
  ): Promise<AccessCode> {
    const updateData: any = {};

    if (params.isUsed !== undefined) {
      updateData.is_used = params.isUsed;
    }

    if (params.usedAt !== undefined) {
      updateData.used_at = params.usedAt.toISOString();
    }

    if (params.expiresAt !== undefined) {
      updateData.expires_at = params.expiresAt.toISOString();
    }

    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .update(updateData)
      .eq("code", code)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update access code: ${error.message}`);
    }

    return this.mapDatabaseToAccessCode(data);
  }

  /**
   * Delete expired access codes
   */
  async deleteExpired(): Promise<number> {
    const { count, error } = await supabaseAdmin
      .from(this.tableName)
      .delete()
      .lt("expires_at", new Date().toISOString());

    if (error) {
      throw new Error(
        `Failed to delete expired access codes: ${error.message}`
      );
    }

    return count || 0;
  }

  /**
   * Get all access codes (for admin purposes)
   */
  async findAll(): Promise<AccessCode[]> {
    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(
        `Database error fetching all access codes: ${error.message}`
      );
    }

    return data.map((row) => this.mapDatabaseToAccessCode(row));
  }

  /**
   * Get access codes expiring soon (within X days)
   */
  async findExpiringSoon(days: number = 7): Promise<AccessCode[]> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() + days);

    const { data, error } = await supabaseAdmin
      .from(this.tableName)
      .select("*")
      .gte("expires_at", new Date().toISOString())
      .lte("expires_at", cutoffDate.toISOString())
      .order("expires_at", { ascending: true });

    if (error) {
      throw new Error(
        `Database error fetching expiring access codes: ${error.message}`
      );
    }

    return data.map((row) => this.mapDatabaseToAccessCode(row));
  }

  /**
   * Map database row to AccessCode interface
   */
  private mapDatabaseToAccessCode(dbRow: DatabaseAccessCode): AccessCode {
    return {
      id: dbRow.id,
      code: dbRow.code,
      email: dbRow.email,
      stripePaymentId: dbRow.stripe_payment_id,
      stripeCustomerId: dbRow.stripe_customer_id,
      createdAt: new Date(dbRow.created_at),
      expiresAt: new Date(dbRow.expires_at),
      isUsed: dbRow.is_used,
      usedAt: dbRow.used_at ? new Date(dbRow.used_at) : undefined,
    };
  }
}

// Export singleton instance
export const accessCodeDatabase = new AccessCodeDatabase();
