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

      <div className="mt-10 rounded-3xl border border-brand-red/20 bg-brand-offWhite p-3 shadow-premium md:p-4">
        <div style={{ position: 'relative', height: '80dvh', overflow: 'auto' }}>
          <iframe
            src="https://app.formbricks.com/s/cmmfepybxbia9um01eqhrc9ds"
            frameBorder="0"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: '16px',
              background: '#F7F6F3'
            }}
            title="Upnext Formbricks Intake"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
