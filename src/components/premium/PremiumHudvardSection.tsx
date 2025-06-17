import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, ExternalLink, Heart, Award, Star, ArrowRight, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumHudvardSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openSkinAndCare = () => {
    window.open('https://skinandcare.se/', '_blank');
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
    <section id="hudvard" className="py-20 lg:py-32 bg-gradient-to-br from-light-green to-soft-green relative overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Hudvård med Amanda
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed"
          >
            I våra lokaler hittar du även Skin & Care by Amanda. 
            Jönköpings mest personliga hudvårdssalong.
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Full Width */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Content Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark">Skin & Care by Amanda</h2>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-tertiary leading-relaxed">
                    Hos <span className="font-bold text-dark">Amanda</span> blir du alltid omhändertagen, 
                    hon hjälper dig att hitta vad just du och din hud behöver.
                  </p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                    <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
                      <Award className="w-6 h-6 text-emerald-600 mr-2" />
                      Amanda - Hudterapeut sedan 2007
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { icon: Star, label: "Grym på", value: "Avancerad hudvård" },
                        { icon: Heart, label: "Favoritbehandling", value: "Jobba med maskiner" },
                        { icon: Sparkles, label: "Specialitet", value: "Personlig hudvård" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          className="flex items-center p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <item.icon className="w-5 h-5 text-emerald-600 mr-3" />
                          <div>
                            <span className="font-semibold text-dark">{item.label}:</span>
                            <span className="text-tertiary ml-2">{item.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Varför välja Amanda?</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Över 15 års erfarenhet inom hudvård",
                        "Personlig och omhändertagande service",
                        "Avancerade behandlingar med moderna maskiner",
                        "Skräddarsydda behandlingar för din hudtyp"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Image Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full overflow-hidden bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="relative h-full min-h-[600px]">
                <img
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Skin & Care by Amanda - Professionell hudvård i Jönköping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xl font-bold mb-2">Skin & Care by Amanda</p>
                  <p className="text-sm opacity-90">Avancerad hudvård & behandlingar</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Services Preview - Full Width */}
        <motion.div 
          variants={itemVariants}
          className="mb-20"
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-dark text-center mb-12">Hudvårdstjänster</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Sparkles, title: "Ansiktsbehandlingar", desc: "Djuprengöring och återfuktning", color: "from-emerald-500 to-teal-600" },
                  { icon: Award, title: "Avancerade Behandlingar", desc: "Med moderna maskiner och teknik", color: "from-teal-500 to-cyan-600" },
                  { icon: Heart, title: "Personlig Rådgivning", desc: "Skräddarsydda hudvårdsprogram", color: "from-cyan-500 to-blue-600" }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-dark mb-2 text-lg">{service.title}</h4>
                    <p className="text-tertiary">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section - Full Width */}
        <motion.div 
          variants={itemVariants}
          className="w-full"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-3xl">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Upptäck Skin & Care by Amanda</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Besök Amandas egen hemsida för att läsa mer om alla hudvårdstjänster, 
                priser och för att boka din behandling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={openSkinAndCare}
                  className="group"
                >
                  <span>Besök Skin & Care</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
                
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-white text-white hover:bg-white hover:text-dark"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Kontakta Oss
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-400">
                  🌐 skinandcare.se | 📍 Samma lokaler som KLIPPCENTER | JKPG
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHudvardSection;