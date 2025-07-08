import CollaborationsCarousel from './components/CollaborationsCarousel'
import ContactForm from './components/ContactForm'

export default function Home() {
  console.log('Home');

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="md:w-2/3 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Software That Works the Way You Do
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                We help established businesses unlock productivity by customising their existing software to fit their exact processes—eliminating double handling, reducing admin, and enabling teams to focus on meaningful work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block shadow-lg text-center">
                  Book a Free Consultation
                </a>
                {/* <a href="#process-guide"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 inline-block text-center">
                  Download Process Guide
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Replace the old Projects section with the new component */}
        <CollaborationsCarousel />

        {/* Main Value Proposition */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Eliminate Admin Headaches. Streamline Your Business.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Workflow Automation</h3>
                <p className="text-gray-600">Automate repetitive tasks and connect your tools for seamless processes that save hours every day.</p>
              </article>
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Custom Integrations</h3>
                <p className="text-gray-600">Connect your existing systems to work together, eliminating double data entry and manual workarounds.</p>
              </article>
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Legacy Modernisation</h3>
                <p className="text-gray-600">Upgrade and enhance your current systems without starting from scratch—preserve your investment while improving efficiency.</p>
              </article>
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600">Fixed-hour retainers for maintenance and feature upgrades—no surprise costs for bug fixes.</p>
              </article>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="how-we-work" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              How We Work: Understand → Optimise → Support
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Process Analysis</h3>
                <p className="text-gray-600">We dive deep into your current workflows to identify inefficiencies and automation opportunities</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Solution Design</h3>
                <p className="text-gray-600">Design and build software that fits your exact business processes, not the other way around</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Implementation</h3>
                <p className="text-gray-600">Careful rollout with training and support to ensure your team adopts the new solutions successfully</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">4</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Ongoing Partnership</h3>
                <p className="text-gray-600">Continuous maintenance, feature updates, and optimisation as your business evolves</p>
              </article>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Services That Transform Your Business
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Workflow Automation</h3>
                <p className="text-gray-600">Streamline operations and eliminate repetitive manual tasks with intelligent automation solutions.</p>
              </article>
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Custom Integrations</h3>
                <p className="text-gray-600">Connect your existing tools and systems to work seamlessly together, reducing double handling.</p>
              </article>
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">UX/UI Overhauls</h3>
                <p className="text-gray-600">Modernise your software interfaces to improve user experience and increase staff satisfaction.</p>
              </article>
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Legacy System Modernisation</h3>
                <p className="text-gray-600">Upgrade your existing systems without starting from scratch, preserving your data and investments.</p>
              </article>
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ongoing Maintenance & Support</h3>
                <p className="text-gray-600">Reliable, long-term partnership with fixed-hour retainers for continuous improvements and support.</p>
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
            <div className="grid md:grid-cols-2 gap-8">
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
            </div>
          </div>
        </section>

        {/* Local Partnership */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                Your Local Technology Partner
              </h2>
              <p className="text-center text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                Based in Perth, we understand the unique challenges of Australian businesses.
                We're committed to building long-term partnerships that help you grow and succeed,
                with ongoing support that adapts as your business evolves.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">Perth-based team with deep understanding of local business needs</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600">We work alongside your team, not as an external vendor</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Ongoing Commitment</h3>
                  <p className="text-gray-600">Long-term partnership focused on your continued success</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Outcomes */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Measurable Results You Can Count On
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our custom software solutions deliver tangible benefits that directly impact your bottom line and team satisfaction.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Reduction in Admin Time</h3>
                <p className="text-gray-600">Eliminate repetitive tasks and paperwork with intelligent automation</p>
              </article>
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Process Integration</h3>
                <p className="text-gray-600">Connect all your tools for seamless, efficient workflows</p>
              </article>
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600">Reliable partnership with fixed-hour retainers and no surprise costs</p>
              </article>
              <article className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">↗</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Staff Satisfaction</h3>
                <p className="text-gray-600">Employees focus on meaningful work, not admin headaches</p>
              </article>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Ready to Streamline Your Business?</h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <p className="text-md pb-2 leading-relaxed">
                  Tell us about your current software challenges and workflow inefficiencies.
                  We'll get back to you with tailored advice and a clear path forward to optimise your business processes.
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
              <p>Based in Perth, Australia | Serving Established Businesses Worldwide</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
