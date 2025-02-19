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
                Turn Your Vision into Reality, Faster
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Transform your startup idea into a market-ready product in as little as 6 weeks. We're not just developers – we're your technical co-founders who care about your success.
              </p>
              <a href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block shadow-lg">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Replace the old Projects section with the new component */}
        <CollaborationsCarousel />

        {/* Main Value Proposition */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              From Concept to Customers, Without the Bloat
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Launch Fast</h3>
                <p className="text-gray-600">MVP in 6 weeks, using our proven rapid development approach.</p>
              </article>
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Validate Quick</h3>
                <p className="text-gray-600">Test your ideas with real users and get actionable feedback fast.</p>
              </article>
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Scale Smart</h3>
                <p className="text-gray-600">Grow based on real market feedback and user needs.</p>
              </article>
              <article className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Build Lean</h3>
                <p className="text-gray-600">Avoid costly overbuilding and focus on what matters most.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our Approach: Build → Learn → Iterate
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Deep Understanding</h3>
                <p className="text-gray-600">We start by diving deep into your business goals and market opportunities</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Rapid Prototyping</h3>
                <p className="text-gray-600">Using our template library and AI tools to create your first prototype in days</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Lean Development</h3>
                <p className="text-gray-600">Focus on core features that matter most to your users</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">4</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Iteration</h3>
                <p className="text-gray-600">Regular feedback loops ensure we're always building what your market wants</p>
              </article>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Services That Scale With You
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Rapid MVP Development</h3>
                <p className="text-gray-600">Get your product to market in 6 weeks*</p>
              </article>
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Full-Stack Production</h3>
                <p className="text-gray-600">Scalable, robust applications built for growth</p>
              </article>
              <article className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">UI/UX Design</h3>
                <p className="text-gray-600">Beautiful, intuitive interfaces users love</p>
              </article>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Industries We've Transformed
            </h2>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-gray-800">Fintech</h3>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-gray-800">Security</h3>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-gray-800">Childcare</h3>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-gray-800">UGC</h3>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-gray-800">Retail</h3>
              </article>
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Start Your Journey</h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <p className="text-md pb-2 leading-relaxed">
                  We look forward to helping you. Send us a message with as much detail as possible, and we will get back to you shortly. Our team is dedicated to providing you with the best service and support to turn your vision into reality.
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
              <p>Based in Perth, Australia | Serving Startups Globally</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
