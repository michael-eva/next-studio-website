import ContactForm from './components/ContactForm'
import ClientLogos from './components/ClientLogos'
import { FiTool, FiCpu, FiBox, FiLink, FiCheck, FiArrowRight, FiFileText, FiUsers, FiMessageSquare, FiCode } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#FAFAFA] via-[#F8FAFC] to-[#EFF6FF] pt-28 sm:pt-40 md:pt-48 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-[#111827] leading-tight">
              Software that fits into how your business already works
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#4B5563] leading-relaxed max-w-3xl mb-8 md:mb-10">
              Practical applications with AI built in - designed to remove friction, not add complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-lg hover:shadow-xl text-center"
              >
                <FiMessageSquare className="w-5 h-5" />
                Start a Conversation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition duration-300 font-semibold shadow-md border-2 border-blue-600 text-center"
              >
                See How We Work
                <FiArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />

        {/* What Extensa Does */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiTool className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                What Extensa Does
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-3xl">
              <p className="text-lg sm:text-xl">
                Extensa builds software and implements tools that help businesses improve how they operate.
              </p>
              <p>
                Most of the work involves introducing practical applications - often with AI - that fit into existing systems and workflows without requiring replacement or disruption.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
                <p className="font-medium text-blue-900">
                  The software handles specific problems: reducing manual work, connecting disconnected tools, or improving visibility across processes.
                </p>
              </div>
              <p>
                It sits alongside what already exists, rather than replacing it.
              </p>
            </div>
          </div>
        </section>

        {/* How We Approach Software and AI */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                How We Approach Software and AI
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              <article className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <FiTool className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                      Software is a tool, not a transformation
                    </h3>
                    <div className="space-y-3 sm:space-y-4 text-[#4B5563] text-base sm:text-lg leading-relaxed">
                      <p>
                        Businesses already have systems that work. The goal is to reduce effort, not rebuild everything.
                      </p>
                      <p>
                        We focus on practical improvements: removing manual steps, connecting existing tools, or applying AI where it reduces time or improves accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                      AI as a capability, not a strategy
                    </h3>
                    <div className="space-y-3 sm:space-y-4 text-[#4B5563] text-base sm:text-lg leading-relaxed">
                      <p>
                        AI is useful where it fits: reading documents, handling repetitive inquiries, or extracting patterns from data.
                      </p>
                      <p>
                        It's applied selectively, inside specific workflows, where it removes effort without adding new complexity.
                      </p>
                      <p>
                        The focus stays on the work being done, not the technology doing it.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <FiCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                      Building for how things actually work
                    </h3>
                    <div className="space-y-3 sm:space-y-4 text-[#4B5563] text-base sm:text-lg leading-relaxed">
                      <p>
                        Software that doesn't match how people work creates more problems than it solves.
                      </p>
                      <p>
                        The tools we build reflect actual workflows, existing systems, and the way teams currently operate - with adjustments made where they improve outcomes, not for the sake of change.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Recent Work */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiBox className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                Recent Work
              </h2>
            </div>
            <p className="text-[#4B5563] text-base sm:text-lg mb-8 sm:mb-10 md:mb-12">
              Examples of how software fits into existing operations
            </p>

            <div className="grid gap-3 sm:gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 border-l-4 border-blue-600 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiTool className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">Operational add-on</h3>
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      Replaced a spreadsheet-heavy process with a small internal tool that handles data validation and workflow tracking automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 border-l-4 border-blue-600 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">AI-assisted workflow</h3>
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      Introduced AI document review into an existing compliance process, reducing manual review time while maintaining oversight.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 border-l-4 border-blue-600 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiLink className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">System integration</h3>
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      Connected three disconnected tools into a single workflow, eliminating manual data syncing and improving visibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 border-l-4 border-blue-600 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">Custom web application</h3>
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      Built a client portal that integrates with existing systems, providing real-time status updates without replacing core infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Typically Work */}
        <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                How We Typically Work
              </h2>
            </div>
            <p className="text-[#4B5563] text-base sm:text-lg mb-10 sm:mb-12 md:mb-16 max-w-2xl">
              Extensa's work usually falls into one of these patterns:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <article className="bg-white p-5 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl w-fit mb-4 sm:mb-6">
                  <FiTool className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                  Operational add-ons
                </h3>
                <div className="space-y-3 sm:space-y-4 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <p>
                    Lightweight tools that sit alongside existing systems.
                  </p>
                  <p>
                    These applications handle specific tasks - processing forms, managing inquiries, tracking internal workflows - without requiring changes to core systems.
                  </p>
                  <p>
                    They reduce manual work and improve reliability without disruption.
                  </p>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-bold text-[#111827] mb-2 sm:mb-3 flex items-center gap-2">
                      <FiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      Examples
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>A form processor that extracts data and updates records automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>An internal tool that tracks workflow status across multiple systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>A lightweight application that handles customer inquiries without human input</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="bg-white p-5 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl w-fit mb-4 sm:mb-6">
                  <FiCpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                  AI-assisted workflows
                </h3>
                <div className="space-y-3 sm:space-y-4 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <p>
                    AI applied inside existing processes where it reduces effort or improves speed.
                  </p>
                  <p>
                    This might involve document processing, responding to common questions, or extracting information that would otherwise require manual review.
                  </p>
                  <p>
                    The AI is used where it fits, not everywhere.
                  </p>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-bold text-[#111827] mb-2 sm:mb-3 flex items-center gap-2">
                      <FiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      Examples
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Document reading that extracts invoice data and validates it against existing records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>A system that drafts responses to common inquiries based on previous answers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Pattern recognition that flags unusual activity for review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="bg-white p-5 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl w-fit mb-4 sm:mb-6">
                  <FiLink className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                  System integration and glue
                </h3>
                <div className="space-y-3 sm:space-y-4 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  <p>
                    Connecting tools and workflows that don't talk to each other.
                  </p>
                  <p>
                    This work reduces handoffs, eliminates manual syncing, and improves visibility across disconnected systems.
                  </p>
                  <p>
                    It's about making existing tools work together, not replacing them.
                  </p>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-bold text-[#111827] mb-2 sm:mb-3 flex items-center gap-2">
                      <FiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      Examples
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Syncing data between a CRM and an inventory system without manual updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Connecting booking tools to internal scheduling systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Creating a single view of customer information across multiple platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="how-we-work" className="py-12 sm:py-16 md:py-20 bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                Our Process
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <article className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#111827]">
                      Initial conversation
                    </h3>
                    <div className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      <p>
                        We discuss the problem, understand the current workflow, and identify where software might help.
                      </p>
                      <p className="mt-2 sm:mt-3">
                        This conversation is exploratory - there's no pressure to commit to anything.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#111827]">
                      Practical assessment
                    </h3>
                    <div className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      <p>
                        If the work makes sense, we map the existing process, identify friction points, and propose a practical approach.
                      </p>
                      <p className="mt-2 sm:mt-3">
                        The focus is on what fits, not what's possible.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#111827]">
                      Implementation
                    </h3>
                    <div className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      <p>
                        We build the tool, integrate it with existing systems, and ensure it works as expected in actual conditions.
                      </p>
                      <p className="mt-2 sm:mt-3">
                        Training and documentation are included.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#111827]">
                      Ongoing adjustment
                    </h3>
                    <div className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      <p>
                        Software often needs refinement as it's used. We stay involved to address issues, make improvements, and ensure the tool continues to work as the business evolves.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Secondary CTA */}
            <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Ready to discuss your workflow?
              </h3>
              <p className="text-blue-100 text-base sm:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
                No pressure, no sales process. Just a straightforward conversation about whether software might help.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition duration-300 font-bold shadow-lg"
              >
                <FiMessageSquare className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="case-studies" className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                Client Testimonials
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <article className="bg-white p-5 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 flex-grow">
                  "Michael and his team redesigned our website from scratch in under two weeks, exactly as we asked. Clean, fast, and nailed the details without endless back and forth. Couldn't have asked for a better job."
                </p>
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="font-bold text-[#111827] text-sm sm:text-base">Francois</p>
                  <p className="text-xs sm:text-sm text-[#6B7280]">EPCA</p>
                </div>
              </article>

              <article className="bg-white p-5 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 flex-grow">
                  "Extensa's professionalism and continual communication from the outset of their project work with us was outstanding. They delivered a fantastic product and were entirely transparent throughout the process. The quality of work is excellent and is delivered in efficient time. Their ability to understand the intentions and values of the companies they work with, and how the product should ultimately reflect this is first class."
                </p>
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="font-bold text-[#111827] text-sm sm:text-base">Will</p>
                  <p className="text-xs sm:text-sm text-[#6B7280]">Nectar</p>
                </div>
              </article>

              <article className="bg-white p-5 sm:p-6 md:p-8 border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 flex-grow">
                  "Working closely with Michael over an 8-month prototype project gave me deep appreciation for his curiosity, communication skills, problem-solving abilities, and technical development expertise. He asks the right questions, keeps everyone in the loop, and tackles challenges with both creativity and solid technical execution. If I had to choose a developer to be in the trenches with on a difficult project, it would always be Michael."
                </p>
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="font-bold text-[#111827] text-sm sm:text-base">Dave</p>
                  <p className="text-xs sm:text-sm text-[#6B7280]">BetterLabs</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                <FiMessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
                Start a Conversation
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 text-[#4B5563] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl">
              <p>
                If you're dealing with manual work that could be reduced, systems that don't connect, or workflows that feel inefficient, we can discuss whether software might help.
              </p>
              <p>
                The conversation is straightforward - no pressure, no sales process.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-8 md:p-10 border-2 border-gray-200 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#111827]">
                Discuss your workflow
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Describe what's not working or what's taking too much time.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Extensa</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Software implementation and practical tools for businesses
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                Perth, Western Australia
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#services" className="text-gray-400 hover:text-blue-400 transition text-sm">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="/#how-we-work" className="text-gray-400 hover:text-blue-400 transition text-sm">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="/#case-studies" className="text-gray-400 hover:text-blue-400 transition text-sm">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-blue-400 transition text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Get In Touch</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Ready to discuss how software can help your business?
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
              >
                <FiMessageSquare className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Extensa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
