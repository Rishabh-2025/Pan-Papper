import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]); // Runs every time the path or query filters change

  return null; // This component doesn't render any visible HTML
};

export default ScrollToTop;