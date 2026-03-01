"use client";

import { Mail, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative mx-6 sm:mx-10 lg:mx-16 mb-24 rounded-2xl overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0a1a33] to-[#0e3a66]" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] [background-size:22px_22px] opacity-30" />

      <div className="relative px-6 py-20 text-center text-white max-w-4xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
          Finance Solution
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
          Ready to Scale Your Payments?
        </h2>

        <p className="mt-4 text-sm text-slate-300 max-w-2xl mx-auto leading-6">
          Join thousands of businesses worldwide using Finech to simplify
          transactions, enhance security, and drive growth.
        </p>

        {/* INPUT */}
        <div className="mt-8 flex justify-center">

          <div className="flex items-center h-12 w-full sm:w-[420px] rounded-2xl bg-white border border-slate-800 px-2">

            {/* Email Icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-slate-400">
              <Mail size={16} />
            </div>

            {/* Input */}
            <input
              type="email"
              placeholder="Send your email"
              className="flex-1 ml-3 bg-transparent outline-none text-sm text-black placeholder:text-slate-500"
            />

            {/* Desktop Button */}
            <button className="hidden sm:flex ml-2 h-9 items-center rounded-xl bg-blue-600 px-5 text-sm font-medium text-white hover:opacity-90 transition">
              Talk to Sales →
            </button>

            {/* Mobile Icon Button */}
            <button className="flex sm:hidden ml-2 h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white hover:opacity-90 transition">
              <Send size={16} />
            </button>

          </div>
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="relative bg-black py-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 px-10 items-center text-white text-sm opacity-90">
          {[
            "Amazon",
            "Dropbox",
            "Loom",
            "Medium",
            "Twitch",
            "Discord",
            "Mailchimp",
          ].map((brand) => (
            <span key={brand} className="whitespace-nowrap font-medium">
              {brand}
            </span>
          ))}

          {/* duplicate for seamless loop */}
          {[
            "Amazon",
            "Dropbox",
            "Loom",
            "Medium",
            "Twitch",
            "Discord",
            "Mailchimp",
          ].map((brand) => (
            <span key={`${brand}-dup`} className="whitespace-nowrap font-medium">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}