'use client';

import { useState } from 'react';
import Link from 'next/link';

const initialState = { name: '', email: '', message: '' };

export default function Footer() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Unable to submit form');
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  }

  return (
    <footer className="border-t border-brand-gray bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-slate">Quick Catch</p>
          <h2 className="max-w-lg text-4xl font-semibold tracking-tight">Share your growth goal. We will map the fastest path.</h2>
          <p className="max-w-xl text-brand-slate">
            Upnext is a performance-led creative partner for SaaS, tech, and enterprise brands worldwide.
          </p>
          <Link href="/start-a-project" className="inline-flex rounded-full border border-brand-black px-5 py-2 text-sm hover:bg-brand-black hover:text-white">
            Prefer a guided brief?
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-brand-gray bg-brand-offWhite p-6">
          <input
            className="w-full rounded-xl border border-brand-gray bg-white px-4 py-3 outline-none focus:border-brand-red"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            className="w-full rounded-xl border border-brand-gray bg-white px-4 py-3 outline-none focus:border-brand-red"
            placeholder="Work email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            className="h-28 w-full rounded-xl border border-brand-gray bg-white px-4 py-3 outline-none focus:border-brand-red"
            placeholder="What are you launching next?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-medium text-white transition hover:shadow-premium disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <p className="text-sm text-green-700">Message sent. We will reply within 1 business day.</p>}
          {status === 'error' && <p className="text-sm text-red-700">Something went wrong. Please try again.</p>}
        </form>
      </div>
      <div className="border-t border-brand-gray px-6 py-5 text-center text-xs text-brand-slate md:px-10">
        Lucknow marketing agency with global B2B focus · © {new Date().getFullYear()} Upnext.
      </div>
    </footer>
  );
}
