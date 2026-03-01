"use client";
import Partners from "./Partners";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">

  {/* Blue radial glow */}
  <div className="absolute inset-0 bg-[radial-gradient(1200px_at_20%_30%,rgba(37,99,235,0.35),transparent_60%)]" />

  {/* Dot grid overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e293b_3px,transparent_0)] [background-size:24px_24px] opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-textLight">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
            Finance Solution
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
            Empowering the <br />
            Next Generation <br />
            of Financial <br />
            Infrastructure, <br />
            Designed for You
          </h1>

          <p className="mt-6 max-w-xl text-slate-300 text-sm leading-6">
            Powerful APIs and seamless integrations to help businesses move
            money, manage risk, and scale globally.
          </p>

          {/* Email + CTA */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-[#020617] border border-borderDark px-4 py-2 text-sm">
              <span>✉</span>
              <input
                type="email"
                placeholder="Send your email"
                className="bg-transparent outline-none text-textLight placeholder:text-textMuted"
              />
            </div>

            <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium hover:opacity-90">
              Talk to Sales →
            </button>

            
          </div>
          <Partners />
        </div>

        {/* RIGHT SIDE FLOATING CARDS */}
        <div className="relative h-[520px] w-full">

        {/* API CARD */}
        <div
            className="absolute top-6 right-12 w-[360px] rounded-xl bg-[#020617]/90 backdrop-blur border border-slate-800 p-4 shadow-2xl text-sm"
            style={{ transform: "rotate(-6deg)" }}
        >
            <p className="text-green-400 text-xs mb-2">
            GET <span className="text-gray-400">/payments</span>
            </p>
            <pre className="text-gray-400 text-xs leading-5">
        {`Host: api.finech.com
        Authorization: Bearer YOUR_API_KEY
        Content-Type: application/json`}
            </pre>
        </div>

        {/* TRANSFER CARD */}
        <div
            className="absolute top-44 right-24 w-[400px] rounded-xl bg-white text-black p-6 shadow-2xl z-10"
            style={{ transform: "rotate(2deg)" }}
        >
            <div className="flex justify-between text-xs text-gray-500 mb-3">
            <span>Transfer Multi-Currency</span>
            <span className="text-green-600 font-medium">Success</span>
            </div>

            <div className="flex justify-between items-center">
            <div>
                <p className="text-lg font-semibold">$1,250.00</p>
                <p className="text-xs text-gray-500">USD</p>
            </div>

            <span className="text-gray-400 text-xl">→</span>

            <div>
                <p className="text-lg font-semibold">¥187,500</p>
                <p className="text-xs text-gray-500">JPY</p>
            </div>
            </div>
        </div>

        {/* KPI CARD 1 */}
        <div
            className="absolute bottom-20 right-72 w-[150px] rounded-xl bg-white text-black p-4 shadow-xl text-center"
            style={{ transform: "rotate(-4deg)" }}
        >
            <p className="text-2xl font-bold">0.01%</p>
            <p className="text-xs text-gray-500">Failure Rate</p>
        </div>

        {/* KPI CARD 2 */}
        <div
            className="absolute bottom-14 right-36 w-[170px] rounded-xl bg-white text-black p-4 shadow-xl text-center"
            style={{ transform: "rotate(3deg)" }}
        >
            <p className="text-2xl font-bold">95%</p>
            <p className="text-xs text-gray-500">Faster Processing</p>
        </div>

        </div>

      </div>
    </section>
  );
}