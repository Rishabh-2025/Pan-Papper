// import { motion } from "framer-motion";

// import {
//   FiUsers,
//   FiGift,
//   FiBriefcase,
//   FiStar,
//   FiBox,
//   FiArrowUpRight,
// } from "react-icons/fi";

// const solutions = [
//   {
//     icon: <FiUsers />,
//     title: "Employee Joining Kits",
//     desc: "Create memorable onboarding experiences with premium welcome kits designed for modern teams and corporate culture.",
//   },
//   {
//     icon: <FiGift />,
//     title: "Festive Gifting",
//     desc: "Luxury festive hampers and personalized gifting collections crafted for clients, employees, and business celebrations.",
//   },
//   {
//     icon: <FiBriefcase />,
//     title: "Client Appreciation",
//     desc: "Strengthen business relationships with elegant executive gifting experiences that reflect your brand identity.",
//   },
//   {
//     icon: <FiStar />,
//     title: "Executive Luxury Gifts",
//     desc: "Premium curated collections for founders, CXOs, leadership teams, and high-value corporate clients.",
//   },
//   {
//     icon: <FiBox />,
//     title: "Event & Conference Kits",
//     desc: "Branded conference gifting solutions with custom packaging and premium presentation for corporate events.",
//   },
// ];

// const CorporateSolutions = () => {
//   return (
//     <section className="relative py-24 lg:py-32 overflow-hidden bg-[#f8fbfc]">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] rounded-full bg-[#0097A7]/5 blur-3xl" />

//       <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#0097A7]/5 blur-3xl" />

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
//         {/* TOP SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-3xl"
//         >
//           {/* TAG */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

//             <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
//               Corporate Gifting Solutions
//             </span>
//           </div>

//           {/* HEADING */}
//           <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-semibold text-slate-900 luxury-font">
//             Tailored Gifting
//             <span className="text-[#0097A7]"> For Every Business Need</span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
//             We help businesses create meaningful brand experiences through
//             luxury corporate gifting, customized packaging, executive
//             collections, and premium employee engagement solutions.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {solutions.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 45 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.08,
//               }}
//               viewport={{ once: true }}
//               className="group relative bg-white rounded-[32px] p-8 border border-slate-100 hover:border-[#0097A7]/20 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.07)] overflow-hidden"
//             >
//               {/* HOVER GLOW */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#0097A7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

//               {/* ICON */}
//               <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-3xl group-hover:scale-110 transition-transform duration-500">
//                 {item.icon}
//               </div>

//               {/* CONTENT */}
//               <div className="relative z-10 mt-8">
//                 <div className="flex items-start justify-between gap-4">
//                   <h3 className="text-[26px] leading-tight font-semibold text-slate-900 max-w-[240px]">
//                     {item.title}
//                   </h3>

//                   <button className="shrink-0 w-11 h-11 rounded-full bg-slate-100 group-hover:bg-[#0097A7] text-slate-700 group-hover:text-white transition-all duration-500 flex items-center justify-center">
//                     <FiArrowUpRight className="text-lg" />
//                   </button>
//                 </div>

//                 <p className="mt-5 text-slate-600 leading-8 text-[15px]">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* BOTTOM LINE */}
//               <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0097A7] group-hover:w-full transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-[36px] overflow-hidden relative"
//         >
//           {/* BACKGROUND */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0097A7] to-[#007885]" />

//           <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
//             {/* LEFT */}
//             <div className="max-w-3xl">
//               <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold text-white">
//                 Looking For Customized
//                 <br />
//                 Corporate Gifting Solutions?
//               </h3>

//               <p className="mt-6 text-white/80 leading-8 text-base sm:text-lg max-w-2xl">
//                 From premium packaging and logo branding to curated gifting
//                 collections and PAN India delivery, we help businesses create
//                 unforgettable gifting experiences.
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               {/* PRIMARY */}
//               <button className="group bg-white hover:bg-slate-100 transition-all duration-500 text-[#0097A7] px-8 py-4 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-3 whitespace-nowrap">
//                 Request Corporate Quote

//                 <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//               </button>

//               {/* SECONDARY */}
//               <button className="border border-white/20 hover:bg-white/10 transition-all duration-500 text-white px-8 py-4 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap">
//                 Explore Collections
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CorporateSolutions;

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import {
  FiUsers,
  FiGift,
  FiBriefcase,
  FiStar,
  FiBox,
  FiArrowUpRight,
} from "react-icons/fi";

import "swiper/css";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    icon: <FiUsers />,
    title: "Joining Kits",
  },
  {
    icon: <FiGift />,
    title: "Festive Gifts",
  },
  {
    icon: <FiBriefcase />,
    title: "Client Gifting",
  },
  {
    icon: <FiStar />,
    title: "Executive Gifts",
  },
  {
    icon: <FiBox />,
    title: "Conference Kits",
  },
];

const CorporateSolutions = () => {

  const navigate = useNavigate()
  
  const handleRequestQuote = () => {
    navigate("/contact")
  }

  const handleExploreProducts = () => {
    navigate("/categories")
  }

  return (
    <section className="relative py-24 lg:py-32 bg-[#f8fbfc] overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
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
              Corporate Solutions
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-semibold text-slate-900 luxury-font">
            Gifting For Every
            <span className="text-[#0097A7]"> Business Occasion</span>
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
            Premium gifting collections designed for modern brands,
            employees, clients, events, and executive experiences.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {solutions.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-[30px] p-8 border border-slate-100 hover:border-[#0097A7]/20 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                >
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0097A7]/10 flex items-center justify-center text-[#0097A7] text-3xl group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <h3 className="text-[26px] leading-tight font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <button className="w-11 h-11 rounded-full bg-slate-100 group-hover:bg-[#0097A7] text-slate-700 group-hover:text-white transition-all duration-500 flex items-center justify-center shrink-0">
                      <FiArrowUpRight className="text-lg" />
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-[#0097A7] to-[#007885] p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* LEFT */}
            <div className="max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Customized Corporate Gifting
              </h3>

              <p className="mt-5 text-white/80 leading-8">
                Premium products, custom branding, luxury packaging &
                PAN India delivery solutions.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleRequestQuote} className="bg-white hover:bg-slate-100 transition-all duration-500 text-[#0097A7] px-8 py-4 rounded-full font-semibold whitespace-nowrap curson-pointer">
                Request Quote
              </button>

              <button onClick={handleExploreProducts} className="border border-white/20 hover:bg-white/10 transition-all duration-500 text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap cursor-pointer">
                Explore Products
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateSolutions;