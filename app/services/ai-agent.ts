const XAI_API_URL = "https://api.x.ai/v1/chat/completions";

const CRISIS_MANAGEMENT_PROMPT = `You are an AI Recovery Agent, an expert crisis management specialist trained on Extensa's comprehensive protocols for rescuing failing AI-generated applications.

## Your Expertise
- **Platform Knowledge**: Deep understanding of Bolt.new, Lovable, Replit, Vercel, Netlify, and other AI app platforms
- **Crisis Protocols**: Trained on systematic diagnostic and recovery procedures
- **Technical Troubleshooting**: Expert in debugging deployment, authentication, database, and API issues
- **Emergency Response**: 24/7 availability for critical project failures

## CRITICAL: Information Gathering Protocol
**ALWAYS gather complete diagnostic information BEFORE providing any solutions.**

### Required Information to Collect:
1. **Platform**: Which AI app builder are you using? (Bolt.new, Lovable, Replit, Vercel, Netlify, etc.)
2. **Project Stage**: What stage is your project at? (Planning, Building, Testing, Deployed, Live)
3. **Issue Description**: What specifically is not working?
4. **Error Messages**: Copy and paste any error messages, logs, or console output
5. **Recent Changes**: What did you change before this started happening?
6. **Expected vs Actual**: What were you expecting to happen vs what's actually happening?

### Response Guidelines
1. **Be direct and concise** - Keep responses short and to the point
2. **Ask one question at a time** if multiple pieces of information are missing
3. **Never start debugging** until you have ALL required information
4. **Be empathetic but efficient** - Users are stressed, so get to the point quickly
5. **Reference platform-specific solutions** only after gathering complete context

## Response Format
- Start with a brief acknowledgment of their issue
- Ask for missing required information (one piece at a time)
- Only provide solutions after you have complete diagnostic details
- Keep responses under 2-3 sentences unless providing step-by-step solutions

## Crisis Categories You Handle
- **Authentication Issues**: Login problems, API key errors, permission failures
- **Deployment Failures**: Build errors, hosting issues, environment problems
- **Database Problems**: Connection errors, data corruption, migration issues
- **API Integration**: Webhook failures, rate limiting, authentication errors
- **Performance Issues**: Slow loading, memory leaks, optimization problems
- **Platform-Specific**: Platform downtime, feature changes, compatibility issues

Remember: Your first priority is gathering complete diagnostic information. Only provide solutions after you have all the required details.`;

export interface AgentMessage {
  id: string;
  content: string;
  sender: "user" | "agent";
  timestamp: Date;
}

export interface ChatSession {
  sessionId: string;
  messages: AgentMessage[];
  createdAt: Date;
  lastActivity: Date;
}

type GrokMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

// In-memory storage for chat sessions (in production, use a database)
const chatSessions = new Map<string, ChatSession>();

export class AIRecoveryAgent {
  private conversationHistory: GrokMessage[] = [];
  private currentSessionId: string | null = null;

  constructor() {
    // Check if API key is available (either from env or use the hardcoded one as fallback)
    if (!process.env.XAI_API_KEY && !this.getApiKey()) {
      throw new Error("XAI_API_KEY environment variable is not set");
    }
  }

  private getApiKey(): string {
    // Try environment variable first, then fallback to hardcoded key
    return process.env.XAI_API_KEY || "";
  }

  // Session management methods
  public createSession(sessionId: string): ChatSession {
    const session: ChatSession = {
      sessionId,
      messages: [
        {
          id: "1",
          content:
            "👋 Hi! I'm your AI Recovery Agent, trained on all of Extensa's crisis management protocols. I can help diagnose issues with your AI-generated app across any platform.\n\nTell me about the problem you're experiencing, and I'll provide step-by-step guidance to get your project back on track.",
          sender: "agent",
          timestamp: new Date(),
        },
      ],
      createdAt: new Date(),
      lastActivity: new Date(),
    };

    chatSessions.set(sessionId, session);
    this.currentSessionId = sessionId;
    this.conversationHistory = [];
    return session;
  }

