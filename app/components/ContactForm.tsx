'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to a real email/API endpoint.
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <p className="text-[--ink] font-medium">
        Thanks — I&apos;ll be in touch shortly.
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
          className="border border-[--line] rounded-md px-3 py-2 bg-white text-[--ink] focus:outline-none focus:border-[--signal]"
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
          className="border border-[--line] rounded-md px-3 py-2 bg-white text-[--ink] focus:outline-none focus:border-[--signal]"
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
          className="border border-[--line] rounded-md px-3 py-2 bg-white text-[--ink] focus:outline-none focus:border-[--signal]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-[--signal] text-[--ink] px-6 py-3 rounded-md font-semibold hover:bg-[--signal-deep] transition-colors"
      >
        Send
      </button>
    </form>
  );
}
