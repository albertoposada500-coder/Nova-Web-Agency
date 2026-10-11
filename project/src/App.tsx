import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
