import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowLeft, FiCalendar, FiCheck } from 'react-icons/fi'
import Reveal from '../../components/Reveal'
import { CAL_URL } from '../../lib/site'
import { caseStudies, getCaseStudy } from '../data'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.headline} · Case study · Extensa`,
    description: study.subheadline,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <div className="bg-[--paper] text-[--ink]">
      <main>
        {/* Hero */}
        <section className="bg-[--ink] text-white pt-28 sm:pt-36 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-10"
            >
              <FiArrowLeft className="w-4 h-4" />
              All case studies
            </Link>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="animate-slide-in-left">
                <p className="eyebrow text-[--signal] mb-5">Case study · {study.tag}</p>
                <p className="font-display text-7xl md:text-8xl font-bold leading-none">{study.stat}</p>
                <p className="mt-3 text-lg text-white/80">{study.statLabel}</p>
              </div>
              <div className="animate-slide-in-right">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-5">
                  {study.headline}
                </h1>
                <p className="text-lg text-white/70 leading-relaxed">{study.subheadline}</p>
              </div>
            </div>
            <dl className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {study.meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-white/50 mb-1">{m.label}</dt>
                  <dd className="font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* The situation before */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">01 · The situation before</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-3xl">
              {study.situationTitle}
            </h2>
            <div className="space-y-5">
              {study.situation.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="card card-accent p-6 md:p-8 flex gap-6">
                    <span className="font-mono text-sm text-[--signal-deep] pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-[--ink-soft] leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={240}>
              <blockquote className="mt-8 bg-[--ink] text-white/90 rounded-[14px] p-7 md:p-8 text-lg leading-relaxed">
                {study.situationPullQuote}
              </blockquote>
            </Reveal>
          </div>
        </section>

        <div className="bottleneck-divider max-w-6xl mx-auto px-4" aria-hidden="true" />

        {/* What we built */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">02 · What we built</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-3xl">{study.builtTitle}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {study.built.map((b, i) => (
                <Reveal key={b.title} delay={i * 80} className="h-full">
                  <div className="card p-6 h-full">
                    <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
                    <p className="text-[--ink-soft] leading-relaxed">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What changed */}
        <section className="section-tint py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">03 · The result</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">What changed</h2>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
              {study.changed.map((c, i) => (
                <Reveal key={c} delay={i * 60}>
                  <li className="card p-5 flex items-start gap-3 h-full">
                    <FiCheck className="w-5 h-5 text-[--signal-deep] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-10 text-[--ink-soft] text-lg leading-relaxed max-w-3xl">{study.patternNote}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[--ink] text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">
              If your team is patching gaps in off-the-shelf platforms with people, there&apos;s probably a
              custom system worth building instead.
            </h2>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[--signal] text-[--ink] px-7 py-4 rounded-md font-semibold hover:bg-[--signal-deep] transition-colors mt-4"
            >
              <FiCalendar className="w-5 h-5" />
              Book a 20-minute discovery call
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
