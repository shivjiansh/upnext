import Script from 'next/script';

export const metadata = {
  title: 'Start a Project',
  description: 'Complete a guided project brief with Upnext.'
};

export default function StartAProjectPage() {
  return (
    <main className="section-shell">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-slate">The Qualifier</p>
      <h1 className="mt-4 max-w-4xl text-display font-semibold">Tell us what you are building. We will design the growth plan.</h1>
      <p className="mt-6 max-w-2xl text-brand-slate">Use this guided brief to share your goals, timelines, and growth bottlenecks.</p>

      <div className="mt-10 rounded-3xl border border-brand-gray bg-white p-6 md:p-10">
        <div id="formbricks-survey" className="min-h-[580px]" />
      </div>

      <Script src="https://app.formbricks.com/js/formbricks.umd.cjs" strategy="afterInteractive" />
      <Script id="formbricks-init" strategy="afterInteractive">
        {`
          window.formbricks = window.formbricks || {};
          window.formbricks.init && window.formbricks.init({
            environmentId: 'YOUR_ENVIRONMENT_ID',
            apiHost: 'https://app.formbricks.com'
          });
        `}
      </Script>
    </main>
  );
}
