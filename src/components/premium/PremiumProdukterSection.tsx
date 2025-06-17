import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Leaf, Award, Sparkles, ShoppingBag, Star, Zap } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumProdukterSection = () => {
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

  const products = [
    {
      name: "Davines",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/Davines-wBmFo918jOuPG8OGizaoX8c63sFvFZ.jpg",
      description: "Italienska lyxprodukter med naturliga ingredienser",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "By Jolima",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/byjolima_loggo-bTaLVaJ25CFrns4PjAd7Bc4EXX568i.png",
      description: "Svenska hårvårdsprodukter med fokus på hållbarhet",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "GHD",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/ghd-2MziqUgzeMcKIpk4S6q6ErJxzINiyG.png",
      description: "Professionella stylingverktyg av högsta kvalitet",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Marc Inbane",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/marc-inbane-1-HFbPG7pbHkqmjNAJrQ6sNXqzpgfylQ.jpg",
      description: "Naturlig solbränna och hudvårdsprodukter",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      name: "Nine Yards",
      image: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/nine-yards-1-jKB6EJE9kGZ7WQWLAe0wRbcn18hR40.png",
      description: "Innovativa hårvårdsprodukter för alla hårtyper",
      gradient: "from-blue-500 to-cyan-600"
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
    <section id="produkter" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent"
          >
            Våra Produkter
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Att vara frisör innebär mer än att bara klippa och färga hår. Vi vill även hjälpa dig 
            att hitta de produkter som passar ditt hår och kan hjälpa dig med din nya frisyr. 
            Vi säljer därför produkter från några av frisörbranschens bästa märken, med fokus på miljömedvetenhet.
          </motion.p>
        </motion.div>

        {/* Product Carousel - Full Width */}
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
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-soft-green to-light-green flex items-center justify-center p-8">
                    <img
                      src={product.image}
                      alt={`${product.name} - Professionella hårvårdsprodukter`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-dark mb-3">{product.name}</h3>
                    <p className="text-tertiary leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    <Button 
                      variant="salon"
                      className="w-full"
                      onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Läs Mer om {product.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid - Full Width */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: Leaf, title: "Miljömedvetenhet", desc: "Vi väljer produkter med fokus på hållbarhet och miljövänliga ingredienser", color: "from-green-500 to-emerald-600" },
            { icon: Award, title: "Professionell Kvalitet", desc: "Endast produkter från frisörbranschens bästa och mest respekterade märken", color: "from-blue-500 to-indigo-600" },
            { icon: Sparkles, title: "Personlig Rådgivning", desc: "Vi hjälper dig att hitta produkter som passar just ditt hår och din frisyr", color: "from-purple-500 to-pink-600" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="text-center bg-gradient-to-br from-soft-green to-light-green border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                  <p className="text-tertiary leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Full Width */}
        <motion.div 
          variants={itemVariants}
          className="w-full"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-3xl">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Behöver Du Hjälp att Välja Produkter?</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Våra erfarna frisörer hjälper dig gärna att hitta de produkter som passar 
                just ditt hår och dina behov. Kom in till salongen för personlig rådgivning!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Boka Konsultation
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-white text-white hover:bg-white hover:text-dark"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Besök Salongen
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-400">
                  📍 Barnarpsgatan 3, Jönköping | 📞 036-712 300
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumProdukterSection;