import { NextRequest, NextResponse } from "next/server";
import {
  handleAgentRequest,
  getAIRecoveryAgent,
} from "@/app/services/ai-agent";

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Process the message through the AI agent with session management
    const result = await handleAgentRequest(message, sessionId);

    return NextResponse.json({
      response: result.response,
      session: result.session,
    });
  } catch (error) {
    console.error("Error in AI agent API:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to process message. Please try again.";
    let statusCode = 500;

    if (error instanceof Error) {
      if (error.message.includes("XAI_API_KEY")) {
        errorMessage =
          "API key not configured. Please set XAI_API_KEY environment variable.";
        statusCode = 500;
      } else if (error.message.includes("Invalid API key")) {
        errorMessage = "Invalid API key. Please check your xAI API key.";
        statusCode = 401;
      } else if (error.message.includes("API endpoint not found")) {
        errorMessage =
          "API endpoint not found. Please check your xAI configuration.";
        statusCode = 500;
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");
  const sessionId = searchParams.get("sessionId");

  const agent = getAIRecoveryAgent();

  try {
    switch (action) {
      case "getSession":
        if (!sessionId) {
          return NextResponse.json(
            { error: "Session ID is required" },
            { status: 400 }
          );
        }
        const session = agent.getSession(sessionId);
        if (!session) {
          return NextResponse.json(
            { error: "Session not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({ session });

      case "resetSession":
        if (!sessionId) {
          return NextResponse.json(
            { error: "Session ID is required" },
            { status: 400 }
          );
        }
        const resetSession = agent.resetSession(sessionId);
        return NextResponse.json({ session: resetSession });

      case "deleteSession":
        if (!sessionId) {
          return NextResponse.json(
            { error: "Session ID is required" },
            { status: 400 }
          );
        }
        const deleted = agent.deleteSession(sessionId);
        if (!deleted) {
          return NextResponse.json(
            { error: "Session not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({ success: true });

      case "getAllSessions":
        const allSessions = agent.getAllSessions();
        return NextResponse.json({ sessions: allSessions });

      default:
        return NextResponse.json(
          { message: "AI Recovery Agent API is running" },
          { status: 200 }
        );
    }
  } catch (error) {
    console.error("Error in AI agent API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
