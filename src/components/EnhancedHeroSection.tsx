import React from 'react';
import ScrollExpandMedia from './ScrollExpandMedia';
import AboutUs from './AboutUs';
import FrisorTeamSection from './FrisorTeamSection';
import BehandlingarSection from './BehandlingarSection';
import BrollopSection from './BrollopSection';
import Gallery from './Gallery';
import Reviews from './Reviews';
import HudvardSection from './HudvardSection';
import ProdukterSection from './ProdukterSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const EnhancedHeroSection = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/ag/Hero%20Section%20Background-hSz2hWqBvlnxm5oFZQpw8yxKgRz4LW.jpg"
      bgImageSrc="https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/ag/Hero%20Section%20Background-hSz2hWqBvlnxm5oFZQpw8yxKgRz4LW.jpg"
      title="KLIPPCENTER JKPG"
      date="Sedan 1996"
      scrollToExpand="Scrolla för att utforska"
      textBlend={true}
    >
      <div className="w-full">
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
    </ScrollExpandMedia>
  );
};

export default EnhancedHeroSection;