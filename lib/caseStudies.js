export const caseStudies = [
  {
    slug: 'atlas-cloud-suite',
    title: 'Atlas Cloud Suite',
    category: 'B2B SaaS',
    summary:
      'Reframing an enterprise product suite through strategic brand storytelling, product visuals, and full-funnel social growth.',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'neovault-enterprise',
    title: 'NeoVault Enterprise',
    category: 'Cybersecurity',
    summary:
      'A complete category repositioning and launch system for a cybersecurity challenger serving Fortune 500 teams.',
    heroImage:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80'
  }
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((item) => item.slug === slug);
}
