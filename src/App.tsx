import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import FrisorTeamSection from './components/FrisorTeamSection';
import BehandlingarSection from './components/BehandlingarSection';
import BrollopSection from './components/BrollopSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import HudvardSection from './components/HudvardSection';
import ProdukterSection from './components/ProdukterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutUs />
      <FrisorTeamSection />
      <BehandlingarSection />
      <BrollopSection />
      <Gallery />
      <Reviews />
      <HudvardSection />
      <ProdukterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;