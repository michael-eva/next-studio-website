import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { caseStudies } from './data'

export const metadata = {
  title: 'Case studies · Extensa',
  description: 'Real engagements with WA businesses: what was slowing them down, what we built, and what changed.',
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-[--paper] text-[--ink] min-h-screen">
      <main className="pt-28 sm:pt-36 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-3">Evidence</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">Case studies</h1>
          <p className="text-lg text-[--ink-soft] leading-relaxed max-w-2xl mb-12">
            Real engagements: what was slowing the business down, what we built, and what changed.
            Some clients are named, some aren&apos;t; the numbers are real either way.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80} className="h-full">
                <Link href={`/case-studies/${c.slug}`} className="card card-accent p-7 md:p-8 flex flex-col h-full group">
                  <p className="eyebrow mb-4">{c.tag}</p>
                  <p className="font-display text-5xl font-bold text-[--signal-deep] leading-none">{c.stat}</p>
                  <p className="mt-2 mb-5 font-mono text-sm text-[--ink-soft]">{c.statLabel}</p>
                  <h2 className="font-display text-2xl font-semibold mb-3 pt-4 border-t border-[--line]">
                    {c.headline}
                  </h2>
                  <p className="text-[--ink-soft] leading-relaxed flex-1">{c.subheadline}</p>
                  <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[--signal-deep] group-hover:underline">
                    Read the case study <FiArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
