// import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// // import product1 from "../../assets/images/products/product-1.jpg";
// // import product2 from "../../assets/images/products/product-2.jpg";
// // import product3 from "../../assets/images/products/product-3.jpg";
// // import product4 from "../../assets/images/products/product-4.jpg";
// // import product5 from "../../assets/images/products/product-5.jpg";

// const products = [
//   {
//     title: "Executive Leather Kit",
//     category: "Premium Gift Set",
//     // image: product1,
//   },
//   {
//     title: "Luxury Office Bag",
//     category: "Corporate Collection",
//     // image: product2,
//   },
//   {
//     title: "Business Travel Combo",
//     category: "Executive Accessories",
//     // image: product3,
//   },
//   {
//     title: "Premium Bar Hamper",
//     category: "Luxury Celebration",
//     // image: product4,
//   },
//   {
//     title: "Corporate Welcome Kit",
//     category: "Employee Gifting",
//     // image: product5,
//   },
// ];

// const BestSellerSection = () => {
//   return (
//     <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#0097A7]/5 blur-3xl" />

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
//         {/* TOP CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row lg:items-end justify-between gap-10"
//         >
//           {/* LEFT */}
//           <div className="max-w-3xl">
//             {/* TAG */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
//               <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

//               <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
//                 Signature Collection
//               </span>
//             </div>

//             {/* HEADING */}
//             <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-semibold text-slate-900 luxury-font">
//               Best Selling
//               <span className="text-[#0097A7]"> Corporate Gifts</span>
//             </h2>

//             {/* DESCRIPTION */}
//             <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
//               Explore our most demanded executive gifting collections crafted
//               for corporate events, employee engagement, festive campaigns,
//               client appreciation, and premium business experiences.
//             </p>
//           </div>

//           {/* RIGHT BUTTON */}
//           <div>
//             <button className="group border border-slate-300 hover:border-[#0097A7] hover:bg-[#0097A7] transition-all duration-500 px-7 py-4 rounded-full text-slate-800 hover:text-white text-sm font-semibold flex items-center gap-3">
//               View Full Collection

//               <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//             </button>
//           </div>
//         </motion.div>

//         {/* SLIDER */}
//         <div className="mt-16">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={24}
//             loop={true}
//             speed={900}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1.15,
//               },
//               640: {
//                 slidesPerView: 1.6,
//               },
//               768: {
//                 slidesPerView: 2.1,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//               1280: {
//                 slidesPerView: 3.5,
//               },
//             }}
//           >
//             {products.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 35 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.08,
//                   }}
//                   viewport={{ once: true }}
//                   className="group relative overflow-hidden rounded-[34px] bg-[#f8fbfc] border border-slate-100 hover:border-[#0097A7]/20 transition-all duration-500"
//                 >
//                   {/* IMAGE */}
//                   <div className="relative overflow-hidden h-[380px] sm:h-[440px]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />

//                     {/* OVERLAY */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />

//                     {/* CATEGORY */}
//                     <div className="absolute top-5 left-5">
//                       <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
//                         <span className="text-white text-xs tracking-[0.15em] uppercase font-semibold">
//                           {item.category}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-7">
//                     <div className="flex items-start justify-between gap-5">
//                       <div>
//                         <h3 className="text-[26px] leading-tight font-semibold text-slate-900">
//                           {item.title}
//                         </h3>

//                         <p className="mt-4 text-slate-600 leading-7 text-[15px]">
//                           Premium luxury gifting solution crafted for modern
//                           businesses and executive experiences.
//                         </p>
//                       </div>

