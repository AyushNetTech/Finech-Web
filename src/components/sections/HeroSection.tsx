"use client";
import Partners from "./Partners";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">

  {/* Blue radial glow */}
  <div className="absolute inset-0 bg-[radial-gradient(1200px_at_20%_30%,rgba(37,99,235,0.35),transparent_60%)]" />

  {/* Dot grid overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e293b_3px,transparent_0)] [background-size:24px_24px] opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center text-textLight">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4 font-bold">
            Finance Solution
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Empowering the <br />
            Next Generation <br />
            of Financial <br />
            Infrastructure, <br />
            Designed for You
          </h1>

          <p className="mt-6 max-w-xl text-white text-sm leading-6">
            Powerful APIs and seamless integrations to help businesses move
            money, manage risk, and scale globally.
          </p>

          {/* Email / Search Box (Exact Match) */}
<div className="mt-8">

  <div className="flex items-center h-12 w-full sm:w-[420px] rounded-2xl bg-white border border-slate-800 px-1.5">

    {/* Icon */}
    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-800 text-slate-400 text-sm">
      ✉
    </div>

    {/* Input */}
    <input
      type="email"
      placeholder="Send your email"
      className="flex-1 ml-3 bg-transparent outline-none text-sm text-black placeholder:text-slate-500"
    />

    {/* CTA Button */}
    <button className="ml-1 h-9 rounded-xl bg-blue-600 px-5 text-sm font-medium text-white hover:opacity-90 transition">
      Talk to Sales →
    </button>

  </div>

</div>
          <Partners />
        </div>

        {/* RIGHT SIDE FLOATING CARDS */}
        <div className="relative h-[480px] sm:h-[520px] lg:h-[520px] w-full mt-16 lg:mt-0">

        {/* API CARD */}
        <div
            className="absolute top-4 sm:top-6 right-4 sm:right-12 w-[280px] sm:w-[360px] rounded-xl bg-[#020617]/90 backdrop-blur border border-slate-800 p-4 shadow-2xl text-sm"
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
            className="absolute top-36 sm:top-44 right-2 sm:right-24 w-[300px] sm:w-[400px] rounded-xl bg-white text-black p-6 shadow-2xl z-10"
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
            className="absolute bottom-24 sm:bottom-20 right-40 sm:right-72 w-[130px] sm:w-[150px] rounded-xl bg-white text-black p-4 shadow-xl text-center"
            style={{ transform: "rotate(-4deg)" }}
        >
            <p className="text-2xl font-bold">0.01%</p>
            <p className="text-xs text-gray-500">Failure Rate</p>
        </div>

        {/* KPI CARD 2 */}
        <div
            className="absolute bottom-12 sm:bottom-14 right-6 sm:right-36 w-[140px] sm:w-[170px] rounded-xl bg-white text-black p-4 shadow-xl text-center"
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