import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Clock, Calendar, Scissors, Palette, Sparkles, X, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const PremiumBehandlingarSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openExternalBooking = () => {
    window.open('https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service', '_blank');
  };

  const behandlingar = {
    klippning: {
      title: "Klippning",
      icon: Scissors,
      gradient: "from-blue-500 to-indigo-600",
      services: [
        {
          name: "KLIPPNING 60 MIN",
          description: "För dig med extra tjockt och/eller långt hår, för dig som önskar extra styling eller för dig som ska klippa en helt ny frisyr och behöver lite extra tid. Tvätt och lättare styling ingår.",
          price: "790 kr",
          time: "60 min"
        },
        {
          name: "KLIPPNING 45 MIN",
          description: "För långa hår, tunnare till medeltjocka hår eller korta frisyrer men som behöver mer tid och har tjockare hår. Tvätt och lättare styling ingår.",
          price: "620 kr",
          time: "45 min"
        },
        {
          name: "KLIPPNING 30 MIN",
          description: "För dig med en kortare frisyr där maskin används till cirka hälften av frisyren. Tvätt och lättare styling ingår.",
          price: "590 kr",
          time: "30 min"
        },
        {
          name: "BARNKLIPPNING 0-6 ÅR",
          description: "För de yngsta kunderna. Sprayfärg och lättare styling ingår, ej tvätt.",
          price: "380 kr",
          time: "30 min"
        },
        {
          name: "BARNKLIPPNING 7-13 ÅR",
          description: "För de lite större barnen. Sprayfärg och lättare styling ingår, ej tvätt.",
          price: "450 kr",
          time: "30 min"
        },
        {
          name: "LUGGKLIPPNING",
          description: "För dig som behöver toppa till luggen mellan klippningarna. Tvätt ingår ej.",
          price: "200 kr",
          time: "15 min"
        },
        {
          name: "PUTSKLIPPNING",
          description: "För dig med kort hår som vill ansa till kanterna i mellan klippningarna. Tvätt ingår ej.",
          price: "270 kr",
          time: "20 min"
        }
      ]
    },
    styling: {
      title: "Styling & Uppsättning",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-600",
      services: [
        {
          name: "STYLING",
          description: "För dig som vill styla ditt hår extra fint. Platta, locka eller föna. Tvätt ingår ej.",
          price: "420 kr",
          time: "30 min"
        },
        {
          name: "TVÄTT OCH STYLING",
          description: "För dig som vill tvätta och styla ditt hår extra fint. Platta, locka eller föna.",
          price: "520 kr",
          time: "45 min"
        },
        {
          name: "UPPSÄTTNING",
          description: "För dig som ska gå på bal eller vill vara extra fin till festen. Tvätt ingår ej.",
          price: "1300 kr",
          time: "1,5 h"
        }
      ]
    },
    farg: {
      title: "Färgning & Slingor",
      icon: Palette,
      gradient: "from-emerald-500 to-teal-600",
      services: [
        {
          name: "KLIPP OCH SLING KORT HÅR",
          description: "För dig med kortare hår ungefär till hakan. Folieslingor eller slingor i hätta, nyansering, klippning och lättare styling ingår. Ej botten färg.",
          price: "2095 kr",
          time: "2 h"
        },
        {
          name: "KLIPP OCH SLING LÅNGT HÅR",
          description: "För dig med längre hår, från hakan/axlarna. Folieslingor, nyansering, klippning lättare styling ingår. Ej bottenfärg.",
          price: "2595 kr",
          time: "2,5 h"
        },
        {
          name: "KLIPP OCH SLING TJOCKT HÅR",
          description: "För dig med långt och/eller tjockt hår. Eller för dig som vill göra extra mycket slingor eller stor förändring där det krävs extra tid i behandlingen. Folieslingor, nyansering, klippning och lättare styling ingår. Ej bottenfärg.",
          price: "2780 kr",
          time: "3 h"
        },
        {
          name: "KLIPP OCH BOTTENFÄRG",
          description: "För dig som endast vill färga utväxten och klippa dig. Utväxten bör ej vara längre än 3 cm, då rekommenderar vi behandlingen som heter klipp och färg istället.",
          price: "1895 kr",
          time: "2 h"
        },
        {
          name: "KLIPP OCH FÄRG KORT",
          description: "För dig med kortare hår ungefär till hakan, som vill färga hela eller delar av håret. Klippning och lättare styling ingår.",
          price: "2095 kr",
          time: "2 h"
        },
        {
          name: "KLIPP OCH FÄRG LÅNGT",
          description: "För dig med längre hår, från hakan/axlarna, som vill färga hela eller delar av håret. Klippning och lättare styling ingår.",
          price: "2395 kr",
          time: "2,5 h"
        },
        {
          name: "KLIPP OCH FÄRG + SLING",
          description: "För dig med kortare hår, som längst strax över axlarna, som vill färga håret. Fåtal slingor, Klippning och lättare styling ingår.",
          price: "2295 kr",
          time: "2,25 h"
        },
        {
          name: "KLIPP OCH AVANCERAD FÄRGBEHANDLING",
          description: "För dig med längre hår, från axlarna, som vill göra en större färgförändring. till exempel balayage eller en behandling där vi använder oss av både färg och folieslingor. Nyansering, klippning och lättare styling ingår.",
          price: "2795 kr",
          time: "3 h"
        },
        {
          name: "KLIPP OCH TONING LÅNGT",
          description: "För dig med långt hår, från hakan/axlarna, som vill ha en lättare färg i ditt hår som inte håller lika bra som en färg men inte heller tvättas ur efter ett par tvättar. De blir ett naturligare resultat.",
          price: "1895 kr",
          time: "2 h"
        },
        {
          name: "KLIPP OCH TONING KORT",
          description: "För dig med kort hår, som längst till hakan, som vill ha en lättare färg i ditt hår som inte håller lika bra som en färg men inte heller tvättas ur efter ett par tvättar. De blir ett naturligare resultat.",
          price: "1695 kr",
          time: "1 h 45 min"
        },
        {
          name: "KLIPP OCH NYANSERING",
          description: "För dig som har slingor sen tidigare och vill fräscha upp nyansen mellan besöken. Klippning och lättare styling ingår.",
          price: "1395 kr",
          time: "1,5 h"
        },
        {
          name: "NYANSERING",
          description: "För dig som har slingor sedan tidigare och vill fräscha upp nyansen mellan besöken. Lättare styling ingår.",
          price: "995 kr",
          time: "1 h"
        },
        {
          name: "FÄRGNING AV BRYN OCH FRANSAR",
          description: "Plockning ingår.",
          price: "420 kr",
          time: "30 min"
        },
        {
          name: "FÄRGNING AV BRYN",
          description: "Plockning ingår.",
          price: "320 kr",
          time: "20 min"
        },
        {
          name: "FÄRGNING AV FRANSAR",
          description: "",
          price: "320 kr",
          time: "20 min"
        }
      ]
    },
    special: {
      title: "Specialbehandlingar",
      icon: Star,
      gradient: "from-amber-500 to-orange-600",
      services: [
        {
          name: "EXTENSIONS",
          description: "Vi använder oss av Hairtalk och BHBD som har den högsta kvalitén på hår & fästen. Vi rekommenderar att ni kommer in till salongen för konsultation.",
          price: "Från 2000 kr",
          time: "2-4 h"
        },
        {
          name: "KLIPP OCH PERMANENT",
          description: "Ring gärna för konsultation.",
          price: "1400 – 2000 kr",
          time: "2-3 h"
        }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section id="behandlingar" className="py-20 lg:py-32 bg-gradient-to-br from-light-green to-soft-green relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="w-full px-2 sm:px-4 lg:px-6 max-w-[98%] mx-auto relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
                <Scissors className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 md:mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent px-2"
            >
              Våra Behandlingar
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-2 sm:px-4"
            >
              Här ser du våra behandlingar, klicka och läs mer för att lättare välja den behandling 
              som passar dig bäst. Varje behandling har en tid och vi gör vårt bästa för att hålla den, 
              men ibland drar det ut lite extra på tiden, det kan vara bra att ha i åtanke.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button
                variant="premium"
                size="xl"
                onClick={openBookingModal}
                className="group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Boka Tid Nu
              </Button>
            </motion.div>
          </motion.div>

          {/* Treatment Categories */}
          <motion.div 
            variants={containerVariants}
            className="space-y-4 md:space-y-6 mb-12 md:mb-16"
          >
            {Object.entries(behandlingar).map(([key, category]) => {
              const IconComponent = category.icon;
              const isExpanded = expandedCategory === key;
              
              return (
                <motion.div 
                  key={key} 
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    <button
                      onClick={() => toggleCategory(key)}
                      className="w-full p-4 sm:p-6 lg:p-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-soft-green/50 hover:to-light-green/50 transition-all duration-300"
                    >
                      <div className="flex items-center min-w-0 flex-1">
                        <div className={cn(
                          "bg-gradient-to-br rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-lg flex-shrink-0",
                          category.gradient
                        )}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark truncate">{category.title}</h2>
                      </div>
                      <div className="flex items-center flex-shrink-0 ml-2">
                        <span className="text-xs sm:text-sm lg:text-base text-tertiary mr-2 sm:mr-4 bg-soft-green px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                          {category.services.length} behandlingar
                        </span>
                        <div className="p-2 rounded-full bg-primary/10">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          )}
                        </div>
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-soft-green">
                        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                          {category.services.map((service, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gradient-to-r from-soft-green to-light-green rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-primary/10"
                            >
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 sm:mb-4">
                                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-dark mb-2 lg:mb-0 break-words">{service.name}</h3>
                                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-end xl:items-center gap-2 lg:gap-1 xl:gap-4 flex-shrink-0">
                                  <div className="flex items-center text-primary bg-white/80 rounded-full px-2 sm:px-3 py-1">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{service.time}</span>
                                  </div>
                                  <div className="flex items-center text-primary bg-white/80 rounded-full px-2 sm:px-3 py-1">
                                    <span className="text-sm sm:text-base lg:text-lg font-bold whitespace-nowrap">{service.price}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {service.description && (
                                <p className="text-tertiary leading-relaxed text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 break-words">
                                  {service.description}
                                </p>
                              )}
                              
                              <Button
                                variant="salon"
                                onClick={openBookingModal}
                                className="group w-full sm:w-auto"
                              >
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:rotate-12 transition-transform" />
                                <span className="text-xs sm:text-sm">Boka {service.name}</span>
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-2xl">
              <CardContent className="p-6 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-2">Osäker på vilken behandling som passar dig?</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Kontakta oss så hjälper vi dig att hitta den perfekta behandlingen för ditt hår
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    variant="premium"
                    size="xl"
                    onClick={openBookingModal}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Boka Konsultation
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white text-white hover:bg-white hover:text-dark"
                    onClick={() => window.open('tel:036712300')}
                  >
                    Ring Oss: 036-712 300
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="w-full h-full md:w-[95vw] md:h-[95vh] bg-white md:rounded-2xl flex flex-col shadow-3xl">
            <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-gradient-to-r from-soft-green to-light-green md:rounded-t-2xl flex-shrink-0">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark">Boka Din Tid</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={openExternalBooking}
                  className="hidden md:flex items-center text-tertiary hover:text-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Öppna extern
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeBookingModal}
                  className="hover:bg-gray-200"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service"
                className="w-full h-full border-0"
                title="Boka tid - KLIPPCENTER | JKPG"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumBehandlingarSection;