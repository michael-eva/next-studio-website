'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Download, Search, ArrowRight } from 'lucide-react';
import { EnhancedFrameworkSteps, EnhancedTroubleshootingTips, Step0QuickChecks } from '../../components/TroubleshootingGuideData';
import TroubleshootingGuide from './components/TroubleshootingGuide';

const PremiumDebugGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <Star className="w-5 h-5" />
              Premium Debug Guide
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete No-Code AI App Troubleshooting System
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access the full framework and advanced troubleshooting tips to debug any no-code AI app systematically and efficiently.
            </p>
          </div>
        </div>

        {/* Premium Framework Section */}
        <div className="mb-12">
          <div className="bg-blue-100 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              8-Step Diagnostic Framework
            </h2>
            <p className="text-gray-700">
              Our proven methodology for systematically identifying and resolving issues in AI-generated apps.
            </p>
          </div>
          {/* <div className="bg-blue-100 rounded-2xl p-6 mb-6"> */}
          <Step0QuickChecks autoShow={false} />
          {/* </div> */}
          <EnhancedFrameworkSteps showAll={true} autoShowQuickChecks={false} />
        </div>

        {/* Platform-Specific Troubleshooting Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" />
                Platform-Specific Solutions
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Select Your Platform for Targeted Troubleshooting
            </h2>
            <p className="text-gray-700 mb-4">
              Choose your no-code platform below to access the most common issues and proven solutions specific to your development environment.
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

        {/* General Troubleshooting Guide */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Search className="w-4 h-4" />
                General Troubleshooting
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Didn't Find Your Issue? Try Our General Guide
            </h2>
            <p className="text-gray-700">
              If you didn't find what you were looking for in the platform-specific guides above, here's a comprehensive general troubleshooting guide that could help you debug your issue across any no-code platform.
            </p>
          </div>
          <EnhancedTroubleshootingTips />
        </div>

        {/* Download Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Debug Like a Pro?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Interact with Extensa GPT to get your questions answered.
          </p>
          <button
            onClick={() => alert('Coming soon!')}
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5" />
            Take me to Extensa GPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumDebugGuidePage;
