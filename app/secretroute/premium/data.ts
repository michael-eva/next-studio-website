interface Issue {
  id: string;
  platform: string;
  title: string;
  category: string;
  severity: string;
  tags: string[];
  description: string;
  symptoms: string[];
  solutions: {
    method: string;
    description: string;
  }[];
  frameworkSteps: number[];
}

interface Platform {
  id: string;
  name: string;
  description: string;
  logo: string;
  color: string;
  issueCount: number;
  status: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface Severity {
  id: string;
  name: string;
  color: string;
  description: string;
}

interface TroubleshootingData {
  platforms: Platform[];
  categories: Category[];
  severities: Severity[];
  issues: Issue[];
}

export const issues = [
  // BOLT.NEW ISSUES
  {
    id: "bolt_context_loss",
    platform: "bolt",
    title: "AI Context Loss in Large or Ongoing Projects",
    category: "context",
    severity: "critical",
    tags: ["AI", "Context", "Large Projects", "Memory"],
    description:
      "Bolt.new struggles to maintain context for larger or iterative projects, leading to issues where the AI forgets previous instructions or fails to integrate new changes seamlessly.",
    symptoms: [
      "Features don't work as expected after multiple prompts",
      "AI generates code that conflicts with earlier instructions",
      "Previously working features break when adding new ones",
      "AI asks for information already provided",
    ],
    solutions: [
      {
        method: "Break Tasks into Smaller Chunks",
        description:
          "Divide your project into smaller, manageable tasks (e.g., separate frontend and backend development). Prompt Bolt for one feature at a time to reduce context overload.",
      },
      {
        method: "Summarize and Save Context",
        description:
          "Before starting a new session, ask Bolt to generate a summary of your conversation (Prompt: Please generate a short summary of our conversation so far). Save this as a .txt or .md file to reference in future prompts.",
      },
      {
        method: "Duplicate Projects",
        description:
          "If the AI becomes unresponsive or loses context, duplicate your project in Bolt to reset the AI context window. Copy the saved summary into the new project to maintain continuity.",
      },
    ],
    frameworkSteps: [4, 7],
  },
  {
    id: "bolt_code_errors",
    platform: "bolt",
    title: "Errors in AI-Generated Code",
    category: "code_errors",
    severity: "moderate",
    tags: ["Console Errors", "Runtime", "React Native", "Text Nodes"],
    description:
      "Users frequently report console errors, text node errors, or runtime issues in Bolt-generated code, especially as project complexity increases.",
    symptoms: [
      "App crashes on startup",
      "Console shows 'Unexpected text node' errors",
      "Features fail to load completely",
      "Build process fails with errors",
    ],
    solutions: [
      {
        method: "Use Bolt's Error Detection",
        description:
          "Bolt's terminal error detection feature can identify issues in the development environment. Review the error logs in the Bolt interface and follow AI-suggested fixes.",
      },
      {
        method: "Manually Inspect Code",
        description:
          "Check the generated code in Bolt's editor (right panel). For text node errors, ensure text is wrapped in proper components (e.g., <Text> in React Native).",
      },
      {
        method: "Simplify Prompts",
        description:
          "If errors persist, simplify your prompt to focus on basic functionality before adding complex features.",
      },
      {
        method: "Iterate with Specific Prompts",
        description:
          "Prompt Bolt to fix specific errors (e.g., 'Fix the text node error in the tab layout by wrapping content in Text components').",
      },
    ],
    frameworkSteps: [3, 4],
  },
  {
    id: "bolt_performance",
    platform: "bolt",
    title: "Performance Issues (Sluggish Responses or Long Build Times)",
    category: "performance",
    severity: "moderate",
    tags: ["Performance", "Build Time", "WebContainers", "Mobile Apps"],
    description:
      "Users report slow response times or long build times, particularly for mobile apps or complex projects, which can stall development.",
    symptoms: [
      "App takes too long to build",
      "Prompts are slow to process",
      "Interface lags during use",
      "WebContainer becomes unresponsive",
    ],
    solutions: [
      {
        method: "Free Up System Resources",
        description:
          "Close unnecessary browser tabs or applications to free up memory, as Bolt relies on WebContainers, which can be resource-intensive.",
      },
      {
        method: "Use a Chromium-Based Browser",
        description:
          "Ensure you're using Chrome or a Chromium-based browser, as Bolt's WebContainers perform best there. Disable ad blockers or VPNs if they interfere.",
      },
      {
        method: "Reduce Project Size",
        description:
          "Break large projects into smaller sub-projects (e.g., separate frontend and backend) to reduce memory usage. Use Bolt's Knip tool to clean up unused code.",
      },
      {
        method: "Upgrade Plan",
        description:
          "If you're hitting token limits on the free tier, consider a paid plan (e.g., $20/month Pro plan) for more tokens and faster processing.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "bolt_integration_issues",
    platform: "bolt",
    title: "Integration Issues (Supabase, GitHub)",
    category: "integration",
    severity: "moderate",
    tags: ["Supabase", "GitHub", "Database", "Migrations", "API"],
    description:
      "Issues arise with integrations like Supabase (for backend) or GitHub (for version control), such as forgotten database migrations or failed connections.",
    symptoms: [
      "Database operations fail",
      "API calls don't work",
      "GitHub imports cause errors",
      "Supabase connection timeouts",
    ],
    solutions: [
      {
        method: "Verify Integration Setup",
        description:
          "For Supabase, ensure one-click integration is correctly configured and environment variables (e.g., Supabase keys) are set. Check Bolt's Supabase integration guide.",
      },
      {
        method: "Reapply Migrations",
        description:
          "If Bolt forgets Supabase migrations (common when importing GitHub repos), manually reapply them via Supabase's dashboard or prompt Bolt to regenerate schemas.",
      },
      {
        method: "Test Connections Independently",
        description:
          "Use Bolt's chat interface to troubleshoot (e.g., 'Fix Supabase database connection error'). Test API calls outside Bolt (e.g., via Postman) to confirm the issue.",
      },
    ],
    frameworkSteps: [3, 6],
  },
  {
    id: "bolt_broken_features",
    platform: "bolt",
    title: "Broken or Missing Features After Prompting",
    category: "code_errors",
    severity: "moderate",
    tags: ["Features", "Navigation", "UI Elements", "Implementation"],
    description:
      "Bolt may fail to implement requested features correctly (e.g., broken breadcrumb navigation or missing images in an e-commerce app) due to vague prompts or AI misinterpretation.",
    symptoms: [
      "Features like filters don't work as intended",
      "Navigation elements are non-functional",
      "UI elements are incomplete or missing",
      "User interactions have no effect",
    ],
    solutions: [
      {
        method: "Use Specific Prompts",
        description:
          "Be explicit in your prompts, including details like framework, styling, or functionality (e.g., 'Create a filter with checkboxes for sex and age, and show colors with a colored circle next to each checkbox').",
      },
      {
        method: "Enhance Prompts",
        description:
          "Use Bolt's 'enhance prompt' feature to refine your instructions before submitting. Review and edit the enhanced prompt for clarity.",
      },
      {
        method: "Iterate Incrementally",
        description:
          "Start with basic features, then add complexity in follow-up prompts (e.g., scaffold a basic page before adding animations).",
      },
      {
        method: "Manually Fix Code",
        description:
          "If a feature is broken, inspect the code in Bolt's editor and make manual adjustments or prompt Bolt to fix specific issues.",
      },
    ],
    frameworkSteps: [3, 4],
  },
  {
    id: "bolt_mobile_deployment",
    platform: "bolt",
    title: "Mobile App Build or Deployment Issues",
    category: "deployment",
    severity: "critical",
    tags: ["Mobile", "Expo", "Build", "Certificates", "App Store"],
    description:
      "Building mobile apps with Bolt and Expo can result in build failures, app crashes, or deployment rejections due to missing certificates or platform-specific issues.",
    symptoms: [
      "Build fails with certificate errors",
      "App crashes on devices",
      "App store submissions are rejected",
      "Expo build process hangs",
    ],
    solutions: [
      {
        method: "Check Certificates",
        description:
          "Ensure Apple and Google Developer account certificates are set up correctly. Use Expo's EAS (Expo Application Services) to guide certificate setup.",
      },
      {
        method: "Review Error Logs",
        description:
          "Check Expo dashboard logs for crash causes, often due to missing dependencies or platform-specific code. Prompt Bolt to fix specific errors.",
      },
      {
        method: "Verify Platform Requirements",
        description:
          "Ensure your app meets App Store and Google Play guidelines (e.g., proper app.json configuration). Update the app's 'name' and 'slug' fields in app.json.",
      },
      {
        method: "Test with TestFlight",
        description:
          "For iOS, use TestFlight to test before public release. Follow Expo's deployment prompts to share a testable URL.",
      },
    ],
    frameworkSteps: [3, 6],
  },
  {
    id: "bolt_token_limits",
    platform: "bolt",
    title: "Token Limit Issues on Free Tier",
    category: "platform_limits",
    severity: "minor",
    tags: ["Tokens", "Free Tier", "Limits", "Pricing"],
    description:
      "Free-tier users hit daily token limits, pausing AI interactions until the next day or requiring a paid plan. This can disrupt development.",
    symptoms: [
      "AI stops responding mid-conversation",
      "Message indicates token limit reached",
      "Development progress halted",
      "Features remain incomplete",
    ],
    solutions: [
      {
        method: "Maximize Token Efficiency",
        description:
          "Batch simple instructions into one prompt (e.g., 'Change the color scheme to blue, add mobile responsiveness, and restart the server').",
      },
      {
        method: "Upgrade to Paid Plan",
        description:
          "Consider the $20/month Pro plan for 10 million tokens and private projects. Check pricing details at bolt.new.",
      },
      {
        method: "Work in Smaller Chunks",
        description:
          "Break complex tasks into smaller prompts to stay within limits and make progress incrementally.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "bolt_backend_security",
    platform: "bolt",
    title: "Complex Backend Logic Not Production-Ready",
    category: "authentication",
    severity: "critical",
    tags: ["Backend", "Security", "APIs", "Production", "Authentication"],
    description:
      "While Bolt excels at frontend and simple backend tasks, complex backend logic (e.g., custom APIs) may require manual refinement or security reviews, making it less production-ready.",
    symptoms: [
      "Backend features fail under load",
      "Security vulnerabilities in APIs",
      "Exposed API keys in code",
      "Authentication bypasses work",
    ],
    solutions: [
      {
        method: "Use Supabase for Backend",
        description:
          "Leverage Bolt's Supabase integration for scalable backend tasks (e.g., authentication, database). Prompt Bolt to generate secure API calls like supabase.auth.signUp().",
      },
      {
        method: "Secure API Keys",
        description:
          "Prompt Bolt to mask API keys in environment variables (e.g., 'Add environment variables to mask the Supabase API key and add .env to .gitignore').",
      },
      {
        method: "Manual Security Review",
        description:
          "Inspect backend code for vulnerabilities (e.g., exposed keys) and test APIs locally or with tools like Postman.",
      },
      {
        method: "Combine with Traditional Development",
        description:
          "For complex backends, use Bolt for prototyping and manually refine code for production.",
      },
    ],
    frameworkSteps: [3, 6],
  },

  // LOVABLE ISSUES
  {
    id: "lovable_incomplete_generation",
    platform: "lovable",
    title: "Incorrect or Incomplete Initial Code Generation",
    category: "code_errors",
    severity: "moderate",
    tags: ["AI Generation", "Prompts", "Features"],
    description:
      "Lovable's AI may generate a basic or incomplete app structure based on user prompts, missing specific features or functionalities unless explicitly requested.",
    symptoms: [
      "Basic app structure lacks advanced features",
      "Missing specific functionality despite clear requests",
      "AI generates generic templates instead of custom solutions",
    ],
    solutions: [
      {
        method: "Refine Prompts",
        description:
          "Be specific and detailed in your prompts. Instead of 'Create a to-do app,' use 'Create a to-do app with a sidebar for project switching, a Today page for urgent tasks, and scheduling capabilities.'",
      },
      {
        method: "Iterate Incrementally",
        description:
          "Start with a basic app and add features iteratively by describing changes in Lovable's chat interface.",
      },
      {
        method: "Review Preview",
        description:
          "Use Lovable's real-time preview to check the generated app and refine prompts if the output doesn't match expectations.",
      },
    ],
    frameworkSteps: [1, 4],
  },
  {
    id: "lovable_frontend_backend_errors",
    platform: "lovable",
    title: "Errors in Frontend or Backend Integration",
    category: "integration",
    severity: "moderate",
    tags: ["Frontend", "Backend", "Supabase", "Figma", "API"],
    description:
      "Users encounter errors when integrating frontend designs (e.g., from Figma) or backend services (e.g., Supabase). Forms may fail to connect to databases, or frontend elements may not render correctly.",
    symptoms: [
      "Forms fail to submit to database",
      "Frontend elements don't render correctly",
      "API integration failures",
      "Figma imports have layout issues",
    ],
    solutions: [
      {
        method: "Debug with Lovable's Tools",
        description:
          "Use Lovable's AI-driven debugging tool or 'Try to Fix' button to analyze errors. For frontend issues, use chat mode to describe the problem.",
      },
      {
        method: "Prepare Figma Designs Properly",
        description:
          "Ensure Figma designs use Auto-Layout, proper padding, and descriptive layer names (e.g., 'Header' instead of 'Frame 23') for smooth export to Lovable.",
      },
      {
        method: "Provide API Documentation",
        description:
          "If an API integration fails, upload or link the API's documentation in Lovable's chat interface to guide the AI.",
      },
      {
        method: "Check Error Logs",
        description:
          "Review console output or error logs for clues. If the 'Try to Fix' button fails after three attempts, contact Lovable Support.",
      },
    ],
    frameworkSteps: [3, 6],
  },
  {
    id: "lovable_sync_issues",
    platform: "lovable",
    title: "Sync Issues Between Preview and Live Environments",
    category: "deployment",
    severity: "moderate",
    tags: ["Preview", "Live Site", "Deployment", "Sync"],
    description:
      "The live deployed app may appear outdated or differ from the preview environment, causing inconsistencies in functionality or design.",
    symptoms: [
      "Live site doesn't reflect preview changes",
      "Inconsistencies between preview and production",
      "Outdated content on live deployment",
    ],
    solutions: [
      {
        method: "Manually Redeploy",
        description:
          "If the live site is outdated, trigger a manual redeployment in Lovable to sync the latest changes.",
      },
      {
        method: "Test in Preview First",
        description:
          "Use the 'Spinning up preview' feature to test changes before deploying to avoid pushing incomplete updates.",
      },
      {
        method: "Clear Cache",
        description:
          "Clear browser or CDN cache (e.g., Cloudflare) to ensure the live site reflects the latest version.",
      },
      {
        method: "Check Dev Server",
        description:
          "Understand that the dev server includes debugging tools, which may cause performance differences. Compare preview and live outputs carefully.",
      },
    ],
    frameworkSteps: [5, 6],
  },
  {
    id: "lovable_security_vulnerabilities",
    platform: "lovable",
    title:
      "Security Vulnerabilities, Particularly with Row Level Security (RLS)",
    category: "authentication",
    severity: "critical",
    tags: ["Security", "RLS", "Supabase", "Authentication"],
    description:
      "Applications built with Lovable may have insecure RLS configurations in Supabase, potentially allowing unauthorized access to sensitive user data.",
    symptoms: [
      "Unauthorized users can access data",
      "RLS policies not enforced",
      "Data leakage between users",
      "Missing authentication checks",
    ],
    solutions: [
      {
        method: "Configure RLS Policies",
        description:
          "In Supabase, create and test RLS policies for each table to restrict access based on user roles or IDs. Use Lovable's chat to request assistance.",
      },
      {
        method: "Add Error Handling",
        description:
          "Implement error handling in forms (e.g., toast notifications for login failures) to prevent unauthorized access attempts.",
      },
      {
        method: "Audit Security",
        description:
          "Regularly review Supabase's security settings and RLS policies. Use Lovable's chat to ask for a security audit.",
      },
      {
        method: "Use Secure Authentication",
        description:
          "Implement Supabase authentication with email/password or JWT tokens and protected routes for logged-in users only.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "lovable_seo_challenges",
    platform: "lovable",
    title: "SEO Challenges Due to Client-Side Rendering",
    category: "performance",
    severity: "moderate",
    tags: ["SEO", "Client-Side Rendering", "SSR", "Search Engines"],
    description:
      "Apps built with Lovable may struggle with search engine indexing because they render content on the client side, making it difficult for crawlers to see the content.",
    symptoms: [
      "Poor search engine rankings",
      "Content not indexed by Google",
      "Missing meta tags in search results",
      "Low organic traffic",
    ],
    solutions: [
      {
        method: "Enable Server-Side Rendering (SSR)",
        description:
          "Use Lovable's chat to request SSR setup or export the code to a framework like Next.js and configure SSR manually.",
      },
      {
        method: "Use Pre-rendering",
        description:
          "Configure pre-rendering or static site generation (SSG) for key pages to improve SEO. Ask Lovable to set this up.",
      },
      {
        method: "Add Meta Tags",
        description:
          "Ensure dynamic meta tags (title, description) are added via Lovable's visual editor or chat prompts to improve crawler visibility.",
      },
      {
        method: "Test with SEO Tools",
        description:
          "Use tools like Google Search Console to verify indexing and identify crawl issues.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "lovable_hardcoded_ids",
    platform: "lovable",
    title: "Hardcoded Project IDs or Misconfigured Supabase Secrets",
    category: "deployment",
    severity: "moderate",
    tags: [
      "Hardcoded IDs",
      "Environment Variables",
      "Supabase",
      "Configuration",
    ],
    description:
      "Lovable may hardcode project IDs in Supabase configurations, causing issues when moving between development and production environments.",
    symptoms: [
      "Environment-specific deployment failures",
      "Hardcoded values in configuration",
      "Missing environment variables",
      "Development vs production inconsistencies",
    ],
    solutions: [
      {
        method: "Check for Hardcoded IDs",
        description:
          "Search the codebase for hardcoded Supabase project IDs and replace them with environment variables. Use Lovable's chat to request this.",
      },
      {
        method: "Set Supabase Secrets",
        description:
          "Add Supabase secrets (e.g., API keys) to the development environment (DEV) via Lovable's settings or Supabase dashboard.",
      },
      {
        method: "Use Environment Variables",
        description:
          "Export the app to GitHub and configure environment variables for DEV and PROD environments to avoid hardcoding.",
      },
      {
        method: "Test Configurations",
        description:
          "Test Supabase connections in both DEV and PROD after making changes to ensure functionality.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "lovable_complex_features",
    platform: "lovable",
    title: "Limitations with Complex or Specialized Features",
    category: "customization",
    severity: "moderate",
    tags: ["Complex Features", "3D Graphics", "Custom Logic", "Integrations"],
    description:
      "Lovable may struggle with highly complex or niche features, such as advanced 3D graphics or custom game logic, due to its AI-driven approach.",
    symptoms: [
      "Complex features don't work as expected",
      "AI struggles with specialized requirements",
      "Limited support for advanced integrations",
      "Custom logic implementation fails",
    ],
    solutions: [
      {
        method: "Leverage Integrations",
        description:
          "Use Lovable's ready-made integrations (e.g., Three.js for 3D graphics, Highcharts for data visualization) and provide detailed prompts to configure them.",
      },
      {
        method: "Export and Refine",
        description:
          "For complex features, export the code to GitHub and refine it in a code editor like Cursor or VS Code.",
      },
      {
        method: "Break Down Features",
        description:
          "Divide complex features into smaller components and implement them iteratively via Lovable's chat.",
      },
      {
        method: "Evaluate Alternatives",
        description:
          "For highly specialized apps, consider hybrid workflows where Lovable handles the MVP and a developer refines advanced features.",
      },
    ],
    frameworkSteps: [4, 7],
  },
  {
    id: "lovable_persistent_errors",
    platform: "lovable",
    title: "Errors Persisting Despite AI Fixes",
    category: "bugs",
    severity: "moderate",
    tags: ["Persistent Errors", "AI Debugging", "Support"],
    description:
      "Some errors persist even after using Lovable's 'Try to Fix' button or AI debugging, frustrating users during development.",
    symptoms: [
      "Errors remain after multiple fix attempts",
      "AI debugging tools ineffective",
      "Same issues recurring",
      "Support needed but slow response",
    ],
    solutions: [
      {
        method: "Provide More Context",
        description:
          "In chat mode, describe the error in detail, including steps to reproduce and expected behavior.",
      },
      {
        method: "Take Screenshots",
        description:
          "Upload screenshots of the error or UI issue to Lovable's chat for better AI analysis.",
      },
      {
        method: "Check Documentation",
        description:
          "Review Lovable's documentation or Supabase's guides for manual fixes if the AI fails.",
      },
      {
        method: "Contact Support",
        description:
          "If the issue persists after three AI fix attempts, reach out to Lovable Support via their support page for human assistance.",
      },
    ],
    frameworkSteps: [7, 8],
  },

  // Continue with REPLIT ISSUES...
  {
    id: "replit_ai_bugs",
    platform: "replit",
    title: "AI-Generated Code Contains Bugs or Incomplete Features",
    category: "code_errors",
    severity: "moderate",
    tags: ["AI Generation", "Bugs", "Authentication", "Database"],
    description:
      "Replit Agent often produces apps with basic functionality but struggles with complex features or introduces bugs, such as broken authentication or database issues, requiring manual fixes.",
    symptoms: [
      "Only simple apps work reliably without errors",
      "Authentication systems don't function properly",
      "Database connections fail",
      "Complex logic contains bugs",
    ],
    solutions: [
      {
        method: "Improve Prompts",
        description:
          "Use clear, specific natural language prompts. Leverage Replit's 'Improve Prompt' feature to enhance vague inputs.",
      },
      {
        method: "Iterate Incrementally",
        description:
          "Start with a simple app and add features one at a time, testing each addition in Replit's preview mode to catch errors early.",
      },
      {
        method: "Manually Debug",
        description:
          "For non-coders, use Replit's AI Assistant to explain errors. For coders, inspect the generated code and fix issues directly.",
      },
      {
        method: "Supplement with External AI",
        description:
          "Export the codebase to GitHub and use tools like ChatGPT or Claude for advanced debugging or feature additions.",
      },
    ],
    frameworkSteps: [3, 4],
  },
  {
    id: "replit_deployment_failures",
    platform: "replit",
    title: "Deployment Failures or Inconsistent Behavior",
    category: "deployment",
    severity: "critical",
    tags: [
      "Deployment",
      "Production",
      "Environment Variables",
      "Health Checks",
    ],
    description:
      "Apps work in Replit's development environment but fail after deployment, particularly with features like subscriptions, payments, or authentication.",
    symptoms: [
      "Apps crash in production",
      "Features work in dev but fail in production",
      "Health check failures during deployment",
      "Missing functionality after deployment",
    ],
    solutions: [
      {
        method: "Check Environment Variables",
        description:
          "Ensure API keys, database URLs, and secrets are correctly set in Replit's 'Secrets' tab, not hardcoded in the code.",
      },
      {
        method: "Use Managed Databases",
        description:
          "Switch to Replit's production-grade database or external services like PostgreSQL instead of in-memory databases like SQLite.",
      },
      {
        method: "Run Build Commands",
        description:
          "Before deploying, execute npm run build or equivalent in Replit's shell to generate production-ready files.",
      },
      {
        method: "Disable Health Checks",
        description:
          "If health checks cause build failures, disable them temporarily via Replit's deployment settings.",
      },
      {
        method: "Use External Hosting",
        description:
          "For persistent issues, export the codebase and deploy via AWS Amplify, Tiiny Host, or Vercel for more control.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "replit_auth_vulnerabilities",
    platform: "replit",
    title: "Authentication and Security Vulnerabilities",
    category: "authentication",
    severity: "critical",
    tags: ["Authentication", "Security", "Sessions", "JWT"],
    description:
      "Apps have insecure authentication flows, such as sessions expiring too soon or missing JWT/cookie-based auth, leading to login failures or security holes.",
    symptoms: [
      "Login sessions expire too quickly",
      "Authentication flows are incomplete",
      "Security vulnerabilities in user management",
      "Session persistence issues",
    ],
    solutions: [
      {
        method: "Use Replit Auth",
        description:
          "Integrate Replit's built-in authentication system for quick, secure user management without manual coding.",
      },
      {
        method: "Implement OAuth",
        description:
          "Add OAuth providers (e.g., Google, GitHub) via Replit's integrations for reliable authentication.",
      },
      {
        method: "Secure Secrets",
        description:
          "Store API keys and sensitive data in Replit's 'Secrets' tab to prevent exposure in the codebase.",
      },
      {
        method: "Add Session Handling",
        description:
          "Manually implement JWT or secure cookie-based auth if Replit Agent's setup is inadequate.",
      },
    ],
    frameworkSteps: [6, 3],
  },
  {
    id: "replit_interface_difficulty",
    platform: "replit",
    title: "Unintuitive Interface for Non-Coders",
    category: "learning_curve",
    severity: "moderate",
    tags: ["Interface", "Non-Coders", "Usability"],
    description:
      "Non-coders find Replit's interface, especially for AI-driven development, less intuitive than other no-code platforms, leading to frustration with testing and troubleshooting.",
    symptoms: [
      "Interface seems complex for beginners",
      "Difficulty navigating development tools",
      "Confusion with testing and debugging processes",
      "Overwhelmed by coding concepts",
    ],
    solutions: [
      {
        method: "Start with Tutorials",
        description:
          "Use Replit's documentation, video series, or DataCamp's Replit Agent walkthrough to learn the interface.",
      },
      {
        method: "Use Templates",
        description:
          "Start with Replit's community-contributed templates (e.g., for React or Flask) to simplify setup and reduce manual configuration.",
      },
      {
        method: "Leverage AI Assistant",
        description:
          "Use Replit's AI Assistant for explanations (e.g., 'What does this error mean?') to bridge knowledge gaps without coding expertise.",
      },
      {
        method: "Engage Community",
        description:
          "Post questions on Replit's Community Hub, Reddit (r/replit), or ask.replit.com for non-coder-friendly advice.",
      },
    ],
    frameworkSteps: [7, 8],
  },
  {
    id: "replit_recursive_loops",
    platform: "replit",
    title: "Recursive Loops or Unwanted AI Fixes",
    category: "bugs",
    severity: "moderate",
    tags: ["Recursive Loops", "AI Fixes", "Code Breaking"],
    description:
      "Replit Agent sometimes enters recursive loops when fixing bugs, breaking previously working code or making unauthorized changes despite user instructions.",
    symptoms: [
      "AI breaks working features while fixing others",
      "Recursive error-fixing loops",
      "Unauthorized code modifications",
      "Previously stable code becomes unstable",
    ],
    solutions: [
      {
        method: "Be Explicit in Prompts",
        description:
          "Instruct the AI to avoid modifying specific components (e.g., 'Fix the search bar without changing the database').",
      },
      {
        method: "Review AI Plans",
        description:
          "Before approving AI-generated plans, check the proposed changes in Replit's interface to ensure they align with your intent.",
      },
      {
        method: "Use Version Control",
        description:
          "Leverage Replit's built-in version control to revert to a stable state if the AI introduces breaking changes.",
      },
      {
        method: "Manually Intervene",
        description:
          "Pause AI fixes and edit the code directly if recursive issues persist. Use Replit's AI Assistant to explain changes before applying them.",
      },
    ],
    frameworkSteps: [5, 4],
  },
  {
    id: "replit_testing_limitations",
    platform: "replit",
    title: "Limited Testing Capabilities",
    category: "bugs",
    severity: "moderate",
    tags: ["Testing", "UI Testing", "Frontend", "Quality Assurance"],
    description:
      "Replit Agent's testing, especially for front-end UI, is inadequate, often relying on API tests rather than simulating real user interactions, leading to undetected bugs.",
    symptoms: [
      "UI bugs not caught by automated tests",
      "API tests pass but UI fails",
      "Missing user interaction testing",
      "Inadequate frontend validation",
    ],
    solutions: [
      {
        method: "Manual UI Testing",
        description:
          "Use Replit's preview mode to manually test UI elements like buttons and forms, simulating user interactions.",
      },
      {
        method: "Add Test Cases",
        description:
          "Request the AI to generate UI test scripts or use external tools like Playwright if comfortable coding.",
      },
      {
        method: "Engage Community",
        description:
          "Seek UI testing tips on Replit's Community Hub or r/replit, where users share scripts and workflows.",
      },
      {
        method: "Use External Tools",
        description:
          "Export the app to GitHub and test with tools like Cypress or Selenium for comprehensive UI testing.",
      },
    ],
    frameworkSteps: [3, 7],
  },
  {
    id: "replit_credit_limits",
    platform: "replit",
    title: "High Costs and Agent Credit Limits",
    category: "platform_limits",
    severity: "moderate",
    tags: ["Credits", "Costs", "Pricing", "Limits"],
    description:
      "Users run out of Replit Agent credits quickly, especially during debugging or complex builds, leading to unexpected costs or halted development.",
    symptoms: [
      "Credits exhausted during development",
      "Unexpected billing charges",
      "Development halted due to credit limits",
      "Frequent need to purchase additional credits",
    ],
    solutions: [
      {
        method: "Optimize Prompts",
        description:
          "Reduce credit usage by writing concise, specific prompts to minimize AI iterations.",
      },
      {
        method: "Limit AI Fixes",
        description:
          "Manually fix simple errors instead of relying on the AI to conserve credits.",
      },
      {
        method: "Monitor Usage",
        description:
          "Check credit usage in Replit's dashboard and budget for additional credits if needed.",
      },
      {
        method: "Explore Alternatives",
        description:
          "For cost-sensitive projects, consider no-code platforms like Bubble or Momen, which don't rely on AI credit systems.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "replit_domain_issues",
    platform: "replit",
    title: "Custom Domain Linking Problems",
    category: "deployment",
    severity: "minor",
    tags: ["Custom Domains", "DNS", "Verification", "UI Bugs"],
    description:
      "Users face issues linking custom domains, such as verification buttons not appearing or non-scrollable pages, preventing professional deployment.",
    symptoms: [
      "Domain verification buttons missing",
      "DNS configuration issues",
      "Non-scrollable domain setup pages",
      "Failed custom domain connections",
    ],
    solutions: [
      {
        method: "Follow Documentation",
        description:
          "Use Replit's 'Custom Domains' guide to set up DNS records (e.g., CNAME or A records) correctly.",
      },
      {
        method: "Clear Browser Cache",
        description:
          "If the verification button is missing, clear the browser cache or try a different browser to fix UI issues.",
      },
      {
        method: "Contact Support",
        description:
          "Report interface bugs to support@replit.com with screenshots and account details.",
      },
      {
        method: "Use Alternative Hosting",
        description:
          "As a workaround, deploy via Tiiny Host, which simplifies custom domain setup.",
      },
    ],
    frameworkSteps: [6, 7],
  },

  // GLIDE ISSUES
  {
    id: "glide_customization_limits",
    platform: "glide",
    title: "Limited Customization and Design Flexibility",
    category: "customization",
    severity: "moderate",
    tags: ["Design", "Customization", "UI", "Templates"],
    description:
      "Apps often lack advanced personalization, with restricted control over UI elements, layouts, or branding, leading to generic-looking designs.",
    symptoms: [
      "Generic-looking app designs",
      "Limited control over UI elements",
      "Difficulty replicating complex designs",
      "Restricted branding options",
    ],
    solutions: [
      {
        method: "Use Custom CSS Sparingly",
        description:
          "Apply basic CSS for minor tweaks (e.g., fonts, colors) via Glide's custom code feature, but avoid complex styling due to PWA limitations.",
      },
      {
        method: "Leverage Templates",
        description:
          "Start with Glide's template library (e.g., CRM, inventory trackers) and customize within constraints to maintain aesthetics.",
      },
      {
        method: "Hire Experts",
        description:
          "For unique designs, engage Glide experts via LowCode Agency or Upwork to optimize within platform limits.",
      },
      {
        method: "Consider Alternatives",
        description:
          "For advanced customization, explore Bubble or FlutterFlow, which offer greater UI control and code export.",
      },
    ],
    frameworkSteps: [4, 7],
  },
  {
    id: "glide_scalability_issues",
    platform: "glide",
    title: "Scalability Challenges for Large Datasets or Users",
    category: "scalability",
    severity: "critical",
    tags: ["Scalability", "Performance", "Large Datasets", "Google Sheets"],
    description:
      "Apps slow down or crash with large datasets (e.g., thousands of records in Google Sheets) or high user volumes, impacting performance.",
    symptoms: [
      "App performance degrades with large datasets",
      "Crashes with high user volumes",
      "Slow loading times with many records",
      "Google Sheets performance bottlenecks",
    ],
    solutions: [
      {
        method: "Use Glide Tables",
        description:
          "Switch to Glide's native database (Glide Tables or Big Tables) for better performance and no update consumption compared to Google Sheets.",
      },
      {
        method: "Optimize Data",
        description:
          "Reduce dataset size by archiving old records or using filters to load only necessary data in lists.",
      },
      {
        method: "Implement Pagination",
        description:
          "Limit list displays to 10–20 items with 'load more' functionality to reduce load times.",
      },
      {
        method: "Upgrade Plan",
        description:
          "Move to the Enterprise plan for SQL integration and higher update limits to handle larger datasets.",
      },
    ],
    frameworkSteps: [3, 6],
  },
  {
    id: "glide_mobile_limitations",
    platform: "glide",
    title: "Limited Native App Publishing and Notifications",
    category: "mobile_publishing",
    severity: "moderate",
    tags: ["PWA", "Native Apps", "Push Notifications", "App Store"],
    description:
      "Glide apps are PWAs, not native apps, preventing direct publishing to the App Store or Google Play and lacking push notifications, which limits user engagement.",
    symptoms: [
      "Cannot publish to app stores directly",
      "No push notification support",
      "Limited native device features",
      "PWA-only distribution",
    ],
    solutions: [
      {
        method: "Embrace PWAs",
        description:
          "Share apps via URLs or QR codes for easy access without store submissions. Educate users on adding PWAs to home screens.",
      },
      {
        method: "Use Third-Party Services",
        description:
          "Integrate Integromat (Make) or Zapier with services like OneSignal for email or SMS notifications as a push notification alternative.",
      },
      {
        method: "Partner with Experts",
        description:
          "Use Glide's service to prepare apps for store submission, though this adds cost and complexity.",
      },
      {
        method: "Consider Alternatives",
        description:
          "For native apps, explore Adalo or FlutterFlow, which support direct store publishing and push notifications.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "glide_security_compliance",
    platform: "glide",
    title: "Data Security and Compliance Concerns",
    category: "authentication",
    severity: "critical",
    tags: ["Security", "GDPR", "HIPAA", "Compliance", "Data Protection"],
    description:
      "Apps handling sensitive data may not meet strict compliance standards like GDPR or HIPAA, risking legal issues.",
    symptoms: [
      "GDPR compliance concerns",
      "HIPAA certification issues",
      "Data security vulnerabilities",
      "Regulatory compliance gaps",
    ],
    solutions: [
      {
        method: "Set Access Controls",
        description:
          "Use Glide's role-based permissions to restrict data access (e.g., only logged-in users view sensitive fields).",
      },
      {
        method: "Secure Data Sources",
        description:
          "Ensure Google Sheets or Airtable are private and accessible only via API keys stored in Glide's settings.",
      },
      {
        method: "Use EU-Based Backends",
        description:
          "Integrate with GDPR-compliant backends like Xano (EU servers) for sensitive data storage.",
      },
      {
        method: "Consult Legal Experts",
        description:
          "Hire a compliance consultant to audit the app for GDPR/HIPAA adherence before launch.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "glide_integration_limits",
    platform: "glide",
    title: "Integration Limitations with Advanced APIs or AI",
    category: "integration",
    severity: "moderate",
    tags: ["API Integration", "AI Services", "Custom Workflows"],
    description:
      "Apps struggle to integrate with complex APIs or AI services (e.g., OpenAI, custom CRMs), limiting advanced functionality like chatbots or predictive analytics.",
    symptoms: [
      "Complex API integrations fail",
      "Limited AI service support",
      "Missing advanced workflow capabilities",
      "Chatbot integration difficulties",
    ],
    solutions: [
      {
        method: "Use Zapier/Make",
        description:
          "Connect Glide to APIs via Zapier or Make for integrations like Stripe, OpenAI, or Calendly. Test workflows in Glide's preview mode.",
      },
      {
        method: "Leverage Glide API",
        description:
          "Use Glide's Tables API for custom data interactions, though this requires developer support for complex setups.",
      },
      {
        method: "Hire Developers",
        description:
          "Engage a no-code developer to build custom API connectors using Integromat or JavaScript snippets in Glide.",
      },
      {
        method: "Explore Alternatives",
        description:
          "For AI-heavy apps, consider Bubble or Softr, which offer better plugin ecosystems.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "glide_learning_curve",
    platform: "glide",
    title: "Learning Curve for Complex Workflows",
    category: "learning_curve",
    severity: "moderate",
    tags: ["Workflows", "Computed Columns", "Logic", "Beginners"],
    description:
      "Non-technical users find Glide's workflows, computed columns, or role-based logic challenging, leading to errors or stalled projects.",
    symptoms: [
      "Difficulty with computed columns",
      "Complex workflow confusion",
      "Role-based logic errors",
      "Stalled project progress",
    ],
    solutions: [
      {
        method: "Follow Tutorials",
        description:
          "Use Glide's articles, videos, or community forums for step-by-step guidance on workflows and computed columns.",
      },
      {
        method: "Start with Templates",
        description:
          "Use pre-built templates to learn by example, customizing them incrementally to understand logic.",
      },
      {
        method: "Engage Community",
        description:
          "Post questions on Glide's community forum, Reddit (r/nocode), or X for practical advice.",
      },
      {
        method: "Simplify Logic",
        description:
          "Break complex workflows into smaller steps, testing each in Glide's preview mode to isolate errors.",
      },
    ],
    frameworkSteps: [7, 8],
  },
  {
    id: "glide_migration_issues",
    platform: "glide",
    title: "Migration Issues with Classic Apps",
    category: "bugs",
    severity: "moderate",
    tags: ["Migration", "Classic Apps", "Platform Updates", "Compatibility"],
    description:
      "Migrating from Glide's deprecated 'Classic Apps' to the new platform causes functionality loss or broken features, frustrating users.",
    symptoms: [
      "Features lost during migration",
      "Broken functionality after update",
      "Compatibility issues with new platform",
      "Migration process failures",
    ],
    solutions: [
      {
        method: "Follow Migration Guides",
        description:
          "Use Glide's official migration instructions to map Classic App features to the new platform. Check the community forum for updates.",
      },
      {
        method: "Test Pre-Migration",
        description:
          "Duplicate the app and test migration in a sandbox environment to identify issues before affecting live users.",
      },
      {
        method: "Engage Support",
        description:
          "Contact Glide's support via the community or email for migration assistance, though responses may be slow.",
      },
      {
        method: "Rebuild if Necessary",
        description:
          "For heavily affected apps, rebuild using new templates to ensure compatibility, leveraging Glide Tables for better performance.",
      },
    ],
    frameworkSteps: [5, 7],
  },

  // Continue with more issues...
  // BUBBLE ISSUES
  {
    id: "bubble_performance",
    platform: "bubble",
    title: "Poor App Performance and Slow Loading Times",
    category: "performance",
    severity: "critical",
    tags: ["Database", "Queries", "Optimization", "Repeating Groups"],
    description:
      "Apps, especially those with large datasets or complex workflows, experience slow page loads or sluggish performance, frustrating users.",
    symptoms: [
      "Pages load very slowly",
      "Database queries timeout",
      "Repeating groups are unresponsive",
      "App becomes sluggish with many users",
    ],
    solutions: [
      {
        method: "Optimize Database Queries",
        description:
          "Use relational database design to split data into related types. Avoid nested searches and advanced filters in repeating groups; use constraints in 'Do a Search for' to limit retrieved records.",
      },
      {
        method: "Implement Pagination",
        description:
          "Limit repeating groups to 10–20 items with 'load more' functionality or pagination to reduce data load. Enable lazy loading for visible items only.",
      },
      {
        method: "Optimize Images",
        description:
          "Compress images using tools like TinyPNG before uploading, ensuring they match container sizes to minimize bandwidth usage.",
      },
      {
        method: "Upgrade Plan",
        description:
          "For high-traffic apps, upgrade to the Growth ($149/month) or Team ($399/month) plan for dedicated server capacity.",
      },
    ],
    frameworkSteps: [3, 4],
  },
  {
    id: "bubble_plugin_conflicts",
    platform: "bubble",
    title: "Plugin Conflicts and Compatibility Issues",
    category: "integration",
    severity: "moderate",
    tags: ["Plugins", "Compatibility", "DOM Conflicts"],
    description:
      "Plugins cause unexpected behavior, such as elements not rendering or workflows failing, especially when multiple plugins overlap in functionality.",
    symptoms: [
      "Elements not rendering correctly",
      "Workflows failing unexpectedly",
      "Plugin functionality conflicts",
      "App crashes due to plugin issues",
    ],
    solutions: [
      {
        method: "Minimize Plugin Use",
        description:
          "Prioritize Bubble's built-in features (e.g., API Connector for integrations) or native workflows over third-party plugins.",
      },
      {
        method: "Select Reliable Plugins",
        description:
          "Choose plugins with frequent updates, high ratings, and active support in Bubble's marketplace.",
      },
      {
        method: "Test in Development",
        description:
          "Install and test plugins in a development environment before deploying to live, using Bubble's version control to revert if needed.",
      },
      {
        method: "Debug Conflicts",
        description:
          "Use Bubble's debugger to trace errors to specific plugins. Remove one plugin at a time to isolate conflicts.",
      },
    ],
    frameworkSteps: [3, 5],
  },
  {
    id: "bubble_responsive_design",
    platform: "bubble",
    title: "Inconsistent Responsive Design Across Devices",
    category: "ui_design",
    severity: "moderate",
    tags: ["Responsive Design", "Mobile", "Layout", "Cross-Device"],
    description:
      "Apps display incorrectly on mobile, tablet, or desktop, with misaligned or overlapping elements, despite Bubble's responsive engine.",
    symptoms: [
      "Misaligned elements on mobile",
      "Overlapping content on different devices",
      "Layout breaks on tablets",
      "Inconsistent appearance across browsers",
    ],
    solutions: [
      {
        method: "Use Responsive Viewer",
        description:
          "Test layouts in Bubble's Responsive Viewer, adjusting elements for mobile, tablet, and desktop using the drag-and-drop editor.",
      },
      {
        method: "Avoid Fixed Widths",
        description:
          "Set pages and groups to dynamic or full-width scaling with minimum/maximum width constraints to adapt to screen sizes.",
      },
      {
        method: "Test Across Browsers",
        description:
          "Verify rendering on Chrome, Safari, Firefox, and mobile browsers to catch scrollbar or alignment issues.",
      },
      {
        method: "Hire UI/UX Experts",
        description:
          "For complex designs, collaborate with a Bubble-certified designer (via Airdev or Upwork) to optimize layouts.",
      },
    ],
    frameworkSteps: [3, 5],
  },
  {
    id: "bubble_security_vulnerabilities",
    platform: "bubble",
    title: "Security Vulnerabilities with Privacy Rules",
    category: "authentication",
    severity: "critical",
    tags: ["Privacy Rules", "Security", "Data Access", "GDPR"],
    description:
      "Improperly configured privacy rules expose sensitive user data, risking breaches or GDPR non-compliance.",
    symptoms: [
      "Unauthorized data access",
      "Privacy rule misconfigurations",
      "Data breaches or leaks",
      "GDPR compliance violations",
    ],
    solutions: [
      {
        method: "Configure Privacy Rules",
        description:
          "In the Data tab, set rules to restrict access (e.g., only users with matching User IDs can view data). Test rules with Bubble's debugger.",
      },
      {
        method: "Implement Authentication",
        description:
          "Use Bubble's built-in authentication (email/password, SSO, 2FA) and protect pages with 'Require Login' conditions.",
      },
      {
        method: "Ensure GDPR Compliance",
        description:
          "Leverage Bubble's GDPR-compliant AWS hosting and enable encryption for sensitive data.",
      },
      {
        method: "Audit Regularly",
        description:
          "Periodically review privacy settings and use Bubble's analytics to monitor data access patterns.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "bubble_mobile_support",
    platform: "bubble",
    title: "Limited Native Mobile App Support",
    category: "mobile_publishing",
    severity: "moderate",
    tags: ["Native Apps", "PWA", "App Store", "Mobile"],
    description:
      "Building native iOS/Android apps is challenging, as Bubble primarily outputs PWAs. Users report App Store rejections or performance issues with wrappers.",
    symptoms: [
      "App Store rejections",
      "PWA limitations on mobile",
      "Wrapper performance issues",
      "Limited native device features",
    ],
    solutions: [
      {
        method: "Use PWAs",
        description:
          "Configure apps as PWAs for mobile browser access, avoiding store complexities. Promote home screen installation for a native-like experience.",
      },
      {
        method: "Test Wrappers",
        description:
          "If using BDK or MobiLoud, add unique features (e.g., offline capabilities) to meet App Store guidelines. Test via TestFlight for iOS.",
      },
      {
        method: "Join Beta Waitlist",
        description:
          "Sign up for Bubble's native mobile app builder waitlist for future support.",
      },
      {
        method: "Consider Alternatives",
        description:
          "For native-first apps, explore FlutterFlow or Adalo, which support direct store publishing.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "bubble_vendor_lockin",
    platform: "bubble",
    title: "Vendor Lock-In and Code Export Limitations",
    category: "vendor_lockin",
    severity: "moderate",
    tags: ["Vendor Lock-in", "Code Export", "Migration", "Platform Dependency"],
    description:
      "Apps are tied to Bubble's ecosystem, and the inability to export source code limits migration to other platforms, causing dependency concerns.",
    symptoms: [
      "Cannot export source code",
      "Platform dependency concerns",
      "Difficult migration to other platforms",
      "Proprietary ecosystem lock-in",
    ],
    solutions: [
      {
        method: "Accept Lock-In for MVPs",
        description:
          "Use Bubble for rapid prototyping, accepting lock-in for cost and speed benefits.",
      },
      {
        method: "Export Data",
        description:
          "Download data via Bubble's export tools (e.g., CSV, API) to facilitate migration to other platforms.",
      },
      {
        method: "Document Workflows",
        description:
          "Maintain detailed documentation of workflows and data structures to simplify future transitions.",
      },
      {
        method: "Use APIs for Flexibility",
        description:
          "Expose app data via Bubble's API Connector to integrate with external systems, enabling partial migration.",
      },
    ],
    frameworkSteps: [6, 8],
  },
  {
    id: "bubble_storage_costs",
    platform: "bubble",
    title: "High File Storage Costs",
    category: "platform_limits",
    severity: "moderate",
    tags: ["File Storage", "Costs", "AWS S3", "Storage Optimization"],
    description:
      "Bubble's file storage is expensive ($10/GB/month), making user-uploaded files costly and challenging to manage, especially for private files.",
    symptoms: [
      "High storage costs",
      "Expensive file management",
      "Budget concerns with user uploads",
      "Storage limit constraints",
    ],
    solutions: [
      {
        method: "Use External Storage",
        description:
          "Integrate AWS S3 or Wasabi using plugins or JavaScript to bypass Bubble's storage costs.",
      },
      {
        method: "Optimize Uploads",
        description:
          "Compress files and enforce size limits in workflows to minimize storage needs.",
      },
      {
        method: "Secure External Files",
        description:
          "Implement signed URLs for S3/Wasabi to mimic Bubble's privacy rules for private files.",
      },
      {
        method: "Test Integrations",
        description:
          "Verify external storage setups in a development environment before going live.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "bubble_learning_curve",
    platform: "bubble",
    title: "Steep Learning Curve for Complex Features",
    category: "learning_curve",
    severity: "moderate",
    tags: [
      "Learning Curve",
      "Workflows",
      "Database Management",
      "Visual Programming",
    ],
    description:
      "Non-technical users find Bubble's workflows, database management, and responsive design challenging, leading to errors or abandoned projects.",
    symptoms: [
      "Workflow complexity overwhelming",
      "Database design confusion",
      "Visual programming challenges",
      "Abandoned projects due to complexity",
    ],
    solutions: [
      {
        method: "Use Tutorials",
        description:
          "Leverage Bubble's documentation, tutorials, webinars, and community forums to learn workflows and best practices.",
      },
      {
        method: "Start with Templates",
        description:
          "Use pre-built templates from Airdev's Canvas or Bubble's marketplace to simplify setup.",
      },
      {
        method: "Take Courses",
        description:
          "Enroll in Bubble's academy or Airdev's 7-week bootcamp for hands-on learning.",
      },
      {
        method: "Build Incrementally",
        description:
          "Start with core features, testing each in the editor's preview mode before adding complexity.",
      },
    ],
    frameworkSteps: [7, 8],
  },
  {
    id: "bubble_insufficient_testing",
    platform: "bubble",
    title: "Insufficient Testing Before Launch",
    category: "bugs",
    severity: "moderate",
    tags: [
      "Testing",
      "Quality Assurance",
      "Launch Preparation",
      "Bug Prevention",
    ],
    description:
      "Apps launched without thorough testing have bugs or broken features, leading to poor user experiences.",
    symptoms: [
      "Bugs discovered post-launch",
      "Broken features in production",
      "Poor user experience",
      "Missing edge case testing",
    ],
    solutions: [
      {
        method: "Test in Preview Mode",
        description:
          "Use Bubble's editor to simulate user interactions and test workflows thoroughly.",
      },
      {
        method: "Test Across Devices",
        description:
          "Verify functionality on mobile, tablet, and desktop using the Responsive Viewer.",
      },
      {
        method: "Use Debugger",
        description:
          "Leverage Bubble's debugger to identify workflow errors and performance bottlenecks.",
      },
      {
        method: "Gather Beta Feedback",
        description:
          "Share the app with a small user group for feedback before full launch.",
      },
    ],
    frameworkSteps: [3, 5],
  },

  // ADALO ISSUES
  {
    id: "adalo_performance",
    platform: "adalo",
    title: "Poor App Performance and Slow Loading Times",
    category: "performance",
    severity: "critical",
    tags: ["Performance", "Components", "Database", "React"],
    description:
      "Apps, particularly those with large databases or complex screens, load slowly or feel unresponsive, degrading user experience.",
    symptoms: [
      "Apps load slowly with large databases",
      "Sluggish performance with many components",
      "Unresponsive screens with complex layouts",
      "Auto-refresh causing performance issues",
    ],
    solutions: [
      {
        method: "Optimize Components",
        description:
          "Review screens for unnecessary groups or hidden components and remove them. Replace text inputs with record collection properties to reduce processing load.",
      },
      {
        method: "Limit Data Retrieval",
        description:
          "Set a maximum number of retrieved items in lists (e.g., 10 products sorted by creation date) to avoid loading entire datasets.",
      },
      {
        method: "Optimize Images",
        description:
          "Compress user-uploaded images using Adalo's Imgix integration (e.g., set q=80 for quality). Resize images to match display sizes.",
      },
      {
        method: "Disable Auto-Refresh",
        description:
          "Avoid auto-refresh (every 5–10 seconds) to reduce resource strain. Use manual refresh or dynamic updates instead.",
      },
      {
        method: "Upgrade Plan",
        description:
          "For high-traffic apps, consider the Professional ($65/month) or Business ($250/month) plan for enhanced performance capabilities.",
      },
    ],
    frameworkSteps: [3, 6],
  },
  {
    id: "adalo_publishing_errors",
    platform: "adalo",
    title: "Publishing Errors to App Store or Google Play",
    category: "deployment",
    severity: "critical",
    tags: ["App Store", "Google Play", "Publishing", "Credentials"],
    description:
      "Users face errors when publishing to app stores, such as 'Unable to verify App Store Connect Credentials,' 'Version Code already used,' or 'Package Name exists.'",
    symptoms: [
      "App Store Connect credential verification failures",
      "Version code conflicts",
      "Package name already exists errors",
      "TestFlight upload failures",
    ],
    solutions: [
      {
        method: "Update Credentials",
        description:
          "Generate a new app-specific password in Apple ID settings and update it in Adalo's publish section. Enter 2FA codes correctly during publishing.",
      },
      {
        method: "Increment Version Code",
        description:
          "Increase the version code (e.g., from 1.0 to 1.1) in Adalo's settings to avoid conflicts.",
      },
      {
        method: "Use Unique Package Names",
        description:
          "Ensure the package name (e.g., com.yourapp.name) is unique in Google Play. Create a new listing if needed.",
      },
      {
        method: "Test with TestFlight",
        description:
          "Use TestFlight for iOS to validate builds before App Store submission, catching credential or bundle errors.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "adalo_platform_instability",
    platform: "adalo",
    title: "Bugs and Platform Instability",
    category: "bugs",
    severity: "moderate",
    tags: ["Platform Bugs", "Downtime", "AWS Outages", "Instability"],
    description:
      "Sudden bugs, crashes, or platform downtime disrupt development or app functionality, often without timely communication from Adalo.",
    symptoms: [
      "Unexpected platform downtime",
      "Sudden bugs appearing after updates",
      "App crashes without clear cause",
      "Development environment instability",
    ],
    solutions: [
      {
        method: "Monitor Updates",
        description:
          "Subscribe to Adalo's status page or check the Forum and X for outage or change announcements.",
      },
      {
        method: "Test in Preview Mode",
        description:
          "Use Adalo's preview mode to test changes before publishing, catching bugs early.",
      },
      {
        method: "Recreate Components",
        description:
          "If bugs follow updates, recreate affected components or actions, as core functionality may have changed.",
      },
      {
        method: "Use Version Control",
        description:
          "Save app versions in Adalo's history to revert to stable builds if bugs arise.",
      },
    ],
    frameworkSteps: [5, 7],
  },
  {
    id: "adalo_responsive_design",
    platform: "adalo",
    title: "Inconsistent Responsive Design Across Devices",
    category: "ui_design",
    severity: "moderate",
    tags: ["Responsive Design", "Mobile", "Tablet", "Desktop"],
    description:
      "Apps display incorrectly on mobile, tablet, or desktop, with misaligned or unresponsive elements due to Adalo's responsive engine limitations.",
    symptoms: [
      "Misaligned elements on different devices",
      "Unresponsive layouts on tablets",
      "Desktop display issues",
      "Fixed-position element problems",
    ],
    solutions: [
      {
        method: "Use Containers",
        description:
          "Organize content in Rectangle components as containers, setting them to adjust dynamically to screen sizes. Set backgrounds to invisible for non-card layouts.",
      },
      {
        method: "Test in Responsive Viewer",
        description:
          "Simulate mobile, tablet, and desktop layouts in Adalo's Responsive Viewer, adjusting element positions and sizes.",
      },
      {
        method: "Follow Best Practices",
        description:
          "Start with mobile-first or desktop-first design based on app purpose. Use Adalo's responsive templates.",
      },
      {
        method: "Cross-Browser Testing",
        description:
          "Verify layouts on Chrome, Safari, and Firefox, as rendering varies (e.g., list scrollbars).",
      },
    ],
    frameworkSteps: [3, 5],
  },
  {
    id: "adalo_scalability",
    platform: "adalo",
    title: "Limited Scalability for Large Apps",
    category: "scalability",
    severity: "critical",
    tags: ["Scalability", "Large Apps", "Performance", "Enterprise"],
    description:
      "Apps with many users, screens, or complex logic experience performance degradation, making Adalo unsuitable for enterprise-scale projects.",
    symptoms: [
      "Performance degradation with many users",
      "Slow load times with complex logic",
      "Many-to-many relationship issues",
      "Enterprise-scale limitations",
    ],
    solutions: [
      {
        method: "Simplify Data Models",
        description:
          "Avoid many-to-many relationships; use number properties to store related record IDs.",
      },
      {
        method: "Limit Screens",
        description:
          "Break complex apps into focused screens to reduce processing demands.",
      },
      {
        method: "Use External Backends",
        description:
          "Integrate Xano or Airtable for scalable data management, using Adalo for frontend design.",
      },
      {
        method: "Plan for Migration",
        description:
          "For long-term growth, consider rebuilding on Bubble or FlutterFlow. Export data from Adalo's database to ease migration.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "adalo_gdpr_compliance",
    platform: "adalo",
    title: "Lack of GDPR Compliance",
    category: "authentication",
    severity: "critical",
    tags: ["GDPR", "Compliance", "Data Protection", "EU Users"],
    description:
      "Adalo is not GDPR-certified, posing legal risks for apps serving EU users, especially those handling personal data.",
    symptoms: [
      "GDPR certification concerns",
      "Legal risks for EU users",
      "Data protection compliance gaps",
      "Personal data handling issues",
    ],
    solutions: [
      {
        method: "Implement Privacy Controls",
        description:
          "Add consent forms and privacy policies using Adalo's forms and text components to inform users about data usage.",
      },
      {
        method: "Use EU-Based Backends",
        description:
          "Store sensitive data in GDPR-compliant services like Xano (EU servers) instead of Adalo's database.",
      },
      {
        method: "Minimize Data Collection",
        description: "Use anonymized IDs to reduce stored personal data.",
      },
      {
        method: "Consult Legal Experts",
        description:
          "Hire a GDPR consultant to ensure compliance for EU-facing apps.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "adalo_poor_support",
    platform: "adalo",
    title: "Poor Customer Support and Slow Response Times",
    category: "bugs",
    severity: "moderate",
    tags: ["Customer Support", "Response Times", "Community"],
    description:
      "Users experience delayed or unhelpful support, with no clear resolution for complex issues, particularly when scaling or publishing apps.",
    symptoms: [
      "Delayed support responses",
      "Unhelpful support interactions",
      "Complex issues unresolved",
      "Community more responsive than official support",
    ],
    solutions: [
      {
        method: "Use Community Resources",
        description:
          "Post questions on Adalo's Forum, r/Adalo, or X for faster community-driven solutions.",
      },
      {
        method: "File Detailed Tickets",
        description:
          "Submit support tickets with screenshots and detailed descriptions to improve response quality, though expect delays.",
      },
      {
        method: "Leverage Tutorials",
        description:
          "Use Adalo's App Academy video courses for self-help on common issues.",
      },
      {
        method: "Hire Experts",
        description:
          "Engage Adalo freelancers or agencies (e.g., LowCode Agency) for faster resolutions.",
      },
    ],
    frameworkSteps: [7, 8],
  },

  // FLUTTERFLOW ISSUES
  {
    id: "flutterflow_performance",
    platform: "flutterflow",
    title: "Performance Issues and Slow App Response",
    category: "performance",
    severity: "moderate",
    tags: ["Performance", "Firebase", "Queries", "Dart Code"],
    description:
      "Apps experience slow load times or sluggish performance, especially with complex logic, large datasets, or frequent Firebase queries, leading to poor user experience.",
    symptoms: [
      "Slow load times with complex logic",
      "Sluggish performance with large datasets",
      "Frequent Firebase query bottlenecks",
      "Poor user experience on real devices",
    ],
    solutions: [
      {
        method: "Optimize Data Queries",
        description:
          "Limit Firestore queries by fetching only necessary data (e.g., use filters to retrieve 10 recent items instead of entire collections). Avoid nested queries in lists.",
      },
      {
        method: "Use Pagination",
        description:
          "Implement pagination or 'load more' functionality for lists to reduce initial data loads. Configure widgets to load data incrementally.",
      },
      {
        method: "Optimize Widgets",
        description:
          "Minimize complex nested widgets and avoid overuse of animations or dynamic elements. Use FlutterFlow's Widget Tree to identify heavy components.",
      },
      {
        method: "Cache Data Locally",
        description:
          "Leverage SQLite for local storage (via FlutterFlow's integrations) to reduce Firestore dependency for static data.",
      },
      {
        method: "Upgrade Plan",
        description:
          "For high-traffic apps, upgrade to the Pro ($70/month) or Enterprise plan for better Firebase performance and scalability support.",
      },
    ],
    frameworkSteps: [3, 6],
  },
  {
    id: "flutterflow_customization_limits",
    platform: "flutterflow",
    title: "Limited Customization for Complex or Unique Designs",
    category: "customization",
    severity: "moderate",
    tags: ["Customization", "UI Design", "Custom Widgets", "Dart Code"],
    description:
      "Apps lack the flexibility to achieve highly customized UI or advanced functionality, resulting in generic designs or unmet requirements.",
    symptoms: [
      "Generic designs with limited customization",
      "Constraints with pre-built widgets",
      "Unmet unique design requirements",
      "Advanced functionality limitations",
    ],
    solutions: [
      {
        method: "Use Custom Widgets",
        description:
          "Create custom widgets in FlutterFlow's Custom Code editor to extend UI capabilities. Import Flutter packages from pub.dev for specific needs.",
      },
      {
        method: "Leverage Custom Code",
        description:
          "Add Dart code for unique functionality via Custom Functions or Actions. Use FlutterFlow's Code Copilot to generate snippets based on prompts.",
      },
      {
        method: "Import Figma Designs",
        description:
          "Map Figma designs to FlutterFlow's theme system to align with brand aesthetics, though manual adjustments may be needed.",
      },
      {
        method: "Hire Flutter Developers",
        description:
          "Engage a FlutterFlow expert (via Upwork or FlutterFlow's community) to implement complex customizations.",
      },
    ],
    frameworkSteps: [4, 7],
  },
  {
    id: "flutterflow_publishing_errors",
    platform: "flutterflow",
    title: "Publishing Errors to App Store or Google Play",
    category: "deployment",
    severity: "critical",
    tags: ["Publishing", "Firebase Config", "Package Names", "Xcode"],
    description:
      "Users encounter errors during App Store or Google Play publishing, such as invalid Firebase config files, package name conflicts, or Xcode build failures.",
    symptoms: [
      "Invalid Firebase config file errors",
      "Package name conflicts",
      "Xcode build failures",
      "App store submission rejections",
    ],
    solutions: [
      {
        method: "Regenerate Firebase Configs",
        description:
          "After changing package names, regenerate Firebase config files in Settings & Integrations > Project Setup > Firebase > Regenerate Config Files.",
      },
      {
        method: "Use Unique Package Names",
        description:
          "Ensure package names (e.g., com.yourapp.name) are unique for Google Play and App Store. Update in FlutterFlow's General Settings.",
      },
      {
        method: "Update iOS Credentials",
        description:
          "Generate a new app-specific password in Apple ID settings and enter it correctly in FlutterFlow's publish section, ensuring 2FA compliance.",
      },
      {
        method: "Test Builds Locally",
        description:
          "Download code and test in VSCode or Android Studio before submission. Use TestFlight for iOS to validate builds.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "flutterflow_app_size",
    platform: "flutterflow",
    title: "App Size Bloat",
    category: "performance",
    severity: "moderate",
    tags: ["App Size", "File Size", "Optimization", "Flutter Engine"],
    description:
      "FlutterFlow apps, especially for iOS, have large file sizes (e.g., 30MB for basic apps), impacting download times and user adoption.",
    symptoms: [
      "Large app file sizes (30MB+)",
      "Poor download adoption due to size",
      "iOS apps particularly bloated",
      "Unnecessary dependencies increasing size",
    ],
    solutions: [
      {
        method: "Obfuscate Code",
        description:
          "Use flutter build apk --obfuscate --split-debug-info or flutter build ipa --obfuscate to reduce app size by removing debug symbols (can reduce size by ~10%).",
      },
      {
        method: "Analyze Size",
        description:
          "Run flutter build appbundle --analyze-size to identify large components (e.g., assets, plugins). Remove unnecessary dependencies.",
      },
      {
        method: "Optimize Assets",
        description:
          "Compress images and videos before uploading. Use FlutterFlow's asset manager to ensure minimal sizes.",
      },
      {
        method: "Limit Plugins",
        description:
          "Avoid heavy third-party plugins (e.g., AdMob) unless critical, as they add to the bundle size.",
      },
    ],
    frameworkSteps: [6, 5],
  },
  {
    id: "flutterflow_unpredictable_updates",
    platform: "flutterflow",
    title: "Unpredictable Updates Breaking Functionality",
    category: "bugs",
    severity: "moderate",
    tags: [
      "Platform Updates",
      "Breaking Changes",
      "Version Control",
      "Flutter SDK",
    ],
    description:
      "Platform updates introduce bugs or break existing features, such as misaligned UI components or failed integrations, frustrating users.",
    symptoms: [
      "Updates break existing features",
      "Misaligned UI after updates",
      "Failed integrations post-update",
      "Compatibility issues with new versions",
    ],
    solutions: [
      {
        method: "Use Version Control",
        description:
          "Leverage FlutterFlow's built-in version control to revert to stable versions if updates cause issues.",
      },
      {
        method: "Test Updates in Staging",
        description:
          "Apply updates in a duplicated project to test compatibility before applying to the live app.",
      },
      {
        method: "Monitor Announcements",
        description:
          "Follow FlutterFlow's Community Forum, X, or YouTube for update notes and known issues.",
      },
      {
        method: "Update Custom Code",
        description:
          "If using custom Dart code, review and update it to align with the latest Flutter SDK requirements.",
      },
    ],
    frameworkSteps: [5, 7],
  },
  {
    id: "flutterflow_learning_curve",
    platform: "flutterflow",
    title: "Steep Learning Curve for Non-Technical Users",
    category: "learning_curve",
    severity: "moderate",
    tags: [
      "Learning Curve",
      "Non-Technical Users",
      "Flutter Concepts",
      "Action Flow",
    ],
    description:
      "Non-technical users struggle with FlutterFlow's interface, particularly for custom code, logic flows, or Firebase setup, leading to errors or stalled projects.",
    symptoms: [
      "Difficulty with Action Flow Editor",
      "Custom code implementation challenges",
      "Firebase setup confusion",
      "Flutter concepts overwhelming beginners",
    ],
    solutions: [
      {
        method: "Use Tutorials",
        description:
          "Explore FlutterFlow's YouTube channel (400+ videos) and official documentation for step-by-step guides on logic and integrations.",
      },
      {
        method: "Start with Templates",
        description:
          "Use pre-built templates (e.g., e-commerce, social apps) to learn by customizing existing projects.",
      },
      {
        method: "Leverage Code Copilot",
        description:
          "Use FlutterFlow's AI Code Copilot to generate custom functions or explain complex logic via natural language prompts.",
      },
      {
        method: "Join Community",
        description:
          "Ask questions on FlutterFlow's Community Forum or r/FlutterDev for beginner-friendly advice.",
      },
    ],
    frameworkSteps: [7, 8],
  },
  {
    id: "flutterflow_scalability",
    platform: "flutterflow",
    title: "Limited Scalability for Complex or Large-Scale Apps",
    category: "scalability",
    severity: "critical",
    tags: ["Scalability", "State Management", "Enterprise", "Complex Apps"],
    description:
      "Apps struggle to handle high user loads, complex logic, or large datasets, making FlutterFlow less suitable for enterprise-scale projects.",
    symptoms: [
      "Poor performance with high user loads",
      "Complex logic implementation challenges",
      "Large dataset handling issues",
      "Enterprise-scale limitations",
    ],
    solutions: [
      {
        method: "Use External Backends",
        description:
          "Integrate Supabase or Xano for scalable data management instead of relying solely on Firebase Firestore.",
      },
      {
        method: "Implement State Management",
        description:
          "Add custom Dart code for state management (e.g., Provider, Riverpod) to handle complex app states.",
      },
      {
        method: "Optimize Logic",
        description:
          "Simplify Action Flow Editor logic to avoid nested conditions or loops. Break complex workflows into smaller actions.",
      },
      {
        method: "Plan for Rewrite",
        description:
          "Use FlutterFlow for MVPs, then rewrite in native Flutter for long-term scalability, leveraging exported code as a starting point.",
      },
    ],
    frameworkSteps: [6, 7],
  },
  {
    id: "flutterflow_integration_issues",
    platform: "flutterflow",
    title: "Integration Issues with External APIs or Services",
    category: "integration",
    severity: "moderate",
    tags: ["API Integration", "External Services", "REST APIs", "Custom Code"],
    description:
      "Apps fail to integrate smoothly with external APIs (e.g., Stripe, custom CRMs), leading to broken functionality or manual workarounds.",
    symptoms: [
      "External API integration failures",
      "Broken functionality with third-party services",
      "Manual workarounds required",
      "REST API configuration issues",
    ],
    solutions: [
      {
        method: "Use Pre-Built Integrations",
        description:
          "Leverage FlutterFlow's marketplace for integrations like RevenueCat, Stripe, or AdMob to simplify setup.",
      },
      {
        method: "Configure APIs Correctly",
        description:
          "Follow FlutterFlow's REST API documentation to set up endpoints, headers, and authentication properly.",
      },
      {
        method: "Test in Preview Mode",
        description:
          "Verify API calls in FlutterFlow's preview mode to catch errors before deployment.",
      },
      {
        method: "Add Custom Code",
        description:
          "Use Custom Functions to handle complex API logic, guided by Code Copilot or pub.dev packages.",
      },
    ],
    frameworkSteps: [3, 6],
  },
];

// Sample data structure based on your JSON
const troubleshootingData: TroubleshootingData = {
  platforms: [
    {
      id: "bolt",
      name: "StackBlitz",
      description: "AI-powered full-stack development platform",
      logo: "/stack/bolt.svg",
      color: "#ff6b6b",
      issueCount: 8,
      status: "active",
    },
    {
      id: "lovable",
      name: "Lovable",
      description: "AI-first web application builder",
      logo: "/stack/lovable.svg",
      color: "#4ecdc4",
      issueCount: 8,
      status: "active",
    },
    {
      id: "replit",
      name: "Replit",
      description: "AI-powered coding and deployment platform",
      logo: "/stack/replit.svg",
      color: "#f39c12",
      issueCount: 8,
      status: "active",
    },
    {
      id: "glide",
      name: "Glide",
      description: "No-code app builder from spreadsheets",
      logo: "/stack/glide.svg",
      color: "#e74c3c",
      issueCount: 7,
      status: "active",
    },
    {
      id: "bubble",
      name: "Bubble",
      description: "Visual programming platform for web apps",
      logo: "/stack/bubble.svg",
      color: "#6366f1",
      issueCount: 8,
      status: "active",
    },
    {
      id: "adalo",
      name: "Adalo",
      description: "No-code mobile app builder",
      logo: "/stack/adalo.svg",
      color: "#8b5cf6",
      issueCount: 7,
      status: "active",
    },
    {
      id: "flutterflow",
      name: "FlutterFlow",
      description: "Visual Flutter app development platform",
      logo: "/stack/FlutterFlow.jpeg",
      color: "#02569B",
      issueCount: 8,
      status: "active",
    },
  ],
  categories: [
    {
      id: "context",
      name: "Context Loss",
      description: "AI losing track of previous instructions",
    },
    {
      id: "code_errors",
      name: "Code Errors",
      description: "Bugs and runtime errors in generated code",
    },
    {
      id: "performance",
      name: "Performance",
      description: "Slow loading times and sluggish responses",
    },
    {
      id: "deployment",
      name: "Deployment",
      description: "Issues with publishing and going live",
    },
    {
      id: "integration",
      name: "Integration",
      description: "Problems with external APIs and services",
    },
    {
      id: "authentication",
      name: "Authentication",
      description: "Login and security related issues",
    },
    {
      id: "ui_design",
      name: "UI/Design",
      description: "Visual and responsive design problems",
    },
    {
      id: "scalability",
      name: "Scalability",
      description: "Issues handling large datasets or users",
    },
    {
      id: "platform_limits",
      name: "Platform Limits",
      description: "Hitting service limitations and quotas",
    },
    {
      id: "bugs",
      name: "Bugs & Instability",
      description: "Platform bugs and unexpected behavior",
    },
    {
      id: "learning_curve",
      name: "Learning Curve",
      description: "Difficulty using platform features",
    },
    {
      id: "vendor_lockin",
      name: "Vendor Lock-in",
      description: "Platform dependency concerns",
    },
    {
      id: "mobile_publishing",
      name: "Mobile Publishing",
      description: "App store submission issues",
    },
    {
      id: "customization",
      name: "Customization",
      description: "Limited design and feature flexibility",
    },
  ],
  severities: [
    {
      id: "critical",
      name: "Critical",
      color: "#dc2626",
      description: "App-breaking issues requiring immediate attention",
    },
    {
      id: "moderate",
      name: "Moderate",
      color: "#d97706",
      description: "Significant issues affecting functionality",
    },
    {
      id: "minor",
      name: "Minor",
      color: "#059669",
      description: "Minor inconveniences with workarounds",
    },
  ],
  issues: issues,
};

export { troubleshootingData };
