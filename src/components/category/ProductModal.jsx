// src/components/category/ProductModal.jsx

import { useState } from "react";

import { FiX } from "react-icons/fi";

const ProductModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-6xl rounded-[36px] overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <FiX className="text-xl" />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="bg-[#f8fbfc] p-6 lg:p-10">
            <div className="rounded-[30px] overflow-hidden bg-white h-[420px]">
              {/* <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* THUMBNAILS */}
            <div className="mt-5 flex gap-4 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shrink-0 ${
                    activeImage === img
                      ? "border-[#0097A7]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-8 lg:p-12">
            <span className="text-sm uppercase tracking-[0.15em] text-[#0097A7] font-semibold">
              {product.category.replace(/-/g, " ")}
            </span>

            <h2 className="mt-4 text-[38px] leading-tight font-semibold text-slate-900 luxury-font">
              {product.title}
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              {product.description}
            </p>

            {/* COLORS */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Available Colors
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="px-5 py-2 rounded-full bg-[#f8fbfc] text-slate-700 text-sm"
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-10 bg-[#0097A7] hover:bg-[#007885] transition-all duration-300 text-white px-8 h-14 rounded-full font-semibold">
              Request Bulk Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;