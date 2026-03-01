"use client";

export default function SuccessStories() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Dot background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs tracking-widest uppercase text-blue-600 mb-3">
            Success Story
          </p>
          <h2 className="text-4xl font-semibold text-slate-900">
            How Businesses Thrive with Finech
          </h2>
          <p className="mt-4 text-sm text-slate-500 leading-6">
            Join the growing list of companies that trust Finech to power their
            payments, banking, and financial services. From startups to
            enterprises, our platform delivers real results—faster transactions,
            improved security, and effortless scalability.
          </p>
        </div>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

          {/* CARD */}
          <div className="break-inside-avoid rounded-2xl bg-slate-900 text-white p-6 shadow-xl">
            <p className="text-sm leading-6 text-slate-200">
              “Managing enterprise transactions at scale requires reliability.
              Finech’s uptime and real-time monitoring make them the perfect
              partner.”
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Frances Swann</p>
                <p className="text-xs text-slate-400">CEO of Toggl</p>
              </div>
              <span className="text-xs text-slate-400">toggl</span>
            </div>
          </div>

          <div className="break-inside-avoid rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
            <p className="text-sm leading-6 text-slate-700">
              “Issuing virtual and physical cards used to be complex, but with
              Finech, we did it in just days. Our customers love the seamless
              experience!”
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Rhonda Rhodes
                </p>
                <p className="text-xs text-slate-500">
                  Risk Manager at Upwork
                </p>
              </div>
              <span className="text-xs text-slate-400">upwork</span>
            </div>
          </div>

          <div className="break-inside-avoid rounded-2xl bg-slate-900 text-white p-6 shadow-xl">
            <p className="text-sm leading-6 text-slate-200">
              “Finech’s API-first approach allowed us to integrate financial
              services effortlessly. Our infrastructure scaled without
              friction.”
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Eddie Lake</p>
                <p className="text-xs text-slate-400">COO at Zoom</p>
              </div>
              <span className="text-xs text-slate-400">zoom</span>
            </div>
          </div>

          <div className="break-inside-avoid rounded-2xl bg-slate-900 text-white p-6 shadow-xl">
            <p className="text-sm leading-6 text-slate-200">
              “Security was our top concern, and Finech exceeded expectations.
              Their PCI DSS compliance and AI-powered fraud detection give us
              peace of mind.”
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Autumn Phillips</p>
                <p className="text-xs text-slate-400">CTO at Spotify</p>
              </div>
              <span className="text-xs text-slate-400">spotify</span>
            </div>
          </div>

          <div className="break-inside-avoid rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
            <p className="text-sm leading-6 text-slate-700">
              “Finech has completely transformed our cross-border transactions.
              With seamless multi-currency support, we now process international
              payments 50% faster!”
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Paula Mora</p>
                <p className="text-xs text-slate-500">Finance Lead at Tesla</p>
              </div>
              <span className="text-xs text-slate-400">tesla</span>
            </div>
          </div>

          <div className="break-inside-avoid rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
            <p className="text-sm leading-6 text-slate-700">
              “Finech helped us reduce payout times from days to minutes. Our
              sellers are happier, and disputes dropped significantly.”
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Iva Ryan</p>
                <p className="text-xs text-slate-500">CTO at Discord</p>
              </div>
              <span className="text-xs text-slate-400">discord</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500">
            Explore Case Studies →
          </button>
        </div>

      </div>
    </section>
  );
}