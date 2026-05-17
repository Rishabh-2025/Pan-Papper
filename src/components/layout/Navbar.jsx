// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { NavLink } from "react-router-dom";

// import {
//   HiOutlineMenuAlt3,
//   HiOutlineX,
//   HiChevronDown,
// } from "react-icons/hi";

// import logo from "../../assets/images/logo.png";

// const categories = [
//   "Executive Accessories",
//   "Corporate Bags",
//   "Premium Gift Sets",
//   "Bar Collection",
//   "Festive & Spiritual Gifts",
// ];

// const navLinkClass = ({ isActive }) =>
//   `relative text-[15px] xl:text-[16px] tracking-wide font-medium transition-all duration-300 whitespace-nowrap ${
//     isActive
//       ? "text-[#0097A7]"
//       : "text-slate-800 hover:text-[#0097A7]"
//   }`;

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [categoryOpen, setCategoryOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
//             : "bg-transparent py-5"
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
//           <div className="flex items-center justify-between">
//             {/* LEFT - LOGO */}
//             <div className="flex items-center shrink-0">
//               <NavLink to="/">
//                 <motion.img
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                   src={logo}
//                   alt="Pan Paper Supplies"
//                   className="h-14 sm:h-16 lg:h-[72px] w-32 "
//                 />
//               </NavLink>
//             </div>

//             {/* CENTER NAVIGATION */}
//             <nav className="hidden lg:flex items-center gap-10 xl:gap-14 whitespace-nowrap">
//               <NavLink to="/" className={navLinkClass}>
//                 Home
//               </NavLink>

//               <NavLink to="/about" className={navLinkClass}>
//                 About Us
//               </NavLink>

//               {/* CATEGORY */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setCategoryOpen(true)}
//                 onMouseLeave={() => setCategoryOpen(false)}
//               >
//                 <button className="flex items-center gap-1 text-[15px] xl:text-[16px] tracking-wide font-medium text-slate-800 hover:text-[#0097A7] transition-all duration-300 whitespace-nowrap">
//                   Category
//                   <HiChevronDown className="text-sm mt-[1px]" />
//                 </button>

//                 <AnimatePresence>
//                   {categoryOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 12 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 12 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-12 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-[0_15px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-5"
//                     >
//                       <div className="flex flex-col gap-4">
//                         {categories.map((item, index) => (
//                           <NavLink
//                             key={index}
//                             to="/categories"
//                             className="text-slate-700 hover:text-[#0097A7] transition duration-300 text-[15px]"
//                           >
//                             {item}
//                           </NavLink>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <NavLink to="/contact" className={navLinkClass}>
//                 Contact Us
//               </NavLink>
//             </nav>

//             {/* RIGHT SIDE */}
//             <div className="hidden lg:flex items-center shrink-0">
//               <div className="px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 whitespace-nowrap">
//                 <span className="text-[#0097A7] text-sm font-semibold tracking-wide">
//                   Bulk Orders
//                 </span>
//               </div>
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <div className="flex lg:hidden">
//               <button
//                 onClick={() => setMobileMenu(true)}
//                 className="text-slate-800 text-3xl"
//               >
//                 <HiOutlineMenuAlt3 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE DRAWER */}
//       <AnimatePresence>
//         {mobileMenu && (
//           <>
//             {/* BACKDROP */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
//               onClick={() => setMobileMenu(false)}
//             />

//             {/* DRAWER */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.3 }}
//               className="fixed top-0 right-0 h-full w-[85%] sm:w-[380px] bg-white z-50 shadow-2xl"
//             >
//               {/* TOP */}
//               <div className="p-6 border-b border-slate-200 flex items-center justify-between">
//                 <img
//                   src={logo}
//                   alt="Pan Paper Supplies"
//                   className="h-12 object-contain"
//                 />

//                 <button
//                   onClick={() => setMobileMenu(false)}
//                   className="text-3xl text-slate-800"
//                 >
//                   <HiOutlineX />
//                 </button>
//               </div>

//               {/* LINKS */}
//               <div className="p-6 flex flex-col gap-6">
//                 <NavLink
//                   to="/"
//                   className="text-lg font-medium text-slate-800"
//                   onClick={() => setMobileMenu(false)}
//                 >
//                   Home
//                 </NavLink>

//                 <NavLink
//                   to="/about"
//                   className="text-lg font-medium text-slate-800"
//                   onClick={() => setMobileMenu(false)}
//                 >
//                   About Us
//                 </NavLink>

//                 {/* MOBILE CATEGORY */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#0097A7] mb-4">
//                     Categories
//                   </h3>

//                   <div className="pl-4 border-l border-slate-200 flex flex-col gap-3">
//                     {categories.map((item, index) => (
//                       <NavLink
//                         key={index}
//                         to="/categories"
//                         className="text-slate-600"
//                         onClick={() => setMobileMenu(false)}
//                       >
//                         {item}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>

//                 <NavLink
//                   to="/contact"
//                   className="text-lg font-medium text-slate-800"
//                   onClick={() => setMobileMenu(false)}
//                 >
//                   Contact Us
//                 </NavLink>

//                 {/* MOBILE BADGE */}
//                 <div className="pt-4">
//                   <div className="inline-flex px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10">
//                     <span className="text-[#0097A7] text-sm font-semibold tracking-wide">
//                       Bulk Orders Available
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiChevronDown,
} from "react-icons/hi";

import logo from "../../assets/images/logo.png";

/* CATEGORY DATA */
const categories = [
  {
    label: "Executive Accessories",
    slug: "executive-accessories",
  },

  {
    label: "Corporate Bags",
    slug: "corporate-bags",
  },

  {
    label: "Premium Gift Sets",
    slug: "premium-gift-sets",
  },

  {
    label: "Bar Collection",
    slug: "bar-collection",
  },

  {
    label: "Festive Gifts",
    slug: "festive-gifts",
  },
];

const navLinkClass = ({ isActive }) =>
  `relative text-[15px] xl:text-[16px] tracking-wide font-medium transition-all duration-300 whitespace-nowrap ${
    isActive
      ? "text-[#0097A7]"
      : "text-slate-800 hover:text-[#0097A7]"
  }`;

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center shrink-0">
              <NavLink to="/">
                <motion.img
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  src={logo}
                  alt="Pan Paper Supplies"
                  className="h-14 sm:h-16 lg:h-[72px] w-32"
                />
              </NavLink>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 xl:gap-14 whitespace-nowrap">
              <NavLink
                to="/"
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
              >
                About Us
              </NavLink>

              {/* CATEGORY */}
              <div
                className="relative"
                onMouseEnter={() =>
                  setCategoryOpen(true)
                }
                onMouseLeave={() =>
                  setCategoryOpen(false)
                }
              >
                <button className="flex items-center gap-1 text-[15px] xl:text-[16px] tracking-wide font-medium text-slate-800 hover:text-[#0097A7] transition-all duration-300 whitespace-nowrap">
                  Category
                  <HiChevronDown className="text-sm mt-[1px]" />
                </button>

                <AnimatePresence>
                  {categoryOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 12,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute top-12 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-[0_15px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-5"
                    >
                      <div className="flex flex-col gap-4">
                        {categories.map(
                          (
                            category,
                            index
                          ) => (
                            <NavLink
                              key={index}
                              to={`/categories?category=${category.slug}`}
                              className="text-slate-700 hover:text-[#0097A7] transition duration-300 text-[15px]"
                            >
                              {
                                category.label
                              }
                            </NavLink>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                Contact Us
              </NavLink>
            </nav>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center shrink-0">
              <div className="px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10 whitespace-nowrap">
                <span className="text-[#0097A7] text-sm font-semibold tracking-wide">
                  Bulk Orders
                </span>
              </div>
            </div>

            {/* MOBILE BUTTON */}
            <div className="flex lg:hidden">
              <button
                onClick={() =>
                  setMobileMenu(true)
                }
                className="text-slate-800 text-3xl"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() =>
                setMobileMenu(false)
              }
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
              }}
              className="fixed top-0 right-0 h-full w-[85%] sm:w-[380px] bg-white z-50 shadow-2xl"
            >
              {/* TOP */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <img
                  src={logo}
                  alt="Pan Paper Supplies"
                  className="h-12 object-contain"
                />

                <button
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="text-3xl text-slate-800"
                >
                  <HiOutlineX />
                </button>
              </div>

              {/* LINKS */}
              <div className="p-6 flex flex-col gap-6">
                <NavLink
                  to="/"
                  className="text-lg font-medium text-slate-800"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className="text-lg font-medium text-slate-800"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  About Us
                </NavLink>

                {/* MOBILE CATEGORY */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0097A7] mb-4">
                    Categories
                  </h3>

                  <div className="pl-4 border-l border-slate-200 flex flex-col gap-3">
                    {categories.map(
                      (
                        category,
                        index
                      ) => (
                        <NavLink
                          key={index}
                          to={`/categories?category=${category.slug}`}
                          className="text-slate-600 hover:text-[#0097A7] transition-all duration-300"
                          onClick={() =>
                            setMobileMenu(
                              false
                            )
                          }
                        >
                          {
                            category.label
                          }
                        </NavLink>
                      )
                    )}
                  </div>
                </div>

                <NavLink
                  to="/contact"
                  className="text-lg font-medium text-slate-800"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Contact Us
                </NavLink>

                {/* BADGE */}
                <div className="pt-4">
                  <div className="inline-flex px-4 py-2 rounded-full bg-[#0097A7]/10 border border-[#0097A7]/10">
                    <span className="text-[#0097A7] text-sm font-semibold tracking-wide">
                      Bulk Orders Available
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;