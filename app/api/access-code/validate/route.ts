import { NextRequest, NextResponse } from "next/server";
import { accessCodeService } from "@/app/lib/access-code-service";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { error: "Access code is required" },
        { status: 400 }
      );
    }

    // Validate the access code
    const accessCode = await accessCodeService.validateAccessCode(code);

    if (accessCode) {
      return NextResponse.json({
        valid: true,
        expiresAt: accessCode.expiresAt.toISOString(),
        email: accessCode.email,
      });
    } else {
      return NextResponse.json({
        valid: false,
        error: "Invalid or expired access code",
      });
    }
  } catch (error) {
    console.error("Access code validation error:", error);
    return NextResponse.json(
      { error: "Failed to validate access code" },
      { status: 500 }
    );
  }
}
