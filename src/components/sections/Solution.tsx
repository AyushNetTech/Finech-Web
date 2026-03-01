import {
  ShoppingCart,
  GitBranch,
  Landmark,
  Building2,
} from "lucide-react";

export default function Solution() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= DARK SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#040505] via-[#0b131c] to-[#0F2C4D] py-32">

        {/* Dotted Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f3b5c_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-6">
            WHO IS IT FOR?
          </p>

          <h2 className="text-5xl font-semibold text-white mb-6 leading-tight">
            Financial Solutions for Every Industry
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-20 text-lg">
            Our platform empowers you to handle transactions, streamline operations, and integrate financial services seamlessly.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {[
              {
                title: "For Marketplaces",
                desc: "Seamless money movement between buyers and sellers.",
                icon: <ShoppingCart size={36} />,
              },
              {
                title: "For SaaS Platforms",
                desc: "Embed financial services into your software with minimal effort.",
                icon: <GitBranch size={36} />,
              },
              {
                title: "For Fintech Startups",
                desc: "Build your own banking solutions with ease.",
                icon: <Landmark size={36} />,
              },
              {
                title: "For Enterprises",
                desc: "Custom financial solutions to optimize operations at scale.",
                icon: <Building2 size={36} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/5 border border-white/10 rounded-3xl p-8 backdrop-blur hover:bg-white/10 transition duration-300"
              >
                <div className="h-44 rounded-2xl bg-gradient-to-br from-[#3b3f46] to-[#1f2937] flex items-center justify-center text-white mb-8 shadow-inner">
                  {item.icon}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHT SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#0F2C4D] to-[#a1b7d4] py-32">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 mb-6">
              APIs & DEVELOPER
            </p>

            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight text-white">
              Seamless Integration with
              <br />
              Powerful Developer Tools
            </h2>

            <p className="text-gray-600 mb-10 text-lg text-white    ">
              Integrate Finech effortlessly with our developer-friendly APIs, designed for speed, security, and scalability.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-medium shadow-md transition">
              Explore API Docs →
            </button>

            <ul className="mt-10 space-y-4 text-gray-600 text-sm text-white">
              <li>✓ RESTful APIs & Webhooks</li>
              <li>✓ SDKs for Multiple Languages</li>
              <li>✓ Sandbox for Testing</li>
            </ul>
          </div>

          {/* RIGHT CODE CARD */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

            {/* Mac Top Bar */}
            <div className="bg-gray-100 px-5 py-4 flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            {/* CODE CONTENT */}
            <div className="p-8 font-mono text-sm text-gray-800 leading-6">

              <span className="text-green-600 font-semibold">GET</span>{" "}
              <span className="text-blue-600">/transactions/txn_67890</span>
              <br />
              Host: <span className="text-blue-600">api.finech.com</span>
              <br />
              Authorization: Bearer{" "}
              <span className="text-red-500">YOUR_API_KEY</span>
              <br />
              Content-Type: application/json
              <br />
              Accept: application/json
              <br />
              User-Agent: PaymentClient/1.0
              <br />
              <br />
              X-Request-ID: req_123456789
              <br />
              X-Client-Version: 1.2.3
              <br />
              X-Signature: sha256abcdef123456789
              <br />
              DNT: 1
              <br />
              Cache-Control: no-cache
              <br />
              Accept-Encoding: gzip, deflate, br
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}