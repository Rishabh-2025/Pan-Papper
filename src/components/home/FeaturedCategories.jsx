// import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";

// // import executiveImg from "../../assets/images/categories/executive.jpg";
// // import bagsImg from "../../assets/images/categories/bags.jpg";
// // import festiveImg from "../../assets/images/categories/festive.jpg";
// // import barImg from "../../assets/images/categories/bar.jpg";
// // import giftingImg from "../../assets/images/categories/gifting.jpg";

// const categories = [
//   {
//     title: "Executive Accessories",
//     // image: executiveImg,
//     desc: "Premium office essentials crafted for professionals and business leaders.",
//     size: "large",
//   },
//   {
//     title: "Corporate Bags",
//     // image: bagsImg,
//     desc: "Luxury travel and office bags designed for executive experiences.",
//     size: "small",
//   },
//   {
//     title: "Festive Gifts",
//     // image: festiveImg,
//     desc: "Elegant festive gifting collections for clients and employees.",
//     size: "small",
//   },
//   {
//     title: "Bar Collection",
//     // image: barImg,
//     desc: "Luxury celebration gifting and executive bar accessories.",
//     size: "small",
//   },
//   {
//     title: "Premium Gift Sets",
//     // image: giftingImg,
//     desc: "Curated premium gifting solutions with elegant packaging.",
//     size: "large",
//   },
// ];

// const FeaturedCategories = () => {
//   return (
//     <section className="relative py-24 lg:py-32 overflow-hidden bg-[#f8fbfc]">
//       {/* BACKGROUND */}
//       <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#0097A7]/5 blur-3xl" />

//       <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#0097A7]/5 blur-3xl" />

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
//         {/* TOP CONTENT */}
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
//               Featured Collections
//             </span>
//           </div>

//           {/* HEADING */}
//           <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-semibold text-slate-900 luxury-font">
//             Curated Luxury
//             <span className="text-[#0097A7]"> Corporate Categories</span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
//             Discover premium gifting collections designed to strengthen
//             business relationships, elevate brand identity, and create
//             unforgettable corporate experiences.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 auto-rows-[320px]">
//           {categories.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 45 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.08,
//               }}
//               viewport={{ once: true }}
//               className={`group relative overflow-hidden rounded-[34px] ${
//                 item.size === "large"
//                   ? "xl:col-span-7"
//                   : "xl:col-span-5"
//               }`}
//             >
//               {/* IMAGE */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <img
//                   // src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

//               {/* CONTENT */}
//               <div className="relative z-10 h-full flex flex-col justify-end p-7 sm:p-10">
//                 {/* ICON BUTTON */}
//                 <div className="absolute top-6 right-6">
//                   <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl group-hover:bg-[#0097A7] transition-all duration-500">
//                     <FiArrowUpRight />
//                   </div>
//                 </div>

//                 {/* TEXT */}
//                 <div className="max-w-md">
//                   <h3 className="text-white text-[28px] sm:text-[34px] font-semibold leading-tight">
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 text-white/80 leading-7 text-sm sm:text-base">
//                     {item.desc}
//                   </p>

//                   {/* LINK */}
//                   <button className="mt-6 inline-flex items-center gap-2 text-white font-medium tracking-wide group-hover:text-[#7de3ec] transition-all duration-300">
//                     Explore Collection

//                     <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>

//               {/* HOVER BORDER */}
//               <div className="absolute inset-0 rounded-[34px] border border-white/10 group-hover:border-[#0097A7]/40 transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCategories;


// src/components/home/FeaturedCategories.jsx

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import categories from "../../data/categories";

const FeaturedCategories = () => {
  const navigate = useNavigate();

  /* NAVIGATE CATEGORY */
  const handleNavigate = (slug) => {
    navigate(`/categories?category=${slug}`);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#f8fbfc]">
      {/* BG */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

            <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
              Featured Collections
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-semibold text-slate-900 luxury-font">
            Curated Luxury
            <span className="text-[#0097A7]">
              {" "}
              Corporate Categories
            </span>
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
            Discover premium gifting collections designed for modern
            business experiences and executive branding.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 auto-rows-[320px]">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              onClick={() =>
                handleNavigate(item.slug)
              }
              className={`group relative overflow-hidden rounded-[34px] cursor-pointer ${
                item.size === "large"
                  ? "xl:col-span-7"
                  : "xl:col-span-5"
              }`}
            >
              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden">
                {/* <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                /> */}
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-7 sm:p-10">
                {/* ICON */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl group-hover:bg-[#0097A7] transition-all duration-500">
                    <FiArrowUpRight />
                  </div>
                </div>

                {/* TEXT */}
                <div className="max-w-md">
                  <h3 className="text-white text-[28px] sm:text-[34px] font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-white/80 leading-7 text-sm sm:text-base">
                    {item.desc}
                  </p>

                  {/* BUTTON */}
                  <button className="mt-6 inline-flex items-center gap-2 text-white font-medium tracking-wide group-hover:text-[#7de3ec] transition-all duration-300 cursor-pointer">
                    Explore Collection

                    <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 rounded-[34px] border border-white/10 group-hover:border-[#0097A7]/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;