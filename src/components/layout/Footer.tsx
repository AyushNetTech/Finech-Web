export default function Footer() {
  return (
    <footer className="relative bg-white mt-24">

      {/* Dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-sm text-slate-600">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 lg:gap-12">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 font-semibold text-lg text-slate-900 mb-3">
              <span className="text-blue-600">▲</span>
              finech
            </div>
            <p className="text-sm text-slate-500">
              support@finech.com
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <p className="font-medium text-slate-900 mb-4">Company</p>
            <ul className="space-y-3">
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Blog</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <p className="font-medium text-slate-900 mb-4">Products</p>
            <ul className="space-y-3">
              <li className="hover:underline">Payments</li>
              <li className="hover:underline">API & Developer Docs</li>
              <li className="hover:underline">Pricing</li>
              <li className="hover:underline">Security</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <p className="font-medium text-slate-900 mb-4">Resources</p>
            <ul className="space-y-3">
              <li className="hover:underline">Help Center</li>
              <li className="hover:underline">FAQs</li>
              <li className="hover:underline">Case Studies</li>
              <li className="hover:underline">Webinars</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="font-medium text-slate-900 mb-4">Legal</p>
            <ul className="space-y-3">
              <li className="hover:underline">Privacy Policy</li>
              <li className="hover:underline">Terms of Service</li>
              <li className="hover:underline">Compliance</li>
              <li className="hover:underline">Security & Trust</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="font-medium text-slate-900 mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="hover:underline">Support</li>
              <li className="hover:underline">Partnerships</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2025 Finech. All Rights Reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:underline">Login</span>
            <span className="cursor-pointer hover:underline">Sign Up</span>
          </div>
        </div>

      </div>
    </footer>
  );
}