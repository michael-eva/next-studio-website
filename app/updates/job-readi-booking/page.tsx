import type { Metadata } from 'next'
import ZoomableImage from './ZoomableImage'

// Private client update: unlisted (not linked or in the sitemap) and kept out of search engines.
export const metadata: Metadata = {
  title: 'Booking system update · Job Readi Medical · Extensa',
  description: 'Changes to the Job Readi online booking flow, with before and after screenshots.',
  robots: { index: false, follow: false, nocache: true },
}

const IMG = '/updates/job-readi'

type Shot = { src: string; alt: string; caption: string; height?: number }

function Screenshot({ shot }: { shot: Shot }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-[--line] bg-white">
        <ZoomableImage src={`${IMG}/${shot.src}`} alt={shot.alt} width={1400} height={shot.height ?? 813} />
      </div>
      <figcaption className="mt-3 text-sm text-[--ink-soft] leading-relaxed">{shot.caption}</figcaption>
    </figure>
  )
}

function BeforeAfter({ before, after }: { before: Shot[]; after: Shot[] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
      <div className="space-y-8">
        <p className="eyebrow !text-[--ink-soft]">Before</p>
        {before.map((s) => (
          <Screenshot key={s.src} shot={s} />
        ))}
      </div>
      <div className="space-y-8">
        <p className="eyebrow">After</p>
        {after.map((s) => (
          <Screenshot key={s.src} shot={s} />
        ))}
      </div>
    </div>
  )
}

function Section({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-14 md:py-20 border-t border-[--line]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="eyebrow mb-3">{index}</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-3xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function JobReadiBookingUpdatePage() {
  return (
    <div className="bg-[--paper] text-[--ink]">
      <main>
        <section className="bg-[--ink] text-white pt-28 sm:pt-36 pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="eyebrow !text-[--signal] mb-5">Job Readi Medical · Update · 25 November 2026</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6 max-w-3xl">
              Online booking: what&apos;s changed so far
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-3xl">
              A heads up on the first round of changes to the booking portal, with screenshots of how it looked
              before and how it looks now. Nothing here is live yet. It&apos;s been built and tested on a copy of
              your system, and goes live once we sort the deployment with the hosting move.
            </p>
          </div>
        </section>

        <Section index="01 · Booking steps" title="Clients no longer pick a room">
          <div className="max-w-3xl space-y-4 text-[--ink-soft] leading-relaxed mb-12">
            <p>
              Before, clients chose a location, then a room, then a time. They had no way of knowing which room
              to pick, and since the rooms are all the same, the choice didn&apos;t mean anything to them.
            </p>
            <p>
              Now they choose a location and a time. The system assigns a free room automatically, filling Room 1
              first, then Room 2, and so on. Each room keeps its own hours, so you still get the 8:00 and 8:30
              start times at Rivervale.
            </p>
          </div>
          <BeforeAfter
            before={[
              {
                src: 'before-1-location-hl.jpg',
                height: 545,
                alt: 'Booking portal first step, with six steps including Choose Room',
                caption: 'Six steps, including Choose Room.',
              },
              {
                src: 'before-2-room-hl.jpg',
                height: 745,
                alt: 'Choose Room step listing Rivervale Rooms 1 to 4',
                caption: 'Clients had to pick one of four identical rooms.',
              },
            ]}
            after={[
              {
                src: 'after-1-location-hl.jpg',
                height: 545,
                alt: 'Booking portal first step, with five steps and no room step',
                caption: 'Five steps. Location, then straight to the time.',
              },
            ]}
          />
        </Section>

        <Section index="02 · Choosing a time" title="A clearer time slot page">
          <div className="max-w-3xl space-y-4 text-[--ink-soft] leading-relaxed mb-12">
            <p>
              Clients no longer choose how long the session is. Every booking is an hour, and your team can
              still lengthen a booking from the admin side when needed.
            </p>
            <p>
              Picking a time used to jump straight to the next page. If a client went back, they saw a box with
              the room number and a red Forward button, and changing their mind could leave them holding two
              times at once, or show an error. Now the chosen time is highlighted, a summary sits at the top,
              and they move on with Continue when they&apos;re happy. Picking a different time just swaps it.
            </p>
          </div>
          <BeforeAfter
            before={[
              {
                src: 'before-3-timeslots-hl.jpg',
                alt: 'Time slot page with a session duration dropdown',
                caption: 'Clients were asked to choose a duration.',
              },
              {
                src: 'before-5-selected-hl.jpg',
                alt: 'Selected time shown as Room 1 with a red Forward button',
                caption: 'The selected time showed the room number, with a red Forward button.',
              },
            ]}
            after={[
              {
                src: 'after-2-timeslots-hl.jpg',
                alt: 'Time slot page without a duration choice',
                caption: 'No duration choice.',
              },
              {
                src: 'after-3-selected-hl.jpg',
                alt: 'Selected time highlighted, with a summary and a Continue button',
                caption: 'The chosen time is highlighted. No room numbers anywhere the client can see.',
              },
            ]}
          />
        </Section>

        <Section index="03 · Extra Information" title="Your team can now reorder the paperwork list">
          <div className="max-w-3xl space-y-4 text-[--ink-soft] leading-relaxed mb-12">
            <p>
              The list of medical paperwork on the Extra Information page could only be shown in the order the
              items were created. The admin screen did have drag handles, but every drag tried to rebuild all of
              the booking forms, one item at a time. On a list this size that took around four minutes, Odoo
              gave up, and the order never changed.
            </p>
            <p>
              Dragging now saves straight away and clients see the new order immediately. You&apos;ll find it
              under Appointments → Configuration → Appointments Custom Fields. There&apos;s now a Group column,
              so you can filter to one section and drag within it.
            </p>
          </div>
          <BeforeAfter
            before={[
              {
                src: 'before-4-extra-info-hl.jpg',
                alt: 'Extra Information page with medical paperwork in the original order',
                caption: 'The order the items were created in. Dragging to change it never saved.',
              },
            ]}
            after={[
              {
                src: 'after-4-admin-order-hl.jpg',
                alt: 'Admin list of booking questions with drag handles and a Group column',
                caption: 'Drag an item in the admin list. Here, Rio Tinto and Galaxy moved to the top.',
              },
              {
                src: 'after-5-extra-info-hl.jpg',
                alt: 'Extra Information page with Rio Tinto and Galaxy listed first',
                caption: 'Clients see the new order straight away.',
              },
            ]}
          />
          <p className="mt-10 max-w-3xl text-sm text-[--ink-soft] leading-relaxed">
            The items show in two columns, so the order reads left to right across each row.
          </p>
        </Section>

        <Section index="04 · Next" title="What&apos;s still to come">
          <div className="rounded-xl border border-[--line] bg-white p-6 md:p-8 max-w-3xl">
            <h3 className="font-display text-xl font-semibold mb-4">Still being worked on</h3>
            <ul className="space-y-3 text-[--ink-soft] leading-relaxed">
              <li>Moving a booking between clinics so it lands in the new clinic&apos;s Google Calendar</li>
              <li>Closing every room at every clinic in one go for public holidays</li>
              <li>Extra email recipients on booking confirmations</li>
              <li>Sending clients who aren&apos;t logged in to the login page, rather than a page not found</li>
            </ul>
          </div>
        </Section>
      </main>
    </div>
  )
}
