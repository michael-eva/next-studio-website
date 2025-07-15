'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function PaymentCancelled() {
  const [loading, setLoading] = useState(false);
  const handleBuyAIAgent = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cancelUrl: window.location.href // Pass current page URL as cancel URL
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Failed to start checkout. Please try again.');
      }
    } catch (err) {
      alert('Error connecting to payment gateway.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex">
      <div className="max-w-md mx-auto text-center p-8">
        <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Your payment was cancelled. No charges were made to your account.
        </p>
        <div className="space-y-4">
          <button
            onClick={handleBuyAIAgent}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Redirecting...' : 'Try Again'}
          </button>
          <Link
            href="/extensa-offer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 