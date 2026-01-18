import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-[url('/src/assets/images/backgrounds/hero-bg.png')] bg-cover bg-center opacity-5 pointer-events-none mix-blend-overlay"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <OurWork />
          <Reviews />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
