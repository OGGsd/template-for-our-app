import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Calendar, Phone, Home, Users, Camera, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const callPhone = () => {
    window.open('tel:036712300');
    setIsMenuOpen(false);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/ag/Hero%20Section%20Background-hSz2hWqBvlnxm5oFZQpw8yxKgRz4LW.jpg"
            alt="KLIPPCENTER | JKPG - Professionell frisörsalong i Jönköping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/60 to-primary/40"></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/95 backdrop-blur-sm py-2 md:py-3 lg:py-4' : 'bg-transparent py-3 md:py-4 lg:py-6'
        }`}>
          <div className="container mx-auto px-3 md:px-4 flex items-center justify-between max-w-7xl">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                <Scissors className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-white">
                <span className="font-bold text-sm md:text-lg lg:text-xl block leading-tight">KLIPPCENTER</span>
                <span className="text-xs md:text-sm text-primary font-medium">| JKPG</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('hem')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Hem
              </button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Om Oss
              </button>
              <button onClick={() => scrollToSection('frisor')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Våra Frisörer
              </button>
              <button onClick={() => scrollToSection('behandlingar')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Behandlingar
              </button>
              <button onClick={() => scrollToSection('galleri')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Galleri
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Kontakt
              </button>
              <button 
                onClick={() => scrollToSection('behandlingar')}
                className="bg-primary hover:bg-secondary text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
              >
                Boka Tid
              </button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-sm">
              <div className="container mx-auto px-3 md:px-4 py-4 md:py-6 max-w-7xl">
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <button 
                    onClick={() => scrollToSection('hem')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                  >
                    <Home className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                    <span className="font-medium text-xs md:text-sm">Hem</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('om-oss')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                  >
                    <Users className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                    <span className="font-medium text-xs md:text-sm">Om Oss</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('frisor')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                  >
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                    <span className="font-medium text-xs md:text-sm">Frisörer</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('galleri')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                  >
                    <Camera className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                    <span className="font-medium text-xs md:text-sm">Galleri</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <button 
                    onClick={() => scrollToSection('behandlingar')}
                    className="flex flex-col items-center bg-primary hover:bg-secondary text-white p-3 md:p-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
                    <span className="text-xs md:text-sm">Boka Tid</span>
                  </button>
                  <button 
                    onClick={callPhone}
                    className="flex flex-col items-center bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
                    <span className="text-xs md:text-sm">Ring Oss</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div id="hem" className="relative z-10 text-center text-white px-3 md:px-4 max-w-6xl mx-auto">
          <div className="mb-6 md:mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary/20 backdrop-blur-sm rounded-full mb-4 md:mb-6 border border-primary/30">
              <Scissors className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
            <span className="block text-primary">KLIPPCENTER</span>
            <span className="block text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 mt-1 md:mt-2">
              | JKPG
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 md:mb-4 text-white/95 font-light leading-relaxed">
              Sedan 1996 - Din frisörsalong på Väster
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed px-2 md:px-0">
              Ett helhetskoncept med frisör, hudvård, kläder och accessoarer. 
              Vi är ett gott gäng som brinner för att göra dig fin!
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Snart 30 år</h3>
              <p className="text-xs md:text-sm text-white/80">Erfaren salong sedan 1996</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Expertteam</h3>
              <p className="text-xs md:text-sm text-white/80">6 frisörer + hudterapeut</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 md:col-span-1 col-span-1 mx-auto md:mx-0 max-w-xs md:max-w-none">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Helhetskoncept</h3>
              <p className="text-xs md:text-sm text-white/80">Frisör, hudvård & mode</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-md mx-auto">
            <button 
              onClick={() => scrollToSection('behandlingar')}
              className="bg-primary hover:bg-secondary text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-semibold text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Boka Tid Nu
            </button>
            <button 
              onClick={() => scrollToSection('om-oss')}
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-semibold text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 w-full sm:w-auto"
            >
              Läs Mer
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation for Mobile/Tablet - PWA Style */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-sm border-t border-gray-800 z-40">
        <div className="grid grid-cols-5 h-14 md:h-16">
          <button 
            onClick={() => scrollToSection('hem')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5 mb-1" />
            <span className="text-xs font-medium">Hem</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('frisor')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Users className="w-4 h-4 md:w-5 md:h-5 mb-1" />
            <span className="text-xs font-medium">Team</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('behandlingar')}
            className="flex flex-col items-center justify-center bg-primary text-white hover:bg-secondary transition-colors duration-300 relative"
          >
            <div className="absolute -top-1 md:-top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <span className="text-xs font-bold mt-1 md:mt-2">Boka</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('galleri')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Camera className="w-4 h-4 md:w-5 md:h-5 mb-1" />
            <span className="text-xs font-medium">Galleri</span>
          </button>
          
          <button 
            onClick={callPhone}
            className="flex flex-col items-center justify-center text-white hover:text-green-400 transition-colors duration-300 active:bg-white/10"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 mb-1" />
            <span className="text-xs font-medium">Ring</span>
          </button>
        </div>
      </div>

      {/* Add bottom padding for mobile to account for bottom navigation */}
      <div className="lg:hidden h-14 md:h-16"></div>
    </>
  );
};

export default HeroSection;