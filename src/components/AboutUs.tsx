import { Award, Clock, Users, Scissors } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="om-oss" className="py-16 md:py-20 bg-light-green pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Om KLIPPCENTER | JKPG
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4">
            En frisör mitt i Jönköping. Vi är din professionella frisörsalong på Barnarpsgatan 3 
            som erbjuder kvalitativa frisörtjänster för hela familjen.
          </p>
        </div>

        {/* Side-by-side layout for ALL devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Content Section - Left side on all devices */}
          <div className="order-1 space-y-6 md:space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-6">Vår Filosofi</h2>
              <p className="text-tertiary mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                På KLIPPCENTER | JKPG tror vi på att varje kund förtjänar en personlig och 
                professionell upplevelse. Vi kombinerar modern teknik med klassiskt hantverk 
                för att skapa den perfekta looken för dig.
              </p>
              <p className="text-tertiary leading-relaxed text-sm md:text-base mb-6">
                Vårt team består av erfarna frisörer som kontinuerligt utvecklar sina färdigheter 
                för att hålla sig uppdaterade med de senaste trenderna och teknikerna inom branschen.
              </p>
            </div>
            
            {/* Stats Section */}
            <div className="bg-dark rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm md:text-base">År av Erfarenhet</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm md:text-base">Nöjda Kunder</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm md:text-base">Kvalitetsgaranti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm md:text-base">Online Bokning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Right side on all devices */}
          <div className="order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="KLIPPCENTER | JKPG interiör - professionell frisörsalong på Barnarpsgatan 3"
                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm md:text-base font-semibold">Vår professionella salong</p>
                <p className="text-xs md:text-sm text-gray-200">Barnarpsgatan 3, Jönköping</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - Optimized for All Devices */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-light-green transition-colors duration-300">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Kvalitet</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Högsta standard på alla våra tjänster</p>
          </div>
          
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-light-green transition-colors duration-300">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Punktlighet</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Vi respekterar din tid och håller våra tider</p>
          </div>
          
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-light-green transition-colors duration-300">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Service</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Personlig service anpassad efter dina behov</p>
          </div>
          
          <div className="text-center group bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-soft-green">
            <div className="bg-soft-green rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-light-green transition-colors duration-300">
              <Scissors className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-dark mb-2">Expertis</h3>
            <p className="text-tertiary text-xs md:text-sm leading-relaxed">Erfarna frisörer med passion för sitt yrke</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;