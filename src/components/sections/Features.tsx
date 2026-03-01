import Image from "next/image";

import BS from "../../../public/feature_img/bankingasaservice.jpg";
import GB from "../../../public/feature_img/global-payments.jpg";
import SC from "../../../public/feature_img/scalable.jpg";
import ST from "../../../public/feature_img/security.jpg";

export default function Features() {
  const features = [
    {
      title: "Global Payments",
      desc: "Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders.",
      image: GB, // ✅ fixed
    },
    {
      title: "Banking as a Service",
      desc: "Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services.",
      image: BS,
    },
    {
      title: "Scalability",
      desc: "A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security.",
      image: SC,
    },
    {
      title: "Compliance & Security",
      desc: "Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant.",
      image: ST,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-widest text-blue-600 mb-4 font-bold">
            WHY CHOOSE FINECH?
          </p>

          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Powering the Future of Finance
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Unlock seamless transactions, secure financial services, and limitless scalability with our powerful, API-driven infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6 mb-8">
                {item.desc}
              </p>

              {/* Image Preview */}
              <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-70 object-contain mx-auto"
                  priority
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}