import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Clock, Users, Scissors, Heart, Sparkles, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumAboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="om-oss" className="py-20 lg:py-32 bg-gradient-to-br from-light-green to-soft-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent"
          >
            Om KLIPPCENTER | JKPG
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed"
          >
            Sedan 1996 har vi skapat vackra frisyrer och erbjudit professionell service 
            i hjärtat av Jönköping. Välkommen till vår värld av skönhet och välmående.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Story Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark">Vår Historia</h2>
                </div>
                
                <div className="space-y-6 text-tertiary leading-relaxed">
                  <p className="text-lg">
                    <span className="font-bold text-primary text-xl">1996</span> öppnades dörrarna till Klippcenter när 
                    <span className="font-bold text-dark"> Lotta</span> startade salongen. Vi började i en mindre lokal 
                    men nu, snart <span className="font-bold text-primary">30 år senare</span>, är vi flera frisörer 
                    och en hudterapeut som tillsammans delar på vår stora fina lokal på väster.
                  </p>
                  
                  <p className="text-lg">
                    Vi är ett <span className="font-bold text-dark">gott gäng</span> på salongen som har väldigt roligt tillsammans. 
                    Idag har vi ett <span className="font-bold text-primary">helhetskoncept</span> med bland annat kläder, 
                    smycken, accessoarer, hudvård och makeup.
                  </p>
                  
                  <div className="bg-gradient-to-r from-soft-green to-light-green rounded-2xl p-6 border-l-4 border-primary">
                    <p className="text-dark font-medium italic text-lg">
                      "Vi brinner för att göra dig fin och känna dig välmående. 
                      Varje kund är unik och förtjänar vår fulla uppmärksamhet."
                    </p>
                    <p className="text-tertiary mt-3 font-semibold">- Lotta, Grundare</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Image Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="relative h-full min-h-[500px]">
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="KLIPPCENTER | JKPG - Vår vackra salong på Väster i Jönköping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-bold mb-1">Vår salong på Väster</p>
                  <p className="text-sm opacity-90">Barnarpsgatan 3, Jönköping</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-20"
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-dark text-center mb-12">Vår Resa</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { year: "1996", title: "Början", desc: "Lotta öppnar Klippcenter i en mindre lokal", icon: Calendar },
                  { year: "Idag", title: "Expansion", desc: "6 frisörer + hudterapeut i stor, fin lokal", icon: Users },
                  { year: "Framtiden", title: "Innovation", desc: "Fortsatt utveckling och innovation", icon: TrendingUp }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-dark mb-2">{item.year}</h4>
                    <h5 className="text-lg font-semibold text-primary mb-2">{item.title}</h5>
                    <p className="text-tertiary">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Award, title: "Kvalitet", desc: "Snart 30 års erfarenhet", color: "from-blue-500 to-blue-600" },
            { icon: Heart, title: "Passion", desc: "Vi brinner för vårt yrke", color: "from-red-500 to-pink-600" },
            { icon: Users, title: "Gemenskap", desc: "Ett gott gäng tillsammans", color: "from-green-500 to-emerald-600" },
            { icon: Sparkles, title: "Helhet", desc: "Frisör, hudvård & mode", color: "from-purple-500 to-indigo-600" }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-br ${value.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{value.title}</h3>
                  <p className="text-tertiary text-sm leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-2xl">
            <CardContent className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Redo att Uppleva Skillnaden?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kom och upplev vår passion för skönhet och vårt engagemang för excellens. 
                Vi ser fram emot att välkomna dig till KLIPPCENTER | JKPG.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="premium"
                  size="xl"
                  onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Boka Din Tid
                </Button>
                <Button 
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-dark"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Kontakta Oss
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumAboutUs;