"use client";

export default function PricingPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-600 mb-3">
            Pricing Plan
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Find the Right Plan for Your Business
          </h1>
          <p className="mt-4 text-sm text-slate-500 leading-6">
            Transparent pricing with powerful features. Whether you’re just
            starting out or processing high-volume transactions, we have a plan
            for you.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* STARTER PLAN */}
          <div className="group rounded-2xl border border-slate-200 p-8 flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Starter Plan
            </h3>

            <div className="flex items-end gap-2 mb-2">
              <p className="text-4xl font-bold text-slate-900">$0</p>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <p className="text-xs text-slate-500 mb-4">$19 for next month</p>

            <p className="text-sm text-slate-600 leading-6 mb-6">
              Perfect for freelancers, small businesses, and early-stage startups.
            </p>

            <p className="text-xs font-semibold text-slate-400 mb-4">
              FEATURES
            </p>

            <ul className="space-y-3 text-sm text-slate-600 mb-8">
              {[
                "Process up to $10,000/month in transactions",
                "Accept Credit/Debit Cards & Bank Transfers",
                "Basic fraud protection for secure payments",
                "Standard API access for simple integrations",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 transition-colors duration-200 group-hover:text-slate-900"
                >
                  ✔ <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-auto rounded-full border border-blue-600 px-5 py-2 text-sm text-blue-600 transition-all duration-200 hover:bg-blue-50 active:scale-95">
              Start Now
            </button>
          </div>

          {/* GROWTH PLAN */}
          <div className="relative group rounded-2xl bg-slate-900 text-white p-8 flex flex-col shadow-2xl transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.6)]">

            <span className="absolute top-4 right-4 text-xs text-blue-400">
              MOST POPULAR
            </span>

            <h3 className="text-lg font-semibold mb-2">Growth Plan</h3>

            <div className="flex items-end gap-2 mb-4">
              <p className="text-4xl font-bold">$99</p>
              <span className="text-sm text-slate-400">/ month</span>
            </div>

            <p className="text-xs text-green-400 mb-4">Discount 30% off</p>

            <p className="text-sm text-slate-300 leading-6 mb-6">
              Best for growing businesses, SaaS platforms, and e-commerce stores.
            </p>

            <div className="border-t border-slate-700 pt-6 mb-6">
              <p className="text-xs font-semibold text-slate-400 mb-4">
                FEATURES
              </p>

              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  "Process up to $250,000/month",
                  "Cards, Bank & Digital Wallets",
                  "Advanced fraud protection",
                  "Full API access + Webhooks",
                  "24/7 chat & email support",
                  "Faster settlement speed (T+1)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ✔ <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-auto rounded-full bg-blue-600 px-5 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-500 active:scale-95">
              Choose Plan
            </button>
          </div>

          {/* SCALE PLAN */}
          <div className="group rounded-2xl border border-slate-200 p-8 flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Scale Plan
            </h3>

            <p className="text-3xl font-bold text-slate-900 mb-2">Custom</p>
            <p className="text-sm text-slate-500 mb-4">Pricing</p>

            <p className="text-sm text-slate-600 leading-6 mb-6">
              Ideal for enterprises and high-volume businesses.
            </p>

            <p className="text-xs font-semibold text-slate-400 mb-4">
              FEATURES
            </p>

            <ul className="space-y-3 text-sm text-slate-600 mb-8">
              {[
                "Up to $1,000,000/month",
                "All payment methods",
                "AI-powered fraud detection",
                "Dedicated API support",
                "Priority support",
                "Multi-currency support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 transition-colors duration-200 group-hover:text-slate-900"
                >
                  ✔ <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-auto rounded-full border border-blue-600 px-5 py-2 text-sm text-blue-600 transition-all duration-200 hover:bg-blue-50 active:scale-95">
              Discuss Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}