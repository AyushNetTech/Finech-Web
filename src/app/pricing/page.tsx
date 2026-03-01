export default function PricingPage() {
  return (
    <main className="bg-[#020617] min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-semibold text-white mb-16">
          Simple, transparent pricing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {["Starter", "Growth", "Enterprise"].map((plan, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#020617]/80 backdrop-blur border border-white/5 p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {plan}
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                Perfect for scaling teams and startups.
              </p>

              <p className="text-3xl font-bold text-white mb-6">
                ${i === 0 ? "0" : i === 1 ? "49" : "Custom"}
              </p>

              <button className="w-full rounded-full bg-primary py-3 text-sm text-white font-medium">
                Get Started
              </button>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}