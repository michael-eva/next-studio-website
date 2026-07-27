import ContactForm from './components/ContactForm'
import ClientLogos from './components/ClientLogos'
import Reveal from './components/Reveal'
import Link from 'next/link'
import { CAL_URL, AUDIT_URL } from './lib/site'
import { FiArrowRight, FiCalendar, FiActivity, FiBriefcase, FiHome, FiUsers, FiFileText } from 'react-icons/fi'

const Divider = () => <div className="bottleneck-divider max-w-6xl mx-auto px-4" aria-hidden="true" />

const CtaButtons = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-[--signal] text-[--ink] px-7 py-4 rounded-md font-semibold hover:bg-[--signal-deep] transition-colors"
    >
      <FiCalendar className="w-5 h-5" />
      Book a bottleneck call
    </a>
    <a
      href={AUDIT_URL}
      target="_blank"
      rel="noopener noreferrer"
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
    body: 'Clients send things late, in the wrong format, to the wrong thread, and someone has to follow up every time.',
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
    stat: '~10 hrs',
    statLabel: 'of admin removed per week, and counting',
    title: 'Client onboarding, automated',
    body: 'A Perth financial services firm was losing hours every week to manual onboarding: forms, document collection, data entry and compliance checks, all handled by hand. I built an automation layer over their existing systems that takes on the admin.',
  },
  {
    tag: 'CREATIVE / MEDIA',
    stat: '30 min / hr',
    statLabel: 'of editing time handed back',
    title: 'Footage triage, handled by a Mac app',
    body: "Peachie's editing workflow was drowning in footage triage. CreatorFlow, a custom Mac app, now does the sorting.",
  },
  {
    tag: 'RECRUITMENT',
    stat: '12',
    statLabel: 'custom AI tools wired into their CRM',
    title: 'AI wired into a recruitment CRM',
    body: 'I connected Claude directly to DR Analytics\u2019 CRM (Loxo) with 12 custom tools, so the team can search, screen and update candidates in plain English. I also trained the team to use AI properly.',
  },
]

const verticals = [
  {
    name: 'Financial services',
    body: 'Onboarding, compliance and document workflows.',
    bottleneck: 'Chasing client documents',
    icon: FiBriefcase,
    href: '/financial-services',
    link: true,
  },
  {
    name: 'Property',
    body: 'Parsing stock lists, pipelines and listing data into clean systems.',
    bottleneck: 'Re-typing listing data',
    icon: FiHome,
  },
  {
    name: 'Recruitment',
    body: 'AI wired into your ATS/CRM, plus team training.',
    bottleneck: 'Manual candidate screening',
    icon: FiUsers,
  },
  {
    name: 'Professional services',
    body: 'Client portals, document automation, internal tools.',
    bottleneck: 'Admin between systems',
    icon: FiFileText,
  },
]

