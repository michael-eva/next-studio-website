'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Download, ArrowRight, CheckCircle, Users, Clock, Zap, Lock, Star, X } from 'lucide-react';
import { EnhancedFrameworkSteps, EnhancedTroubleshootingTips } from '../components/TroubleshootingGuideData';

const DebugGuidePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Promised You an App in Days. 3 Months Later, It's Still Broken. Now What?
          </h1>
          <p className="md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            You've tried everything. Regenerating the code 47 times. Pleading with ChatGPT like it's a customer service rep. Even Googling 'how to make AI app actually work' at 2am. Your launch is approaching, your budget is blown, and your app is still a beautiful disaster. Here's the proven framework that turns AI app disasters into demo-ready successes – no robot begging required.
          </p>
        </div>

        {/* Diagnostic "Oh Shit" Moment Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-sm border border-red-200 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            How to Tell If Your AI App Project is Already Dead
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              <strong>Check these warning signs. If you have 3 or more, you're in crisis mode:</strong>
            </p>
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">Your app worked in the demo but breaks with real data</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">You keep getting "unexpected errors" with no clear cause</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">Simple changes take days instead of minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">Your stakeholders stopped asking for updates</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">You're avoiding status meetings</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">The AI keeps generating completely different code each time</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                  <span className="text-gray-800">You're Googling "how to hire a real developer" at 3am</span>
                </div>
              </div>
            </div>
            <div className="bg-red-100 border border-red-200 rounded-lg p-6">
              <div className="space-y-3 text-center">
                <p className="text-red-800"><strong>If you checked 3+:</strong> You're not debugging anymore. You're doing damage control.</p>
                <p className="text-red-800"><strong>If you checked 5+:</strong> Your project is on life support.</p>
                <p className="text-red-900 font-semibold"><strong>If you checked 7:</strong> Start planning your exit strategy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Authority Building Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            We Know Exactly What Happened to You
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Day 1:</span>
                    <span className="text-gray-700 ml-2">AI app builder promised you'd have a working app in 48 hours.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Week 2:</span>
                    <span className="text-gray-700 ml-2">"Just needs a few tweaks." You believed it.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Month 1:</span>
                    <span className="text-gray-700 ml-2">You're regenerating code and praying to the algorithm gods.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Month 3:</span>
                    <span className="text-gray-700 ml-2">You're here, reading this, wondering how it all went so wrong.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Sound familiar?</strong> We've been exactly where you are. We know the frustration of AI tools that overpromise and underdeliver. We know what it feels like when the "revolutionary" technology leaves you worse off than when you started.
              </p>
              <p className="text-xl font-semibold text-blue-600">
                More importantly, we know how to fix it.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof/Results Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            What Happens When You Actually Fix the Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Back on Track</h3>
              <p className="text-gray-600">From disaster to demo-ready in weeks, not months.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stakeholder Confidence</h3>
              <p className="text-gray-600">Stop avoiding meetings. Start showing progress.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Saved</h3>
              <p className="text-gray-600">From potential disaster to innovation hero.</p>
            </div>
          </div>
        </div>

        {/* Free Crisis Management System Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 mb-12 text-white">
          <h2 className="text-3xl font-semibold mb-4">
            Get the Complete AI App Crisis Management System (Free)
          </h2>
          <p className="text-blue-100 mb-6 text-lg leading-relaxed">
            Everything we know about rescuing failing AI projects. The complete emergency protocol that's saved dozens of disaster projects. No opt-in required. No catch. Just the full system that turns catastrophes into successes.
          </p>
          <div className="bg-blue-800/30 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">What You Get:</h3>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>8-step emergency diagnostic framework</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>50+ most common AI app failures and fixes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Platform-specific recovery protocols</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Emergency triage checklist</span>
              </div>
            </div>
          </div>
          <Link
            href="/secretroute/debug-guide"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5" />
            Get the Free Crisis Management System
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Still Broken? Professional Help Section */}
        {/* <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-8 mb-12 text-white">
          <h2 className="text-3xl font-semibold mb-4">
            Still Broken After Trying Everything?
          </h2>
          <p className="text-red-100 mb-6 text-lg leading-relaxed">
            If you've tried our complete crisis management system and your project is still failing, you need professional intervention. Some problems require expert-level codebase analysis and strategic restructuring.
          </p>
          <div className="bg-red-800/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Emergency Project Rescue Assessment</h3>
            <div className="space-y-3 text-red-100">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Complete codebase analysis and security review</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Professional diagnostic report with recommendations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>"Keep, Fix, or Kill" assessment for each component</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Strategic recovery roadmap with timelines</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <p className="text-white font-semibold">Investment: $2,000 AUD</p>
              <p className="text-red-100 text-sm mt-1">Professional assessment you can show stakeholders</p>
            </div>
          </div>
          <Link
            href="/secretroute/rescue-assessment"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-semibold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5" />
            Learn About Professional Rescue
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}

        {/* Final CTA Section */}
        {/* <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Stop Hoping. Start Fixing.
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Your project doesn't have to be a disaster. Get the complete crisis management system and turn your catastrophe into a success story.
          </p>
          <Link
            href="/secretroute/debug-guide"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            <ArrowRight className="w-5 h-5" />
            Get the Free Crisis Management System
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}
      </div>

      {/* Modal for What's Included Details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Complete Framework Access - What's Included
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">8-Step Diagnostic Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complete step-by-step error identification process</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Detailed examples and case studies for each step</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Quick checks and pre-diagnostic tools</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Most Common Errors & Debugging</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">50+ most common errors across 7 popular platforms</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Step-by-step debugging instructions for each error</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Proven solutions that actually work in practice</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Error symptoms and root cause analysis</span>
                    </div>
                  </div>
                </div>


                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">General Troubleshooting Guide</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Universal troubleshooting tips for any platform</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Cross-platform debugging strategies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Best practices for AI app development</span>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Premium Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Print/Save functionality for offline access</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular updates with new platform issues</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bookmarkable resource for quick access</span>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/secretroute/premium"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
                >
                  Unlock Complete Framework
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugGuidePage;