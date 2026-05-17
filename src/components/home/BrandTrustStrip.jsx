import {
  FiPackage,
  FiTruck,
  FiPenTool,
  FiBriefcase,
} from "react-icons/fi";

import { motion } from "framer-motion";

const trustData = [
  {
    icon: <FiPenTool />,
    title: "Custom Branding",
    desc: "Logo printing, engraving & personalized corporate gifting solutions.",
  },
  {
    icon: <FiPackage />,
    title: "Bulk Orders",
    desc: "Scalable gifting solutions for events, employees & client programs.",
  },
  {
    icon: <FiTruck />,
    title: "PAN India Delivery",
    desc: "Reliable nationwide shipping with secure premium packaging.",
  },
  {
    icon: <FiBriefcase />,
    title: "Premium Packaging",
    desc: "Luxury presentation boxes crafted for executive experiences.",
  },
];

const BrandTrustStrip = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden border-y border-slate-100">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#0097A7]/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* SMALL TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

            <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
              Why Businesses Choose Us
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[34px] sm:text-[42px] lg:text-[54px] leading-[1.1] font-semibold text-slate-900 luxury-font">
            Premium Corporate
            <span className="text-[#0097A7]"> Gifting Experience</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8">
            From luxury executive gifts to customized corporate collections,
            we help brands create memorable business impressions with premium
            quality, elegant packaging, and reliable delivery solutions.
          </p>
        </motion.div>

        {/* TRUST CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {trustData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[28px] p-7 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
            >
              {/* HOVER BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0097A7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* ICON */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-3xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-6">
                <h3 className="text-[22px] font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7 text-[15px]">
                  {item.desc}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0097A7] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TRUST BAR */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#0097A7] to-[#007885] rounded-[32px] p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* LEFT */}
            <div className="max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Trusted By Modern Businesses
              </h3>

              <p className="mt-4 text-white/80 leading-8 text-base">
                We deliver luxury gifting experiences for companies, employee
                engagement programs, festive gifting campaigns, conferences,
                events, and executive business relationships.
              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10">
              <div>
                <h4 className="text-white text-3xl font-bold">500+</h4>

                <p className="mt-2 text-white/80 text-sm leading-6">
                  Premium Products
                </p>
              </div>

              <div>
                <h4 className="text-white text-3xl font-bold">100+</h4>

                <p className="mt-2 text-white/80 text-sm leading-6">
                  Corporate Clients
                </p>
              </div>

              <div>
                <h4 className="text-white text-3xl font-bold">PAN</h4>

                <p className="mt-2 text-white/80 text-sm leading-6">
                  India Delivery
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandTrustStrip;