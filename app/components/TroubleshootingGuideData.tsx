export const FullFrameworkSteps = () => {
  return <EnhancedFrameworkSteps showAll={true} />;
}; import { ReactNode } from 'react';
import React from 'react';
import Link from 'next/link';
import { Search, BookOpen, Layers, CheckCircle, RefreshCcw, Settings, AlertCircle, Terminal, Users, Info, MessageSquare, Database, TestTube, RotateCcw, FileText, Wrench, Target, ListChecks, HelpCircle, Sliders, MapPin, Microscope, Bug, ExternalLink, FlaskConical, Lightbulb, FileSearch, BookOpenCheck, X, Chrome, Globe } from 'lucide-react';

// Step 0 - Quick Sanity Checks Data
export const quickChecks = [
  { id: 'refresh', text: 'Refresh the page/app and try again' },
  { id: 'internet', text: 'Check your internet connection is stable' },
  { id: 'browser', text: 'Try a different browser (Chrome, Firefox, Safari)' },
  { id: 'incognito', text: 'Test in incognito/private browsing mode' },
  { id: 'cache', text: 'Clear browser cache and cookies for the platform', hasHelp: true },
  { id: 'logout', text: 'Log out and log back into the platform' },
  { id: 'device', text: 'Try on a different device (phone, tablet, different computer)' },
  { id: 'platform-status', text: 'Check if the platform itself is down (search "[platform name] down" or check their status page)' },
  { id: 'recent-changes', text: 'Think about what you changed last before it stopped working' },
  { id: 'wait', text: 'Wait 5-10 minutes - sometimes issues resolve themselves' }
];

// Cache clearing help data
export const cacheHelpData = {
  explanation: {
    cache: "Cache stores temporary files (images, scripts, styles) to make websites load faster. Sometimes old cached files cause issues when websites update.",
    cookies: "Cookies store login info, preferences, and session data. Corrupted cookies can cause login issues or unexpected behavior."
  },
  browsers: [
    {
      name: "Google Chrome",
      icon: "Chrome",
      helpUrl: "https://support.google.com/accounts/answer/32050",
      directLink: "chrome://settings/clearBrowserData"
    },
    {
      name: "Mozilla Firefox",
      icon: "Globe",
      helpUrl: "https://support.mozilla.org/en-US/kb/how-clear-firefox-cache",
      directLink: "about:preferences#privacy"
    },
    {
      name: "Safari",
      icon: "Globe",
      helpUrl: "https://support.apple.com/en-us/102638",
      directLink: null
    },
    {
      name: "Microsoft Edge",
      icon: "Globe",
      helpUrl: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
      directLink: "edge://settings/clearBrowserData"
    }
  ]
};

