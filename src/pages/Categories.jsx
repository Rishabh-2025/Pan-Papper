import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/product";

import CategoryHero from "../components/category/CategoryHero";
import ProductSearch from "../components/category/ProductSearch";
import ProductFilter from "../components/category/ProductFilter";
import ProductCard from "../components/category/ProductCard";
import ProductModal from "../components/category/ProductModal";

const Categories = () => {
const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* CATEGORY LIST */
  const categories = [
    "all",
    "executive-accessories",
    "corporate-bags",
    "premium-gift-sets",
    "bar-collection",
    "festive-gifts",
  ];

  /* COLORS */
  const allColors = [
    ...new Set(
      products.flatMap((product) => product.colors)
    ),
  ];

  /* FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      /* CATEGORY */
      const matchCategory =
        categoryParam === "all"
          ? true
          : product.category === categoryParam;

      /* COLOR */
      const matchColor =
        selectedColor === "all"
          ? true
          : product.colors.includes(selectedColor);

      /* SEARCH */
      const searchText = search.toLowerCase();

      const matchSearch =
        product.title.toLowerCase().includes(searchText) ||
        product.description
          .toLowerCase()
          .includes(searchText) ||
        product.colors
          .join(" ")
          .toLowerCase()
          .includes(searchText) ||
        product.tags
          .join(" ")
          .toLowerCase()
          .includes(searchText);

      return (
        matchCategory &&
        matchColor &&
        matchSearch
      );
    });
  }, [
    categoryParam,
    selectedColor,
    search,
  ]);

  /* CLEAR FILTER */
  const clearFilters = () => {
    setSearch("");
    setSelectedColor("all");

    setSearchParams({
      category: "all",
    });
  };

  return (
    <>
      <Navbar />

      <main>
      <CategoryHero
        categoryParam={categoryParam}
      />

      {/* PRODUCTS SECTION */}
      <section className="bg-white pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* TOP BAR */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            {/* LEFT */}
            <div>
              <h2 className="text-[32px] sm:text-[42px] font-semibold text-slate-900 luxury-font capitalize">
                {categoryParam === "all"
                  ? "All Products"
                  : categoryParam.replace(
                      /-/g,
                      " "
                    )}
              </h2>

              <p className="mt-3 text-slate-600">
                Showing premium gifting products
                crafted for modern business
                experiences.
              </p>
            </div>

            {/* SEARCH */}
            <ProductSearch
              search={search}
              setSearch={setSearch}
            />
          </div>

          {/* FILTER */}
          <ProductFilter
            categories={categories}
            categoryParam={categoryParam}
            setSearchParams={setSearchParams}
            selectedColor={selectedColor}
            setSelectedColor={
              setSelectedColor
            }
            allColors={allColors}
            clearFilters={clearFilters}
          />

          {/* PRODUCTS GRID */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpen={() =>
                    setSelectedProduct(product)
                  }
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-24">
                <h3 className="text-3xl font-semibold text-slate-900">
                  No Products Found
                </h3>

                <p className="mt-4 text-slate-500 text-center max-w-lg">
                  Try changing filters, category
                  or search keywords.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-8 bg-[#0097A7] hover:bg-[#007885] transition-all duration-300 text-white px-8 h-14 rounded-full font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
        />
      )}
      </main>

      <Footer />
    </>
  );
};

export default Categories;
