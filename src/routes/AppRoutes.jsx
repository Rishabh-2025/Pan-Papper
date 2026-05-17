import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Categories from "../pages/Categories";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/layout/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
      </>
    
  );
};

export default AppRoutes;