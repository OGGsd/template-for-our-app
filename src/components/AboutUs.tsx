import { Award, Clock, Users, Scissors, Heart, Sparkles, Calendar } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="om-oss" className="py-16 md:py-20 bg-light-green pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Om KLIPPCENTER | JKPG
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4">
            Sedan 1996 har vi skapat vackra frisyrer och erbjudit professionell service 
            i hjärtat av Jönköping. Välkommen till vår värld av skönhet och välmående.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-soft-green">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark">Vår Historia</h2>
              </div>
              
              <div className="space-y-4 text-tertiary leading-relaxed">
                <p className="text-base md:text-lg">
                  <strong className="text-primary">1996</strong> öppnades dörrarna till Klippcenter när 
                  <strong className="text-dark"> Lotta</strong> startade salongen. Vi började i en mindre lokal 
                  men nu, snart <strong className="text-primary">30 år senare</strong>, är vi flera frisörer 
                  och en hudterapeut som tillsammans delar på vår stora fina lokal på väster.
                </p>
                
                <p className="text-base md:text-lg">
                  Vi är ett <strong className="text-dark">gott gäng</strong> på salongen som har väldigt roligt tillsammans. 
                  Idag har vi ett <strong className="text-primary">helhetskoncept</strong> med bland annat kläder, 
                  smycken, accessoarer, hudvård och makeup.
                </p>
                
                <div className="bg-soft-green rounded-xl p-4 mt-6">
                  <p className="text-sm md:text-base text-dark font-medium italic">
                    "Vi brinner för att göra dig fin och känna dig välmående. 
                    Varje kund är unik och förtjänar vår fulla uppmärksamhet."
                  </p>
                  <p className="text-sm text-tertiary mt-2">- Lotta, Grundare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="KLIPPCENTER | JKPG - Vår vackra salong på Väster i Jönköping"
                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm md:text-base font-semibold">Vår salong på Väster</p>
                <p className="text-xs md:text-sm text-gray-200">Barnarpsgatan 3, Jönköping</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-soft-green mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-8">Vår Resa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">1996</h4>
              <p className="text-tertiary">Lotta öppnar Klippcenter i en mindre lokal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">Idag</h4>
              <p className="text-tertiary">6 frisörer + hudterapeut i stor, fin lokal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">Framtiden</h4>
              <p className="text-tertiary">Fortsatt utveckling och innovation</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary transition-colors duration-300">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Kvalitet</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Snart 30 års erfarenhet</p>
          </div>
          
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary transition-colors duration-300">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Passion</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Vi brinner för vårt yrke</p>
          </div>
          
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary transition-colors duration-300">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Gemenskap</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Ett gott gäng tillsammans</p>
          </div>
          
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary transition-colors duration-300">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Helhet</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Frisör, hudvård & mode</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;