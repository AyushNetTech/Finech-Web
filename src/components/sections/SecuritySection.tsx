import { Lock, ShieldCheck, Cpu, FileCheck } from "lucide-react";

export default function SecuritySection() {
  return (
    <section className="relative bg-[#F8FAFC] py-32 overflow-hidden">

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 mb-4">
            SECURITY & COMPLIANCE
          </p>

          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Enterprise-Grade Protection for Your Business
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our platform is designed to meet the highest industry standards, ensuring your transactions, customer data, and financial operations remain secure and fully compliant with global regulations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-10">

            {[
              {
                icon: <Lock size={20} />,
                title: "End-to-End Encryption",
                desc: "Every transaction is encrypted, safeguarding sensitive financial data from unauthorized access.",
              },
              {
                icon: <ShieldCheck size={20} />,
                title: "PCI DSS Level 1 Compliance",
                desc: "Ensuring the highest level of payment security for processing transactions.",
              },
              {
                icon: <Cpu size={20} />,
                title: "AI-Powered Fraud Detection",
                desc: "Advanced machine learning models analyze transaction patterns to detect and prevent fraudulent activities in real-time.",
              },
              {
                icon: <FileCheck size={20} />,
                title: "Regulatory Compliance (KYC, AML, PSD2)",
                desc: "Built-in compliance solutions to meet global financial regulations and ensure a seamless user verification process.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">

                <div className="mt-1 text-gray-600">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CARD MOCKUP */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Card shadow */}
              <div className="absolute inset-0 bg-gray-200 rounded-3xl blur-xl opacity-40"></div>

              {/* Card */}
              <div className="relative bg-black rounded-3xl w-[380px] h-[240px] p-6 text-white shadow-xl">

                <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-full">
                  <Lock size={14} />
                </div>

                <div className="mt-10 space-y-3">
                  <div className="h-4 bg-white/20 rounded w-32"></div>
                  <div className="h-4 bg-white/20 rounded w-48"></div>
                  <div className="h-4 bg-white/20 rounded w-24"></div>
                </div>

                {/* Mastercard circles */}
                <div className="absolute bottom-6 right-6 flex">
                  <div className="w-6 h-6 bg-red-500 rounded-full opacity-90"></div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-3 opacity-90"></div>
                </div>

                {/* Masked Numbers */}
                <div className="absolute bottom-6 left-6 text-sm tracking-widest text-gray-300">
                  **** **** **** 6789
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Logos Row */}
        <div className="mt-24 flex flex-wrap justify-center items-center gap-16 opacity-60 text-gray-400">

          <div className="flex items-center gap-2 text-lg font-semibold">
            ◯ Logoipsum
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            ◯ Logoipsum
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            ◯ Logoipsum
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            ◯ Logoipsum
          </div>

        </div>

      </div>
    </section>
  );
}