export default function Footer() {
  return (
    <footer className="bg-[#fff] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-black font-semibold text-lg mb-4">
              <span className="text-blue-500">▲</span>
              finech
            </div>

            <p className="text-sm text-slate-700 leading-6 max-w-xs">
              Finech provides secure and scalable financial APIs to help
              businesses move money, manage risk, and grow globally.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <p className="text-sm font-semibold text-black mb-4">
              Product
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="hover:underline cursor-pointer">Payments</li>
              <li className="hover:underline cursor-pointer">Pricing</li>
              <li className="hover:underline cursor-pointer">Integrations</li>
              <li className="hover:underline cursor-pointer">API Docs</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-sm font-semibold text-black mb-4">
              Company
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <p className="text-sm font-semibold text-black mb-4">
              Resources
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="hover:underline cursor-pointer">Documentation</li>
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Status</li>
              <li className="hover:underline cursor-pointer">Security</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-700">
          <p>© 2026 Finech. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Privacy Policy · Terms of Service
          </p>
        </div>

      </div>
    </footer>
  );
}