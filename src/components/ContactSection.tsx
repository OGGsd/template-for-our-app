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
    <section id="kontakt" className="py-16 md:py-20 bg-light-green pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Kontakta Oss
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4">
            Vi finns här för att hjälpa dig. Kontakta oss för att boka tid eller 
            om du har några frågor om våra tjänster. Välkommen till KLIPPCENTER | JKPG!
          </p>
        </div>

        {/* Enhanced Two-Box Layout - Always Side by Side */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Contact Information Box - Left Side */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-soft-green h-full">
                <h2 className="text-xl md:text-2xl font-bold text-dark mb-6 text-center lg:text-left">
                  Kontaktinformation
                </h2>
                
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                    <div className="bg-primary rounded-full p-3 mb-3 lg:mb-0 lg:mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-dark mb-1">Adress</h3>
                      <p className="text-tertiary">Barnarpsgatan 3<br />553 16 Jönköping</p>
                      <button 
                        onClick={openMaps}
                        className="text-primary hover:text-secondary font-medium mt-2 flex items-center justify-center lg:justify-start"
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Visa vägbeskrivning
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                    <div className="bg-primary rounded-full p-3 mb-3 lg:mb-0 lg:mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Telefon</h3>
                      <button 
                        onClick={callPhone}
                        className="text-tertiary hover:text-primary transition-colors"
                      >
                        036-712 300
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                    <div className="bg-primary rounded-full p-3 mb-3 lg:mb-0 lg:mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-dark mb-1">E-post</h3>
                      <button 
                        onClick={sendEmail}
                        className="text-tertiary hover:text-primary transition-colors break-all"
                      >
                        info@klippcenter-jkpg.se
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                    <div className="bg-primary rounded-full p-3 mb-3 lg:mb-0 lg:mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Öppettider</h3>
                      <div className="text-tertiary space-y-1">
                        <p>Måndag - Fredag: 08:00 - 17:00-20:00</p>
                        <p>Lönelördagen: 09:00 - 15:00</p>
                        <p className="text-red-600 font-medium">Söndag: Stängt</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-dark hover:bg-gray-800 text-white p-4 rounded-xl font-semibold transition-colors duration-300"
                  >
                    Boka Tid Online
                  </button>
                  <button 
                    onClick={callPhone}
                    className="bg-primary hover:bg-secondary text-white p-4 rounded-xl font-semibold transition-colors duration-300"
                  >
                    Ring Oss Nu
                  </button>
                </div>
              </div>
            </div>

            {/* Map Box - Right Side */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-soft-green h-full">
                <h2 className="text-xl md:text-2xl font-bold text-dark mb-6 text-center lg:text-left">
                  Hitta Till Oss
                </h2>
                
                <div className="bg-soft-green rounded-xl h-64 lg:h-80 flex items-center justify-center mb-6">
                  <div className="text-center text-tertiary px-4">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">KLIPPCENTER | JKPG</p>
                    <p className="mb-2">Barnarpsgatan 3, Jönköping</p>
                    <p className="text-sm text-tertiary mb-4">Centralt beläget i Jönköping centrum</p>
                    <button 
                      onClick={openMaps}
                      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300"
                    >
                      Öppna i Google Maps
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-soft-green p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-dark mb-2">Kollektivtrafik</h3>
                    <p className="text-tertiary">Centralt beläget i Jönköping<br />Nära kollektivtrafik</p>
                  </div>
                  <div className="bg-soft-green p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-dark mb-2">Parkering</h3>
                    <p className="text-tertiary">Gatuparkering tillgänglig<br />Parkeringshus i närheten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;