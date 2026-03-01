export default function ApiShowcase() {
  return (
    <section className="relative bg-[#020617] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
            Powerful APIs
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Everything you need to move money
          </h2>

          <p className="text-slate-400 max-w-xl text-sm leading-6">
            Build, launch, and scale financial experiences using Finech’s
            reliable and secure API infrastructure.
          </p>

          <button className="mt-8 rounded-full bg-primary px-6 py-3 text-sm text-white font-medium hover:opacity-90">
            View Documentation →
          </button>
        </div>

        {/* Right Code Card */}
        <div className="relative">
          <div className="rounded-2xl bg-[#020617]/90 backdrop-blur border border-slate-800 p-6 shadow-2xl text-sm text-slate-300">
            <p className="text-green-400 text-xs mb-3">
              POST <span className="text-slate-400">/v1/transfers</span>
            </p>
            <pre className="text-xs leading-6 text-slate-400">
{`{
  "amount": 1250,
  "currency": "USD",
  "destination": "bank_account",
  "status": "success"
}`}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}