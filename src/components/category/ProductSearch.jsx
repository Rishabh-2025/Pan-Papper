// src/components/category/ProductSearch.jsx

import { FiSearch } from "react-icons/fi";

const ProductSearch = ({ search, setSearch }) => {
  return (
    <div className="relative w-full lg:w-[380px]">
      <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 rounded-full border border-slate-200 bg-white pl-14 pr-5 outline-none focus:border-[#0097A7] transition-all duration-300"
      />
    </div>
  );
};

export default ProductSearch;