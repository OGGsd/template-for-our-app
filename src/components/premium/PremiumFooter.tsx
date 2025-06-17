import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Instagram, Facebook, Phone, Mail, MapPin, Download, Shield, ExternalLink, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import PrivacyPolicy from '../PrivacyPolicy';

const PremiumFooter = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          (window.navigator as any).standalone === true) {
        setIsInstalled(true);
        setShowInstallButton(false);
        return true;
      }
      return false;
    };

    // Initial check
    if (checkInstalled()) return;

    const handler = (e: Event) => {
      console.log('PWA: Install prompt available');
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    const installedHandler = () => {
      console.log('PWA: App was installed');
      setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', installedHandler);

    // For iOS Safari - show install button after some time
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isInStandaloneMode = (window.navigator as any).standalone;
    
    if (isIOS && !isInStandaloneMode) {
      setTimeout(() => {
        if (!isInstalled && !deferredPrompt) {
          setShowInstallButton(true);
        }
      }, 5000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback instructions for different browsers
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      let instructions = '';
      if (isIOS) {
        instructions = 'För att installera appen på iOS:\n\n1. Tryck på delningsknappen (□↗) i Safari\n2. Scrolla ner och välj "Lägg till på hemskärmen"\n3. Tryck "Lägg till" för att bekräfta';
      } else if (isAndroid) {
        instructions = 'För att installera appen på Android:\n\n1. Tryck på menyknappen (⋮) i Chrome\n2. Välj "Lägg till på startskärmen" eller "Installera app"\n3. Följ instruktionerna';
      } else {
        instructions = 'För att installera appen:\n\n1. Tryck på menyknappen (⋮) i din webbläsare\n2. Välj "Lägg till på startskärmen" eller "Installera app"\n3. Följ instruktionerna';
      }
      
      alert(instructions);
      return;
    }

    try {
      console.log('PWA: Prompting install');
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA: User response to install prompt: ${outcome}`);
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowInstallButton(false);
      }
    } catch (error) {
      console.error('PWA: Install prompt failed:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPrivacyPolicy = () => {
    window.open('/integritetspolicy', '_blank');
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-dark to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* PWA Install Banner */}
        {showInstallButton && !isInstalled && (
          <motion.div 
            className="bg-gradient-to-r from-primary to-secondary text-white py-3 sm:py-4 relative z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full px-2 sm:px-4 lg:px-6 max-w-[98%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center text-center sm:text-left">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base md:text-lg break-words">📱 Installera vår app för snabbare bokning och offline-tillgång!</span>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleInstallClick}
                  className="bg-white text-dark hover:bg-gray-100 border-white text-xs sm:text-sm"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Installera Nu
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowInstallButton(false)}
                  className="text-white hover:bg-white/10 text-xs sm:text-sm"
                >
                  Senare
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="w-full px-2 sm:px-4 lg:px-6 max-w-[98%] mx-auto py-12 sm:py-16 relative z-10">
          {/* Main Footer Content */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Brand Section */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mr-0 sm:mr-4 mb-3 sm:mb-0 shadow-xl">
                  <Scissors className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">KLIPPCENTER | JKPG</h2>
                  <p className="text-gray-400 text-sm sm:text-base">En frisör mitt i Jönköping</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Professionell frisörsalong som kombinerar traditionellt hantverk med modern stil. 
              Vi skapar den perfekta looken för dig på Barnarpsgatan 3 i Jönköping.
            </motion.p>
            
            {/* Social Media */}
            <motion.div 
              className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://www.instagram.com/klippcenter_jkpg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/klippcenter?locale=sv_SE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Footer Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quick Links */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Snabblänkar</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { name: 'Hem', id: 'hem' },
                    { name: 'Om Oss', id: 'om-oss' },
                    { name: 'Behandlingar', id: 'behandlingar' },
                    { name: 'Galleri', id: 'galleri' }
                  ].map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-gray-300 hover:text-primary transition-colors duration-300 py-2 px-3 sm:px-4 rounded-lg hover:bg-white/10 text-sm sm:text-base"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Kontakt</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-primary" />
                    <div>
                      <p className="text-gray-300 text-sm sm:text-base break-words">Barnarpsgatan 3</p>
                      <p className="text-gray-300 text-sm sm:text-base">553 16 Jönköping</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-primary" />
                    <a 
                      href="tel:036712300" 
                      className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      036-712 300
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-primary" />
                    <a 
                      href="mailto:info@klippcenter-jkpg.se" 
                      className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base break-all"
                    >
                      info@klippcenter-jkpg.se
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Öppettider</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">Måndag - Fredag</p>
                    <p className="text-primary font-bold text-base sm:text-lg break-words">08:00 - 17:00-20:00</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">Lönelördagen</p>
                    <p className="text-primary font-bold text-base sm:text-lg">09:00 - 15:00</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">Söndag</p>
                    <p className="text-red-400 font-bold text-base sm:text-lg">Stängt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="border-t border-white/20 pt-8 sm:pt-12 mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                variant="premium"
                size="xl"
                onClick={() => scrollToSection('behandlingar')}
                className="group w-full sm:w-auto"
              >
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Boka Tid Nu
              </Button>
              
              {/* PWA Install Button */}
              {!isInstalled && (
                <Button
                  variant="outline"
                  size="xl"
                  onClick={handleInstallClick}
                  className="border-white text-white hover:bg-white hover:text-dark group w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Installera Appen
                </Button>
              )}
              
              {/* Show installed status */}
              {isInstalled && (
                <div className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg inline-flex items-center shadow-lg">
                  <span className="mr-2">✅</span>
                  App Installerad
                </div>
              )}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            className="border-t border-white/20 pt-6 sm:pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <button
                onClick={openPrivacyPolicy}
                className="flex items-center text-gray-400 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Integritetspolicy
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </button>
              <a
                href="mailto:info@klippcenter-jkpg.se?subject=GDPR%20Förfrågan"
                className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm sm:text-base break-words"
              >
                GDPR-förfrågningar
              </a>
              <a
                href="tel:036712300"
                className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
              >
                Kundservice
              </a>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-400 flex items-center justify-center text-sm sm:text-base">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-500" />
                <span className="break-words">© {new Date().getFullYear()} KLIPPCENTER | JKPG. Alla rättigheter förbehållna.</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm break-words">
                Professionell frisörsalong i Jönköping | Barnarpsgatan 3 | 036-712 300
              </p>
              <div className="flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-yellow-500" />
                4.9/5 baserat på 150+ recensioner
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom padding for mobile navigation */}
        <div className="lg:hidden h-16"></div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
    </>
  );
};

export default PremiumFooter;