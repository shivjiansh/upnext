'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

function PillarCard({ title, children }) {
  return (
    <AnimatedSection className="rounded-3xl border border-brand-gray bg-white p-8 md:p-12">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </AnimatedSection>
  );
}

export default function CaseStudyLayout({ study }) {
  return (
    <main className="pb-20">
      <section className="section-shell">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-slate">Case Study</p>
        <h1 className="mt-4 max-w-5xl text-display font-semibold">{study.title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-brand-slate">{study.summary}</p>
      </section>

      <div className="section-shell space-y-8">
        <PillarCard title="1. Branding — Identity & Strategy">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-gray p-6">
              <p className="text-sm text-brand-slate">Typography system</p>
              <p className="mt-2 text-2xl font-semibold">Condensed headline + clean body stack</p>
            </div>
            <div className="rounded-2xl border border-brand-gray p-6">
              <p className="text-sm text-brand-slate">Brand book</p>
              <p className="mt-2 text-2xl font-semibold">Narrative framework for enterprise buying committees</p>
            </div>
          </div>
        </PillarCard>

        <PillarCard title="2. Designing Visual Storytelling">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-gray p-6">
              <p className="text-xs uppercase text-brand-slate">Before</p>
              <p className="mt-2 text-sm">Feature-heavy interface, low emotional resonance.</p>
            </div>
            <div className="rounded-2xl border border-brand-gray bg-brand-black p-6 text-brand-offWhite">
              <p className="text-xs uppercase text-brand-offWhite/70">After</p>
              <p className="mt-2 text-sm">Outcome-driven visuals with stronger story hierarchy and confidence cues.</p>
            </div>
          </div>
        </PillarCard>

        <PillarCard title="3. Photoshoot Gallery">
          <div className="columns-2 gap-4 md:columns-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={item}
                className="mb-4 break-inside-avoid rounded-2xl border border-brand-gray bg-brand-offWhite p-4"
              >
                <div className="h-28 rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-black/20" />
              </motion.div>
            ))}
          </div>
        </PillarCard>

        <PillarCard title="4. Website — UI/UX & Development">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-brand-gray bg-brand-offWhite p-5 shadow-sm"
              >
                <div className="h-40 rounded-xl border border-brand-gray bg-white" />
                <p className="mt-3 text-sm text-brand-slate">Isometric product mockup {item}</p>
              </motion.div>
            ))}
          </div>
        </PillarCard>

        <PillarCard title="5. Social Media — Engagement & Growth">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-gray p-6">
              <p className="text-sm text-brand-slate">Performance dashboard</p>
              <p className="mt-2 text-3xl font-semibold">+214% qualified inbound</p>
            </div>
            <div className="rounded-2xl border border-brand-gray p-6">
              <p className="text-sm text-brand-slate">Creative rollout</p>
              <p className="mt-2 text-3xl font-semibold">48 assets in 90 days</p>
            </div>
          </div>
        </PillarCard>
      </div>
    </main>
  );
}
