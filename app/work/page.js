import Link from 'next/link';
import { caseStudies } from '@/lib/caseStudies';

export const metadata = {
  title: 'Work',
  description: 'Story-led B2B case studies by Upnext.'
};

export default function WorkPage() {
  return (
    <main className="section-shell">
      <h1 className="text-display font-semibold">Work that compounds brand and pipeline.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/work/${study.slug}`} className="rounded-2xl border border-brand-gray bg-white p-6 hover:border-brand-red">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-slate">{study.category}</p>
            <h2 className="mt-3 text-2xl font-semibold">{study.title}</h2>
            <p className="mt-3 text-sm text-brand-slate">{study.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
