"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Glass background */}
      <div className="absolute inset-0 bg-[#020617]/40 border-b border-white/5"></div>

      <nav className="relative max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-blue-500">▲</span> finech
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-white">
          <li className="hover:text-slate-400 transition cursor-pointer">Home</li>
          <li className="hover:text-slate-400 transition cursor-pointer">Solutions</li>
          <li className="hover:text-slate-400 transition cursor-pointer">Integrations</li>
          <li className="hover:text-slate-400 transition cursor-pointer">Pricing</li>
          <li className="hover:text-slate-400 transition cursor-pointer">Resources</li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-6 text-sm">
          <button className="text-white hover:text-slate-400 transition">
            Login
          </button>

          <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-white font-medium hover:opacity-90 transition">
            Get Started <span>↗</span>
          </button>
        </div>

      </nav>
    </header>
  );
}