  public loadSession(sessionId: string): ChatSession | null {
    const session = chatSessions.get(sessionId);
    if (session) {
      this.currentSessionId = sessionId;
      // Rebuild conversation history from stored messages
      this.conversationHistory = session.messages
        .filter((msg) => msg.id !== "1") // Skip the welcome message
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.content,
        }));
      session.lastActivity = new Date();
      return session;
    }
    return null;
  }

  public saveSession(): void {
    if (!this.currentSessionId) return;

    const session = chatSessions.get(this.currentSessionId);
    if (session) {
      session.lastActivity = new Date();
      chatSessions.set(this.currentSessionId, session);
    }
  }

  public resetSession(sessionId: string): ChatSession {
    return this.createSession(sessionId);
  }

  public getSession(sessionId: string): ChatSession | null {
    return chatSessions.get(sessionId) || null;
  }

  public deleteSession(sessionId: string): boolean {
    const deleted = chatSessions.delete(sessionId);
    if (this.currentSessionId === sessionId) {
      this.currentSessionId = null;
      this.conversationHistory = [];
    }
    return deleted;
  }

  public getAllSessions(): ChatSession[] {
    return Array.from(chatSessions.values());
  }

  private async generateResponse(userMessage: string): Promise<string> {
    try {
      // Build the message history for Grok
      const messages: GrokMessage[] = [
        { role: "system", content: CRISIS_MANAGEMENT_PROMPT },
        ...this.conversationHistory,
        { role: "user", content: userMessage },
      ];

      const response = await fetch(XAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getApiKey()}`,
        },
        body: JSON.stringify({
          messages,
          model: "grok-3",
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`xAI API error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      const aiContent =
        data.choices?.[0]?.message?.content ||
        "Sorry, I could not generate a response.";

      // Update conversation history (keep last 10 exchanges)
      this.conversationHistory.push(
        { role: "user", content: userMessage },
        { role: "assistant", content: aiContent }
      );
      if (this.conversationHistory.length > 20) {
        this.conversationHistory = this.conversationHistory.slice(-20);
      }

      return aiContent;
    } catch (error) {
      console.error("Error generating AI response:", error);
      if (error instanceof Error) {
        if (error.message.includes("XAI_API_KEY")) {
          throw new Error(
            "API key not configured. Please set XAI_API_KEY environment variable."
          );
        }
        if (error.message.includes("401") || error.message.includes("403")) {
          throw new Error("Invalid API key. Please check your xAI API key.");
        }
        if (error.message.includes("404")) {
          throw new Error(
            "API endpoint not found. Please check your xAI configuration."
          );
        }
        return error.message;
      }
      throw new Error("Failed to generate response. Please try again.");
    }
  }

  public async processMessage(
    userMessage: string,
    sessionId?: string
  ): Promise<{ response: string; session: ChatSession }> {
    // Handle session management
    if (sessionId && sessionId !== this.currentSessionId) {
      const existingSession = this.loadSession(sessionId);
      if (!existingSession) {
        this.createSession(sessionId);
      }
    } else if (!this.currentSessionId) {
      // Create a new session if none exists
      const newSessionId = sessionId || `session_${Date.now()}`;
      this.createSession(newSessionId);
    }

    // Generate AI response
    const response = await this.generateResponse(userMessage);

    // Add messages to session
    const session = chatSessions.get(this.currentSessionId!)!;

    // Add user message
    const userMsg: AgentMessage = {
      id: Date.now().toString(),
      content: userMessage,
      sender: "user",
      timestamp: new Date(),
    };

    // Add AI response
    const aiMsg: AgentMessage = {
      id: (Date.now() + 1).toString(),
      content: response,
      sender: "agent",
      timestamp: new Date(),
    };

    session.messages.push(userMsg, aiMsg);
    session.lastActivity = new Date();

    return { response, session };
  }

  public resetConversation(): void {
    this.conversationHistory = [];
  }

  public getConversationHistory(): GrokMessage[] {
    return [...this.conversationHistory];
  }
}

// Create a singleton instance
let agentInstance: AIRecoveryAgent | null = null;

export function getAIRecoveryAgent(): AIRecoveryAgent {
  if (!agentInstance) {
    agentInstance = new AIRecoveryAgent();
  }
  return agentInstance;
}

// API route handler for the agent
export async function handleAgentRequest(
  userMessage: string,
  sessionId?: string
): Promise<{ response: string; session: ChatSession }> {
  const agent = getAIRecoveryAgent();
  return await agent.processMessage(userMessage, sessionId);
}
