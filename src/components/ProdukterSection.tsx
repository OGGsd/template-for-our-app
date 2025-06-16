import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Award, Sparkles, ShoppingBag } from 'lucide-react';

const ProdukterSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    }
    if (touchStart - touchEnd < -50) {
      scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const products = [
    {
      name: "Davines",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/Davines-wBmFo918jOuPG8OGizaoX8c63sFvFZ.jpg",
      description: "Italienska lyxprodukter med naturliga ingredienser"
    },
    {
      name: "By Jolima",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/byjolima_loggo-bTaLVaJ25CFrns4PjAd7Bc4EXX568i.png",
      description: "Svenska hårvårdsprodukter med fokus på hållbarhet"
    },
    {
      name: "GHD",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/ghd-2MziqUgzeMcKIpk4S6q6ErJxzINiyG.png",
      description: "Professionella stylingverktyg av högsta kvalitet"
    },
    {
      name: "Marc Inbane",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/marc-inbane-1-HFbPG7pbHkqmjNAJrQ6sNXqzpgfylQ.jpg",
      description: "Naturlig solbränna och hudvårdsprodukter"
    },
    {
      name: "Nine Yards",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/nine-yards-1-jKB6EJE9kGZ7WQWLAe0wRbcn18hR40.png",
      description: "Innovativa hårvårdsprodukter för alla hårtyper"
    }
  ];

  return (
    <section id="produkter" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <ShoppingBag className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Våra Produkter
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-4xl mx-auto leading-relaxed px-4 mb-8">
            Att vara frisör innebär mer än att bara klippa och färga hår. Vi vill även hjälpa dig 
            att hitta de produkter som passar ditt hår och kan hjälpa dig med din nya frisyr. 
            Vi säljer därför produkter från några av frisörbranschens bästa märken, med fokus på miljömedvetenhet.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {products.map((product, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-soft-green"
              >
                <div className="relative overflow-hidden aspect-square bg-soft-green flex items-center justify-center p-8">
                  <img
                    src={product.image}
                    alt={`${product.name} - Professionella hårvårdsprodukter`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">{product.name}</h3>
                  <p className="text-tertiary leading-relaxed mb-4 text-sm md:text-base">
                    {product.description}
                  </p>
                  
                  <button className="w-full bg-primary hover:bg-secondary text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base">
                    Läs Mer om {product.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="text-center bg-soft-green rounded-2xl p-6 md:p-8 border border-soft-green">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Miljömedvetenhet</h3>
            <p className="text-tertiary leading-relaxed">
              Vi väljer produkter med fokus på hållbarhet och miljövänliga ingredienser
            </p>
          </div>

          <div className="text-center bg-soft-green rounded-2xl p-6 md:p-8 border border-soft-green">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Professionell Kvalitet</h3>
            <p className="text-tertiary leading-relaxed">
              Endast produkter från frisörbranschens bästa och mest respekterade märken
            </p>
          </div>

          <div className="text-center bg-soft-green rounded-2xl p-6 md:p-8 border border-soft-green">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Personlig Rådgivning</h3>
            <p className="text-tertiary leading-relaxed">
              Vi hjälper dig att hitta produkter som passar just ditt hår och din frisyr
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Behöver Du Hjälp att Välja Produkter?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Våra erfarna frisörer hjälper dig gärna att hitta de produkter som passar 
            just ditt hår och dina behov. Kom in till salongen för personlig rådgivning!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('tjanster')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Boka Konsultation
            </button>
            <button
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Besök Salongen
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              📍 Barnarpsgatan 3, Jönköping | 📞 036-712 300
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdukterSection;