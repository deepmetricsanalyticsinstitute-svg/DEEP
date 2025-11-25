import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home" className="py-12 md:py-20 lg:py-28">
          <HeroSection />
        </section>
        <section id="about" className="py-12 md:py-20 lg:py-28 bg-blue-50">
          <AboutUs />
        </section>
        <section id="services" className="py-12 md:py-20 lg:py-28">
          <Services />
        </section>
        <section id="research" className="py-12 md:py-20 lg:py-28 bg-blue-50">
          <Research />
        </section>
        <section id="contact" className="py-12 md:py-20 lg:py-28">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;