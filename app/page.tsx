import CollaborationsCarousel from './components/CollaborationsCarousel'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="md:w-2/3 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Automation & Web Development for Perth SMBs
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Stop wasting time on repetitive tasks. We build AI-powered automation and custom web applications that handle the busy work, so your team can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block shadow-lg text-center animate-pulse-glow">
                  Get Your Free Automation Assessment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Pain Points Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
              Is Your Team Drowning in Repetitive Work?
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Most SMBs waste 10-20 hours per week on manual tasks that AI could handle in seconds. Data entry, customer inquiries, document processing - it all adds up.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-6 hover-lift">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg animate-float"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manual Data Entry</h3>
                <p className="text-gray-600">Your team spends hours copying information between systems instead of serving customers</p>
              </article>
              <article className="text-center p-6 hover-lift">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg animate-float" style={{animationDelay: '0.3s'}}></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Repetitive Customer Questions</h3>
                <p className="text-gray-600">Same questions answered over and over via email while important work piles up</p>
              </article>
              <article className="text-center p-6 hover-lift">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg animate-float" style={{animationDelay: '0.6s'}}></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Document Processing Bottlenecks</h3>
                <p className="text-gray-600">Invoices, quotes, and forms require manual review and data extraction</p>
              </article>
            </div>
          </div>
        </section>

        {/* Replace the old Projects section with the new component */}
        <CollaborationsCarousel />

        {/* Services */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              AI Automation & Web Development Services
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              From intelligent chatbots to custom web applications, we build solutions that save time and drive growth for Perth SMBs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">AI Customer Service Automation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Deploy intelligent chatbots and automated email responses that handle common inquiries 24/7, freeing your team for complex customer needs.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>AI-powered chatbots</li>
                  <li>Email automation</li>
                  <li>FAQ handling</li>
                  <li>Lead qualification</li>
                </ul>
              </article>
              <article className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Document & Data Processing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Automate invoice processing, data entry, and document extraction with AI that reads and processes information faster than any human.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Invoice processing</li>
                  <li>Form data extraction</li>
                  <li>PDF automation</li>
                  <li>Data validation</li>
                </ul>
              </article>
              <article className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Workflow Automation & Integration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Connect your tools and automate repetitive workflows. CRM updates, inventory syncing, report generation—all handled automatically.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>API integrations</li>
                  <li>Multi-system automation</li>
                  <li>Scheduled tasks</li>
                  <li>Alert systems</li>
                </ul>
              </article>
              <article className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Custom Web Applications</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Build tailored web apps that match your exact business processes. Client portals, booking systems, internal tools—whatever you need.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>SaaS applications</li>
                  <li>Customer portals</li>
                  <li>Internal dashboards</li>
                  <li>Booking systems</li>
                </ul>
              </article>
              <article className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Website Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Fast, modern websites that convert visitors into customers. Optimised for SEO, mobile-friendly, and built to grow with your business.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Responsive design</li>
                  <li>SEO optimization</li>
                  <li>Content management</li>
                  <li>Performance tuning</li>
                </ul>
              </article>
              <article className="bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ongoing Maintenance & Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Keep your systems running smoothly with predictable monthly retainers. Updates, bug fixes, and feature additions without surprise bills.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Fixed-hour retainers</li>
                  <li>Priority support</li>
                  <li>Feature updates</li>
                  <li>Performance monitoring</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="how-we-work" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              How We Work: Discover → Build → Deploy → Support
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Free Automation Assessment</h3>
                <p className="text-gray-600">We analyse your current workflows to identify automation opportunities and quick wins</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Solution Design</h3>
                <p className="text-gray-600">We design AI and web solutions tailored to your business, not generic off-the-shelf tools</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Development & Training</h3>
                <p className="text-gray-600">We build your solution and train your team to use it effectively from day one</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">4</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Ongoing Optimisation</h3>
                <p className="text-gray-600">Continuous improvements and support as your business grows and needs evolve</p>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="case-studies" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Client Testimonials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "Michael and his team redesigned our website from scratch in under two weeks, exactly as we asked. Clean, fast, and nailed the details without endless back and forth. Couldn't have asked for a better job."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    F
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Francois</p>
                    <p className="text-gray-600">EPCA</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "Extensa's professionalism and continual communication from the outset of their project work with us was outstanding. They delivered a fantastic product and were entirely transparent throughout the process. The quality of work is excellent and is delivered in efficient time. Their ability to understand the intentions and values of the companies they work with, and how the product should ultimately reflect this is first class."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    W
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Will</p>
                    <p className="text-gray-600">Nectar</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "Working closely with Michael over an 8-month prototype project gave me deep appreciation for his curiosity, communication skills, problem-solving abilities, and technical development expertise. He asks the right questions, keeps everyone in the loop, and tackles challenges with both creativity and solid technical execution. If I had to choose a developer to be in the trenches with on a difficult project, it would always be Michael."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    D
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Dave</p>
                    <p className="text-gray-600">BetterLabs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Real Results from AI Automation
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Perth SMBs using our AI automation solutions report significant time savings and improved team productivity.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <article className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">10-20hrs</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Weekly Time Savings</h3>
                <p className="text-gray-600">Average time recovered per week through AI automation and workflow optimization</p>
              </article>
              <article className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">AI Availability</h3>
                <p className="text-gray-600">Chatbots and automated systems handle inquiries around the clock</p>
              </article>
              <article className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Faster Processing</h3>
                <p className="text-gray-600">AI document processing handles invoices and forms in seconds, not hours</p>
              </article>
              <article className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">$0</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Surprise Costs</h3>
                <p className="text-gray-600">Fixed monthly retainers with no hidden fees or unexpected charges</p>
              </article>
            </div>
          </div>
        </section>

        {/* Local Partnership */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                Perth-Based AI & Web Development Experts
              </h2>
              <p className="text-center text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                As a local Perth business, we understand the challenges SMBs face. We build AI automation and web solutions that actually fit how Australian businesses work—with ongoing support whenever you need it.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Local & Accessible</h3>
                  <p className="text-gray-600">Perth-based team available during AWST business hours for real-time support</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">SMB-Focused</h3>
                  <p className="text-gray-600">We specialize in solutions for small-to-medium businesses, not enterprise complexity</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">No Lock-In Contracts</h3>
                  <p className="text-gray-600">Flexible monthly retainers—scale up or down as your needs change</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Guide Download Section */}
        {/* <section id="process-guide" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Download Our Custom Software Process Guide
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Learn how we analyse, design, and implement custom software solutions that transform business processes.
              Get insights into our proven methodology and see how we can help streamline your operations.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're currently finalising our comprehensive process guide.
                Contact us directly to discuss your custom software needs and learn about our approach.
              </p>
              <a href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block">
                Contact Us Instead
              </a>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ready to Automate Your Business?</h2>
            <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
              Get a free automation assessment. We'll identify quick wins and show you exactly how AI can save your team 10+ hours per week.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <p className="text-md pb-2 leading-relaxed">
                  Tell us about your biggest time-wasters—repetitive tasks, manual data entry, customer inquiries.
                  We'll respond within 24 hours with specific automation ideas for your business.
                </p>
                <ContactForm />
              </div>
              {/* Additional Information */}
              <div className="flex items-center justify-end">
                <div className="w-full max-w-md">
                  <img src="contact-illustration.svg" alt="Contact Us" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>AI Automation & Web Development | Perth, Western Australia | Serving SMBs Across Australia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
