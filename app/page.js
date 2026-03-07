'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { caseStudies } from '@/lib/caseStudies';

const heroWords = ['Build', 'Demand', 'Earn', 'Category'];

export default function HomePage() {
  return (
    <main>
      <section className="grid-overlay border-b border-brand-gray">
        <div className="section-shell py-28 md:py-36">
          <motion.p
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
            className="mb-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-brand-slate"
          >
            {heroWords.map((word) => (
              <motion.span key={word} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                {word}
              </motion.span>
            ))}
          </motion.p>

          <h1 className="max-w-6xl text-display font-semibold">A high-conversion growth partner for B2B brands that need momentum now.</h1>
          <p className="mt-8 max-w-2xl text-lg text-brand-slate">
            Upnext designs demand systems that connect strategic positioning, premium creative, and measurable revenue outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/start-a-project" className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:shadow-premium">
              Start a Project
            </Link>
            <Link href="/work" className="rounded-full border border-brand-black px-6 py-3 text-sm font-medium hover:bg-brand-black hover:text-white">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Positioning', 'Messaging systems engineered for enterprise buyer trust.'],
            ['Creative', 'Brand worlds that feel sharp, modern, and unmistakably premium.'],
            ['Conversion', 'Every asset mapped to pipeline, not just impressions.']
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-brand-gray bg-white p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-brand-slate">{copy}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pt-0">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Selected Work</h2>
          <Link href="/work" className="text-sm text-brand-slate underline underline-offset-4">
            View all
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <motion.article
              key={study.slug}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-brand-gray bg-white p-6 transition"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-brand-slate">{study.category}</p>
              <h3 className="mt-3 text-2xl font-semibold">{study.title}</h3>
              <p className="mt-3 text-sm text-brand-slate">{study.summary}</p>
              <Link href={`/work/${study.slug}`} className="mt-6 inline-block text-sm font-medium text-brand-red">
                Read story →
              </Link>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
