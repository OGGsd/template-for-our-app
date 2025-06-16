import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const ContactSection = () => {
  const openMaps = () => {
    window.open('https://maps.google.com/?q=Barnarpsgatan+3,+553+16+Jönköping', '_blank');
  };

  const callPhone = () => {
    window.open('tel:036712300');
  };

  const sendEmail = () => {
    window.open('mailto:info@klippcenter-jkpg.se');
  };

  return (
    <section id="kontakt" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Kontakta Oss
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Vi finns här för att hjälpa dig. Kontakta oss för att boka tid eller 
            om du har några frågor om våra tjänster. Välkommen till KLIPPCENTER | JKPG!
          </p>
        </div>

        {/* Side-by-side layout for ALL devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information - Left side on all devices */}
          <div className="order-1 space-y-6 md:space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center md:text-left">Kontaktinformation</h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="bg-black rounded-full p-2 md:p-3 mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Adress</h3>
                    <p className="text-gray-600 text-sm md:text-base">Barnarpsgatan 3<br />553 16 Jönköping</p>
                    <button 
                      onClick={openMaps}
                      className="text-blue-600 hover:text-blue-700 font-medium mt-2 flex items-center justify-center md:justify-start text-sm md:text-base"
                    >
                      <Navigation className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      Visa vägbeskrivning
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="bg-black rounded-full p-2 md:p-3 mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <button 
                      onClick={callPhone}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base"
                    >
                      036-712 300
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="bg-black rounded-full p-2 md:p-3 mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">E-post</h3>
                    <button 
                      onClick={sendEmail}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base break-all"
                    >
                      info@klippcenter-jkpg.se
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="bg-black rounded-full p-2 md:p-3 mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Öppettider</h3>
                    <div className="text-gray-600 space-y-1 text-sm md:text-base">
                      <p>Måndag - Fredag: 08:00 - 17:00-20:00</p>
                      <p>Lönelördagen: 09:00 - 15:00</p>
                      <p className="text-red-600 font-medium">Söndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => document.getElementById('tjanster')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black hover:bg-gray-800 text-white p-4 md:p-6 rounded-xl font-semibold transition-colors duration-300 text-sm md:text-base"
              >
                Boka Tid Online
              </button>
              <button 
                onClick={callPhone}
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 md:p-6 rounded-xl font-semibold transition-colors duration-300 text-sm md:text-base"
              >
                Ring Oss Nu
              </button>
            </div>
          </div>

          {/* Map - Right side on all devices */}
          <div className="order-2 bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center md:text-left">Hitta Till Oss</h2>
            <div className="bg-gray-200 rounded-xl h-64 md:h-96 flex items-center justify-center">
              <div className="text-center text-gray-600 px-4">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">KLIPPCENTER | JKPG</p>
                <p className="text-sm md:text-base mb-2">Barnarpsgatan 3, Jönköping</p>
                <p className="text-xs md:text-sm text-gray-500 mb-4">Centralt beläget i Jönköping centrum</p>
                <button 
                  onClick={openMaps}
                  className="mt-4 bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base"
                >
                  Öppna i Google Maps
                </button>
              </div>
            </div>
            
            <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 md:p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Kollektivtrafik</h3>
                <p className="text-gray-600">Centralt beläget i Jönköping<br />Nära kollektivtrafik</p>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Parkering</h3>
                <p className="text-gray-600">Gatuparkering tillgänglig<br />Parkeringshus i närheten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;