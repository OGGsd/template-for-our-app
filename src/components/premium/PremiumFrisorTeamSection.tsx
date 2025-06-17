import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Award, ChevronLeft, ChevronRight, Calendar, Sparkles, Users, Crown } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const PremiumFrisorTeamSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      isFounder: true,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "ANNELIE",
      role: "Senior Frisör",
      experience: "Varit frisör sedan: 2001",
      specialty: "Nya tekniker och produkter",
      favorite: "French Bob",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/ANNELIE-lvrOqorFSFDisLWJxHJ9palbRNjhMg.jpg",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "CAROLINE",
      role: "Färgspecialist",
      experience: "Varit frisör sedan: 2002",
      specialty: "Färg och extensions (BHBD, Hairtalk)",
      favorite: "French bob",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/CAROLINE-uRmDHFew7BQEDkUYOgTBNtZtINzCiB.jpg",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "EMELIE",
      role: "Blondspecialist",
      experience: "Varit frisör sedan: 2013",
      specialty: "Blonda hår",
      favorite: "Lobben",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/EMELIE-u7gsZXybCyqeVOjaWuoBp2zrHLSkaD.jpg",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      name: "AMANDA",
      role: "Hudterapeut",
      experience: "Hudterapeut sedan: 2007",
      specialty: "Avancerad hudvård",
      favorite: "Jobba med maskiner",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/AMANDA-lhPlvpJWOqIz71GYPmln8i67bX9QIM.jpg",
      isSkinCare: true,
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

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
    <section id="frisor" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <Users className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent"
          >
            Våra Frisörer
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Idag är vi sex frisörer, en frisör under utbildning och en hudterapeut. 
            Vi älskar verkligen vårt yrke och brinner för att göra dig fin!
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-soft-green to-light-green rounded-2xl p-6 max-w-4xl mx-auto border border-primary/20"
          >
            <p className="text-lg text-tertiary leading-relaxed">
              För att hålla oss uppdaterade och kunna leverera det bästa till dig går vi 
              kontinuerligt på kurser och utbildningar.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Members Carousel */}
        <motion.div 
          variants={itemVariants}
          className="relative mb-20"
        >
          {/* Navigation Buttons - Desktop */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-primary/20 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-primary/20 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} på KLIPPCENTER | JKPG`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {member.isFounder && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg flex items-center">
                        <Crown className="w-4 h-4 mr-1" />
                        GRUNDARE
                      </div>
                    )}
                    
                    {member.isSkinCare && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" />
                        HUDVÅRD
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center shadow-lg">
                      <Star className="w-4 h-4 text-primary fill-current mr-1" />
                      <span className="text-sm font-semibold text-dark">Expert</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-dark mb-1">{member.name}</h2>
                      <p className="text-primary font-semibold text-lg">{member.role}</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-dark">Erfarenhet</p>
                          <p className="text-tertiary">{member.experience}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-dark">Grym på</p>
                          <p className="text-tertiary">{member.specialty}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-dark">Favoritfrisyr</p>
                          <p className="text-tertiary">{member.favorite}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="salon"
                      className="w-full"
                      onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Boka med {member.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-2xl">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-12">Vårt Expertteam</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "6", label: "Erfarna Frisörer", icon: Users },
                  { number: "1", label: "Hudterapeut", icon: Sparkles },
                  { number: "30", label: "År Erfarenhet", icon: Award },
                  { number: "100%", label: "Passion", icon: Star }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-light-green to-soft-green border border-primary/20 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-dark mb-4">Träffa Vårt Team</h3>
              <p className="text-xl text-tertiary mb-8 max-w-2xl mx-auto">
                Varje medlem i vårt team bidrar med unik expertis och passion. 
                Kom och upplev skillnaden som professionell service gör.
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
                  className="border-primary text-primary hover:bg-primary hover:text-white"
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

export default PremiumFrisorTeamSection;