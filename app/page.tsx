import ContactForm from './components/ContactForm'
import ClientLogos from './components/ClientLogos'
import Link from 'next/link'
import { CAL_URL, AUDIT_URL } from './lib/site'
import { FiArrowRight, FiCalendar, FiActivity } from 'react-icons/fi'

const Divider = () => <div className="bottleneck-divider max-w-6xl mx-auto px-4" aria-hidden="true" />

const CtaButtons = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <a
      href={CAL_URL}
      className="inline-flex items-center justify-center gap-2 bg-[--signal] text-[--ink] px-7 py-4 rounded-md font-semibold hover:bg-[--signal-deep] transition-colors"
    >
      <FiCalendar className="w-5 h-5" />
      Book a bottleneck call
    </a>
    <a
      href={AUDIT_URL}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold border transition-colors ${
        dark
          ? 'border-white/30 text-white hover:bg-white/10'
          : 'border-[--ink] text-[--ink] hover:bg-[--ink] hover:text-white'
      }`}
    >
      <FiActivity className="w-5 h-5" />
      Run a free AI workflow audit
    </a>
  </div>
)

const problems = [
  {
    title: 'Chasing documents by email',
    body: 'Clients send things late, in the wrong format, to the wrong thread — and someone has to follow up every time.',
  },
  {
    title: 'Onboarding that eats admin hours',
    body: 'Every new client means the same forms, checks and data entry, done by hand.',
  },
  {
    title: "Systems that don't talk",
    body: 'Your CRM, inbox and spreadsheets each hold part of the picture. Someone re-types data between them.',
  },
  {
    title: 'Manual compliance and review work',
    body: 'Skilled people spending hours checking documents a machine could pre-screen.',
  },
]

const work = [
  {
    tag: 'FINANCIAL SERVICES',
    title: 'Client onboarding, automated',
    body: 'A Perth financial services firm was losing hours every week to manual onboarding: forms, document collection, data entry and compliance checks, all handled by hand. I built an automation layer over their existing systems that takes on the admin.',
    result: 'Phase 1 live · Phases 2–3 underway',
  },
  {
    tag: 'CREATIVE / MEDIA',
    title: '30 minutes saved per hour of work',
    body: "Peachie's editing workflow was drowning in footage triage. CreatorFlow, a custom Mac app, now does the sorting.",
    result: 'Saves 30 min for every hour of editing',
  },
  {
    tag: 'RECRUITMENT',
    title: 'AI wired into a recruitment CRM',
    body: 'I connected Claude directly to DR Analytics\u2019 CRM (Loxo) with 12 custom tools, so the team can search, screen and update candidates in plain English — and trained the team to use AI properly.',
    result: 'DR Analytics · 12 custom AI tools',
  },
]

const verticals = [
  { name: 'Financial services', body: 'Onboarding, compliance and document workflows.', href: '/financial-services', link: true },
  { name: 'Property', body: 'Parsing stock lists, pipelines and listing data into clean systems.' },
  { name: 'Recruitment', body: 'AI wired into your ATS/CRM, plus team training.' },
  { name: 'Professional services', body: 'Client portals, document automation, internal tools.' },
]

const steps = [
  {
    n: '1',
    title: 'Bottleneck call — 20 min, free',
    body: "You describe how work gets done. I tell you honestly whether software will help, and where I'd start.",
  },
  {
    n: '2',
    title: 'Scope and fixed price',
    body: 'A short written proposal: the problem, the fix, the cost. No open-ended billing surprises.',
  },
  {
    n: '3',
    title: 'Build, ship, adjust',
    body: 'I build it, integrate it with what you already use, train your team, and stay involved as it beds in.',
  },
]

const testimonials = [
  {
    quote:
      'Working closely with Michael over an 8-month prototype project gave me deep appreciation for his curiosity, communication skills, problem-solving abilities, and technical development expertise. He asks the right questions, keeps everyone in the loop, and tackles challenges with both creativity and solid technical execution. If I had to choose a developer to be in the trenches with on a difficult project, it would always be Michael.',
    name: 'Dave',
    org: 'BetterLabs',
  },
  {
    quote:
      "Extensa's professionalism and continual communication from the outset of their project work with us was outstanding. They delivered a fantastic product and were entirely transparent throughout the process. The quality of work is excellent and is delivered in efficient time.",
    name: 'Will',
    org: 'Nectar',
  },
  {
    quote:
      'Michael and his team redesigned our website from scratch in under two weeks, exactly as we asked. Clean, fast, and nailed the details without endless back and forth.',
    name: 'Francois',
    org: 'EPCA',
  },
]

export default function Home() {
  return (
    <div className="bg-[--paper] text-[--ink]">
      <main>
        {/* Hero */}
        <section className="hero-glow pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
              <div className="flex-1 animate-slide-in-left">
                <p className="eyebrow mb-5">Extensa · Perth, Western Australia</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
                  I find the <span className="mark">bottlenecks</span> in how your business runs — and fix them with AI and custom software.
                </h1>
                <p className="text-lg sm:text-xl text-[--ink-soft] leading-relaxed max-w-2xl mb-9">
                  Extensa builds practical tools that sit inside your existing systems. Less manual work,
                  fewer handoffs, nothing torn out and replaced.
                </p>
                <CtaButtons />
                <p className="mt-6 text-sm text-[--ink-soft]">
                  Working with WA businesses in financial services, property, recruitment and professional services.
                </p>
              </div>
              <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm mx-auto md:mx-0 md:w-1/3 animate-slide-in-right">
                <img
                  src="/michael-professional.png"
                  alt="Michael Eva, founder of Extensa"
                  className="w-full h-auto rounded-xl border border-[--line] object-cover shadow-xl"
                />
                <p className="mt-3 text-sm text-[--ink-soft] text-center font-medium">
                  Michael Eva — founder, Extensa
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Problems */}
        <section id="services" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Diagnosis</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-2xl">
              Does any of this sound <span className="mark">familiar?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {problems.map((p) => (
                <div key={p.title} className="card card-accent p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-[--ink-soft] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-medium">
              If you&apos;re nodding at any of these, that&apos;s a bottleneck — and it&apos;s exactly what I fix.
            </p>
          </div>
        </section>

        <Divider />

        {/* Proof */}
        <section id="case-studies" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Evidence</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Recent work</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {work.map((w) => (
                <article key={w.title} className="card p-6 flex flex-col">
                  <p className="eyebrow mb-4">{w.tag}</p>
                  <h3 className="font-display text-xl font-semibold mb-3">{w.title}</h3>
                  <p className="text-[--ink-soft] leading-relaxed flex-1">{w.body}</p>
                  <p className="mt-5 pt-4 border-t border-[--line] font-mono text-sm font-semibold text-[--signal-deep]">
                    {w.result}
                  </p>
                </article>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-14 grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <figure key={t.name} className="bg-[--ink] text-white rounded-[14px] p-6 shadow-lg">
                  <blockquote className="leading-relaxed text-white/85 text-[0.95rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 font-mono text-sm text-[--signal]">
                    {t.name} · {t.org}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Who it's for */}
        <section className="section-tint py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Fit</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Who I work with</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {verticals.map((v) => (
                <div key={v.name} className="card p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{v.name}</h3>
                  <p className="text-[--ink-soft] text-sm leading-relaxed">{v.body}</p>
                  {v.link && (
                    <Link href={v.href!} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[--signal-deep] hover:underline">
                      See how <FiArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-[--ink-soft]">
              Not on the list? If your business runs on repetitive admin, it&apos;s worth a conversation.
            </p>
          </div>
        </section>

        <Divider />

        {/* Process */}
        <section id="how-we-work" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">How it works</h2>
            <ol className="grid md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <li key={s.n} className="card p-6">
                  <span className="step-chip">{s.n}</span>
                  <h3 className="font-display text-xl font-semibold mt-4 mb-3">{s.title}</h3>
                  <p className="text-[--ink-soft] leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-20 bg-[--ink] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">About</p>
            <h2 className="font-display text-3xl font-bold mb-5">Michael Eva — founder, Extensa</h2>
            <p className="text-white/85 text-lg leading-relaxed">
              I&apos;m a software developer in Perth who got tired of watching good businesses burn hours on work a
              computer should do. Extensa is me — plus trusted contractors when a project needs them — building tools
              that fit how you already work, not another platform to migrate to. When I say &ldquo;I&apos;ll build
              it&rdquo;, I mean me, personally.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <p className="eyebrow mb-3">Next step</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">Ready to find your <span className="mark">bottleneck?</span></h2>
                <p className="text-[--ink-soft] text-lg leading-relaxed mb-8">
                  Book a 20-minute call, or let the AI audit tool have a first look at your workflow. Either way,
                  you&apos;ll get a straight answer about whether I can help.
                </p>
                <CtaButtons />
              </div>
              <div className="card p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold mb-1">Prefer to write it down?</h3>
                <p className="text-[--ink-soft] mb-6">Tell me what&apos;s eating your time.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[--ink] text-white/70 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-6 text-sm">
          <div>
            <p className="font-display font-semibold text-white">Extensa</p>
            <p>AI &amp; custom software · Perth, Western Australia</p>
          </div>
          <nav className="flex gap-6">
            <Link href="/financial-services" className="hover:text-white">Financial services</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <a href={CAL_URL} className="hover:text-white">Book a call</a>
          </nav>
          <p>© {new Date().getFullYear()} Extensa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
