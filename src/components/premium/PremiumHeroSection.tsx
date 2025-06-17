import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Scissors, Calendar, Phone, Home, Users, Camera, Heart, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const PremiumHeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const callPhone = () => {
    window.open('tel:036712300');
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Premium Navigation */}
      <motion.nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-dark/95 backdrop-blur-xl border-b border-white/10 py-2 md:py-3" 
            : "bg-transparent py-4 md:py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full px-4 md:px-6 lg:px-8 flex items-center justify-between max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Scissors className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-white">
              <span className="font-bold text-lg md:text-xl block leading-tight">KLIPPCENTER</span>
              <span className="text-sm text-primary font-medium">| JKPG</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Hem', 'Om Oss', 'Våra Frisörer', 'Behandlingar', 'Galleri', 'Kontakt'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item === 'Hem' ? 'hem' : item === 'Om Oss' ? 'om-oss' : item === 'Våra Frisörer' ? 'frisor' : item === 'Behandlingar' ? 'behandlingar' : item === 'Galleri' ? 'galleri' : 'kontakt')}
                className="text-white hover:text-primary transition-colors font-medium relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <Button 
              variant="premium"
              size="lg"
              onClick={() => scrollToSection('behandlingar')}
              className="rounded-full"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Boka Tid
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-dark/98 backdrop-blur-xl border-b border-white/10",
            isMenuOpen ? "block" : "hidden"
          )}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Hem', icon: Home, id: 'hem' },
                { name: 'Om Oss', icon: Users, id: 'om-oss' },
                { name: 'Frisörer', icon: Sparkles, id: 'frisor' },
                { name: 'Galleri', icon: Camera, id: 'galleri' }
              ].map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="flex flex-col items-center text-white hover:bg-white/10 h-16"
                >
                  <item.icon className="w-5 h-5 mb-1" />
                  <span className="text-sm">{item.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <Button 
                variant="salon"
                onClick={() => scrollToSection('behandlingar')}
                className="flex flex-col items-center h-16"
              >
                <Calendar className="w-5 h-5 mb-1" />
                <span className="text-sm">Boka Tid</span>
              </Button>
              <Button 
                variant="outline"
                onClick={callPhone}
                className="flex flex-col items-center h-16 border-green-500 text-green-400 hover:bg-green-500/10"
              >
                <Phone className="w-5 h-5 mb-1" />
                <span className="text-sm">Ring Oss</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Premium Hero Section */}
      <section 
        ref={heroRef}
        id="hem" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale, y }}
        >
          <img
            src="https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/ag/Hero%20Section%20Background-hSz2hWqBvlnxm5oFZQpw8yxKgRz4LW.jpg"
            alt="KLIPPCENTER | JKPG - Professionell frisörsalong i Jönköping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/60 to-primary/40"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
          style={{ opacity, y }}
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
              <Scissors className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KLIPPCENTER
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 mt-2">
              | JKPG
            </span>
          </motion.h1>
          
          <motion.div 
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/95 font-light">
              Sedan 1996 - Din frisörsalong på Väster
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              Ett helhetskoncept med frisör, hudvård, kläder och accessoarer. 
              Vi är ett gott gäng som brinner för att göra dig fin!
            </p>
          </motion.div>

          {/* Premium Features */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {[
              { icon: Heart, title: "Snart 30 år", desc: "Erfaren salong sedan 1996" },
              { icon: Users, title: "Expertteam", desc: "6 frisörer + hudterapeut" },
              { icon: Sparkles, title: "Helhetskoncept", desc: "Frisör, hudvård & mode" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button 
              variant="premium"
              size="xl"
              onClick={() => scrollToSection('behandlingar')}
              className="group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Boka Tid Nu
            </Button>
            <Button 
              variant="outline"
              size="xl"
              onClick={() => scrollToSection('om-oss')}
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              Läs Mer
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-80">Scrolla ner</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </section>

      {/* Bottom Navigation for Mobile/Tablet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-xl border-t border-white/10 z-40">
        <div className="grid grid-cols-5 h-16">
          {[
            { icon: Home, label: 'Hem', id: 'hem' },
            { icon: Users, label: 'Team', id: 'frisor' },
            { icon: Calendar, label: 'Boka', id: 'behandlingar', primary: true },
            { icon: Camera, label: 'Galleri', id: 'galleri' },
            { icon: Phone, label: 'Ring', action: callPhone, green: true }
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action || (() => scrollToSection(item.id!))}
              className={cn(
                "flex flex-col items-center justify-center text-white transition-all duration-300",
                item.primary && "bg-primary relative",
                item.green && "hover:text-green-400",
                !item.primary && !item.green && "hover:text-primary active:bg-white/10"
              )}
            >
              {item.primary && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4" />
                </div>
              )}
              {!item.primary && <item.icon className="w-5 h-5 mb-1" />}
              <span className={cn("text-xs font-medium", item.primary && "mt-2")}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom padding for mobile navigation */}
      <div className="lg:hidden h-16"></div>
    </>
  );
};

export default PremiumHeroSection;