//                       {/* BUTTON */}
//                       <button className="shrink-0 w-12 h-12 rounded-full bg-[#0097A7]/10 hover:bg-[#0097A7] transition-all duration-500 flex items-center justify-center text-[#0097A7] hover:text-white">
//                         <FiArrowUpRight className="text-xl" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* HOVER LINE */}
//                   <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0097A7] group-hover:w-full transition-all duration-500" />
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* BOTTOM STRIP */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-[36px] bg-gradient-to-r from-[#0097A7] to-[#007885] p-8 lg:p-10"
//         >
//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
//             {/* LEFT */}
//             <div className="max-w-2xl">
//               <h3 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
//                 Customized Corporate Gifting Solutions
//               </h3>

//               <p className="mt-5 text-white/80 leading-8 text-base">
//                 From executive onboarding kits to festive gifting campaigns,
//                 we provide luxury corporate gifting experiences tailored to
//                 your brand identity and business goals.
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div className="flex flex-wrap gap-4">
//               <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
//                 <span className="text-white text-sm font-medium">
//                   Logo Branding
//                 </span>
//               </div>

//               <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
//                 <span className="text-white text-sm font-medium">
//                   Bulk Orders
//                 </span>
//               </div>

//               <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
//                 <span className="text-white text-sm font-medium">
//                   PAN India Delivery
//                 </span>
//               </div>

//               <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
//                 <span className="text-white text-sm font-medium">
//                   Premium Packaging
//                 </span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BestSellerSection;



// src/components/home/BestSellerSection.jsx

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import products from "../../data/product";

const BestSellerSection = () => {
  const navigate = useNavigate();

  /* TAKE 1-2 PRODUCTS FROM EACH CATEGORY */
  const showcaseProducts = products.slice(0, 8);

  /* OPEN PRODUCT */
  const handleProductClick = (product) => {
    navigate(
      `/categories?category=${product.category}&product=${product.id}`
    );
  };

  /* OPEN COLLECTION */
  const handleViewCollection = () => {
    navigate("/categories?category=all");
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* BACKGROUND */}
      <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#0097A7]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10"
        >
          {/* LEFT */}
          <div className="max-w-3xl">
            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0097A7]" />

              <span className="text-[#0097A7] text-sm font-semibold tracking-[0.15em] uppercase">
                Signature Collection
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] font-semibold text-slate-900 luxury-font">
              Best Selling
              <span className="text-[#0097A7]">
                {" "}
                Corporate Gifts
              </span>
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-8 max-w-2xl">
              Luxury gifting collections crafted for employee engagement,
              executive gifting, festive campaigns and premium business
              experiences.
            </p>
          </div>

          {/* BUTTON */}
          <div>
            <button
              onClick={handleViewCollection}
              className="group border border-slate-300 hover:border-[#0097A7] hover:bg-[#0097A7] transition-all duration-500 px-7 py-4 rounded-full text-slate-800 hover:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
            >
              View Full Collection

              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        {/* SLIDER */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            speed={900}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },

              640: {
                slidesPerView: 1.6,
              },

              768: {
                slidesPerView: 2.1,
              },

              1024: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 3.5,
              },
            }}
          >
            {showcaseProducts.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  onClick={() =>
                    handleProductClick(item)
                  }
                  className="group relative overflow-hidden rounded-[34px] bg-[#f8fbfc] border border-slate-100 hover:border-[#0097A7]/20 transition-all duration-500 cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[380px] sm:h-[440px]">
                    {/* <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    /> */}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />

                    {/* CATEGORY */}
                    <div className="absolute top-5 left-5">
                      <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                        <span className="text-white text-xs tracking-[0.15em] uppercase font-semibold">
                          {item.category.replace(
                            /-/g,
                            " "
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-[24px] leading-tight font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-slate-600 leading-7 text-[15px]">
                          {item.shortDesc}
                        </p>
                      </div>

                      {/* BUTTON */}
                      <button className="shrink-0 w-12 h-12 rounded-full bg-[#0097A7]/10 hover:bg-[#0097A7] transition-all duration-500 flex items-center justify-center text-[#0097A7] hover:text-white">
                        <FiArrowUpRight className="text-xl" />
                      </button>
                    </div>
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0097A7] group-hover:w-full transition-all duration-500" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-[#0097A7] to-[#007885] p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Customized Corporate Gifting Solutions
              </h3>

              <p className="mt-5 text-white/80 leading-8 text-base">
                Premium gifting collections tailored for corporate
                branding, employee onboarding and festive campaigns.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <span className="text-white text-sm font-medium">
                  Logo Branding
                </span>
              </div>

              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <span className="text-white text-sm font-medium">
                  Bulk Orders
                </span>
              </div>

              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <span className="text-white text-sm font-medium">
                  PAN India Delivery
                </span>
              </div>

              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <span className="text-white text-sm font-medium">
                  Premium Packaging
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellerSection;