import { FiInstagram, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#071c1f] pt-24 pb-10">
      {/* BG GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#0097A7]/10 blur-3xl" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-6 text-white/60 leading-8 text-sm max-w-sm">
              Premium luxury corporate gifting solutions for modern businesses.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex items-center gap-4">
              <button className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#0097A7] transition-all duration-500 text-white flex items-center justify-center">
                <FiInstagram />
              </button>

              <button className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#0097A7] transition-all duration-500 text-white flex items-center justify-center">
                <FiLinkedin />
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {["Home", "About Us", "Categories", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white/60 hover:text-[#7de3ec] transition-all duration-300 text-sm"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Categories
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {[
                "Executive Gifts",
                "Corporate Bags",
                "Gift Sets",
                "Bar Collection",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-[#7de3ec] transition-all duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-[#7de3ec]">
                  <FiPhone />
                </div>

                <span className="text-white/60 text-sm">
                  +91 9876543210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-[#7de3ec]">
                  <FiMail />
                </div>

                <span className="text-white/60 text-sm">
                  info@company.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Pan Paper Supplies. All rights reserved.
          </p>

          <p className="text-white/40 text-sm">
            Luxury Corporate Gifting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;