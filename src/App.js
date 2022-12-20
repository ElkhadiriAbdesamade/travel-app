import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";


function App() {
  return (
 
      <div className="ease-in-out duration-1000">
        <Navbar />
        <Hero />
        <Offers />
        <Plan />
        <Rooms />
        <ImageSlider />
        <Footer />
        <BackToTop />
      </div>
   
  );
}

export default App;
