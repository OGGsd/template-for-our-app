import React from 'react';
import PremiumHeroSection from './premium/PremiumHeroSection';
import PremiumAboutUs from './premium/PremiumAboutUs';
import PremiumFrisorTeamSection from './premium/PremiumFrisorTeamSection';
import PremiumBehandlingarSection from './premium/PremiumBehandlingarSection';
import PremiumBrollopSection from './premium/PremiumBrollopSection';
import PremiumGallery from './premium/PremiumGallery';
import PremiumReviews from './premium/PremiumReviews';
import PremiumHudvardSection from './premium/PremiumHudvardSection';
import PremiumProdukterSection from './premium/PremiumProdukterSection';
import PremiumContactSection from './premium/PremiumContactSection';
import PremiumFooter from './premium/PremiumFooter';

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
      <PremiumHudvardSection />
      <PremiumProdukterSection />
      <PremiumContactSection />
      <PremiumFooter />
    </div>
  );
};

export default EnhancedHeroSection;