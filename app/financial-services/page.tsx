import type { Metadata } from 'next'
import { CAL_URL, AUDIT_URL } from '../lib/site'
import { FiCalendar, FiActivity } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'AI & Automation for Financial Services | Extensa, Perth',
  description:
    'Onboarding, compliance checks and document chasing automated for WA financial services businesses. Built in Perth by Michael Eva.',
}

const problems = [
  'New client onboarding that takes days of forms, follow-ups and re-keyed data',
  'Compliance review done entirely by hand',
  'Documents chased over email, tracked in spreadsheets',
  'Broker and adviser questions answered one at a time, when an AI assistant could handle the common ones',
  'Data split across a CRM, an inbox and a dozen spreadsheets',
]

const Ctas = () => (
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
      className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold border border-[--ink] text-[--ink] hover:bg-[--ink] hover:text-white transition-colors"
    >
      <FiActivity className="w-5 h-5" />
      Run a free AI workflow audit
    </a>
  </div>
)

export default function FinancialServices() {
  return (
    <div className="bg-[--paper] text-[--ink]">
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-5">Financial services · Perth, WA</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
              AI and automation for financial services businesses, built in Perth.
            </h1>
            <p className="text-lg sm:text-xl text-[--ink-soft] leading-relaxed max-w-2xl mb-9">
              Onboarding, compliance checks and document chasing don&apos;t need to run on manual admin. I build the
              tools that take that work off your team.
            </p>
            <Ctas />
          </div>
        </section>

        <div className="bottleneck-divider max-w-4xl mx-auto px-4" aria-hidden="true" />

        {/* Problems */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Diagnosis</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">The problems I fix</h2>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="bg-[--card] border border-[--line] rounded-lg p-5 text-[--ink-soft] leading-relaxed">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proof */}
        <section className="py-16 md:py-20 bg-[--ink] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Evidence</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Client onboarding, automated for a Perth financial services firm
            </h2>
            <div className="space-y-5 text-white/85 text-lg leading-relaxed">
              <p>
                Before: every new client meant forms filled by hand, documents collected over email, data re-keyed
                between systems, and compliance checks done manually. Skilled people were spending their week on admin.
              </p>
              <p>
                I built an automation layer over their existing systems, with no rip-and-replace, that handles the
                collection, checking and data entry. Phase 1 is live in production.
              </p>
              <p className="font-mono text-base text-[--signal]">
                The engagement has continued into phases 2 and 3, which is the clearest evidence the first phase worked.
              </p>
            </div>
          </div>
        </section>

        {/* Why finance */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-3">Why this works in finance</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Documents, checks and repeatable process
            </h2>
            <p className="text-[--ink-soft] text-lg leading-relaxed max-w-2xl">
              Financial services runs on exactly the work AI is now good at, and exactly where errors are expensive.
              So the approach is simple: AI does the reading, sorting and drafting; your people keep the judgement and
              sign-off. Nothing goes out without oversight.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-[--line]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Run a broking, aggregation, advice or finance business in WA?
            </h2>
            <p className="text-[--ink-soft] text-lg leading-relaxed mb-8">
              Book a call. Worst case, you get a free second opinion on your workflow.
            </p>
            <Ctas />
          </div>
        </section>
      </main>
    </div>
  )
}
