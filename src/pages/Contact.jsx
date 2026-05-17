import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main>
       <section className="relative overflow-hidden bg-[#f8fbfc] pt-36 pb-24 lg:pb-32">
      {/* BG */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

            <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
              Contact Us
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.05] font-semibold text-slate-900 luxury-font">
            Let’s Build
            <span className="text-[#0097A7]"> Premium Experiences</span>
          </h1>

          {/* TEXT */}
          <p className="mt-7 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
            Get in touch for luxury corporate gifting, customized branding,
            festive collections, executive kits, and bulk order inquiries.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-[36px] p-8 lg:p-10 border border-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#0097A7]"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#0097A7]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <input
                type="email"
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#0097A7]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#0097A7]"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your Requirement"
              className="w-full mt-5 rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#0097A7]"
            />

            <button className="mt-6 bg-[#0097A7] hover:bg-[#007885] transition-all duration-500 text-white px-8 py-4 rounded-full font-semibold">
              Send Inquiry
            </button>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* CARD */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-2xl">
                <FiPhone />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Phone
              </h3>

              <p className="mt-3 text-slate-600">
                +91 9876543210
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-2xl">
                <FiMail />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Email
              </h3>

              <p className="mt-3 text-slate-600">
                info@company.com
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-2xl">
                <FiMapPin />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Location
              </h3>

              <p className="mt-3 text-slate-600">
                Meerut, Uttar Pradesh, India
              </p>

              {/* SOCIAL */}
              <div className="mt-6 flex items-center gap-4">
                <button className="w-11 h-11 rounded-full bg-[#f8fbfc] hover:bg-[#0097A7] hover:text-white transition-all duration-500 text-slate-700 flex items-center justify-center">
                  <FiInstagram />
                </button>

                <button className="w-11 h-11 rounded-full bg-[#f8fbfc] hover:bg-[#0097A7] hover:text-white transition-all duration-500 text-slate-700 flex items-center justify-center">
                  <FiLinkedin />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
