import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import heroMain from "../../assets/images/hero/hero-main.png";
import walletImg from "../../assets/images/hero/floating-wallet.png";
import bagImg from "../../assets/images/hero/floating-bag.png";
import barImg from "../../assets/images/hero/floating-bar.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreCollection = () => {
    navigate("/categories?category=all");
  };

  const handleBulkOrderInquiry = () => {
    navigate("/contact");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbfc] to-[#edf7f8] min-h-screen flex items-center pt-32 lg:pt-36">
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#0097A7]/10 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#0097A7]" />
              <span className="text-[#0097A7] text-sm font-semibold tracking-wide uppercase">
                Premium Corporate Gifting Solutions
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[74px] leading-[1.05] font-semibold text-slate-900 luxury-font">
              Luxury Gifts
              <br />
              That Build
              <span className="text-[#0097A7]"> Business Relationships</span>
            </h1>

            <p className="mt-7 text-slate-600 text-base sm:text-lg leading-8 max-w-xl">
              Elevate your corporate identity with premium executive gifting collections crafted for clients, employees, festive occasions, and luxury business experiences.
            </p>

            <div  className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button onClick={handleExploreCollection} className="group bg-[#0097A7] hover:bg-[#007c89] transition-all duration-300 text-white px-8 py-4 rounded-full text-sm sm:text-base font-semibold flex items-center gap-3 shadow-lg hover:shadow-[#0097A7]/25 cursor-pointer ">
                Explore Collection
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button onClick={handleBulkOrderInquiry}  className="border border-slate-300 hover:border-[#0097A7] hover:text-[#0097A7] transition-all duration-300 text-slate-700 px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-white/70 backdrop-blur-md cursor-pointer">
                Bulk Order Inquiry
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src={heroMain}
              alt="Luxury Corporate Gifts"
              className="w-full max-w-[640px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-[5%] left-0 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white w-[180px] sm:w-[210px]"
            >
              <img src={walletImg} alt="" className="w-full h-[110px] object-contain" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-[10%] left-[2%] bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white w-[180px] sm:w-[210px]"
            >
              <img src={bagImg} alt="" className="w-full h-[110px] object-contain" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="hidden sm:block absolute top-[18%] right-[-20px] bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white w-[190px]"
            >
              <img src={barImg} alt="" className="w-full h-[110px] object-contain" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
