'use client'
import React, { useState } from 'react';
import { EnhancedTroubleshootingTips, EnhancedFrameworkSteps, Step0QuickChecks } from '@/app/components/TroubleshootingGuideData';
import TroubleshootingGuide from '../premium/components/TroubleshootingGuide';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, ArrowRight, Users, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CrisisManagementSystem() {
  const router = useRouter();
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <AlertTriangle className="w-5 h-5" />
              Emergency Protocol
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Is Your AI App Completely Broken?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Take a deep breath. You're not alone, and this isn't your fault. Most AI app failures have simple causes that we can fix together.
            </p>
            
            {/* Emotional validation section */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-3xl mx-auto mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">We Know Exactly How You Feel Right Now</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-800">
                <div className="space-y-2">
                  <p>• "My demo is tomorrow and nothing works"</p>
                  <p>• "I've wasted weeks on this stupid app"</p>
                  <p>• "The AI just keeps breaking things"</p>
                </div>
                <div className="space-y-2">
                  <p>• "My team thinks I'm incompetent"</p>
                  <p>• "I should have hired a real developer"</p>
                  <p>• "Maybe I'm just not technical enough"</p>
                </div>
              </div>
              <p className="text-amber-900 font-medium mt-4">
                👥 We've heard these exact words from 500+ founders. The good news? Most of their "disasters" were fixed in under an hour.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 font-medium">
                ⏱️ Quick reality check: 80% of "broken" AI apps can be fixed in under 30 minutes with the right approach.
              </p>
            </div>
          </div>
        </div>

        {/* START HERE Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-xl font-bold mb-6">
              START HERE
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              First Time Here? Follow This Exact Path
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mb-3">1</div>
                    <p className="font-semibold text-gray-900 mb-2">Try Quick Sanity Checks</p>
                    <p className="text-sm text-gray-600">These solve 80% of issues in 10 minutes</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-3">2</div>
                    <p className="font-semibold text-gray-900 mb-2">Still Broken? Use Our System</p>
                    <p className="text-sm text-gray-600">Complete 8-step debugging framework</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl mb-3">3</div>
                    <p className="font-semibold text-gray-900 mb-2">Need Expert Help?</p>
                    <p className="text-sm text-gray-600">Professional rescue assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Non-Technical Founders */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wait, I'm Not Technical - Can I Actually Do This?</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              <strong>Yes, absolutely.</strong> This guide was specifically designed for founders and business people, not developers. You don't need to know how to code.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">What You DON'T Need:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Programming or coding experience</li>
                  <li>• Understanding of databases or servers</li>
                  <li>• Technical background or CS degree</li>
                  <li>• Knowledge of APIs or webhooks</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">What You DO Need:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Ability to click buttons and follow steps</li>
                  <li>• Basic computer skills (like using email)</li>
                  <li>• 30-60 minutes of focused time</li>
                  <li>• Willingness to try simple solutions first</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-100 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-purple-800 font-medium text-sm">
                💼 Think of this like troubleshooting your printer or WiFi router. You don't need to be an engineer - you just need to follow the steps in the right order.
              </p>
            </div>
          </div>
        </div>

        {/* How This Works Section with Social Proof */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why This System Works</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We've helped hundreds of founders rescue failing AI projects. This system works because it follows the exact troubleshooting sequence that experienced developers use.
            </p>
          </div>

          {/* Success Stories */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-green-600 font-bold text-2xl mb-2">47 minutes</div>
              <p className="text-sm text-gray-600 mb-3">Sarah's "completely broken" e-commerce app</p>
              <p className="text-xs text-gray-500">"I was ready to start over from scratch. Turns out it was just a caching issue."</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-green-600 font-bold text-2xl mb-2">1.5 hours</div>
              <p className="text-sm text-gray-600 mb-3">Mike's SaaS dashboard "disaster"</p>
              <p className="text-xs text-gray-500">"The whole team thought we'd have to rebuild. It was actually just API permissions."</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-green-600 font-bold text-2xl mb-2">23 minutes</div>
              <p className="text-sm text-gray-600 mb-3">Lisa's "unfixable" mobile app</p>
              <p className="text-xs text-gray-500">"I almost fired our whole team. Glad I found this guide first."</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="grid grid-cols-3 gap-8 mb-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Rescued</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">87%</div>
                <div className="text-sm text-gray-600">Fixed in Under 2 Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                <div className="text-sm text-gray-600">in Projects Saved</div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> If you're still stuck after working through this entire system, your project likely has deeper structural issues that require professional codebase analysis.
              <Link href="/extensa-offer/rescue-assessment" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                Learn about our Emergency Project Rescue →
              </Link>
            </p>
          </div>
        </div>

        {/* Step 0 - Emergency Quick Checks */}
        <div className="mb-12">
          <div className="bg-green-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Step 1: The 10-Minute Miracle Fixes
            </h2>
            <p className="text-gray-700 mb-3">
              These simple actions fix 80% of "broken" AI apps. They're like turning your computer off and on again, but specifically for AI app platforms.
            </p>
            <div className="bg-white rounded-lg p-3 inline-block">
              <p className="text-green-800 font-medium text-sm">
                ✓ Success rate: 8 out of 10 projects work after trying these
              </p>
            </div>
          </div>
          <Step0QuickChecks autoShow={false} />
        </div>

        {/* 8-Step Crisis Management Framework */}
        <div className="mb-12">
          <div className="bg-blue-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Step 2: Still Broken? Use Our Systematic Approach
            </h2>
            <p className="text-gray-700 mb-3">
              If the quick fixes didn't work, don't panic. This means your issue is more complex, but still totally fixable. Our 8-step system will find the exact problem and show you how to fix it.
            </p>
            <div className="bg-white rounded-lg p-3 inline-block">
              <p className="text-blue-800 font-medium text-sm">
                💡 This process typically takes 30-60 minutes but saves days of random troubleshooting
              </p>
            </div>
          </div>
          <EnhancedFrameworkSteps showAll={true} autoShowQuickChecks={false} />
        </div>

        {/* Universal Recovery Protocols */}
        <div className="mb-12">
          <div className="bg-purple-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Bonus: Universal Recovery Techniques
            </h2>
            <p className="text-gray-700 mb-3">
              These are the tried-and-true techniques that work across all AI platforms. Think of them as the "general rules" that apply whether you're using Bolt, Bubble, Lovable, or any other platform.
            </p>
            <div className="bg-white rounded-lg p-3 inline-block">
              <p className="text-purple-800 font-medium text-sm">
                🛠️ These techniques prevent 90% of future problems once you know them
              </p>
            </div>
          </div>
          <EnhancedTroubleshootingTips />
        </div>

        {/* Platform-Specific Solutions */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Step 3: Platform-Specific Solutions
            </h2>
            <p className="text-gray-700 mb-3">
              Every AI platform (Bolt, Bubble, Lovable, etc.) has its own quirks and common problems. Here you'll find specific solutions for the most frequent issues on each platform.
            </p>
            <div className="bg-white rounded-lg p-3 inline-block">
              <p className="text-orange-800 font-medium text-sm">
                📋 Over 50 documented solutions for platform-specific problems
              </p>
            </div>
          </div>
          <TroubleshootingGuide />
        </div>

        {/* Simple Next Steps */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Fix Your App?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Most people see results within the first 30 minutes. Here's what typically happens:
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <span className="font-medium">Try Step 1 (Quick Fixes)</span>
                    </div>
                    <span className="text-green-600 font-medium">80% stop here ✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <span className="font-medium">Use Step 2 (Systematic Approach)</span>
                    </div>
                    <span className="text-blue-600 font-medium">15% stop here ✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <span className="font-medium">Need Step 4 (Expert Help)</span>
                    </div>
                    <span className="text-red-600 font-medium">5% need this</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">
                    👆 Don't overthink it. Just start with Step 1 and work your way down until your app works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Still Need Help Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Step 4: Still Stuck? You Need Expert Help
          </h2>
          <p className="text-red-100 mb-6 text-lg leading-relaxed">
            If you've worked through our entire system and your project is still broken, don't worry - this just means your issue is complex and needs professional diagnosis. About 15% of projects fall into this category.
          </p>
          <div className="bg-red-800/30 rounded-lg p-4 mb-6">
            <p className="text-white font-semibold mb-2">Emergency Project Rescue Assessment</p>
            <p className="text-red-100 text-sm">We'll analyze your codebase, identify the root cause, and give you a clear roadmap to fix it</p>
          </div>
          <Link
            href="/extensa-offer/rescue-assessment"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-semibold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
          >
            Get Professional Help
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}