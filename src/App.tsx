import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#00a8ff] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <OurWork />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
