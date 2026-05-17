// src/components/category/CategoryHero.jsx

import { motion } from "framer-motion";

const CategoryHero = ({ categoryParam }) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white">
      {/* BG */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl">
          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

            <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
              Premium Corporate Collection
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-7 text-[42px] sm:text-[58px] lg:text-[82px] leading-[1.02] font-semibold text-slate-900 luxury-font capitalize"
          >
            {categoryParam === "all"
              ? "Luxury Corporate Gifting Collection"
              : categoryParam.replace(/-/g, " ")}
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mt-7 max-w-3xl text-slate-600 text-base sm:text-lg leading-8"
          >
            Explore premium gifting collections crafted for modern businesses,
            executive branding, festive campaigns, onboarding kits, and luxury
            corporate experiences.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="px-5 py-3 rounded-full bg-[#f8fbfc] border border-slate-100 text-sm font-medium text-slate-700">
              Premium Packaging
            </div>

            <div className="px-5 py-3 rounded-full bg-[#f8fbfc] border border-slate-100 text-sm font-medium text-slate-700">
              Bulk Orders
            </div>

            <div className="px-5 py-3 rounded-full bg-[#f8fbfc] border border-slate-100 text-sm font-medium text-slate-700">
              Corporate Branding
            </div>

            <div className="px-5 py-3 rounded-full bg-[#f8fbfc] border border-slate-100 text-sm font-medium text-slate-700">
              PAN India Delivery
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;