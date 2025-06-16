import React from 'react';
import { Heart, Users, Sparkles, Phone, Mail, Calendar, Crown, Camera } from 'lucide-react';

const BrollopSection = () => {
  const openPhoneBook = () => {
    window.open('tel:036712300');
  };

  const openEmail = () => {
    window.open('mailto:info@klippcenter-jkpg.se?subject=Bröllopsbokning%20-%20Konsultation');
  };

  return (
    <section id="brollop" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Bröllop & Speciella Tillfällen
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4">
            Är det dags att boka en frisör till den stora dagen? Vi hjälper er gärna 
            att se fantastiska ut på er speciella dag!
          </p>
        </div>

        {/* Enhanced Two-Box Layout - Always Side by Side */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            {/* Services Box - Left Side */}
            <div className="flex-1 min-w-0">
              <div className="bg-soft-green rounded-2xl p-6 md:p-8 border border-soft-green h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 flex items-center">
                  <Crown className="w-8 h-8 text-primary mr-3" />
                  Våra Tjänster
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 md:p-6">
                    <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 text-primary mr-2" />
                      För Bruden
                    </h3>
                    <ul className="space-y-2 text-tertiary">
                      <li>• Bruduppsättning</li>
                      <li>• Professionell makeup</li>
                      <li>• Styling av tärnor</li>
                      <li>• Provuppsättning innan bröllopet</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-primary font-bold text-lg">Brudklädsel: 4000 kr inkl. makeup</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 md:p-6">
                    <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                      <Users className="w-5 h-5 text-primary mr-2" />
                      För Brudgummen & Best Men
                    </h3>
                    <ul className="space-y-2 text-tertiary">
                      <li>• Professionell herrklippning</li>
                      <li>• Styling för brudgummen</li>
                      <li>• Styling för best men</li>
                      <li>• Skäggvård och trimning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Process & Experience Box - Right Side */}
            <div className="flex-1 min-w-0">
              <div className="space-y-6 h-full">
                <div className="bg-light-green rounded-2xl p-6 md:p-8 border border-soft-green flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 flex items-center">
                    <Calendar className="w-8 h-8 text-primary mr-3" />
                    Så Här Går Det Till
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Konsultation</h3>
                        <p className="text-tertiary text-sm">Vi bokar in en konsultation där vi går igenom hur du vill ha frisyren och sminket, kollar på inspirationsbilder och gör en provuppsättning.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Bröllopsdagen</h3>
                        <p className="text-tertiary text-sm">På bröllopsdagen är ni välkomna till oss på salongen där vi bjuder dig och ditt sällskap på frukost från Napoleon, dricka och annat tilltugg.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Perfekt Resultat</h3>
                        <p className="text-tertiary text-sm">Vi ser till att du ser fantastisk ut på din stora dag med professionell styling och makeup som håller hela dagen.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Experience */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-soft-green shadow-lg">
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center">
                    <Camera className="w-6 h-6 text-primary mr-2" />
                    Speciell Upplevelse
                  </h3>
                  <p className="text-tertiary leading-relaxed mb-4">
                    Vi skapar en avslappnad och lyxig atmosfär på bröllopsdagen. Njut av vår gästvänliga service 
                    medan vi förbereder dig för den stora dagen.
                  </p>
                  <div className="bg-soft-green rounded-lg p-4">
                    <p className="text-sm text-dark font-medium">
                      ✨ Frukost från Napoleon<br/>
                      ✨ Drycker och tilltugg<br/>
                      ✨ Avslappnad atmosfär<br/>
                      ✨ Professionell service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Redo att Boka Din Stora Dag?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Mejla eller ring oss för konsultation och för exakta prisuppgifter vid större sällskap. 
            Vi hjälper dig att skapa den perfekta looken för din speciella dag.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={openPhoneBook}
              className="bg-primary hover:bg-secondary text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ring Oss
            </button>
            
            <button
              onClick={openEmail}
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Mejla Oss
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              📞 036-712 300 | ✉️ info@klippcenter-jkpg.se
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrollopSection;