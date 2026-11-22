import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import AISection from '@/components/AISection';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Intro from '@/components/Intro';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0C12] text-white relative overflow-x-hidden">
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <AISection />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
