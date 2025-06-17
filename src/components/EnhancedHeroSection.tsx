import React from 'react';
import PremiumHeroSection from './premium/PremiumHeroSection';
import PremiumAboutUs from './premium/PremiumAboutUs';
import PremiumFrisorTeamSection from './premium/PremiumFrisorTeamSection';
import PremiumBehandlingarSection from './premium/PremiumBehandlingarSection';
import PremiumBrollopSection from './premium/PremiumBrollopSection';
import PremiumGallery from './premium/PremiumGallery';
import PremiumReviews from './premium/PremiumReviews';
import HudvardSection from './HudvardSection';
import ProdukterSection from './ProdukterSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const EnhancedHeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <PremiumHeroSection />
      <PremiumAboutUs />
      <PremiumFrisorTeamSection />
      <PremiumBehandlingarSection />
      <PremiumBrollopSection />
      <PremiumGallery />
      <PremiumReviews />
      <HudvardSection />
      <ProdukterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default EnhancedHeroSection;