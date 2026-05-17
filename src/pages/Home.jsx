import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import BrandTrustStrip from "../components/home/BrandTrustStrip";
import FeaturedCategories from "../components/home/FeaturedCategories";
import BestSellerSection from "../components/home/BestSellerSection";
import CorporateSolutions from "../components/home/CorporateSolutions";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
      <HeroSection />
      <BestSellerSection />
      <CorporateSolutions/>
      <FeaturedCategories/>
      <BrandTrustStrip />
      </main>
      <Footer />
   
    </>
  );
};

export default Home;