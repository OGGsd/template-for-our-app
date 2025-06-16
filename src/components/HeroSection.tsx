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
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="KLIPPCENTER | JKPG - Professionell frisörsalong i Jönköping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/60 to-primary/40"></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/95 backdrop-blur-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
        }`}>
          <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <Scissors className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-white">
                <span className="font-bold text-lg md:text-xl block leading-tight">KLIPPCENTER</span>
                <span className="text-xs md:text-sm text-primary font-medium">| JKPG</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('hem')} className="text-white hover:text-primary transition-colors font-medium">
                Hem
              </button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-primary transition-colors font-medium">
                Om Oss
              </button>
              <button onClick={() => scrollToSection('frisor')} className="text-white hover:text-primary transition-colors font-medium">
                Våra Frisörer
              </button>
              <button onClick={() => scrollToSection('behandlingar')} className="text-white hover:text-primary transition-colors font-medium">
                Behandlingar
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
                    <Home className="w-5 h-5 mb-2" />
                    <span className="font-medium text-sm">Hem</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('om-oss')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <Users className="w-5 h-5 mb-2" />
                    <span className="font-medium text-sm">Om Oss</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('frisor')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <Sparkles className="w-5 h-5 mb-2" />
                    <span className="font-medium text-sm">Frisörer</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('galleri')} 
                    className="flex flex-col items-center text-white hover:text-primary transition-colors p-4 rounded-lg hover:bg-white/10"
                  >
                    <Camera className="w-5 h-5 mb-2" />
                    <span className="font-medium text-sm">Galleri</span>
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
        <div id="hem" className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
              <Scissors className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="block text-primary">KLIPPCENTER</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mt-2">
              | JKPG
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/95 font-light leading-relaxed">
              Sedan 1996 - Din frisörsalong på Väster
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Ett helhetskoncept med frisör, hudvård, kläder och accessoarer. 
              Vi är ett gott gäng som brinner för att göra dig fin!
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Snart 30 år</h3>
              <p className="text-sm text-white/80">Erfaren salong sedan 1996</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Expertteam</h3>
              <p className="text-sm text-white/80">6 frisörer + hudterapeut</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Helhetskoncept</h3>
              <p className="text-sm text-white/80">Frisör, hudvård & mode</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <button 
              onClick={() => scrollToSection('tjanster')}
              className="bg-primary hover:bg-secondary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Boka Tid Nu
            </button>
            <button 
              onClick={() => scrollToSection('om-oss')}
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 w-full sm:w-auto"
            >
              Läs Mer
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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
            onClick={() => scrollToSection('frisor')}
            className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
          >
            <Users className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Team</span>
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