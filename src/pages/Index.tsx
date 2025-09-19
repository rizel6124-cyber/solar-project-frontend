import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolarCalculator from '../components/SolarCalculator';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SolarCalculator />
      <Services />
      <Gallery />
      
      <Products />
      <About />
      <Achievements />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
