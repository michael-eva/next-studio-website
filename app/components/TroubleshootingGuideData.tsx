import { ReactNode } from 'react';
import { Search, BookOpen, Layers, CheckCircle, RefreshCcw, Settings, AlertCircle, Terminal, Users, Info, MessageSquare, Database, TestTube, RotateCcw, FileText, Wrench, Target, ListChecks, HelpCircle, Sliders, MapPin, Microscope, Bug, ExternalLink, FlaskConical, Lightbulb, FileSearch, BookOpenCheck } from 'lucide-react';

export const genericTips = [
  {
    title: "Verify Inputs & Prompts",
    description: "Ensure prompts are clear, specific, and detailed. Vague inputs lead to unexpected outputs. If AI misinterprets requests, rephrase with more context or break into smaller parts.",
    graphic: "prompt",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Consult Documentation",
    description: "Check official documentation, help guides, and community forums for platform-specific solutions and known issues.",
    graphic: "documentation",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Validate Data Connections",
    description: "Verify API keys, endpoints, database connections, and integration configurations. Check for authentication errors or incorrect data formats.",
    graphic: "database",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Test Components Incrementally",
    description: "Build and test small parts before scaling. Isolate issues by testing individual components (buttons, forms, workflows) to pinpoint failure points.",
    graphic: "testing",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Clear Cache & Reset Sessions",
    description: "Clear browser cache, log out/in, or reset the workspace. Cached data or corrupted sessions often cause unexpected behavior.",
    graphic: "refresh",
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "Update Software & Tools",
    description: "Ensure browser, plugins, and the app builder are current. Outdated tools frequently cause compatibility issues.",
    graphic: "update",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Analyze Error Messages",
    description: "Review error logs and debug information carefully. They typically indicate specific issues like missing fields, syntax errors, or permission problems.",
    graphic: "error",
    color: "from-red-400 to-red-600"
  },
  {
    title: "Simplify & Isolate Issues",
    description: "Remove complex features temporarily to test core functionality. Add components back one at a time to identify problematic elements.",
    graphic: "simplify",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Leverage Community Resources",
    description: "Search platform forums, Reddit, or Stack Overflow for similar issues. Contact support with detailed information including screenshots and error codes.",
    graphic: "community",
    color: "from-pink-400 to-pink-600"
  },
  {
    title: "Adjust Platform Settings",
    description: "Experiment with model versions, output formats, and performance settings. Different configurations may resolve compatibility or functionality issues.",
    graphic: "settings",
    color: "from-teal-400 to-teal-600"
  }
];

export const frameworkSteps = [
  {
    step: 1,
    title: "Define the Problem Clearly",
    description: "Write down exactly what's not working. Be specific about the behavior you expect versus what's happening.",
    details: "Example: 'The form submission button should save user data to the database, but nothing happens when clicked.'",
    action: "Note any error messages, unexpected outputs, or visual glitches. Take screenshots or record a short video if possible.",
    graphic: "define",
    color: "from-red-400 to-red-600"
  },
  {
    step: 2,
    title: "Map the App's Components",
    description: "Break your app into logical components or layers. Most AI app builders organize apps into different architectural layers.",
    details: "• Frontend/UI: Visual elements like buttons, forms, or pages\n• Backend/Logic: Workflows, AI-generated code, or automation rules\n• Data: Databases, APIs, or external integrations\n• AI Features: AI-generated content, logic, or responses",
    action: "Sketch a simple flowchart of how data or user actions move through the app (e.g., User → Button → Workflow → Database).",
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
    details: "• Permissions: Does the user role have access?\n• Integrations: Are API keys, webhooks correctly set up?\n• Platform Limits: Are you hitting usage quotas?\n• AI-Specific: Are model versions compatible?",
    action: "Verify credentials, test external services independently, and check the platform's status page for issues.",
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

// Enhanced graphic components with more visual appeal
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
  ),
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

export const EnhancedFrameworkSteps = () => {
  return (
    <div className=" rounded-2xl shadow-sm border border-gray-200 mb-8 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
            <ListChecks className="w-5 h-5 text-white" />
          </div>
          Framework to Diagnose App Issues in AI App Builders
        </h2>
        <p className="text-blue-900 font-medium mb-2">
          This section provides a general methodology for systematically identifying, isolating, and resolving issues in your project. Following these steps helps reduce technical debt and improve long-term maintainability.
        </p>
        <p className="text-gray-600">
          Step-by-step methodology for systematically identifying and resolving problems
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {frameworkSteps.map((step, index) => {
          const GraphicComponent = TipGraphics[step.graphic as keyof typeof TipGraphics];
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Background decoration */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${step.color} opacity-5 rounded-full transition-opacity group-hover:opacity-10`}></div>
              <div className="relative flex items-start gap-4">
                {/* Enhanced graphic */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  {GraphicComponent ? <GraphicComponent /> : (
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                      <ListChecks className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <span className="mt-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-base shadow">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-gray-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  {step.details && (
                    <ul className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-2 text-emerald-700 text-xs md:text-sm list-disc pl-5">
                      {step.details.split('\n').map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-medium text-blue-800 mb-1 text-xs md:text-sm">Action:</h4>
                    <ul className="text-blue-700 text-xs md:text-sm list-disc pl-5">
                      {step.action.split(/(?<=\.) /g).map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
