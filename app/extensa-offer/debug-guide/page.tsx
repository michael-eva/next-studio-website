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
              Complete AI App Crisis Management System
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Everything we know about rescuing failing AI projects. The complete emergency protocol that turns disasters into successes. No holding back - this is the full system.
            </p>
          </div>
        </div>

        {/* Crisis Warning Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-2">Emergency Triage Protocol</h2>
              <p className="text-red-800 mb-4">
                If your project is critical and you need immediate help, start with Step 0 below. If that doesn't work, proceed through the 8-step framework. If you're still stuck after trying everything here, you need professional intervention.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Still broken after trying this system?</strong> Your project has deeper structural problems that require expert codebase analysis.
                  <Link href="/extensa-offer/rescue-assessment" className="text-red-600 hover:text-red-700 font-medium ml-1">
                    Learn about Emergency Project Rescue Assessment →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 0 - Emergency Quick Checks */}
        <div className="mb-12">
          <div className="bg-red-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Step 0: Emergency Quick Checks (Try These First)
            </h2>
            <p className="text-gray-700">
              Before diving deep, try these quick fixes. They solve about 40% of issues and take less than 10 minutes.
            </p>
          </div>
          <Step0QuickChecks autoShow={true} />
        </div>

        {/* 8-Step Crisis Management Framework */}
        <div className="mb-12">
          <div className="bg-blue-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Complete 8-Step Crisis Management Framework
            </h2>
            <p className="text-gray-700">
              Our proven methodology for systematically identifying and resolving issues in AI-generated apps. Follow these steps in order for maximum effectiveness.
            </p>
          </div>
          <EnhancedFrameworkSteps showAll={true} autoShowQuickChecks={false} />
        </div>

        {/* Universal Recovery Protocols */}
        <div className="mb-12">
          <div className="bg-green-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Universal Recovery Protocols
            </h2>
            <p className="text-gray-700">
              These emergency protocols work across any AI app platform. Use these when platform-specific solutions don't work.
            </p>
          </div>
          <EnhancedTroubleshootingTips />
        </div>

        {/* Platform-Specific Solutions */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" />
                Platform-Specific Emergency Solutions
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Critical Fixes by Platform (50+ Common Disasters)
            </h2>
            <p className="text-gray-700 mb-4">
              The most common disasters for each platform and their proven solutions. These are the issues that break projects and how to fix them fast.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Bolt.new</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Lovable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Replit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Bubble</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Adalo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>FlutterFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Glide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span>50+ Common Issues</span>
              </div>
            </div>
          </div>
          <TroubleshootingGuide />
        </div>

        {/* Success Metrics Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            How You'll Know It's Working
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Immediate Relief</h3>
              <p className="text-sm text-gray-600">Your app starts working within hours, not weeks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stakeholder Confidence</h3>
              <p className="text-sm text-gray-600">You can finally give positive updates in meetings</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Project Salvation</h3>
              <p className="text-sm text-gray-600">From disaster to demo-ready success story</p>
            </div>
          </div>
        </div>

        {/* Still Need Help Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Tried Everything and Still Broken?
          </h2>
          <p className="text-red-100 mb-6 text-lg leading-relaxed">
            If you've worked through this entire crisis management system and your project is still failing, you're dealing with deeper structural problems that require professional codebase analysis.
          </p>
          <div className="bg-red-800/30 rounded-lg p-4 mb-6">
            <p className="text-white font-semibold mb-2">Emergency Project Rescue Assessment</p>
            <p className="text-red-100 text-sm">Complete codebase analysis • Professional diagnostic report • Strategic recovery roadmap</p>
          </div>
          <Link
            href="/extensa-offer/rescue-assessment"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-semibold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
            Learn About Professional Rescue
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}