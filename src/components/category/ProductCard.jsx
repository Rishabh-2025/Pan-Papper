// src/components/category/ProductCard.jsx

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProductCard = ({ product, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[30px] overflow-hidden border border-slate-100 hover:border-[#0097A7]/20 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
    >
      {/* IMAGE */}
      <div className="overflow-hidden h-[320px] bg-[#f8fbfc]">
        {/* <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        /> */}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <span className="text-xs uppercase tracking-[0.15em] text-[#0097A7] font-semibold">
          {product.category.replace(/-/g, " ")}
        </span>

        <h3 className="mt-3 text-[24px] leading-tight font-semibold text-slate-900">
          {product.title}
        </h3>

        <p className="mt-4 text-slate-600 text-sm leading-7">
          {product.shortDesc}
        </p>

        <button
          onClick={onOpen}
          className="mt-6 w-full bg-[#0097A7] hover:bg-[#007885] transition-all duration-300 text-white h-12 rounded-full flex items-center justify-center gap-2 font-medium"
        >
          View Product
          <FiArrowUpRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;