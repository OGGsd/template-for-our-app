import React from 'react';
import { Sparkles, ExternalLink, Heart, Award, Star, ArrowRight } from 'lucide-react';

const HudvardSection = () => {
  const openSkinAndCare = () => {
    window.open('https://skinandcare.se/', '_blank');
  };

  return (
    <section id="hudvard" className="py-16 md:py-20 bg-light-green pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Hudvård med Amanda
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4">
            I våra lokaler hittar du även Skin & Care by Amanda. 
            Jönköpings mest personliga hudvårdssalong.
          </p>
        </div>

        {/* Enhanced Two-Box Layout - Always Side by Side */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            {/* Content Box - Left Side */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-soft-green h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark">Skin & Care by Amanda</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-tertiary leading-relaxed">
                    Hos <strong className="text-dark">Amanda</strong> blir du alltid omhändertagen, 
                    hon hjälper dig att hitta vad just du och din hud behöver.
                  </p>
                  
                  <div className="bg-soft-green rounded-xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
                      <Award className="w-5 h-5 text-primary mr-2" />
                      Amanda - Hudterapeut sedan 2007
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-primary mr-2" />
                        <span className="text-tertiary"><strong>Grym på:</strong> Avancerad hudvård</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 text-primary mr-2" />
                        <span className="text-tertiary"><strong>Favoritbehandling:</strong> Jobba med maskiner</span>
                      </div>
                      <div className="flex items-center">
                        <Sparkles className="w-4 h-4 text-primary mr-2" />
                        <span className="text-tertiary"><strong>Specialitet:</strong> Personlig hudvård</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                    <h4 className="text-lg font-bold text-dark mb-3">Varför välja Amanda?</h4>
                    <ul className="space-y-2 text-tertiary">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Över 15 års erfarenhet inom hudvård</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Personlig och omhändertagande service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Avancerade behandlingar med moderna maskiner</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Skräddarsydda behandlingar för din hudtyp</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Box - Right Side */}
            <div className="flex-1 min-w-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] lg:min-h-[400px]">
                <img
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Skin & Care by Amanda - Professionell hudvård i Jönköping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm md:text-base font-semibold">Skin & Care by Amanda</p>
                  <p className="text-xs md:text-sm text-gray-200">Avancerad hudvård & behandlingar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-soft-green mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-8">Hudvårdstjänster</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-soft-green rounded-xl">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-dark mb-2">Ansiktsbehandlingar</h4>
              <p className="text-sm text-tertiary">Djuprengöring och återfuktning</p>
            </div>
            <div className="text-center p-4 bg-soft-green rounded-xl">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-dark mb-2">Avancerade Behandlingar</h4>
              <p className="text-sm text-tertiary">Med moderna maskiner och teknik</p>
            </div>
            <div className="text-center p-4 bg-soft-green rounded-xl">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-dark mb-2">Personlig Rådgivning</h4>
              <p className="text-sm text-tertiary">Skräddarsydda hudvårdsprogram</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Upptäck Skin & Care by Amanda</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Besök Amandas egen hemsida för att läsa mer om alla hudvårdstjänster, 
            priser och för att boka din behandling.
          </p>
          
          <button
            onClick={openSkinAndCare}
            className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            <span>Besök Skin & Care</span>
            <ArrowRight className="w-5 h-5 ml-2" />
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>
          
          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              🌐 skinandcare.se | 📍 Samma lokaler som KLIPPCENTER | JKPG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HudvardSection;