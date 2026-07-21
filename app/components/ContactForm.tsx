'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <p className="text-[--ink] font-medium">
        Thanks, I&apos;ll be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-[--ink]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className="border border-[--line] rounded-md px-3.5 py-2.5 bg-[--paper] text-[--ink] placeholder:text-[--ink-soft]/50 transition-colors focus:outline-none focus:border-[--signal] focus:ring-2 focus:ring-[--signal]/25 focus:bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-[--ink]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com.au"
          className="border border-[--line] rounded-md px-3.5 py-2.5 bg-[--paper] text-[--ink] placeholder:text-[--ink-soft]/50 transition-colors focus:outline-none focus:border-[--signal] focus:ring-2 focus:ring-[--signal]/25 focus:bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-[--ink]">
          What&apos;s eating your time?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="e.g. We spend hours a week re-typing data between our CRM and spreadsheets…"
          className="border border-[--line] rounded-md px-3.5 py-2.5 bg-[--paper] text-[--ink] placeholder:text-[--ink-soft]/50 transition-colors focus:outline-none focus:border-[--signal] focus:ring-2 focus:ring-[--signal]/25 focus:bg-white"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong sending that. Try again, or email michael@extensa.studio directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 bg-[--signal] text-[--ink] px-6 py-3 rounded-md font-semibold hover:bg-[--signal-deep] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}
