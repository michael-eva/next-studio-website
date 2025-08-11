'use client'
import React, { useState } from 'react';
import { EnhancedTroubleshootingTips, EnhancedFrameworkSteps, Step0QuickChecks } from '@/app/components/TroubleshootingGuideData';
import TroubleshootingGuide from '../premium/components/TroubleshootingGuide';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, ArrowRight, Users, Star, Play, ChevronDown, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CrisisManagementSystem() {
  const router = useRouter();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Emergency Debug Protocol
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              AI App Debugging System
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Systematic approach to diagnosing and fixing broken AI applications
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-8">
            <div className="text-center mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Introduction Video</h2>
              <p className="text-gray-600 text-sm">Overview of the debugging process and what to expect</p>
            </div>
            <div className="relative bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </div>
                <p className="text-gray-500 text-sm">Video placeholder</p>
                <p className="text-gray-400 text-xs mt-1">Introduction to the 8-step debugging system</p>
              </div>
            </div>
          </div>

          {/* Brief Intro */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">How This System Works</h2>
            <p className="text-gray-600 mb-4">
              This debugging system follows a systematic approach used by experienced developers. Work through each step in order - most issues are resolved within the first few steps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 text-lg">80%</div>
                <div className="text-gray-600 text-sm">Fixed in Step 1</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 text-lg">15%</div>
                <div className="text-gray-600 text-sm">Fixed in Steps 2-4</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 text-lg">5%</div>
                <div className="text-gray-600 text-sm">Need Expert Help</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional validation section - toned down */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-medium text-amber-800 mb-2">Common Frustrations We Hear</h3>
          <p className="text-sm text-amber-700">
            "Demo tomorrow, nothing works" • "Weeks wasted" • "AI keeps breaking things" • "Team losing confidence"
          </p>
          <p className="text-sm text-amber-800 font-medium mt-2">
            Reality: Most "disasters" are fixed within an hour using systematic troubleshooting.
          </p>
        </div>

        {/* Non-Technical Founders - streamlined */}
        <div className="bg-gray-100 rounded-lg p-4 mb-8">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Non-Technical? No Problem</h3>
          <p className="text-sm text-gray-600 mb-2">
            This system requires no coding knowledge - just basic computer skills and following step-by-step instructions.
          </p>
          <p className="text-sm text-gray-500">
            Think of it like troubleshooting WiFi: you don't need to be an engineer, just follow the steps in order.
          </p>
        </div>

        {/* Debugging Steps - Modular System */}
        <div className="space-y-4 mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Debugging System</h2>
          
          {/* Step 1: Quick Checks */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => toggleStep(1)}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  1
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Quick Sanity Checks</h3>
                  <p className="text-sm text-gray-600">10-minute fixes that solve 80% of issues</p>
                </div>
              </div>
              {expandedStep === 1 ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedStep === 1 && (
              <div className="px-4 sm:px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-green-800 font-medium text-sm">
                      ✓ Success rate: 8 out of 10 projects work after trying these
                    </p>
                  </div>
                  <Step0QuickChecks autoShow={false} />
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Systematic Approach */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => toggleStep(2)}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  2
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">8-Step Systematic Framework</h3>
                  <p className="text-sm text-gray-600">Comprehensive debugging process for complex issues</p>
                </div>
              </div>
              {expandedStep === 2 ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedStep === 2 && (
              <div className="px-4 sm:px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 font-medium text-sm">
                      💡 Typically takes 30-60 minutes but saves days of random troubleshooting
                    </p>
                  </div>
                  <EnhancedFrameworkSteps showAll={true} autoShowQuickChecks={false} />
                </div>
              </div>
            )}
          </div>

          {/* Step 3: Universal Recovery */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => toggleStep(3)}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  3
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Universal Recovery Techniques</h3>
                  <p className="text-sm text-gray-600">Cross-platform debugging methods and best practices</p>
                </div>
              </div>
              {expandedStep === 3 ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedStep === 3 && (
              <div className="px-4 sm:px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <div className="bg-purple-50 rounded-lg p-3 mb-4">
                    <p className="text-purple-800 font-medium text-sm">
                      🛠️ These techniques prevent 90% of future problems
                    </p>
                  </div>
                  <EnhancedTroubleshootingTips />
                </div>
              </div>
            )}
          </div>

          {/* Step 4: Platform-Specific */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => toggleStep(4)}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  4
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Platform-Specific Solutions</h3>
                  <p className="text-sm text-gray-600">Targeted fixes for Bolt, Bubble, Lovable, and other platforms</p>
                </div>
              </div>
              {expandedStep === 4 ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedStep === 4 && (
              <div className="px-4 sm:px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <div className="bg-orange-50 rounded-lg p-3 mb-4">
                    <p className="text-orange-800 font-medium text-sm">
                      📋 Over 50 documented solutions for platform-specific problems
                    </p>
                  </div>
                  <TroubleshootingGuide />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Success Stories - toned down */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Success Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 text-base">47 minutes</div>
              <p className="text-gray-600 text-sm">E-commerce app - caching issue</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 text-base">1.5 hours</div>
              <p className="text-gray-600 text-sm">SaaS dashboard - API permissions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 text-base">23 minutes</div>
              <p className="text-gray-600 text-sm">Mobile app - config error</p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-blue-50 rounded-lg p-5 mb-8">
          <h3 className="text-base font-medium text-gray-900 mb-3">Expected Resolution Flow</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              <span>Step 1 (Quick Checks)</span>
              <span className="text-green-600 font-medium">80% resolve here</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Steps 2-4 (Systematic)</span>
              <span className="text-blue-600 font-medium">15% resolve here</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Expert Help Needed</span>
              <span className="text-red-600 font-medium">5% need this</span>
            </div>
          </div>
        </div>

        {/* Still Need Help Section - toned down */}
        <div className="bg-red-100 rounded-lg border border-red-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Still Stuck After All Steps?
          </h3>
          <p className="text-gray-700 mb-4 text-sm">
            Complex issues requiring codebase analysis and professional diagnosis (affects ~15% of projects)
          </p>
          <Link
            href="/extensa-offer/rescue-assessment"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            Emergency Project Rescue
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}