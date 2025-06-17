import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Sparkles, Phone, Mail, Calendar, Crown, Camera, Star, Gift } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumBrollopSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openPhoneBook = () => {
    window.open('tel:036712300');
  };

  const openEmail = () => {
    window.open('mailto:info@klippcenter-jkpg.se?subject=Bröllopsbokning%20-%20Konsultation');
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
    <section id="brollop" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mb-6 shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 md:mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent px-2"
          >
            Bröllop & Speciella Tillfällen
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Är det dags att boka en frisör till den stora dagen? Vi hjälper er gärna 
            att se fantastiska ut på er speciella dag!
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Full Width */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 md:mb-20"
        >
          {/* Services Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-pink-50 to-rose-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark mb-6 md:mb-8 flex items-center">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 mr-2 sm:mr-3" />
                  <span className="break-words">Våra Tjänster</span>
                </h2>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-pink-100">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark mb-3 sm:mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mr-2" />
                      <span className="break-words">För Bruden</span>
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-tertiary">
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span>Bruduppsättning</span>
                      </li>
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span>Professionell makeup</span>
                      </li>
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span>Styling av tärnor</span>
                      </li>
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Provuppsättning innan bröllopet</span>
                      </li>
                    </ul>
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl text-white">
                      <p className="font-bold text-base sm:text-lg md:text-xl break-words">Brudklädsel: 4000 kr inkl. makeup</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-pink-100">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark mb-3 sm:mb-4 flex items-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mr-2" />
                      <span className="break-words">För Brudgummen & Best Men</span>
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-tertiary">
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Professionell herrklippning</span>
                      </li>
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Styling för brudgummen</span>
                      </li>
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Styling för best men</span>
                      </li>
                      <li className="flex items-center text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Skäggvård och trimning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Process Card */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6 md:space-y-8 h-full">
              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark mb-6 md:mb-8 flex items-center">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 mr-2 sm:mr-3" />
                    <span className="break-words">Så Här Går Det Till</span>
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Konsultation",
                        desc: "Vi bokar in en konsultation där vi går igenom hur du vill ha frisyren och sminket, kollar på inspirationsbilder och gör en provuppsättning.",
                        color: "from-pink-500 to-rose-500"
                      },
                      {
                        step: "2", 
                        title: "Bröllopsdagen",
                        desc: "På bröllopsdagen är ni välkomna till oss på salongen där vi bjuder dig och ditt sällskap på frukost från Napoleon, dricka och annat tilltugg.",
                        color: "from-rose-500 to-pink-600"
                      },
                      {
                        step: "3",
                        title: "Perfekt Resultat", 
                        desc: "Vi ser till att du ser fantastisk ut på din stora dag med professionell styling och makeup som håller hela dagen.",
                        color: "from-pink-600 to-rose-600"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.step}
                        className="flex items-start"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4 mt-1 shadow-lg flex-shrink-0`}>
                          {item.step}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-dark mb-1 sm:mb-2 text-sm sm:text-base md:text-lg break-words">{item.title}</h3>
                          <p className="text-tertiary leading-relaxed text-xs sm:text-sm md:text-base break-words">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Special Experience Card */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark mb-3 sm:mb-4 flex items-center">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mr-2" />
                    <span className="break-words">Speciell Upplevelse</span>
                  </h3>
                  <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base break-words">
                    Vi skapar en avslappnad och lyxig atmosfär på bröllopsdagen. Njut av vår gästvänliga service 
                    medan vi förbereder dig för den stora dagen.
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-3 sm:p-4 border border-pink-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-dark">
                      <div className="flex items-center">
                        <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Frukost från Napoleon</span>
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Drycker och tilltugg</span>
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Avslappnad atmosfär</span>
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="break-words">Professionell service</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section - Full Width */}
        <motion.div 
          variants={itemVariants}
          className="w-full"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-3xl">
            <CardContent className="p-6 sm:p-8 md:p-12 text-white text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">Redo att Boka Din Stora Dag?</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                Mejla eller ring oss för konsultation och för exakta prisuppgifter vid större sällskap. 
                Vi hjälper dig att skapa den perfekta looken för din speciella dag.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={openPhoneBook}
                  className="group flex-1"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Ring Oss
                </Button>
                
                <Button
                  variant="outline"
                  size="xl"
                  onClick={openEmail}
                  className="border-white text-white hover:bg-white hover:text-dark flex-1"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Mejla Oss
                </Button>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-600">
                <p className="text-gray-400 text-sm sm:text-base break-words">
                  📞 036-712 300 | ✉️ info@klippcenter-jkpg.se
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumBrollopSection;