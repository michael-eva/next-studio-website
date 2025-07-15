import { randomBytes } from "crypto";

export interface AccessCode {
  id: string;
  code: string;
  email: string;
  stripePaymentId: string;
  stripeCustomerId?: string;
  createdAt: Date;
  expiresAt: Date;
  isUsed: boolean;
  usedAt?: Date;
}

/**
 * Generates a unique access code in the format AI-XXXX-XXXX-XXXX
 * Where XXXX are random alphanumeric characters
 */
export function generateAccessCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const segments = [4, 4, 4]; // 3 segments of 4 characters each

  const code = segments
    .map((seg) =>
      Array.from(
        { length: seg },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("")
    )
    .join("-");

  return `AI-${code}`;
}

/**
 * Validates an access code format
 */
export function isValidAccessCodeFormat(code: string): boolean {
  const pattern = /^AI-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  return pattern.test(code);
}

/**
 * Creates expiration date 30 days from now
 */
export function createExpirationDate(): Date {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  return expirationDate;
}

/**
 * Checks if an access code is expired
 */
export function isAccessCodeExpired(expiresAt: Date): boolean {
  return new Date() > expiresAt;
}

/**
 * Generates a random code and ensures it's unique
 * This would typically be used with a database check
 */
export async function generateUniqueAccessCode(
  checkExists: (code: string) => Promise<boolean>
): Promise<string> {
  let attempts = 0;
  const maxAttempts = 10;

  while (attempts < maxAttempts) {
    const code = generateAccessCode();
    const exists = await checkExists(code);

    if (!exists) {
      return code;
    }

    attempts++;
  }

  throw new Error(
    "Failed to generate unique access code after maximum attempts"
  );
}

/**
 * Formats access code for display (adds spaces for readability)
 */
export function formatAccessCodeForDisplay(code: string): string {
  return code.replace(/-/g, " - ");
}

/**
 * Cleans access code input (removes spaces, dashes, etc.)
 */
export function cleanAccessCodeInput(input: string): string {
  return input.replace(/[\s\-_]/g, "").toUpperCase();
}
