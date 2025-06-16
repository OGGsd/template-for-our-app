import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Calendar, Phone, Home, Users, Camera } from 'lucide-react';

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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero Section Background.jpg"
            alt="KLIPPCENTER | JKPG frisörsalong"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark opacity-60"></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/95 backdrop-blur-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
        }`}>
          <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img src="/Logo.jpg" alt="KLIPPCENTER | JKPG" className="w-10 h-10 md:w-12 md:h-12 rounded-lg" />
              <span className="text-white font-bold text-lg md:text-xl">KLIPPCENTER</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('hem')} className="text-white hover:text-primary transition-colors font-medium">
                Hem
              </button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-primary transition-colors font-medium">
                Om Oss
              </button>
              <button onClick={() => scrollToSection('tjanster')} className="text-white hover:text-primary transition-colors font-medium">
                Tjänster
              </button>
              <button onClick={() => scrollToSection('galleri')} className="text-white hover:text-primary transition-colors font-medium">
                Galleri
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-white hover:text-primary transition-colors font-medium">
                Kontakt
              </button>
              <button 
                onClick={() => scrollToSection('tjanster')}
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Boka Tid
              </button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-6 max-w-7xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button 
                    onClick={() => scrollToSection('hem')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <span className="font-medium">Hem</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('om-oss')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <span className="font-medium">Om Oss</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('galleri')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <span className="font-medium">Galleri</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('kontakt')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <span className="font-medium">Kontakt</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => scrollToSection('tjanster')}
                    className="flex flex-col items-center bg-primary hover:bg-secondary text-white p-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <Calendar className="w-6 h-6 mb-2" />
                    <span>Boka Tid</span>
                  </button>
                  <button 
                    onClick={callPhone}
                    className="flex flex-col items-center bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <Phone className="w-6 h-6 mb-2" />
                    <span>Ring Oss</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div id="hem" className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6 md:mb-8">
            <Scissors className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            KLIPPCENTER
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-primary mt-2">
              | JKPG
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            En frisör mitt i Jönköping. Professionell frisörsalong på Barnarpsgatan 3.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <button 
              onClick={() => scrollToSection('tjanster')}
              className="bg-primary hover:bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Boka Tid Nu
            </button>
            <button 
              onClick={() => scrollToSection('om-oss')}
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Läs Mer
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation for Mobile/Tablet - PWA Style */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-sm border-t border-gray-800 z-40">
        <div className="grid grid-cols-5 h-16">
          <button 
            onClick={() => scrollToSection('hem')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Hem</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('om-oss')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Users className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Om Oss</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('tjanster')}
            className="flex flex-col items-center justify-center bg-primary text-white hover:bg-secondary transition-colors duration-300 relative"
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold mt-2">Boka</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('galleri')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Camera className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Galleri</span>
          </button>
          
          <button 
            onClick={callPhone}
            className="flex flex-col items-center justify-center text-white hover:text-green-400 transition-colors duration-300 active:bg-white/10"
          >
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Ring</span>
          </button>
        </div>
      </div>

      {/* Add bottom padding for mobile to account for bottom navigation */}
      <div className="lg:hidden h-16"></div>
    </>
  );
};

export default HeroSection;