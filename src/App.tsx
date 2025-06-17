import React, { useEffect } from 'react';
import PremiumHeroSection from './components/premium/PremiumHeroSection';
import PremiumAboutUs from './components/premium/PremiumAboutUs';
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
  useEffect(() => {
    // Security: Disable right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };
      
      const handleKeyDown = (e: KeyboardEvent) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')
        ) {
          e.preventDefault();
        }
      };

      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PremiumHeroSection />
      <PremiumAboutUs />
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