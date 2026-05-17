import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  FiAward,
  FiPackage,
  FiTruck,
  FiUsers,
} from "react-icons/fi";

// import aboutImg from "../assets/images/about/about.jpg";

const stats = [
  {
    icon: <FiPackage />,
    value: "500+",
    label: "Premium Products",
  },
  {
    icon: <FiUsers />,
    value: "100+",
    label: "Corporate Clients",
  },
  {
    icon: <FiAward />,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: <FiTruck />,
    value: "PAN",
    label: "India Delivery",
  },
];

const About = () => {
  return (
    <>
    <Navbar/>
    <section className="relative overflow-hidden bg-white pt-36 pb-24 lg:pb-32">
      {/* BG */}
      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

              <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
                About Us
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.05] font-semibold text-slate-900 luxury-font">
              Luxury Corporate
              <span className="text-[#0097A7]"> Gifting Solutions</span>
            </h1>

            {/* TEXT */}
            <p className="mt-7 text-slate-600 text-base sm:text-lg leading-8">
              We create premium corporate gifting experiences with elegant
              products, customized branding, luxury packaging, and PAN India
              delivery solutions for modern businesses.
            </p>

            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-8">
              From executive gifting to festive collections and onboarding
              kits, we help brands build meaningful business relationships.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* <img
              src={aboutImg}
              alt="About"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-[40px]"
            /> */}

            {/* FLOAT CARD */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-[28px] p-6 shadow-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-slate-900">
                Premium Business Gifting
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Curated luxury gifting collections crafted for modern brands.
              </p>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-[#f8fbfc] rounded-[30px] p-8 border border-slate-100 text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-4xl font-semibold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;