export const genericTips = [
  {
    title: "Make Your Instructions Crystal Clear",
    description: "AI works best with specific, detailed instructions. Instead of 'make a login page,' try 'create a login page with email and password fields, a submit button, and a forgot password link.' If the AI misunderstands, break your request into smaller, more specific steps.",
    graphic: "prompt",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Find Help in the Right Places",
    description: "Every platform has a help center, community forum, and knowledge base. Start with the official docs, then check Reddit communities like r/nocode or r/[platform name]. Search for your specific error message plus your platform name (e.g., 'workflow not triggering Bubble').",
    graphic: "documentation",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Check If Your Integrations Are Working",
    description: "If your app connects to external services (email, payment, AI), verify these connections are active. Look for expired API keys (connection passwords), broken webhooks, or authentication errors. Test with simple data first before complex workflows.",
    graphic: "database",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Test One Thing at a Time",
    description: "Don't try to debug everything at once. Test individual parts of your app separately - first the button, then the form, then the database connection. This way, when something breaks, you'll know exactly which piece is causing the problem.",
    graphic: "testing",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Clear Cache & Reset Sessions (The Magic Fix)",
    description: "This solves about 30% of mysterious issues. Clear your browser cache, log out and back in, or try incognito mode. Old cached data often conflicts with new changes, causing weird behavior that makes no sense.",
    graphic: "refresh",
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "Keep Your Tools Updated",
    description: "Use the latest version of your browser, keep your app builder platform updated, and check for any plugin updates. Old versions often have bugs that newer versions have fixed. This prevents many compatibility headaches.",
    graphic: "update",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Decode Error Messages (They're Not as Scary as They Look)",
    description: "Error messages are like clues in a mystery. Copy the exact error text and search for it online with your platform name. Look for patterns like '404' (something not found), '500' (server problem), or 'field required' (missing information).",
    graphic: "error",
    color: "from-red-400 to-red-600"
  },
  {
    title: "When in Doubt, Simplify Everything",
    description: "Remove complex features temporarily and test just the basics. If a complex workflow isn't working, create a simple version first. Once the simple version works, add complexity back one piece at a time until you find what breaks it.",
    graphic: "simplify",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Ask for Help (You're Not Alone)",
    description: "The no-code community is incredibly helpful. Post in platform forums, Reddit communities, or Discord servers with specific details: what you're trying to do, what's happening instead, and what you've already tried. Include screenshots of error messages.",
    graphic: "community",
    color: "from-pink-400 to-pink-600"
  },
  {
    title: "Try Different Platform Settings",
    description: "Most issues can be solved by tweaking settings. Common fixes: switch AI model versions (GPT-3.5 vs GPT-4), change output formats, adjust rate limits, or modify user permissions. When in doubt, try the 'default' or 'recommended' settings first.",
    graphic: "settings",
    color: "from-teal-400 to-teal-600"
  }
];

// Cache Help Modal Component
const CacheHelpModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Chrome':
        return <Chrome className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">How to Clear Cache & Cookies</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Explanation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What are Cache & Cookies?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Cache</h4>
                <p className="text-blue-800 text-sm">{cacheHelpData.explanation.cache}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">Cookies</h4>
                <p className="text-green-800 text-sm">{cacheHelpData.explanation.cookies}</p>
              </div>
            </div>
          </div>
          <div className="my-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900 mb-1">Pro Tip</h4>
                <p className="text-yellow-800 text-sm">
                  After clearing cache and cookies, you'll need to log back into websites.
                  Consider bookmarking this page before clearing your data.
                </p>
              </div>
            </div>
          </div>
          {/* Browser Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Your Browser</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {cacheHelpData.browsers.map((browser, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-gray-600">
                      {getIcon(browser.icon)}
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">{browser.name}</h4>
                  </div>

                  <div className="space-y-3">
                    {/* Official Help Link */}
                    <a
                      href={browser.helpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      View Official Instructions
                      <ExternalLink className="w-4 h-4" />
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer tip */}

        </div>
      </div>

    </div>
  );
};

// Premium Teaser Component
export const PremiumTeaser = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl shadow-lg border border-yellow-200 p-8 mb-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6">
            <span>⭐</span>
            <span>Premium Debug Guide</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete No-Code AI App Troubleshooting System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access the full framework and platform-specific troubleshooting guides to debug any no-code AI app systematically and efficiently.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What You Get with Premium Access</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Framework */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900">Complete 8-Step Framework</h4>
                </div>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">All 8 debugging steps (vs 4 in free version)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Interactive quick sanity checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Comprehensive dependency checklists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Print-friendly reference cards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-900">Universal Troubleshooting Guide</h4>
                </div>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">10 essential debugging techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Visual guides with animated graphics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Works across all no-code platforms</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Platform Specific */}
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-purple-900">Platform-Specific Troubleshooting</h4>
                </div>
                <ul className="space-y-2 text-purple-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Detailed guides for 8 major platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">50+ documented common issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Step-by-step solutions for each issue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Searchable by symptoms and platform</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-orange-900">Error Message Decoder</h4>
                </div>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Translate cryptic error messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Actionable solutions for each error</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">Covers all common error patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Icons */}
        <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Platforms Covered</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/bolt.svg" alt="StackBlitz" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">StackBlitz</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/lovable.svg" alt="Lovable" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Lovable</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/replit.svg" alt="Replit" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Replit</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/bubble.svg" alt="Bubble" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Bubble</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/adalo.svg" alt="Adalo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Adalo</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/FlutterFlow.jpeg" alt="FlutterFlow" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">FlutterFlow</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/stack/glide.svg" alt="Glide" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Glide</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center text-white">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-sm text-gray-600">& More</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-1">8</div>
              <div className="text-sm text-gray-600">Framework Steps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">8</div>
              <div className="text-sm text-gray-600">Platforms Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Common Issues</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">10</div>
              <div className="text-sm text-gray-600">Universal Tips</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/secretroute/premium"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Access Premium Guide
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            One-time purchase • Lifetime access • Regular updates
          </p>
        </div>
      </div>
    </div>
  );
};

