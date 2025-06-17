import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Mail, Navigation, MessageCircle, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Barnarpsgatan+3,+553+16+Jönköping', '_blank');
  };

  const callPhone = () => {
    window.open('tel:036712300');
  };

  const sendEmail = () => {
    window.open('mailto:info@klippcenter-jkpg.se');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="kontakt" className="py-20 lg:py-32 bg-gradient-to-br from-light-green to-soft-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-13.8-11.2-25-25-25S0 36.2 0 50s11.2 25 25 25 25-11.2 25-25zm25 0c0-13.8-11.2-25-25-25S25 36.2 25 50s11.2 25 25 25 25-11.2 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 lg:px-6 max-w-[98%] mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-xl">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent"
          >
            Kontakta Oss
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed"
          >
            Vi finns här för att hjälpa dig. Kontakta oss för att boka tid eller 
            om du har några frågor om våra tjänster. Välkommen till KLIPPCENTER | JKPG!
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Full Width */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Contact Information Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dark mb-8 text-center lg:text-left">
                  Kontaktinformation
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: "Adress",
                      content: ["Barnarpsgatan 3", "553 16 Jönköping"],
                      action: openMaps,
                      actionText: "Visa vägbeskrivning",
                      actionIcon: Navigation,
                      color: "from-blue-500 to-indigo-600"
                    },
                    {
                      icon: Phone,
                      title: "Telefon",
                      content: ["036-712 300"],
                      action: callPhone,
                      actionText: "Ring nu",
                      color: "from-green-500 to-emerald-600"
                    },
                    {
                      icon: Mail,
                      title: "E-post",
                      content: ["info@klippcenter-jkpg.se"],
                      action: sendEmail,
                      actionText: "Skicka e-post",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      icon: Clock,
                      title: "Öppettider",
                      content: [
                        "Måndag - Fredag: 08:00 - 17:00-20:00",
                        "Lönelördagen: 09:00 - 15:00",
                        "Söndag: Stängt"
                      ],
                      color: "from-orange-500 to-red-600"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`bg-gradient-to-br ${item.color} rounded-full p-4 mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-dark mb-2 text-lg">{item.title}</h3>
                        <div className="space-y-1">
                          {item.content.map((line, lineIndex) => (
                            <p key={lineIndex} className={`text-tertiary ${item.title === "Öppettider" && line.includes("Söndag") ? "text-red-600 font-semibold" : ""}`}>
                              {line}
                            </p>
                          ))}
                        </div>
                        {item.action && (
                          <button 
                            onClick={item.action}
                            className="text-primary hover:text-secondary font-semibold mt-3 flex items-center justify-center lg:justify-start transition-colors group"
                          >
                            {item.actionIcon && <item.actionIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />}
                            {item.actionText}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    variant="salon"
                    onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group"
                  >
                    <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Boka Tid Online
                  </Button>
                  <Button 
                    variant="premium"
                    onClick={callPhone}
                    className="group"
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Ring Oss Nu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map & Location Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dark mb-8 text-center lg:text-left">
                  Hitta Till Oss
                </h2>
                
                <div className="bg-gradient-to-br from-soft-green to-light-green rounded-2xl h-80 flex items-center justify-center mb-8 border border-primary/20">
                  <div className="text-center text-tertiary px-6">
                    <MapPin className="w-20 h-20 mx-auto mb-6 text-primary" />
                    <p className="text-2xl font-bold mb-3 text-dark">KLIPPCENTER | JKPG</p>
                    <p className="text-lg mb-2">Barnarpsgatan 3, Jönköping</p>
                    <p className="text-sm text-tertiary mb-6">Centralt beläget i Jönköping centrum</p>
                    <Button 
                      variant="premium"
                      onClick={openMaps}
                      className="group"
                    >
                      <Navigation className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Öppna i Google Maps
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Star,
                      title: "Kollektivtrafik",
                      desc: "Centralt beläget i Jönköping\nNära kollektivtrafik",
                      color: "from-blue-500 to-cyan-600"
                    },
                    {
                      icon: MapPin,
                      title: "Parkering",
                      desc: "Gatuparkering tillgänglig\nParkeringshus i närheten",
                      color: "from-green-500 to-emerald-600"
                    }
                  ].map((info, index) => (
                    <motion.div
                      key={info.title}
                      className="bg-gradient-to-br from-soft-green to-light-green p-6 rounded-2xl text-center border border-primary/20"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-dark mb-2">{info.title}</h3>
                      <p className="text-tertiary text-sm whitespace-pre-line">{info.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section - Full Width */}
        <motion.div 
          variants={itemVariants}
          className="w-full"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-3xl">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Redo att Boka Din Nästa Frisörbesök?</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Vi ser fram emot att välkomna dig till KLIPPCENTER | JKPG. 
                Boka din tid idag och upplev skillnaden med professionell service!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Boka Tid Nu
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={callPhone}
                  className="border-white text-white hover:bg-white hover:text-dark"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring: 036-712 300
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-400">
                  📍 Barnarpsgatan 3, 553 16 Jönköping | ⭐ 4.9/5 baserat på 150+ recensioner
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumContactSection;