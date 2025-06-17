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

      <div className="w-full px-4 lg:px-6 max-w-[98%] mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mb-6 shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
          >
            Bröllop & Speciella Tillfällen
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed"
          >
            Är det dags att boka en frisör till den stora dagen? Vi hjälper er gärna 
            att se fantastiska ut på er speciella dag!
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Full Width */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Services Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-pink-50 to-rose-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dark mb-8 flex items-center">
                  <Crown className="w-8 h-8 text-pink-600 mr-3" />
                  Våra Tjänster
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <h3 className="text-xl font-bold text-dark mb-4 flex items-center">
                      <Sparkles className="w-6 h-6 text-pink-600 mr-2" />
                      För Bruden
                    </h3>
                    <ul className="space-y-3 text-tertiary">
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Bruduppsättning
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Professionell makeup
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Styling av tärnor
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Provuppsättning innan bröllopet
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl text-white">
                      <p className="font-bold text-xl">Brudklädsel: 4000 kr inkl. makeup</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <h3 className="text-xl font-bold text-dark mb-4 flex items-center">
                      <Users className="w-6 h-6 text-pink-600 mr-2" />
                      För Brudgummen & Best Men
                    </h3>
                    <ul className="space-y-3 text-tertiary">
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Professionell herrklippning
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Styling för brudgummen
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Styling för best men
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        Skäggvård och trimning
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Process Card */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8 h-full">
              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-dark mb-8 flex items-center">
                    <Calendar className="w-8 h-8 text-rose-600 mr-3" />
                    Så Här Går Det Till
                  </h2>
                  
                  <div className="space-y-6">
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
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 mt-1 shadow-lg`}>
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-dark mb-2 text-lg">{item.title}</h3>
                          <p className="text-tertiary leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Special Experience Card */}
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center">
                    <Camera className="w-6 h-6 text-pink-600 mr-2" />
                    Speciell Upplevelse
                  </h3>
                  <p className="text-tertiary leading-relaxed mb-4">
                    Vi skapar en avslappnad och lyxig atmosfär på bröllopsdagen. Njut av vår gästvänliga service 
                    medan vi förbereder dig för den stora dagen.
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                    <div className="grid grid-cols-2 gap-2 text-sm text-dark">
                      <div className="flex items-center">
                        <Gift className="w-4 h-4 text-pink-500 mr-2" />
                        Frukost från Napoleon
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-4 h-4 text-pink-500 mr-2" />
                        Drycker och tilltugg
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-4 h-4 text-pink-500 mr-2" />
                        Avslappnad atmosfär
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-4 h-4 text-pink-500 mr-2" />
                        Professionell service
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
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Redo att Boka Din Stora Dag?</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Mejla eller ring oss för konsultation och för exakta prisuppgifter vid större sällskap. 
                Vi hjälper dig att skapa den perfekta looken för din speciella dag.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={openPhoneBook}
                  className="group flex-1"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Ring Oss
                </Button>
                
                <Button
                  variant="outline"
                  size="xl"
                  onClick={openEmail}
                  className="border-white text-white hover:bg-white hover:text-dark flex-1"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Mejla Oss
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-400">
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