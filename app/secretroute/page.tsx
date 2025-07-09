'use client'
import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight, CheckCircle, Users, Clock, Zap, Lock, Star } from 'lucide-react';
import { EnhancedFrameworkSteps, EnhancedTroubleshootingTips } from '../components/TroubleshootingGuideData';

const DebugGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Debug Your No-Code AI App with Ease
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            You're probably here because you're stuck and don't know where to turn. Our troubleshooting guides provide practical, step-by-step tips to debug your no-code AI-generated application and pinpoint exactly where the issue is coming from.
          </p>
        </div>

        {/* Why Choose Our Guides Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Why Choose Our Guides?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Solutions</h3>
              <p className="text-gray-600">Easy-to-follow instructions tailored for no-code platforms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Time</h3>
              <p className="text-gray-600">Quickly identify and fix errors without endless guesswork.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Specific</h3>
              <p className="text-gray-600">Designed for the unique challenges of AI-generated apps.</p>
            </div>
          </div>
        </div>

        {/* Free Universal Troubleshooting Tips Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 mb-12 text-white">
          <h2 className="text-3xl font-semibold mb-4">
            Free Universal Troubleshooting Tips for Any AI App Builder
          </h2>
          <p className="text-blue-100 mb-6 text-lg leading-relaxed">
            Not sure where to start? Our free guide covers universal troubleshooting tips that work across <em>any</em> AI app builder. From diagnosing common glitches to optimizing your build process, these tips give you a solid foundation to tackle issues fast.
          </p>
          <Link
            href="/secretroute/debug-guide"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            Download Free Guide Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Preview of Premium Content - Framework */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl"></div>
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Premium Content
            </div>
          </div>
          <div className="relative">
            <EnhancedFrameworkSteps />
            {/* Overlay for paid content */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent rounded-2xl flex items-end justify-center pb-8">
              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
                  <Lock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Complete Framework Access
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get the full 8-step diagnostic framework with detailed examples and actionable steps.
                  </p>
                  <Link 
                  href="/secretroute/premium"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
                  >
                  Unlock Framework
                  <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview of Premium Content - Troubleshooting Tips */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl"></div>
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Premium Content
            </div>
          </div>
          <div className="relative">
            {/* Overlay for paid content */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent rounded-2xl flex items-end justify-center pb-8">
              <div className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
                  <Lock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Advanced Troubleshooting Tips
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access all 10 universal troubleshooting tips with detailed explanations and visual guides.
                  </p>
                  <Link 
                  href="/secretroute/premium"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                  Unlock Tips
                  <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            What's Included?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-lg">Common error breakdowns and fixes.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-lg">Tips to optimize your app's performance.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-lg">Access to our expert support community.</span>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get unstuck today!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Grab our troubleshooting guides and build your app with confidence.
          </p>
          <Link
            href="/secretroute/debug-guide"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            <Download className="w-5 h-5" />
            Access Debug Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DebugGuidePage;