// Quick Sanity Checks Modal Component
const QuickSanityChecksModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [checkedItems, setCheckedItems] = React.useState<Set<string>>(new Set());
  const [allChecked, setAllChecked] = React.useState(false);
  const [showCacheHelp, setShowCacheHelp] = React.useState(false);

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
    setAllChecked(newChecked.size === quickChecks.length);
  };

  const resetChecks = () => {
    setCheckedItems(new Set());
    setAllChecked(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Quick Sanity Checks</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Before diving into systematic debugging, let's rule out common quick fixes.
              These solve about <span className="font-semibold text-emerald-600">40% of issues</span>!
            </p>
          </div>

          {/* Checklist */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Quick Checks ({checkedItems.size}/{quickChecks.length} completed)
              </h3>
              <button
                onClick={resetChecks}
                className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
              >
                Reset all
              </button>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {quickChecks.map((check) => {
                const isChecked = checkedItems.has(check.id);
                return (
                  <div
                    key={check.id}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 transition-all duration-200 ${isChecked
                      ? 'border-emerald-300 bg-emerald-50'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-100'
                      }`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCheck(check.id)}
                        className="w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 focus:ring-2 mt-0.5"
                      />
                      <span className={`text-sm leading-relaxed ${isChecked ? 'text-emerald-800 line-through' : 'text-gray-700'
                        }`}>
                        {check.text}
                      </span>
                    </label>
                    {check.hasHelp && (
                      <button
                        onClick={() => setShowCacheHelp(true)}
                        className="ml-2 p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors flex-shrink-0"
                        title="Get help with clearing cache and cookies"
                      >
                        <HelpCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Success message */}
            {allChecked && (
              <div className="mt-6 p-4 bg-emerald-100 border border-emerald-300 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Great! You've completed all quick checks.</span>
                </div>
                <p className="text-emerald-700 text-sm mt-2">
                  If your issue persists, proceed to the systematic debugging steps below.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Continue to Debugging Steps
            </button>
          </div>
        </div>
      </div>

      {/* Cache Help Modal */}
      <CacheHelpModal isOpen={showCacheHelp} onClose={() => setShowCacheHelp(false)} />
    </div>
  );
};

// Step 0 Component - Quick Sanity Checks
export const Step0QuickChecks = ({ autoShow = false }: { autoShow?: boolean }) => {
  const [showSanityChecks, setShowSanityChecks] = React.useState(false);

  // Auto-show the modal after a short delay (only if autoShow is true)
  React.useEffect(() => {
    if (!autoShow) return;

    const timer = setTimeout(() => {
      setShowSanityChecks(true);
    }, 1500); // Show after 1.5 seconds

    return () => clearTimeout(timer);
  }, [autoShow]);

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-6 border border-emerald-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 tracking-tight">
              Quick Sanity Checks
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Before diving into systematic debugging, let's rule out common quick fixes.
            These solve about 40% of issues!
          </p>
          <button
            onClick={() => setShowSanityChecks(true)}
            className="inline-flex items-center gap-2 bg-green-200 text-green-900 px-6 py-3 rounded-xl font-medium hover:bg-green-300 transition-colors duration-200 text-base lg:text-lg mt-4"
          >
            <span>Open Quick Checks</span>
            {/* <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </button>
        </div>
      </div>

      {/* Quick Sanity Checks Modal */}
      <QuickSanityChecksModal isOpen={showSanityChecks} onClose={() => setShowSanityChecks(false)} />
    </div>
  );
};



// Error Message Help Data
export const errorMessageData = {
  categories: [
    {
      title: "Permission & Access Errors",
      color: "blue",
      errors: [
        {
          pattern: "401 Unauthorized",
          meaning: "You don't have permission to access this resource",
          solutions: ["Check if you're logged in", "Verify user role permissions", "Check API key validity"]
        },
        {
          pattern: "403 Forbidden",
          meaning: "You're authenticated but not allowed to do this action",
          solutions: ["Check user role permissions", "Verify feature access in your plan", "Check privacy/security settings"]
        }
      ]
    },
    {
      title: "Connection & Resource Errors",
      color: "green",
      errors: [
        {
          pattern: "404 Not Found",
          meaning: "The requested resource or page doesn't exist",
          solutions: ["Check URL spelling", "Verify the resource still exists", "Check API endpoint configuration"]
        },
        {
          pattern: "Endpoint not found",
          meaning: "The API connection point is incorrect or missing",
          solutions: ["Verify API endpoint URLs", "Check integration settings", "Confirm service is still available"]
        }
      ]
    },
    {
      title: "Rate Limiting & Quota Errors",
      color: "amber",
      errors: [
        {
          pattern: "429 Too Many Requests",
          meaning: "You've exceeded the allowed number of requests",
          solutions: ["Wait before trying again", "Check your usage limits", "Upgrade your plan if needed"]
        },
        {
          pattern: "Rate limit exceeded",
          meaning: "You're making requests too quickly or too frequently",
          solutions: ["Slow down request frequency", "Check platform usage dashboard", "Review your subscription limits"]
        }
      ]
    },
    {
      title: "Server & Platform Errors",
      color: "red",
      errors: [
        {
          pattern: "500 Internal Server Error",
          meaning: "Something went wrong on the platform's side (not your fault!)",
          solutions: ["Try again in a few minutes", "Check platform status page", "Contact support if it persists"]
        },
        {
          pattern: "502 Bad Gateway",
          meaning: "Communication problem between servers",
          solutions: ["Usually temporary - try again later", "Check if the service is down", "Clear your browser cache"]
        }
      ]
    },
    {
      title: "Authentication & API Errors",
      color: "purple",
      errors: [
        {
          pattern: "Invalid API key",
          meaning: "Your API key is wrong, expired, or formatted incorrectly",
          solutions: ["Double-check your API key", "Generate a new API key", "Verify key permissions and scope"]
        },
        {
          pattern: "Authentication failed",
          meaning: "Your login credentials or API authentication isn't working",
          solutions: ["Check username/password", "Verify API key configuration", "Check if account is suspended"]
        }
      ]
    },
    {
      title: "Data & Form Errors",
      color: "indigo",
      errors: [
        {
          pattern: "Field required",
          meaning: "A required form field is empty or missing",
          solutions: ["Fill in all required fields", "Check for hidden required fields", "Verify data format requirements"]
        },
        {
          pattern: "Invalid format",
          meaning: "The data you entered doesn't match the expected format",
          solutions: ["Check date/time formats", "Verify email format", "Check number vs text field requirements"]
        }
      ]
    }
  ]
};

// Error Message Decoder Modal
const ErrorMessageModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-900",
      green: "bg-green-50 border-green-200 text-green-900",
      amber: "bg-amber-50 border-amber-200 text-amber-900",
      red: "bg-red-50 border-red-200 text-red-900",
      purple: "bg-purple-50 border-purple-200 text-purple-900",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-900"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Error Message Decoder</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600 text-lg">
              Translate cryptic error messages into plain English and get actionable solutions.
            </p>
          </div>

          {/* Error Categories */}
          <div className="grid gap-6 md:grid-cols-2">
            {errorMessageData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`rounded-xl p-6 border-2 ${getColorClasses(category.color)}`}>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.errors.map((error, errorIndex) => (
                    <div key={errorIndex} className="bg-white bg-opacity-60 rounded-lg p-4">
                      <div className="font-mono text-sm font-medium mb-2">
                        "{error.pattern}"
                      </div>
                      <div className="text-sm mb-3">
                        <strong>What it means:</strong> {error.meaning}
                      </div>
                      <div className="text-sm">
                        <strong>What to try:</strong>
                        <ul className="mt-1 ml-4 space-y-1">
                          {error.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start gap-2">
                              <span className="text-gray-400 mt-0.5">•</span>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer tip */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Pro Tip</h4>
                <p className="text-gray-700 text-sm">
                  When you encounter an error, copy the exact error message and search for it online along with your platform name (e.g., "field required Bubble" or "401 unauthorized Adalo").
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const frameworkSteps = [
  {
    step: 1,
    title: "Define the Problem Clearly",
    description: "Note down exactly what's not working. Be specific about the behavior you expect versus what's happening.",
    details: "Example: 'The form submission button should save user data to the database, but nothing happens when clicked.'",
    action: (
      <>
        <div className="mb-4">Note any error messages, unexpected outputs, or visual glitches. Take screenshots or record a short video if possible.</div>
        <ul className="list-none space-y-2 pl-0 text-base lg:text-lg text-gray-600">
          <li><span className="font-semibold text-gray-800">Bubble:</span> Check the <span className="font-mono">Debugger</span> tab and <span className="font-mono">Logs</span> section.</li>
          <li><span className="font-semibold text-gray-800">Adalo:</span> Use <span className="font-mono">Preview</span> mode and check the browser's Developer Tools (<span className="font-mono">F12</span>) Console tab.</li>
          <li><span className="font-semibold text-gray-800">FlutterFlow:</span> Check the <span className="font-mono">Run</span> tab for build errors and the <span className="font-mono">Logs</span> section.</li>
          <li><span className="font-semibold text-gray-800">Replit:</span> Look at the <span className="font-mono">Console</span> output and <span className="font-mono">Problems</span> tab.</li>
          <li><span className="font-semibold text-gray-800">Bolt:</span> Check the <span className="font-mono">Debug</span> panel and <span className="font-mono">Error Logs</span>.</li>
          <li><span className="font-semibold text-gray-800">Lovable:</span> Use <span className="font-mono">Test</span> mode and check browser Developer Tools.</li>
          <li><span className="font-semibold text-gray-800">Guide:</span> Check the <span className="font-mono">Preview</span> console and <span className="font-mono">Error Reports</span> section.</li>
        </ul>
        <div className="mt-4">Use these error messages to understand what's failing and where.</div>
      </>
    ),
    graphic: "define",
    color: "from-red-400 to-red-600"
  },
  {
    step: 2,
    title: "Map the App's Components",
    description: "Break your app into logical components or layers. Most AI app builders organize apps into different architectural layers.",
    details: (
      <>
        <div>Think of your app like a simple flow of connected boxes. Each box represents a part that could break:</div>
        <div className="mt-4 space-y-2">
          <div>🔹 <strong>User Interface (What people see)</strong>: Buttons, forms, pages, menus</div>
          <div>🔹 <strong>Actions & Logic (What happens when clicked)</strong>: Workflows, automations, calculations</div>
          <div>🔹 <strong>Data & Storage (Where info is saved)</strong>: Databases, user accounts, file uploads</div>
          <div>🔹 <strong>AI Features (Smart parts)</strong>: Chatbots, content generation, recommendations</div>
        </div>
      </>
    ),
    action: (
      <>
        <div className="mb-6">Choose the pattern that best matches your app, then identify where your issue might be happening:</div>

        {/* Common App Patterns */}
        <div className="space-y-8">
          {/* E-commerce Pattern */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-lg">🛒</span> E-commerce/Marketplace App
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Browse Products</span>
              <span className="text-blue-600">→</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Add to Cart</span>
              <span className="text-blue-600">→</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Checkout Form</span>
              <span className="text-blue-600">→</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Payment</span>
              <span className="text-blue-600">→</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Order Confirmation</span>
            </div>
          </div>

          {/* Social/Community Pattern */}
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
              <span className="text-lg">👥</span> Social/Community App
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">User Login</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Feed/Timeline</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Create Post</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Interactions</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Profile Page</span>
            </div>
          </div>

          {/* Business/Productivity Pattern */}
          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <span className="text-lg">💼</span> Business/Productivity App
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Dashboard</span>
              <span className="text-purple-600">→</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Data Entry</span>
              <span className="text-purple-600">→</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Processing</span>
              <span className="text-purple-600">→</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Reports</span>
              <span className="text-purple-600">→</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Export/Share</span>
            </div>
          </div>

          {/* AI-Powered App Pattern */}
          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <span className="text-lg">🤖</span> AI-Powered App
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">User Input</span>
              <span className="text-amber-600">→</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">AI Processing</span>
              <span className="text-amber-600">→</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Generated Result</span>
              <span className="text-amber-600">→</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">User Feedback</span>
              <span className="text-amber-600">→</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">Save/Share</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">💡 Quick Mapping Exercise:</h4>
          <p className="text-gray-700 text-sm mb-3">
            Draw or write out your app's flow using the pattern above that's closest to yours.
            Mark the step where the problem occurs with a ❌.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Example:</strong> "User Login ✅ → Dashboard ✅ → Data Entry ❌ (form won't submit)"
          </p>
        </div>
      </>
    ),
    graphic: "map",
    color: "from-blue-400 to-blue-600"
  },
  {
    step: 3,
    title: "Test Components Incrementally",
    description: "Test each component in isolation, starting from the user's entry point and moving deeper into the app's logic or data layers.",
    details: "3.1: Test Frontend/UI - Check if UI elements are visible and interactive\n3.2: Test Workflows/Logic - Verify workflows execute as expected\n3.3: Test Data Operations - Confirm data is being read/written correctly\n3.4: Test AI Features - Test AI output independently",
    action: "Create a checklist of components and mark them as 'working' or 'failing' as you test. Stop when you find a failure.",
    graphic: "test",
    color: "from-green-400 to-green-600"
  },
  {
    step: 4,
    title: "Narrow Down the Issue",
    description: "Once a component fails, dig deeper into that specific area to identify the root cause.",
    details: "Example: If a button doesn't trigger a workflow, check:\n• Is the button's action correctly linked to the workflow?\n• Are there conditions preventing the workflow from running?\n• Is the workflow itself misconfigured?",
    action: "Use debug tools, logs, or error messages to pinpoint the exact misconfiguration or bug.",
    graphic: "narrow",
    color: "from-orange-400 to-orange-600"
  },
  {
    step: 5,
    title: "Reproduce and Experiment",
    description: "Try to consistently reproduce the issue under different conditions to rule out flukes or user errors.",
    details: "Test the app in different browsers, devices, or user roles. Experiment with small changes to the failing component.",
    action: "Document what changes make the issue better, worse, or unchanged. This info is crucial for debugging or seeking help.",
    graphic: "reproduce",
    color: "from-purple-400 to-purple-600"
  },
  {
    step: 6,
    title: "Cross-Check Dependencies",
    description: "Review any external dependencies or settings that might affect the failing component.",
    details: (
      <>
        <div>A 'dependency' is anything your app relies on to work properly. Think of it like checking if all the power cords are plugged in:</div>
        <div className="mt-4 space-y-2">
          <div>🔹 <strong>User Access & Permissions</strong>: Can the user actually do what they're trying to do?</div>
          <div>🔹 <strong>External Services</strong>: Are third-party tools (payment, email, AI) working and properly connected?</div>
          <div>🔹 <strong>Platform Limits</strong>: Have you hit usage limits, storage caps, or subscription restrictions?</div>
          <div>🔹 <strong>Data Connections</strong>: Are databases, APIs, and integrations properly configured?</div>
        </div>
      </>
    ),
    action: (
      <>
        <div className="mb-6">Work through these dependency checklists systematically:</div>

        {/* Dependency Checklists */}
        <div className="space-y-6">
          {/* User Permissions */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <span className="text-lg">👤</span> User Permissions & Access
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Is the user logged in with the right account?</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Does this user role have permission to access this feature?</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Are there any privacy settings blocking the action?</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Try with a different user account or admin account</span>
              </div>
            </div>
          </div>

          {/* External Services */}
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
              <span className="text-lg">🔗</span> External Services & Integrations
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Are API keys still valid and not expired?</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Check if external service is down (Google, Stripe, OpenAI, etc.)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Verify webhook URLs are accessible and correct</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Test integration in a simple, isolated way</span>
              </div>
            </div>
          </div>

          {/* Platform Limits */}
          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span> Platform Limits & Quotas
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Check your platform's usage dashboard for limits</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Verify you haven't hit storage, bandwidth, or API call limits</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Check if your subscription plan supports this feature</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Look for any billing or payment issues</span>
              </div>
            </div>
          </div>

          {/* Data & Connections */}
          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <span className="text-lg">💾</span> Data & Database Connections
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Verify database connection strings are correct</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Check if required data fields actually exist and have data</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Test with simple, known-good data first</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Look for data format mismatches (text vs. numbers, dates)</span>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    graphic: "dependencies",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    step: 7,
    title: "Seek External Help",
    description: "If you can't resolve the issue, prepare a detailed summary and reach out for help.",
    details: "Include: What you're trying to achieve, the component that's failing, steps to reproduce, screenshots/error messages, what you've already tried.",
    action: "Check platform forums, Reddit communities, Stack Overflow, or contact support with comprehensive details.",
    graphic: "help",
    color: "from-pink-400 to-pink-600"
  },
  {
    step: 8,
    title: "Document and Learn",
    description: "Once resolved, note what caused the issue and how you fixed it. Update your app's documentation or create a troubleshooting log.",
    details: "This saves time if similar issues arise and improves your understanding of the platform.",
    action: "Save error logs, solutions, or workarounds in a dedicated file or within the app builder's notes feature.",
    graphic: "document",
    color: "from-teal-400 to-teal-600"
  }
];
// Quick Reference Cards Data
export const quickRefData = {
  steps: frameworkSteps.map(step => ({
    step: step.step,
    title: step.title,
    summary: typeof step.details === 'string'
      ? step.details.split('\n')[0]
      : `Think of your app like a simple flow of connected boxes. Each box represents a part that could break.`,
    quickActions: [
      step.step === 1 ? "Take screenshots of errors" :
        step.step === 2 ? "Draw your app flow on paper" :
          step.step === 3 ? "Test one component at a time" :
            step.step === 4 ? "Focus on the failing part" :
              step.step === 5 ? "Try in different browsers" :
                step.step === 6 ? "Check permissions & API keys" :
                  step.step === 7 ? "Prepare detailed description" :
                    "Document the solution",

      step.step === 1 ? "Check platform error logs" :
        step.step === 2 ? "Identify where it breaks" :
          step.step === 3 ? "Mark working vs failing" :
            step.step === 4 ? "Use debug tools" :
              step.step === 5 ? "Test different conditions" :
                step.step === 6 ? "Verify external services" :
                  step.step === 7 ? "Include error messages" :
                    "Save for next time",

      step.step === 1 ? "Note expected vs actual behavior" :
        step.step === 2 ? "Choose closest app pattern" :
          step.step === 3 ? "Stop at first failure" :
            step.step === 4 ? "Check error messages" :
              step.step === 5 ? "Document what helps/hurts" :
                step.step === 6 ? "Check platform status" :
                  step.step === 7 ? "Contact support with details" :
                    "Update documentation"
    ]
  }))
};

// Quick Reference Cards Modal
const QuickRefModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Quick Reference Cards</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6 print:hidden">
            <p className="text-gray-600 text-lg">
              Checklists for each debugging step. Keep these handy while troubleshooting.
            </p>
          </div>

          {/* Reference Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 print:grid-cols-2">
            {quickRefData.steps.map((step, index) => (
              <div key={index} className="border-2 border-gray-300 rounded-lg p-4 break-inside-avoid">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{step.title}</h3>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {step.summary}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Quick Actions:</h4>
                  <ul className="space-y-1">
                    {step.quickActions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Step completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Print Instructions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4 print:hidden">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Printing Tips</h4>
                <p className="text-blue-800 text-sm">
                  These cards are designed to print cleanly on standard paper. Consider printing on cardstock for durability, or laminating for repeated use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// Simple graphic components for framework steps
const SimpleGraphics = {
  define: () => (
    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
      <Target className="w-4 h-4 text-white" />
    </div>
  ),
  map: () => (
    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
      <MapPin className="w-4 h-4 text-white" />
    </div>
  ),
  test: () => (
    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
      <TestTube className="w-4 h-4 text-white" />
    </div>
  ),
  narrow: () => (
    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
      <Microscope className="w-4 h-4 text-white" />
    </div>
  )
};

// Tip graphics components
const TipGraphics = {
  prompt: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
        <MessageSquare className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>
    </div>
  ),

  documentation: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
        <BookOpen className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-300 rounded-full"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"></div>
    </div>
  ),

  database: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
        <Database className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
    </div>
  ),

  testing: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
        <TestTube className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-300 rounded-full opacity-60"></div>
    </div>
  ),

  refresh: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
        <RotateCcw className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
      </div>
    </div>
  ),

  update: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
        <RefreshCcw className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-indigo-300 rounded-full animate-ping"></div>
    </div>
  ),

  error: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-300 rounded-full animate-pulse"></div>
    </div>
  ),

  simplify: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
        <Target className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
    </div>
  ),

  community: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
        <Users className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  ),

  settings: () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl opacity-10"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
        <Sliders className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
    </div>
  )
};

// Enhanced React component for rendering the troubleshooting tips
export const EnhancedTroubleshootingTips = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          Universal Troubleshooting Tips for Any AI App Builder
        </h2>
        <p className="text-blue-900 font-medium mb-2">
          This section is a general guide on how to structure your project and follow good practices to help minimize technical debt and long-term issues.
        </p>
        <p className="text-gray-600">
          These tips work across all no-code platforms and AI app builders.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {genericTips.map((tip, index) => {
          const GraphicComponent = TipGraphics[tip.graphic as keyof typeof TipGraphics];
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Background decoration */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${tip.color} opacity-5 rounded-full transition-opacity group-hover:opacity-10`}></div>
              <div className="relative flex items-start gap-4">
                {/* Enhanced graphic */}
                <div className="flex-shrink-0">
                  {GraphicComponent ? <GraphicComponent /> : (
                    <div className={`w-16 h-16 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center`}>
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-gray-700 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const EnhancedFrameworkSteps = ({ showAll = false, autoShowQuickChecks = false }) => {
  const stepsToShow = showAll ? frameworkSteps : frameworkSteps.slice(0, 4);
  const [expandedSteps, setExpandedSteps] = React.useState<Set<number>>(new Set());
  const [showErrorDecoder, setShowErrorDecoder] = React.useState(false);
  const [completedSteps, setCompletedSteps] = React.useState<Set<number>>(new Set());
  const [showQuickRef, setShowQuickRef] = React.useState(false);

  const toggleStep = (stepNumber: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepNumber)) {
      newExpanded.delete(stepNumber);
    } else {
      newExpanded.add(stepNumber);
    }
    setExpandedSteps(newExpanded);
  };

  const toggleStepCompletion = (stepNumber: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepNumber)) {
      newCompleted.delete(stepNumber);
    } else {
      newCompleted.add(stepNumber);
    }
    setCompletedSteps(newCompleted);
  };

  return (
    <div className="bg-white mb-16 px-6 lg:px-12 xl:px-16 py-6 rounded-2xl">
      {/* Step 0 - Quick Checks */}
      {/* <Step0QuickChecks autoShow={autoShowQuickChecks} /> */}
      {/* Header Section - Apple-style */}
      <div className="text-center mb-20 lg:mb-28">
        <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6 lg:mb-8 tracking-tight">
          A systematic approach
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Eight essential steps to diagnose and resolve issues in any AI app builder
        </p>
        <p className="text-base lg:text-lg text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mt-4">
          This guide assumes you've already started building your application and it was working well until something went wrong.
          You've tried asking your AI assistant to "fix it, dammit" but nothing has worked so far.
          These systematic steps will help you identify and resolve the issue.
        </p>
        <p className="text-base lg:text-lg text-gray-500 font-light max-w-4xl mx-auto leading-relaxed mt-4">
          If you're just starting out a project and want to know good practices to follow to start building from a good foundation,{' '}
          <a href="#best-practices" className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors">
            click here
          </a>.
        </p>

        {/* Progress & Quick Tools */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowErrorDecoder(true)}
            className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-xl font-medium hover:bg-red-200 shadow-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <AlertCircle className="w-5 h-5" />
            See what your error message means
            {/* <span className="text-red-600 text-sm">• Translate cryptic errors</span> */}
          </button>

          {/* <button
            onClick={() => setShowQuickRef(true)}
            className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-medium hover:bg-blue-200 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
          >
            <FileText className="w-5 h-5" />
            Quick Reference Guides
          </button> */}
        </div>
      </div>

      {/* Steps - Clean Horizontal Layout */}
      <div className="space-y-20 lg:space-y-24 max-w-6xl mx-auto">
        {stepsToShow.map((step, index) => {
          const isExpanded = expandedSteps.has(step.step);
          const isCompleted = completedSteps.has(step.step);
          return (
            <div key={index} className="group">
              <div
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Step Number - Minimalist Circle with Checkbox */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isCompleted
                    ? 'border-green-400 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                    }`}>
                    <span className={`text-2xl lg:text-3xl font-light transition-colors duration-300 ${isCompleted ? 'text-green-600' : 'text-gray-800'
                      }`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Completion Checkbox */}
                  <div
                    // onClick={() => toggleStepCompletion(step.step)}
                    className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-300 flex items-center justify-center bg-gray-300 hover:bg-gray-400'
                      }`}
                    title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left max-w-xl">
                  <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4 lg:mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed mb-6 lg:mb-8">
                    {step.description}
                  </p>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleStep(step.step)}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 text-base lg:text-lg"
                  >
                    <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? ' opacity-100 mt-12 lg:mt-16' : 'max-h-0 opacity-0'
                }`}>
                <div className={`${index % 2 === 1 ? 'lg:ml-48' : 'lg:mr-48'
                  } max-w-3xl mx-auto lg:mx-0 px-4 lg:px-0`}>

                  {/* Details Section */}
                  {step.details && (
                    <div className="mb-8">
                      <h4 className="text-xl font-medium text-gray-900 mb-4">Details</h4>
                      <div className="text-gray-600 leading-relaxed space-y-3 text-base lg:text-lg">
                        {typeof step.details === 'string' ? (
                          step.details.split('\n').map((line, i) => {
                            if (line.trim() === '') return null;
                            const isBulletPoint = line.startsWith('•');
                            return (
                              <div key={i} className={isBulletPoint ? 'ml-6' : ''}>
                                {line}
                              </div>
                            );
                          })
                        ) : (
                          step.details
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Section */}
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">Action</h4>
                    <div className="text-gray-600 leading-relaxed text-base lg:text-lg">{step.action}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Minimalist CTA for more steps */}
      {!showAll && (
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
            <span>Four additional steps available</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

      {/* Quick Reference Cards Modal */}
      <QuickRefModal isOpen={showQuickRef} onClose={() => setShowQuickRef(false)} />

      {/* Error Message Decoder Modal */}
      <ErrorMessageModal isOpen={showErrorDecoder} onClose={() => setShowErrorDecoder(false)} />
    </div>
  );
};

export const tipIcons: (() => ReactNode)[] = [
  () => <MessageSquare className="w-6 h-6 text-blue-400" />,
  () => <BookOpen className="w-6 h-6 text-green-400" />,
  () => <Database className="w-6 h-6 text-purple-400" />,
  () => <TestTube className="w-6 h-6 text-orange-400" />,
  () => <RotateCcw className="w-6 h-6 text-cyan-400" />,
  () => <RefreshCcw className="w-6 h-6 text-indigo-400" />,
  () => <AlertCircle className="w-6 h-6 text-red-400" />,
  () => <Target className="w-6 h-6 text-yellow-400" />,
  () => <Users className="w-6 h-6 text-pink-400" />,
  () => <Sliders className="w-6 h-6 text-teal-400" />
];
