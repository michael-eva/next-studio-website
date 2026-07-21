import {
  generateAccessCode,
  isValidAccessCodeFormat,
  createExpirationDate,
  isAccessCodeExpired,
} from "./access-code";

// Test the access code generation
export function testAccessCodeGeneration() {
  console.log("Testing Access Code Generation...");

  // Generate a few codes
  const codes = Array.from({ length: 5 }, () => generateAccessCode());

  codes.forEach((code, index) => {
    console.log(`Code ${index + 1}: ${code}`);
    console.log(`Valid format: ${isValidAccessCodeFormat(code)}`);
  });

  // Test expiration
  const expiration = createExpirationDate();
  console.log(`Expiration date: ${expiration.toISOString()}`);
  console.log(`Is expired: ${isAccessCodeExpired(expiration)}`);

  // Test a past date
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 1);
  console.log(`Past date expired: ${isAccessCodeExpired(pastDate)}`);
}

// Run test if this file is executed directly
if (typeof window === "undefined") {
  testAccessCodeGeneration();
}
