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

const CURRENT_SESSION_KEY = 'ai_recovery_agent_current_session';

export default function AIRecoveryAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm here to help with your AI project issues. What's going wrong?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const [showClearDialog, setShowClearDialog] = useState(false);
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
      const sessionData = {
        sessionId,
        messages: sessionMessages,
        createdAt: new Date(),
        lastActivity: new Date()
      };
      localStorage.setItem(`session_${sessionId}`, JSON.stringify(sessionData));
    } catch (error) {
      console.error('Error saving session to storage:', error);
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
      content: "Hi! I'm here to help with your AI project issues. What's going wrong?",
      sender: 'agent',
      timestamp: new Date()
    }]);
    saveSessionToStorage(newSessionId, messages);
  };

  const clearChat = async () => {
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
      console.error('Error clearing chat:', error);
      createNewSession();
    }
    setShowClearDialog(false);
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
        content: "I'm having trouble right now. Please try again in a moment.",
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
    "App won't load",
    "Authentication errors",
    "Deployment failing",
    "Database issues",
    "API problems"
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Fixed Header with Back Button */}
      <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      {/* Fixed Title Header */}
      <div className="flex-shrink-0 px-4 py-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">AI Recovery Agent</h1>
            <p className="text-gray-600">Get help with your AI project issues</p>
          </div>
        </div>
      </div>

      {/* Main Content Container - Takes remaining space */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-2xl mx-auto w-full h-full flex flex-col px-4 overflow-hidden">
          {/* Chat Interface - Takes all remaining space */}
          <div className="bg-white rounded-lg shadow-sm border flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Chat Header - Fixed */}
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recovery Agent</h3>
                    <p className="text-xs text-gray-600">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowClearDialog(true)}
                  className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages - Scrollable within the chat container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                      }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className="flex items-center justify-between mt-2 gap-2">
                      <span
                        className={`text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
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
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[85%]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      <span className="text-sm text-gray-600 ml-2">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts - Fixed */}
            {messages.length === 1 && (
              <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
                <p className="text-xs text-gray-600 mb-2">Quick start:</p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(prompt)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input - Fixed */}
            <div className="p-4 border-t border-gray-200 flex-shrink-0">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your issue..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Support Option at Bottom */}
      <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span className="font-semibold text-orange-900 text-sm">Need human help?</span>
              </div>
              <Link
                href="/secretroute/rescue-assessment"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-3 py-1.5 rounded text-xs transition-colors flex-shrink-0"
              >
                <Users className="w-3 h-3" />
                <span className="hidden sm:inline">Get Expert Help</span>
                <span className="sm:hidden">Help</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Chat Confirmation Dialog */}
      {showClearDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Clear Chat</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to clear your chat? All messages will be permanently deleted and you'll start a new conversation.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={clearChat}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Clear Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}