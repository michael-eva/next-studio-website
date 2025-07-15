'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Copy, ArrowRight, Brain, AlertTriangle, Clock } from 'lucide-react';

interface PaymentSuccessData {
  productType: string;
  email: string;
  sessionId: string;
  // AI Agent specific fields
  accessCode?: string;
  expiresAt?: string;
  // Emergency Assessment specific fields
  urgency?: string;
  delivery?: string;
  message?: string;
}

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentSuccessData | null>(null);
  const [copied, setCopied] = useState(false);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided');
      setLoading(false);
      return;
    }

    const processPayment = async () => {
      try {
        const response = await fetch('/api/stripe/payment-success', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        if (!response.ok) {
          throw new Error('Failed to process payment');
        }

        const data = await response.json();
        setPaymentData(data);

        // Save access code to localStorage for future use (only for AI Agent)
        if (data.productType === 'ai_agent_access' && data.accessCode && data.expiresAt) {
          localStorage.setItem('ai_agent_access_code', data.accessCode);
          localStorage.setItem('ai_agent_expires_at', data.expiresAt);
        }
      } catch (err) {
        setError('Failed to process your payment. Please contact support.');
        console.error('Payment processing error:', err);
      } finally {
        setLoading(false);
      }
    };

    processPayment();
  }, [sessionId]);

  const copyToClipboard = async () => {
    if (!paymentData?.accessCode) return;

    try {
      await navigator.clipboard.writeText(paymentData.accessCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Not Found</h1>
          <p className="text-gray-600 mb-6">We couldn't find your payment information.</p>
          <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 pb-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600">
            {paymentData.productType === 'ai_agent_access'
              ? 'Your AI Recovery Agent access has been activated'
              : 'Your Emergency Assessment has been booked'
            }
          </p>
        </div>

        {paymentData.productType === 'ai_agent_access' ? (
          /* AI Agent Access Code Card */
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="text-center mb-6">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Your Access Code
              </h2>
              <p className="text-gray-600 mb-4">
                Use this code to access the AI Recovery Agent for the next 30 days
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-900 text-sm">
                  <strong>Important:</strong> This access code will be emailed to {paymentData.email}.
                  We recommend copying the code or taking a screenshot for easy access.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <code className="text-2xl font-mono text-gray-900 font-bold">
                  {paymentData.accessCode}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-900 font-medium">Access Expires</p>
                  <p className="text-blue-700 text-sm">
                    {paymentData.expiresAt && new Date(paymentData.expiresAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/secretroute/ai-agent"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors text-lg"
            >
              <Brain className="w-5 h-5 inline mr-2" />
              Access AI Recovery Agent Now
            </Link>
          </div>
        ) : (
          /* Emergency Assessment Booking Card */
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="text-center mb-6">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Emergency Assessment Booked
              </h2>
              <p className="text-gray-600 mb-4">
                Your professional assessment and recovery roadmap is being prepared
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-900 text-sm">
                  <strong>Next Steps:</strong> We'll contact you at {paymentData.email} within 24 hours to schedule your strategy call.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Assessment Type:</span>
                  <span className="text-gray-900 font-semibold capitalize">{paymentData.urgency} Assessment</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Delivery Timeline:</span>
                  <span className="text-gray-900 font-semibold">{paymentData.delivery}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Contact Email:</span>
                  <span className="text-gray-900 font-semibold">{paymentData.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-900 font-medium">What Happens Next</p>
                  <p className="text-blue-700 text-sm">
                    We'll schedule your strategy call, conduct the forensic analysis, and deliver your comprehensive assessment report.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                {paymentData.message}
              </p>
              <Link
                href="/secretroute"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What's Next?
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Save your access code</p>
                <p className="text-gray-600 text-sm">Keep it handy - you'll need it each time you access the AI Agent</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Start troubleshooting</p>
                <p className="text-gray-600 text-sm">Describe your AI app issues to get instant, expert guidance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Get your project back on track</p>
                <p className="text-gray-600 text-sm">Follow the AI Agent's step-by-step solutions to fix your issues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">Important Notice</h4>
              <p className="text-yellow-800 text-sm">
                We don't save your chat history. If you switch to a different device or browser,
                your conversation will start fresh. Make sure to save any important information
                from your chat sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need help? Contact us at{' '}
            <a href="mailto:michael@extensa.studio" className="text-blue-600 hover:text-blue-800">
              support@extensa.studio
            </a>
          </p>
          {/* <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            Back to Home
          </Link> */}
        </div>
      </div>
    </div>
  );
} 