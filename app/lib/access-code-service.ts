import { accessCodeDatabase } from "./database";
import {
  generateUniqueAccessCode,
  createExpirationDate,
  isAccessCodeExpired,
  isValidAccessCodeFormat,
} from "./access-code";
import { AccessCode } from "./access-code";

/**
 * Service layer for access code business logic
 */
export class AccessCodeService {
  /**
   * Create a new access code for a successful payment
   */
  async createAccessCodeForPayment(
    email: string,
    stripePaymentId: string,
    stripeCustomerId?: string
  ): Promise<AccessCode> {
    // Check if payment already has an access code
    const existingCode =
      await accessCodeDatabase.findByStripePaymentId(stripePaymentId);
    if (existingCode) {
      throw new Error("Access code already exists for this payment");
    }

    // Generate unique access code
    const code = await generateUniqueAccessCode((code) =>
      accessCodeDatabase.exists(code)
    );
    const expiresAt = createExpirationDate();

    // Create in database
    return await accessCodeDatabase.create({
      code,
      email,
      stripePaymentId,
      stripeCustomerId,
      expiresAt,
    });
  }

  /**
   * Validate an access code and return its details
   */
  async validateAccessCode(code: string): Promise<AccessCode | null> {
    // First check format
    if (!isValidAccessCodeFormat(code)) {
      return null;
    }

    // Find in database
    const accessCode = await accessCodeDatabase.findByCode(code);
    if (!accessCode) {
      return null;
    }

    // Check if expired
    if (isAccessCodeExpired(accessCode.expiresAt)) {
      return null;
    }

    return accessCode;
  }

  /**
   * Mark an access code as used
   */
  async markAccessCodeAsUsed(code: string): Promise<AccessCode> {
    const accessCode = await accessCodeDatabase.findByCode(code);
    if (!accessCode) {
      throw new Error("Access code not found");
    }

    if (accessCode.isUsed) {
      throw new Error("Access code already used");
    }

    return await accessCodeDatabase.update(code, {
      isUsed: true,
      usedAt: new Date(),
    });
  }

  /**
   * Get all access codes for a user
   */
  async getUserAccessCodes(email: string): Promise<AccessCode[]> {
    return await accessCodeDatabase.findByEmail(email);
  }

  /**
   * Get active (non-expired) access codes for a user
   */
  async getUserActiveAccessCodes(email: string): Promise<AccessCode[]> {
    const allCodes = await accessCodeDatabase.findByEmail(email);
    return allCodes.filter((code) => !isAccessCodeExpired(code.expiresAt));
  }

  /**
   * Check if user has active access
   */
  async hasActiveAccess(email: string): Promise<boolean> {
    const activeCodes = await this.getUserActiveAccessCodes(email);
    return activeCodes.length > 0;
  }

  /**
   * Get access code by Stripe payment ID
   */
  async getAccessCodeByPaymentId(
    stripePaymentId: string
  ): Promise<AccessCode | null> {
    return await accessCodeDatabase.findByStripePaymentId(stripePaymentId);
  }

  /**
   * Clean up expired access codes
   */
  async cleanupExpiredCodes(): Promise<number> {
    return await accessCodeDatabase.deleteExpired();
  }

  /**
   * Get access codes expiring soon (for notification purposes)
   */
  async getExpiringCodes(days: number = 7): Promise<AccessCode[]> {
    return await accessCodeDatabase.findExpiringSoon(days);
  }

  /**
   * Extend access code expiration (for admin purposes)
   */
  async extendAccessCode(
    code: string,
    additionalDays: number
  ): Promise<AccessCode> {
    const accessCode = await accessCodeDatabase.findByCode(code);
    if (!accessCode) {
      throw new Error("Access code not found");
    }

    const newExpiration = new Date(accessCode.expiresAt);
    newExpiration.setDate(newExpiration.getDate() + additionalDays);

    return await accessCodeDatabase.update(code, {
      expiresAt: newExpiration,
    });
  }

  /**
   * Revoke access code (for admin purposes)
   */
  async revokeAccessCode(code: string): Promise<void> {
    const accessCode = await accessCodeDatabase.findByCode(code);
    if (!accessCode) {
      throw new Error("Access code not found");
    }

    // Set expiration to past date
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);

    await accessCodeDatabase.update(code, {
      expiresAt: pastDate,
    });
  }
}

// Export singleton instance
export const accessCodeService = new AccessCodeService();
