'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Brain, AlertTriangle, CheckCircle, Copy, RefreshCw, MessageSquare, Zap, Clock, Users, Trash2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatSession {
  sessionId: string;
  messages: Message[];
  createdAt: Date;
  lastActivity: Date;
}

const STORAGE_KEY = 'ai_recovery_agent_sessions';
const CURRENT_SESSION_KEY = 'ai_recovery_agent_current_session';

export default function AIRecoveryAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your AI Recovery Agent, trained on all of Extensa's crisis management protocols. I can help diagnose issues with your AI-generated app across any platform.\n\nTell me about the problem you're experiencing, and I'll provide step-by-step guidance to get your project back on track.",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const [showSessionManager, setShowSessionManager] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize session on component mount
  useEffect(() => {
    initializeSession();
  }, []);

  const initializeSession = () => {
    try {
      // Check if there's a current session in localStorage
      const storedCurrentSession = localStorage.getItem(CURRENT_SESSION_KEY);

      if (storedCurrentSession) {
        const sessionId = JSON.parse(storedCurrentSession);
        loadSession(sessionId);
      } else {
        // Create a new session
        const newSessionId = `session_${Date.now()}`;
        setCurrentSessionId(newSessionId);
        localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(newSessionId));
        saveSessionToStorage(newSessionId, messages);
      }
    } catch (error) {
      console.error('Error initializing session:', error);
      // Fallback to new session
      const newSessionId = `session_${Date.now()}`;
      setCurrentSessionId(newSessionId);
      localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(newSessionId));
    }
  };

  const saveSessionToStorage = (sessionId: string, sessionMessages: Message[]) => {
    try {
      const sessions = getStoredSessions();
      const session: ChatSession = {
        sessionId,
        messages: sessionMessages,
        createdAt: new Date(),
        lastActivity: new Date()
      };

      sessions[sessionId] = session;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    } catch (error) {
      console.error('Error saving session to storage:', error);
    }
  };

  const getStoredSessions = (): Record<string, ChatSession> => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Error getting stored sessions:', error);
      return {};
    }
  };

  const loadSession = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/ai-agent?action=getSession&sessionId=${sessionId}`);

      if (response.ok) {
        const data = await response.json();
        const session = data.session;

        // Convert stored messages back to proper format
        const convertedMessages = session.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));

        setMessages(convertedMessages);
        setCurrentSessionId(sessionId);
        localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(sessionId));
      } else {
        // Session not found on server, create new one
        createNewSession();
      }
    } catch (error) {
      console.error('Error loading session:', error);
      createNewSession();
    }
  };

  const createNewSession = () => {
    const newSessionId = `session_${Date.now()}`;
    setCurrentSessionId(newSessionId);
    localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(newSessionId));
    setMessages([{
      id: '1',
      content: "👋 Hi! I'm your AI Recovery Agent, trained on all of Extensa's crisis management protocols. I can help diagnose issues with your AI-generated app across any platform.\n\nTell me about the problem you're experiencing, and I'll provide step-by-step guidance to get your project back on track.",
      sender: 'agent',
      timestamp: new Date()
    }]);
    saveSessionToStorage(newSessionId, messages);
  };

  const resetChat = async () => {
    if (!currentSessionId) return;

    try {
      const response = await fetch(`/api/ai-agent?action=resetSession&sessionId=${currentSessionId}`);

      if (response.ok) {
        const data = await response.json();
        const session = data.session;

        // Convert stored messages back to proper format
        const convertedMessages = session.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));

        setMessages(convertedMessages);
        saveSessionToStorage(currentSessionId, convertedMessages);
      } else {
        // Fallback to local reset
        createNewSession();
      }
    } catch (error) {
      console.error('Error resetting chat:', error);
      createNewSession();
    }
  };

  const deleteSession = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/ai-agent?action=deleteSession&sessionId=${sessionId}`);

      if (response.ok) {
        // Remove from localStorage
        const sessions = getStoredSessions();
        delete sessions[sessionId];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));

        // If this was the current session, create a new one
        if (sessionId === currentSessionId) {
          createNewSession();
        }
      }
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save messages to storage whenever they change
  useEffect(() => {
    if (currentSessionId && messages.length > 0) {
      saveSessionToStorage(currentSessionId, messages);
    }
  }, [messages, currentSessionId]);

  // Real AI response using LangChain agent
  const getAIResponse = async (userMessage: string): Promise<{ response: string; session: any }> => {
    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: currentSessionId
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error calling AI agent:', error);
      throw new Error('Failed to get AI response. Please try again.');
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await getAIResponse(inputValue);

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: result.response,
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm experiencing a temporary issue. Please try again in a moment, or if this persists, contact support for immediate assistance.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const quickPrompts = [
    "My app won't load",
    "Getting authentication errors",
    "Deployment keeps failing",
    "Database connection issues",
    "API integration problems"
  ];

  const getStoredSessionsList = (): ChatSession[] => {
    const sessions = getStoredSessions();
    return Object.values(sessions).sort((a, b) =>
      new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl w-full mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 transition-colors text-base sm:text-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Crisis Management
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-3 sm:p-6 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">AI Recovery Agent</h1>
                <p className="text-gray-600 text-xs sm:text-base">Emergency support for failing AI projects</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online
                </div>
                <button
                  onClick={() => setShowSessionManager(!showSessionManager)}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors px-2 sm:px-3 py-1 rounded-lg hover:bg-gray-100"
                >
                  <MessageSquare className="w-4 h-4" />
                  Sessions
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <Zap className="w-4 h-4" />
                <span>Instant Responses</span>
              </div>
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <CheckCircle className="w-4 h-4" />
                <span>Crisis Protocols</span>
              </div>
            </div>
          </div>
        </div>

        {/* Session Manager */}
        {showSessionManager && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-3 sm:p-6 mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Chat Sessions</h3>
              <button
                onClick={createNewSession}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors"
              >
                New Session
              </button>
            </div>
            <div className="space-y-1 sm:space-y-2 max-h-40 sm:max-h-60 overflow-y-auto">
              {getStoredSessionsList().map((session) => (
                <div
                  key={session.sessionId}
                  className={`flex items-center justify-between p-2 sm:p-3 rounded-lg border ${session.sessionId === currentSessionId
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200'
                    }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-xs sm:text-sm font-medium text-gray-900">
                        Session {session.sessionId.slice(-8)}
                      </span>
                      {session.sessionId === currentSessionId && (
                        <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-800 px-1.5 sm:px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      {session.messages.length} messages • Last active: {new Date(session.lastActivity).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    {session.sessionId !== currentSessionId && (
                      <button
                        onClick={() => loadSession(session.sessionId)}
                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                      >
                        Load
                      </button>
                    )}
                    <button
                      onClick={() => deleteSession(session.sessionId)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col h-[65vh] sm:h-[600px]">
          {/* Chat Header */}
          <div className="p-2 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Recovery Agent</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600">Trained on Extensa protocols</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors px-2 sm:px-3 py-1 rounded-lg border border-yellow-300 bg-yellow-50 hover:bg-yellow-100"
              >
                <RefreshCw className="w-4 h-4" />
                Reset Chat
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ${message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                    }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  <div className="flex items-center justify-between mt-1 sm:mt-2 gap-1 sm:gap-2">
                    <span
                      className={`text-[10px] sm:text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    {message.sender === 'agent' && (
                      <button
                        onClick={() => copyMessage(message.content)}
                        className="text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-[90%] sm:max-w-[80%]">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">Analyzing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div className="px-2 sm:px-4 py-1 sm:py-2 border-t border-gray-100">
              <p className="text-[10px] sm:text-xs text-gray-600 mb-1 sm:mb-2">Quick start prompts:</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(prompt)}
                    className="text-[10px] sm:text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-2 sm:p-4 border-t border-gray-200">
            <div className="flex gap-1 sm:gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your AI app issue..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2 text-center">
              AI agent trained on crisis management protocols • Always available for emergency support
            </p>
          </div>
        </div>

        {/* Support Options */}
        <div className="mt-4 sm:mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-3 sm:p-6 border border-red-200">
          <div className="flex items-start gap-2 sm:gap-4">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1 sm:mb-2 text-base sm:text-lg">Need Human Expert Help?</h3>
              <p className="text-red-800 text-xs sm:text-sm mb-2 sm:mb-4">
                If the AI agent can't solve your crisis, or you need professional codebase analysis,
                our Emergency Project Rescue Assessment provides human expert intervention.
              </p>
              <Link
                href="/secretroute/rescue-assessment"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors"
              >
                <Users className="w-4 h-4" />
                Get Human Expert Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}