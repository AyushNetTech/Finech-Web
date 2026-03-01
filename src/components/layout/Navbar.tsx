"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Glass background */}
      <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-md border-b border-white/5"></div>

      <nav className="relative max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-blue-500">▲</span> finech
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          <li className="hover:underline transition cursor-pointer">Home</li>
          <li className="hover:underline transition cursor-pointer">Solutions</li>
          <li className="hover:underline transition cursor-pointer">Integrations</li>
          <li className="hover:underline transition cursor-pointer">Pricing</li>
          <li className="hover:underline transition cursor-pointer">Resources</li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <button className="hover:text-slate-400 transition">
            Login
          </button>

          <button className="h-9 rounded-xl bg-blue-600 px-5 text-sm font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-6 space-y-6 text-sm text-white">
          <div className="space-y-4">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Solutions</p>
            <p className="hover:underline cursor-pointer">Integrations</p>
            <p className="hover:underline cursor-pointer">Pricing</p>
            <p className="hover:underline cursor-pointer">Resources</p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-4">
            <button className="block w-full text-left hover:text-slate-400 transition">
              Login
            </button>

            <button className="w-full h-10 rounded-xl bg-blue-600 font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}