const steps = [
  {
    n: '1',
    title: 'Bottleneck call: 20 min, free',
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
      'Had a great experience with Michael as he ran our team through the foundations of AI using skills, projects, chat, and co-work in Claude for us to 10x, 5x, 2x the work that we do. It’s really appreciated that Michael was able to break it down in layman’s terms. It has changed the way we work!',
    name: 'Douglas Robertson',
    org: 'Google review',
    featured: true,
  },
  {
    quote:
      'Working closely with Michael over an 8-month prototype project gave me deep appreciation for his curiosity, communication skills, problem-solving abilities, and technical development expertise. If I had to choose a developer to be in the trenches with on a difficult project, it would always be Michael.',
    name: 'Dave',
    org: 'BetterLabs',
    featured: true,
  },
  {
    quote:
      'Michael and the Extensa Studio team is wonderful to work with. Great communication (especially for someone who isn’t super technical like myself), fast and great quality work. I’d highly recommend hiring them on your next project.',
    name: 'Imogen Blow',
    org: 'Google review',
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
  {
    quote: 'Great AI agency. Really understood the brief and made the process super easy.',
    name: 'Andrew Jester',
    org: 'Google review',
  },
  {
    quote:
      "I've worked with Michael multiple times to help me with software builds. Always professional, always personable, and easy to work with. I couldn't recommend Michael more :)",
    name: 'Kale Miller',
    org: 'Google review',
  },
]

const Stars = () => (
  <div className="flex gap-0.5 text-[--signal]" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.95a1 1 0 0 0 .95.7h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.44a1 1 0 0 0-.36 1.12l1.28 3.95c.3.92-.75 1.69-1.54 1.12l-3.36-2.44a1 1 0 0 0-1.18 0l-3.36 2.44c-.79.57-1.84-.2-1.54-1.12l1.28-3.95a1 1 0 0 0-.36-1.12L2.06 9.39c-.78-.57-.38-1.81.6-1.81H6.8a1 1 0 0 0 .95-.7l1.29-3.95Z" />
      </svg>
    ))}
  </div>
)

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
                  I find the <span className="mark">bottlenecks</span> in how your business runs, and fix them with AI and custom software.
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
                  Michael Eva, founder of Extensa
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
              {problems.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="card card-accent p-6 h-full">
                    <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-[--ink-soft] leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-lg font-medium">
              If you&apos;re nodding at any of these, that&apos;s a bottleneck, and it&apos;s exactly what I fix.
            </p>
          </div>
        </section>

        <Divider />

        {/* Proof */}
        <section id="case-studies" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Evidence</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Recent work</h2>
            <Reveal>
              <Link
                href="/case-studies/wa-mortgage-lender"
                className="card card-accent p-7 md:p-9 mb-5 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 group"
              >
                <div className="shrink-0">
                  <p className="eyebrow mb-3">FEATURED CASE STUDY</p>
                  <p className="font-display text-5xl md:text-6xl font-bold text-[--signal-deep] leading-none">75%</p>
                  <p className="mt-2 font-mono text-sm text-[--ink-soft] max-w-[16rem]">
                    of an FTE&apos;s onboarding work, automated
                  </p>
                </div>
                <div className="flex-1 md:border-l md:border-[--line] md:pl-12">
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    Five-figure monthly platform replaced.
                  </h3>
                  <p className="text-[--ink-soft] leading-relaxed">
                    What we replaced, what we built, and what changed for a WA mortgage-lending broker.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[--signal-deep] group-hover:underline">
                    Read the case study <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {work.map((w, i) => (
                <Reveal key={w.title} delay={i * 80} className="h-full">
                  <article className="card p-6 flex flex-col h-full">
                    <p className="eyebrow mb-4">{w.tag}</p>
                    <p className="font-display text-4xl md:text-5xl font-bold text-[--signal-deep] leading-none">
                      {w.stat}
                    </p>
                    <p className="mt-2 mb-5 font-mono text-sm text-[--ink-soft]">{w.statLabel}</p>
                    <h3 className="font-display text-xl font-semibold mb-3 pt-4 border-t border-[--line]">{w.title}</h3>
                    <p className="text-[--ink-soft] leading-relaxed flex-1">{w.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-[--ink] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-3">Social proof</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  What clients <span className="mark">say</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars />
                <p className="font-mono text-sm text-white/70">5.0 · Google reviews</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {testimonials.filter((t) => t.featured).map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                <figure className="bg-white/[0.06] border border-white/10 rounded-[14px] p-7 md:p-8 h-full">
                  <Stars />
                  <blockquote className="mt-4 leading-relaxed text-white/90 text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 font-mono text-sm text-[--signal]">
                    {t.name} · {t.org}
                  </figcaption>
                </figure>
                </Reveal>
              ))}
            </div>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.filter((t) => !t.featured).map((t, i) => (
                <Reveal key={t.name} delay={i * 60}>
                <figure className="bg-white/[0.04] border border-white/10 rounded-[14px] p-6 h-full">
                  <Stars />
                  <blockquote className="mt-3 leading-relaxed text-white/80 text-[0.95rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 font-mono text-sm text-[--signal]">
                    {t.name} · {t.org}
                  </figcaption>
                </figure>
                </Reveal>
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
              {verticals.map((v, i) => (
                <Reveal key={v.name} delay={i * 60}>
                <div className="card p-6 h-full flex flex-col">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[--signal]/15 text-[--signal-deep] mb-4">
                    <v.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-2">{v.name}</h3>
                  <p className="text-[--ink-soft] text-sm leading-relaxed flex-1">{v.body}</p>
                  <p className="mt-4 pt-3 border-t border-[--line] font-mono text-xs uppercase tracking-wider text-[--ink-soft]">
                    Typical bottleneck: <span className="text-[--signal-deep] normal-case tracking-normal">{v.bottleneck}</span>
                  </p>
                  {v.link && (
                    <Link href={v.href!} className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[--signal-deep] hover:underline">
                      See how <FiArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                </Reveal>
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
            <ol className="timeline grid md:grid-cols-3 gap-10 md:gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 120}>
                <li className="timeline-step h-full">
                  <span className="step-chip">{s.n}</span>
                  <h3 className="font-display text-xl font-semibold mt-5 mb-3">{s.title}</h3>
                  <p className="text-[--ink-soft] leading-relaxed">{s.body}</p>
                </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-20 bg-[--ink] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
            <img
              src="/michael-about.png"
              alt="Michael Eva, founder of Extensa"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-[--signal] shrink-0"
            />
            <div>
            <p className="eyebrow mb-3">About</p>
            <h2 className="font-display text-3xl font-bold mb-5">Michael Eva, founder of Extensa</h2>
            <p className="text-white/85 text-lg leading-relaxed">
              I&apos;m a software developer in Perth who got tired of watching good businesses burn hours on work a
              computer should do. Extensa is me, plus trusted contractors when a project needs them, building tools
              that fit how you already work, not another platform to migrate to. When I say &ldquo;I&apos;ll build
              it&rdquo;, I mean me, personally.
            </p>
            </div>
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
            <Link href="/case-studies" className="hover:text-white">Case studies</Link>
            <Link href="/financial-services" className="hover:text-white">Financial services</Link>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Book a call</a>
          </nav>
          <p>© {new Date().getFullYear()} Extensa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
