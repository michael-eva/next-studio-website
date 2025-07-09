'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Download } from 'lucide-react';
import { EnhancedFrameworkSteps } from '../../components/TroubleshootingGuideData';
import TroubleshootingGuide from './components/TroubleshootingGuide';

const PremiumDebugGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-8">
          <Link
            href="/secretroute"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Debug Guide
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
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" />
                Premium Framework
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              8-Step Diagnostic Framework
            </h2>
            <p className="text-gray-700">
              Our proven methodology for systematically identifying and resolving issues in AI-generated apps.
            </p>
          </div>
          <EnhancedFrameworkSteps />
        </div>

        {/* Universal Troubleshooting Tips & Platform-Specific Issues */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" />
                Complete Troubleshooting System
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Universal Tips + Platform-Specific Solutions
            </h2>
            <p className="text-gray-700">
              Start with universal troubleshooting tips, then dive into platform-specific issues and solutions.
            </p>
          </div>
          <TroubleshootingGuide />
        </div>



        {/* Additional Resources Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            What You Get with Premium Access
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Regular updates with new platform issues</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Debug Like a Pro?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Bookmark this page for quick access to your premium troubleshooting resources.
          </p>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            Print/Save Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumDebugGuidePage;
