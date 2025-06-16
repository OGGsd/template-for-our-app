import React, { useRef, useState } from 'react';
import { Star, Award, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const FrisorTeamSection = () => {
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

  const teamMembers = [
    {
      name: "LOTTA",
      role: "Grundare & Frisör",
      experience: "Varit frisör sedan: 1991",
      specialty: "Korta hår",
      favorite: "Pixi/bob",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/LOTTA-cjvDV9XJ7TS9sPTeZQrzaNrLVGSLm7.jpg",
      isFounder: true
    },
    {
      name: "ANNELIE",
      role: "Senior Frisör",
      experience: "Varit frisör sedan: 2001",
      specialty: "Nya tekniker och produkter",
      favorite: "French Bob",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/ANNELIE-lvrOqorFSFDisLWJxHJ9palbRNjhMg.jpg"
    },
    {
      name: "CAROLINE",
      role: "Färgspecialist",
      experience: "Varit frisör sedan: 2002",
      specialty: "Färg och extensions (BHBD, Hairtalk)",
      favorite: "French bob",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/CAROLINE-uRmDHFew7BQEDkUYOgTBNtZtINzCiB.jpg"
    },
    {
      name: "EMELIE",
      role: "Blondspecialist",
      experience: "Varit frisör sedan: 2013",
      specialty: "Blonda hår",
      favorite: "Lobben",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/EMELIE-u7gsZXybCyqeVOjaWuoBp2zrHLSkaD.jpg"
    },
    {
      name: "AMANDA",
      role: "Hudterapeut",
      experience: "Hudterapeut sedan: 2007",
      specialty: "Avancerad hudvård",
      favorite: "Jobba med maskiner",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/AMANDA-lhPlvpJWOqIz71GYPmln8i67bX9QIM.jpg",
      isSkinCare: true
    }
  ];

  return (
    <section id="frisor" className="py-16 md:py-20 bg-white pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Våra Frisörer
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            Idag är vi sex frisörer, en frisör under utbildning och en hudterapeut. 
            Vi älskar verkligen vårt yrke och brinner för att göra dig fin!
          </p>
          <div className="bg-soft-green rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-tertiary leading-relaxed">
              För att hålla oss uppdaterade och kunna leverera det bästa till dig går vi 
              kontinuerligt på kurser och utbildningar.
            </p>
          </div>
        </div>

        {/* Team Members Carousel */}
        <div className="relative">
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
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-soft-green"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} på KLIPPCENTER | JKPG`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {member.isFounder && (
                    <div className="absolute top-4 left-4 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                      GRUNDARE
                    </div>
                  )}
                  
                  {member.isSkinCare && (
                    <div className="absolute top-4 left-4 bg-secondary text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                      HUDVÅRD
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
                    <Star className="w-4 h-4 text-primary fill-current mr-1" />
                    <span className="text-sm font-semibold">Expert</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-dark mb-2">{member.name}</h2>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Award className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-dark">Erfarenhet</p>
                        <p className="text-sm text-tertiary">{member.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Star className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-dark">Grym på</p>
                        <p className="text-sm text-tertiary">{member.specialty}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-dark">Favoritfrisyr</p>
                        <p className="text-sm text-tertiary">{member.favorite}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('tjanster')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-primary hover:bg-secondary text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Boka med {member.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Vårt Expertteam</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm md:text-base">Erfarna Frisörer</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1</div>
              <div className="text-sm md:text-base">Hudterapeut</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30</div>
              <div className="text-sm md:text-base">År Erfarenhet</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrisorTeamSection;