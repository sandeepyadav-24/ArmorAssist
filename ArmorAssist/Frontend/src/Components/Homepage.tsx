import Featuresection from "./FeatureSection";
import Footer from "./Footer";
import Herosection from "./HeroSection";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Herosection />
      <Featuresection />
      <Footer />
    </div>
  );
};
export default Homepage;
