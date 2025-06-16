import React, { useState, useEffect } from 'react';
import { Calendar, Clock, X, ExternalLink } from 'lucide-react';

const AvailableServiceSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openFullscreen = () => {
    setIsFullscreen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const openExternalBooking = () => {
    window.open('https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service', '_blank');
  };

  return (
    <section id="tjanster" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Våra Tjänster
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Boka din tid enkelt online genom vårt bokningssystem. Välj den tjänst som passar dig bäst 
            och välj en tid som passar ditt schema.
          </p>
        </div>

        {/* Desktop View - Embedded iframe */}
        <div className="hidden lg:block">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Boka Din Tid</h2>
              </div>
              <button
                onClick={openExternalBooking}
                className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Öppna i nytt fönster
              </button>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service"
                className="w-full h-[800px] border-0"
                title="Boka tid - Klippcenter"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Tablet View - Embedded iframe with different height */}
        <div className="hidden md:block lg:hidden">
          <div className="bg-gray-50 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-amber-500 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Boka Din Tid</h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={openFullscreen}
                  className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
                >
                  Fullskärm
                </button>
                <button
                  onClick={openExternalBooking}
                  className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Extern
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service"
                className="w-full h-[600px] border-0"
                title="Boka tid - Klippcenter"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Mobile View - Call to action buttons */}
        <div className="block md:hidden">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Boka Din Tid</h2>
              <p className="text-gray-600">
                Välj hur du vill boka din tid - i fullskärmsläge eller i en ny flik för bästa upplevelse.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={openFullscreen}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Boka i Fullskärm
              </button>
              
              <button
                onClick={openExternalBooking}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Öppna i Ny Flik
              </button>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl text-center">
                <Clock className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Snabb Bokning</p>
                <p className="text-xs text-gray-600">Bara några klick</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <Calendar className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Flexibla Tider</p>
                <p className="text-xs text-gray-600">Välj vad som passar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 md:mt-16">
          <div className="bg-black rounded-2xl p-6 md:p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Behöver Du Hjälp?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Kontakta oss direkt om du har frågor eller behöver hjälp med bokningen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0361271212"
                className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
              >
                Ring Oss: 036-12 71 12
              </a>
              <button
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Kontakta Oss
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="w-full h-full md:w-[95vw] md:h-[95vh] bg-white md:rounded-2xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 md:rounded-t-2xl flex-shrink-0">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-amber-500 mr-3" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Boka Din Tid</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={openExternalBooking}
                  className="hidden md:flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Öppna extern
                </button>
                <button
                  onClick={closeFullscreen}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service"
                className="w-full h-full border-0"
                title="Boka tid - Klippcenter"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AvailableServiceSection;