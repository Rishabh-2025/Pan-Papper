import { FiX } from "react-icons/fi";

const ProductFilter = ({
  categories,
  categoryParam,
  setSearchParams,
  selectedColor,
  setSelectedColor,
  allColors,
  clearFilters,
}) => {
  return (
    <>
      {/* CATEGORY FILTER */}
      <div className="mt-10 flex flex-wrap gap-4">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setSearchParams({ category: item })
            }
            className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
              categoryParam === item
                ? "bg-[#0097A7] text-white"
                : "bg-[#f8fbfc] text-slate-700 hover:bg-[#0097A7]/10"
            }`}
          >
            {item.replace(/-/g, " ")}
          </button>
        ))}
      </div>

      {/* COLOR FILTER */}
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        {/* ALL */}
        <button
          onClick={() => setSelectedColor("all")}
          className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
            selectedColor === "all"
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          All Colors
        </button>

        {/* COLORS */}
        {allColors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(color)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
              selectedColor === color
                ? "bg-[#0097A7] text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {color}
          </button>
        ))}

        {/* CLEAR */}
        <button
          onClick={clearFilters}
          className="ml-auto flex items-center gap-2 text-sm text-slate-500 hover:text-red-500 transition-all duration-300"
        >
          <FiX />
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default ProductFilter;