'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, ArrowRight, Shield, FileText, Clock, DollarSign, Users, Star, Zap, Target, Brain, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EmergencyRescueAssessment() {
  const router = useRouter();
  const [showFAQ, setShowFAQ] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleFAQ = (index: number) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How is this different from your free crisis management system?",
      answer: "The free system helps you fix issues yourself. This is professional codebase analysis for projects that are structurally broken. I personally review your code, identify what's salvageable, and create a strategic recovery plan."
    },
    {
      question: "What if my code is proprietary or confidential?",
      answer: "I sign NDAs and have strict confidentiality protocols. Your code and business information remain completely private. I can also work with sanitized versions of your codebase if needed."
    },
    {
      question: "How long does the assessment take?",
      answer: "Most assessments are completed within 3-5 business days. Rush assessments (24-48 hours) are available for critical situations at an additional fee."
    },
    {
      question: "What if you determine the project can't be saved?",
      answer: "I'll give you an honest assessment. If the project truly can't be salvaged, I'll explain why and provide recommendations for starting fresh with minimal loss."
    },
    {
      question: "Do you actually fix the issues or just tell me what's wrong?",
      answer: "This assessment provides diagnosis and strategic recommendations. Implementation services are available separately if you need hands-on fixing."
    },
    {
      question: "What platforms and technologies do you cover?",
      answer: "I specialize in AI-generated apps across all major platforms: Bolt.new, Lovable, Replit, Bubble, FlutterFlow, Adalo, Glide, and more. If you're unsure, just ask."
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <AlertTriangle className="w-5 h-5" />
              Emergency Intervention
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Project Rescue Assessment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              When your AI app project is beyond self-help, you need professional intervention. Get expert codebase analysis and a strategic recovery plan you can show stakeholders.
            </p>
          </div>
        </div>

        {/* Crisis Validation Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-red-900 mb-6 text-center">
            You're Here Because the Situation is Critical
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">You've tried our complete crisis management system</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">Your project is still broken or partially functional</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">Stakeholders are asking uncomfortable questions</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">You're out of time and ideas</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">The project has deeper structural problems</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">You need professional expertise to save your career</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">You need a report you can show your boss</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-red-800">The financial and reputational stakes are too high</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-center text-gray-800 font-medium">
              This is exactly what Emergency Project Rescue Assessment is designed for.
            </p>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Professional Forensic Analysis of Your Failed Project
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Codebase Analysis</h3>
                  <p className="text-gray-600">Deep technical review of your entire application architecture, identifying structural problems and security vulnerabilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"Keep, Fix, or Kill" Assessment</h3>
                  <p className="text-gray-600">Honest evaluation of what's salvageable, what needs fixing, and what should be scrapped and rebuilt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Diagnostic Report</h3>
                  <p className="text-gray-600">Comprehensive written report you can share with stakeholders, including technical findings and business impact analysis.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Recovery Roadmap</h3>
                  <p className="text-gray-600">Step-by-step plan to get your project back on track, with realistic timelines and resource requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment & Mitigation</h3>
                  <p className="text-gray-600">Identification of project risks and specific strategies to prevent future disasters.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Timeline</h3>
                  <p className="text-gray-600">Realistic project timeline with milestones you can commit to and stakeholder checkpoints.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            How the Emergency Assessment Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Secure Code Access</h3>
                <p className="text-gray-700">You provide secure access to your codebase (with NDA if needed). I can work with GitHub, exported code, or platform screenshots.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Forensic Analysis</h3>
                <p className="text-gray-700">I conduct a thorough technical review, testing functionality, examining architecture, and identifying root causes of failures.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Strategic Assessment</h3>
                <p className="text-gray-700">I evaluate business impact, assess recovery options, and develop a realistic plan that balances technical constraints with business needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Professional Report Delivery</h3>
                <p className="text-gray-700">You receive a comprehensive report with findings, recommendations, and recovery roadmap within 3-5 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl shadow-lg p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Choose Your Level of Intervention
            </h2>
            <p className="text-gray-300 text-lg">
              From AI-powered guidance to full professional rescue - we have the solution for your crisis level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* AI Agent Option */}
            <div className="bg-white/10 rounded-xl p-6 border border-blue-400">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Recovery Agent</h3>
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    <Brain className="w-4 h-4" />
                    24/7 AI Expert
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$197</div>
                  <div className="text-sm text-gray-300">AUD</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Custom AI agent trained on all our crisis management knowledge. Get instant, intelligent guidance for your specific situation.
              </p>
              <div className="space-y-2 text-gray-200 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>All Extensa recovery protocols and knowledge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Platform-specific troubleshooting for 7+ platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Instant diagnosis and step-by-step solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>24/7 availability for urgent issues</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>30-day access</span>
                </div>
              </div>
              <button
                onClick={handleBuyAIAgent}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Redirecting...' : 'Get AI Recovery Agent'}
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Perfect when you need intelligent guidance but can implement fixes yourself
              </p>
            </div>

            {/* Professional Assessment Option */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-red-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Critical
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Assessment</h3>
                  <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    Human Expert
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">$2,000</div>
                  <div className="text-sm text-gray-300">AUD</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Professional codebase analysis and strategic recovery plan. When your project is beyond AI help and you need human expertise.
              </p>
              <div className="space-y-2 text-gray-200 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Complete codebase forensic analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Professional diagnostic report (stakeholder-ready)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Strategic recovery roadmap with timelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Keep, Fix, or Kill assessment for each component</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Risk assessment and prevention strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>3-5 business day delivery (rush available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span><strong>BONUS:</strong> Includes AI Recovery Agent access</span>
                </div>
              </div>
              <Link
                href="/extensa-offer/book-rescue"
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Book Emergency Assessment
              </Link>
              <p className="text-xs text-gray-400 mt-2 text-center">
                For structural problems that require professional intervention
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg mb-4 inline-block">
              <p className="font-semibold">Compare this to:</p>
              <p className="text-sm">Months more delays • Blown budgets • Career damage • Project cancellation</p>
            </div>
          </div>
        </div>

        {/* Decision Helper Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Not Sure Which Option You Need?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Choose AI Recovery Agent if:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You can implement fixes yourself but need expert guidance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Your project has specific errors you need help diagnosing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You want 24/7 access to expert knowledge</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Budget is a consideration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>You have some technical capability</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Choose Emergency Assessment if:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Your project is structurally broken and beyond quick fixes</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You need a professional report for stakeholders</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Career or business reputation is at stake</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You've tried multiple solutions and nothing works</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>The project involves significant budget/resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-8 mb-12 text-white text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Stop the Bleeding. Save Your Project.
          </h2>
          <p className="text-red-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Every day you wait, your project gets harder to save and stakeholder confidence drops further. Choose your intervention level and get help now.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
            <button
              onClick={handleBuyAIAgent}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-60"
              disabled={loading}
            >
              <Brain className="w-5 h-5" />
              {loading ? 'Redirecting...' : 'Get AI Agent - $197'}
            </button>
            <Link
              href="/extensa-offer/book-rescue"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors border-2 border-white"
            >
              <AlertTriangle className="w-5 h-5" />
              Emergency Assessment - $2,000
            </Link>
          </div>
          <p className="text-red-200 text-sm">
            Secure payment • NDA available • Rush delivery options
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform ${showFAQ === index ? 'rotate-90' : ''}`} />
                </button>
                {showFAQ === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}