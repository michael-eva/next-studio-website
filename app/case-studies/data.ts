// Case study content. Add a new entry here and it appears on the index
// and gets its own page at /case-studies/<slug>.
// Keep client-identifying names out of slugs and copy where anonymity was agreed.

export type CaseStudy = {
  slug: string
  tag: string
  clientLabel: string // anonymous descriptor shown in place of a client name
  stat: string
  statLabel: string
  headline: string
  subheadline: string
  meta: { label: string; value: string }[]
  situationTitle: string
  situation: { title: string; body: string }[]
  situationPullQuote: string
  builtTitle: string
  built: { title: string; body: string }[]
  changed: string[]
  patternNote: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'wa-mortgage-lender',
    tag: 'FINANCIAL SERVICES',
    clientLabel: 'WA mortgage-lending broker',
    stat: '75%',
    statLabel: "of an FTE's onboarding work, automated",
    headline: 'Five-figure monthly platform replaced.',
    subheadline:
      'What we replaced, what we built, and what changed for a WA mortgage-lending broker.',
    meta: [
      { label: 'Industry', value: 'Mortgage aggregation' },
      { label: 'Location', value: 'Western Australia' },
      { label: 'Size', value: '20+ staff' },
      { label: 'In business', value: '10+ years' },
      { label: 'Decision-maker', value: 'Founder / CEO' },
    ],
    situationTitle: "The business was operating well. The machinery underneath wasn't keeping up.",
    situation: [
      {
        title: "A five-figure monthly cost on a compliance platform that didn't quite fit.",
        body: 'The third-party tool covered 80% of what was needed. The rest got filled in by hand. Recurring cost was real; the gaps it left were getting filled with people, every month.',
      },
      {
        title: "Broker support firefighting questions that shouldn't need a person.",
        body: "Brokers were calling and emailing support for information that already existed in the business. It just wasn't where they could find it.",
      },
      {
        title: 'Onboarding hitting the volume ceiling.',
        body: "New broker onboarding had become so manual the business couldn't keep up with intake demand. Roughly 80% of the work could be done without a person. A person was doing all of it.",
      },
    ],
    situationPullQuote:
      "When new broker intake started outpacing the team's ability to onboard them, the model broke. The reactive pattern wasn't going to scale.",
    builtTitle: 'Three workstreams. Each targeting a different bottleneck.',
    built: [
      {
        title: 'Custom compliance platform',
        body: 'Multi-tenant platform built around how their work actually runs. Replaced the five-figure monthly off-the-shelf tool. Live in production.',
      },
      {
        title: 'Broker self-serve chat',
        body: "AI-led chat that lets brokers find answers they used to call support for. Trained on the business's own SOPs and internal information.",
      },
      {
        title: 'Broker onboarding automation',
        body: "Started by sitting in on the real onboarding workflow and timing every step. Found the 80% of the work that didn't need a person. Built the automation around that.",
      },
    ],
    changed: [
      'Five-figure monthly platform cost eliminated',
      "75% of an FTE's worth of onboarding work automated",
      'Broker support load expected to drop significantly once chat goes live',
      'Ongoing engagement across multiple workstreams',
    ],
    patternNote:
      'The pattern is the same one we see across WA financial services: a business operating well, with the machinery underneath not quite scaled to the ambition. The fix is rarely another off-the-shelf platform.',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
