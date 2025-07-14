'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, Shield, Clock, FileText, Brain, CreditCard, Lock, Calendar, Users, Target } from 'lucide-react';

export default function BookEmergencyRescue() {
  const [selectedUrgency, setSelectedUrgency] = useState<'standard' | 'rush'>('standard');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const standardPrice = 2000;
  const rushPrice = 3500;
  const currentPrice = selectedUrgency === 'rush' ? rushPrice : standardPrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <Link
            href="/secretroute/rescue-assessment"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Assessment Details
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <AlertTriangle className="w-5 h-5" />
              Emergency Booking
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Emergency Project Rescue Assessment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Secure your professional assessment and start saving your project today.
            </p>
          </div>
        </div>

        {/* Urgency Selection */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Select Your Timeline
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`cursor-pointer rounded-xl p-6 border-2 transition-all ${selectedUrgency === 'standard'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                }`}
              onClick={() => setSelectedUrgency('standard')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedUrgency === 'standard' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}>
                  {selectedUrgency === 'standard' && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Standard Assessment</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>3-5 business days delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>Complete diagnostic report</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Brain className="w-4 h-4" />
                  <span>Includes AI Recovery Agent access</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-4">
                  $2,000 <span className="text-sm font-normal text-gray-500">AUD</span>
                </div>
              </div>
            </div>

            <div
              className={`cursor-pointer rounded-xl p-6 border-2 transition-all relative ${selectedUrgency === 'rush'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
                }`}
              onClick={() => setSelectedUrgency('rush')}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  URGENT
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedUrgency === 'rush' ? 'border-red-500 bg-red-500' : 'border-gray-300'
                  }`}>
                  {selectedUrgency === 'rush' && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Rush Assessment</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>24-48 hours delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>Priority diagnostic report</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Brain className="w-4 h-4" />
                  <span>Immediate AI Recovery Agent access</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-4">
                  $3,500 <span className="text-sm font-normal text-gray-500">AUD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get Summary */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Your Emergency Assessment Includes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Personal strategy call</strong> to discuss your project and priorities</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Complete codebase forensic analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Professional diagnostic report (stakeholder-ready)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Strategic recovery roadmap with timelines</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">"Keep, Fix, or Kill" assessment for each component</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Risk assessment and prevention strategies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Implementation timeline with milestones</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>BONUS:</strong> AI Recovery Agent (30-day access)</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-700">
                  <strong>Included Strategy Call:</strong> We'll schedule a face-to-face video call to discuss your project context, business requirements, and specific concerns before beginning the technical analysis. This ensures the assessment is perfectly targeted to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Process */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Your Assessment Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Secure Payment</h3>
              <p className="text-sm text-gray-600">Pay securely via Stripe. Your assessment begins immediately after payment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Strategy Call</h3>
              <p className="text-sm text-gray-600">Face-to-face video call to understand your project context and business priorities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Secure Analysis</h3>
              <p className="text-sm text-gray-600">Complete forensic analysis of your codebase with full confidentiality (NDA included).</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Report Delivery</h3>
              <p className="text-sm text-gray-600">Receive your comprehensive assessment report and strategic recovery roadmap.</p>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Complete Your Emergency Assessment Booking
            </h2>
            <p className="text-gray-300">
              Your project rescue begins immediately after payment confirmation.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white/10 rounded-xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">
                {selectedUrgency === 'rush' ? 'Rush Assessment' : 'Standard Assessment'}
              </span>
              <span className="text-2xl font-bold">
                ${currentPrice.toLocaleString()} AUD
              </span>
            </div>
            <div className="text-sm text-gray-300 space-y-1">
              <div>• Personal strategy call to discuss your project</div>
              <div>• Complete forensic analysis</div>
              <div>• Professional diagnostic report</div>
              <div>• Strategic recovery roadmap</div>
              <div>• AI Recovery Agent access (bonus)</div>
              <div>• {selectedUrgency === 'rush' ? '24-48 hour' : '3-5 business day'} delivery</div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <button
              onClick={() => setShowPaymentForm(true)}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg text-lg"
            >
              <Lock className="w-6 h-6" />
              Pay ${currentPrice.toLocaleString()} & Start Assessment
              <CreditCard className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>NDA Available</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-lg mx-auto">
              By proceeding with payment, you agree to our Terms of Service. Payment is required upfront to secure your assessment slot and ensure serious commitment to the rescue process.
            </p>
          </div>
        </div>

        {/* Payment Form Modal/Section */}
        {showPaymentForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Complete Payment - ${currentPrice.toLocaleString()} AUD
              </h3>

              {/* This is where you'd integrate Stripe or your payment processor */}
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Payment Integration:</strong> Connect your Stripe, PayPal, or preferred payment processor here.
                    The payment should process the ${currentPrice.toLocaleString()} AUD amount and trigger an email with next steps.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPaymentForm(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Process Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Signals */}
        {/* <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Trusted by 50+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available 7 Days/Week</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}