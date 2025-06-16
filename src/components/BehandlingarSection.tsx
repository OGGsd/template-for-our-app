import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, DollarSign, Calendar, Scissors, Palette, Sparkles } from 'lucide-react';

const BehandlingarSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const scrollToBooking = () => {
    document.getElementById('tjanster')?.scrollIntoView({ behavior: 'smooth' });
  };

  const behandlingar = {
    klippning: {
      title: "Klippning",
      icon: Scissors,
      color: "bg-primary",
      services: [
        {
          name: "KLIPPNING 60 MIN",
          description: "För dig med extra tjockt och/eller långt hår, för dig som önskar extra styling eller för dig som ska klippa en helt ny frisyr och behöver lite extra tid. Tvätt och lättare styling ingår.",
          price: "790:-",
          time: "60 min"
        },
        {
          name: "KLIPPNING 45 MIN",
          description: "För långa hår, tunnare till medeltjocka hår eller korta frisyrer men som behöver mer tid och har tjockare hår. Tvätt och lättare styling ingår.",
          price: "620:-",
          time: "45 min"
        },
        {
          name: "KLIPPNING 30 MIN",
          description: "För dig med en kortare frisyr där maskin används till cirka hälften av frisyren. Tvätt och lättare styling ingår.",
          price: "590:-",
          time: "30 min"
        },
        {
          name: "BARNKLIPPNING 0-6 ÅR",
          description: "För de yngsta kunderna. Sprayfärg och lättare styling ingår, ej tvätt.",
          price: "380:-",
          time: "30 min"
        },
        {
          name: "BARNKLIPPNING 7-13 ÅR",
          description: "För de lite större barnen. Sprayfärg och lättare styling ingår, ej tvätt.",
          price: "450:-",
          time: "30 min"
        },
        {
          name: "LUGGKLIPPNING",
          description: "För dig som behöver toppa till luggen mellan klippningarna. Tvätt ingår ej.",
          price: "200:-",
          time: "15 min"
        },
        {
          name: "PUTSKLIPPNING",
          description: "För dig med kort hår som vill ansa till kanterna i mellan klippningarna. Tvätt ingår ej.",
          price: "270:-",
          time: "20 min"
        }
      ]
    },
    styling: {
      title: "Styling & Uppsättning",
      icon: Sparkles,
      color: "bg-secondary",
      services: [
        {
          name: "STYLING",
          description: "För dig som vill styla ditt hår extra fint. Platta, locka eller föna. Tvätt ingår ej.",
          price: "420:-",
          time: "30 min"
        },
        {
          name: "TVÄTT OCH STYLING",
          description: "För dig som vill tvätta och styla ditt hår extra fint. Platta, locka eller föna.",
          price: "520:-",
          time: "45 min"
        },
        {
          name: "UPPSÄTTNING",
          description: "För dig som ska gå på bal eller vill vara extra fin till festen. Tvätt ingår ej.",
          price: "1300:-",
          time: "1,5 h"
        }
      ]
    },
    farg: {
      title: "Färgning & Slingor",
      icon: Palette,
      color: "bg-tertiary",
      services: [
        {
          name: "KLIPP OCH SLING KORT HÅR",
          description: "För dig med kortare hår ungefär till hakan. Folieslingor eller slingor i hätta, nyansering, klippning och lättare styling ingår. Ej botten färg.",
          price: "2095:-",
          time: "2 h"
        },
        {
          name: "KLIPP OCH SLING LÅNGT HÅR",
          description: "För dig med längre hår, från hakan/axlarna. Folieslingor, nyansering, klippning lättare styling ingår. Ej bottenfärg.",
          price: "2595:-",
          time: "2,5 h"
        },
        {
          name: "KLIPP OCH SLING TJOCKT HÅR",
          description: "För dig med långt och/eller tjockt hår. Eller för dig som vill göra extra mycket slingor eller stor förändring där det krävs extra tid i behandlingen. Folieslingor, nyansering, klippning och lättare styling ingår. Ej bottenfärg.",
          price: "2780:-",
          time: "3 h"
        },
        {
          name: "KLIPP OCH BOTTENFÄRG",
          description: "För dig som endast vill färga utväxten och klippa dig. Utväxten bör ej vara längre än 3 cm, då rekommenderar vi behandlingen som heter klipp och färg istället.",
          price: "1895:-",
          time: "2 h"
        },
        {
          name: "KLIPP OCH FÄRG KORT",
          description: "För dig med kortare hår ungefär till hakan, som vill färga hela eller delar av håret. Klippning och lättare styling ingår.",
          price: "2095:-",
          time: "2 h"
        },
        {
          name: "KLIPP OCH FÄRG LÅNGT",
          description: "För dig med längre hår, från hakan/axlarna, som vill färga hela eller delar av håret. Klippning och lättare styling ingår.",
          price: "2395:-",
          time: "2,5 h"
        },
        {
          name: "KLIPP OCH FÄRG + SLING",
          description: "För dig med kortare hår, som längst strax över axlarna, som vill färga håret. Fåtal slingor, Klippning och lättare styling ingår.",
          price: "2295:-",
          time: "2,25 h"
        },
        {
          name: "KLIPP OCH AVANCERAD FÄRGBEHANDLING",
          description: "För dig med längre hår, från axlarna, som vill göra en större färgförändring. till exempel balayage eller en behandling där vi använder oss av både färg och folieslingor. Nyansering, klippning och lättare styling ingår.",
          price: "2795:-",
          time: "3 h"
        },
        {
          name: "KLIPP OCH TONING LÅNGT",
          description: "För dig med långt hår, från hakan/axlarna, som vill ha en lättare färg i ditt hår som inte håller lika bra som en färg men inte heller tvättas ur efter ett par tvättar. De blir ett naturligare resultat.",
          price: "1895:-",
          time: "2 h"
        },
        {
          name: "KLIPP OCH TONING KORT",
          description: "För dig med kort hår, som längst till hakan, som vill ha en lättare färg i ditt hår som inte håller lika bra som en färg men inte heller tvättas ur efter ett par tvättar. De blir ett naturligare resultat.",
          price: "1695:-",
          time: "1 h 45 min"
        },
        {
          name: "KLIPP OCH NYANSERING",
          description: "För dig som har slingor sen tidigare och vill fräscha upp nyansen mellan besöken. Klippning och lättare styling ingår.",
          price: "1395:-",
          time: "1,5 h"
        },
        {
          name: "NYANSERING",
          description: "För dig som har slingor sedan tidigare och vill fräscha upp nyansen mellan besöken. Lättare styling ingår.",
          price: "995:-",
          time: "1 h"
        },
        {
          name: "FÄRGNING AV BRYN OCH FRANSAR",
          description: "Plockning ingår.",
          price: "420:-",
          time: "30 min"
        },
        {
          name: "FÄRGNING AV BRYN",
          description: "Plockning ingår.",
          price: "320:-",
          time: "20 min"
        },
        {
          name: "FÄRGNING AV FRANSAR",
          description: "",
          price: "320:-",
          time: "20 min"
        }
      ]
    },
    special: {
      title: "Specialbehandlingar",
      icon: Sparkles,
      color: "bg-primary",
      services: [
        {
          name: "EXTENSIONS",
          description: "Vi använder oss av Hairtalk och BHBD som har den högsta kvalitén på hår & fästen. Vi rekommenderar att ni kommer in till salongen för konsultation.",
          price: "Från 2000:-",
          time: "2-4 h"
        },
        {
          name: "KLIPP OCH PERMANENT",
          description: "Ring gärna för konsultation.",
          price: "1400 – 2000:-",
          time: "2-3 h"
        }
      ]
    }
  };

  return (
    <section id="behandlingar" className="py-16 md:py-20 bg-light-green pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 md:mb-6">
            Våra Behandlingar
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            Här ser du våra behandlingar, klicka och läs mer för att lättare välja den behandling 
            som passar dig bäst. Varje behandling har en tid och vi gör vårt bästa för att hålla den, 
            men ibland drar det ut lite extra på tiden, det kan vara bra att ha i åtanke.
          </p>
          
          <button
            onClick={scrollToBooking}
            className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2 inline" />
            Boka Tid Nu
          </button>
        </div>

        {/* Treatment Categories */}
        <div className="space-y-6">
          {Object.entries(behandlingar).map(([key, category]) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategory === key;
            
            return (
              <div key={key} className="bg-white rounded-2xl shadow-lg border border-soft-green overflow-hidden">
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-soft-green/50 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className={`${category.color} rounded-full p-3 mr-4`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark">{category.title}</h2>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base text-tertiary mr-4">
                      {category.services.length} behandlingar
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-soft-green">
                    <div className="p-6 md:p-8 space-y-6">
                      {category.services.map((service, index) => (
                        <div key={index} className="bg-soft-green rounded-xl p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-0">{service.name}</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                              <div className="flex items-center text-primary">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm font-medium">{service.time}</span>
                              </div>
                              <div className="flex items-center text-primary">
                                <DollarSign className="w-4 h-4 mr-1" />
                                <span className="text-lg font-bold">{service.price}</span>
                              </div>
                            </div>
                          </div>
                          
                          {service.description && (
                            <p className="text-tertiary leading-relaxed text-sm md:text-base mb-4">
                              {service.description}
                            </p>
                          )}
                          
                          <button
                            onClick={scrollToBooking}
                            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base"
                          >
                            Boka {service.name}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Osäker på vilken behandling som passar dig?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Kontakta oss så hjälper vi dig att hitta den perfekta behandlingen för ditt hår
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Boka Konsultation
            </button>
            <a
              href="tel:036712300"
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Ring Oss: 036-712 300
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehandlingarSection;