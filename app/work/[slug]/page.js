import { notFound } from 'next/navigation';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { caseStudies, getCaseStudyBySlug } from '@/lib/caseStudies';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) return { title: 'Case Study' };

  return {
    title: `${study.title} Case Study`,
    description: study.summary
  };
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) notFound();

  return <CaseStudyLayout study={study} />;
}
