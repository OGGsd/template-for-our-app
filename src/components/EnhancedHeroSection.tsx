import React from 'react';
import PremiumHeroSection from './premium/PremiumHeroSection';
import PremiumAboutUs from './premium/PremiumAboutUs';
import PremiumFrisorTeamSection from './premium/PremiumFrisorTeamSection';
import PremiumBehandlingarSection from './premium/PremiumBehandlingarSection';
import BrollopSection from './BrollopSection';
import Gallery from './Gallery';
import Reviews from './Reviews';
import HudvardSection from './HudvardSection';
import ProdukterSection from './ProdukterSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const EnhancedHeroSection = () => {
  return (
    <div className="w-full">
      <PremiumHeroSection />
      <PremiumAboutUs />
      <PremiumFrisorTeamSection />
      <PremiumBehandlingarSection />
      <BrollopSection />
      <Gallery />
      <Reviews />
      <HudvardSection />
      <ProdukterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default EnhancedHeroSection;