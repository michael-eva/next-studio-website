// Load environment variables first, before any other imports
import { config } from "dotenv";
import path from "path";

// Load .env file from the project root
config({ path: path.resolve(process.cwd(), ".env") });

import { accessCodeService } from "./access-code-service";
import { generateAccessCode, isValidAccessCodeFormat } from "./access-code";

// Test the database layer integration
export async function testDatabaseIntegration() {
  console.log("Testing Database Integration...");

  try {
    // Test 1: Generate a valid code
    const testCode = generateAccessCode();
    console.log(`Generated test code: ${testCode}`);
    console.log(`Valid format: ${isValidAccessCodeFormat(testCode)}`);

    // Test 2: Try to validate a non-existent code
    const validationResult =
      await accessCodeService.validateAccessCode(testCode);
    console.log(
      `Validation result for non-existent code: ${validationResult ? "Found" : "Not found"}`
    );

    // Test 3: Test cleanup function
    const cleanedCount = await accessCodeService.cleanupExpiredCodes();
    console.log(`Cleaned up ${cleanedCount} expired codes`);

    console.log("Database integration test completed successfully!");
  } catch (error) {
    console.error("Database integration test failed:", error);
  }
}

// Test the service layer methods
export async function testServiceLayer() {
  console.log("Testing Service Layer...");

  try {
    // Test user access methods
    const testEmail = "test@example.com";
    const hasAccess = await accessCodeService.hasActiveAccess(testEmail);
    console.log(`User ${testEmail} has active access: ${hasAccess}`);

    const userCodes = await accessCodeService.getUserAccessCodes(testEmail);
    console.log(`User ${testEmail} has ${userCodes.length} total codes`);

    const activeCodes =
      await accessCodeService.getUserActiveAccessCodes(testEmail);
    console.log(`User ${testEmail} has ${activeCodes.length} active codes`);

    console.log("Service layer test completed successfully!");
  } catch (error) {
    console.error("Service layer test failed:", error);
  }
}

// Run tests if this file is executed directly
if (typeof window === "undefined") {
  testDatabaseIntegration();
  testServiceLayer();
}
