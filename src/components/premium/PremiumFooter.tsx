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
            className="bg-gradient-to-r from-primary to-secondary text-white py-4 relative z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full px-4 lg:px-6 max-w-[98%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-center sm:text-left">
                <Download className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="font-semibold text-lg">📱 Installera vår app för snabbare bokning och offline-tillgång!</span>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleInstallClick}
                  className="bg-white text-dark hover:bg-gray-100 border-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Installera Nu
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setShowInstallButton(false)}
                  className="text-white hover:bg-white/10"
                >
                  Senare
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="w-full px-4 lg:px-6 max-w-[98%] mx-auto py-16 relative z-10">
          {/* Main Footer Content */}
          <div className="text-center mb-16">
            {/* Brand Section */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">KLIPPCENTER | JKPG</h2>
                  <p className="text-gray-400">En frisör mitt i Jönköping</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto text-lg"
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
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://www.instagram.com/klippcenter_jkpg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/klippcenter?locale=sv_SE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Footer Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quick Links */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6 text-white">Snabblänkar</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Hem', id: 'hem' },
                    { name: 'Om Oss', id: 'om-oss' },
                    { name: 'Behandlingar', id: 'behandlingar' },
                    { name: 'Galleri', id: 'galleri' }
                  ].map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-gray-300 hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6 text-white">Kontakt</h3>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 mb-2 text-primary" />
                    <div>
                      <p className="text-gray-300">Barnarpsgatan 3</p>
                      <p className="text-gray-300">553 16 Jönköping</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 mb-2 text-primary" />
                    <a 
                      href="tel:036712300" 
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      036-712 300
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 mb-2 text-primary" />
                    <a 
                      href="mailto:info@klippcenter-jkpg.se" 
                      className="text-gray-300 hover:text-primary transition-colors duration-300 break-all"
                    >
                      info@klippcenter-jkpg.se
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6 text-white">Öppettider</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300">Måndag - Fredag</p>
                    <p className="text-primary font-bold text-lg">08:00 - 17:00-20:00</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Lönelördagen</p>
                    <p className="text-primary font-bold text-lg">09:00 - 15:00</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Söndag</p>
                    <p className="text-red-400 font-bold text-lg">Stängt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="border-t border-white/20 pt-12 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="premium"
                size="xl"
                onClick={() => scrollToSection('behandlingar')}
                className="group"
              >
                <Scissors className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Boka Tid Nu
              </Button>
              
              {/* PWA Install Button */}
              {!isInstalled && (
                <Button
                  variant="outline"
                  size="xl"
                  onClick={handleInstallClick}
                  className="border-white text-white hover:bg-white hover:text-dark group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Installera Appen
                </Button>
              )}
              
              {/* Show installed status */}
              {isInstalled && (
                <div className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-lg">
                  <span className="mr-2">✅</span>
                  App Installerad
                </div>
              )}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            className="border-t border-white/20 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Shield className="w-4 h-4 mr-2" />
                Integritetspolicy
              </button>
              <a
                href="mailto:info@klippcenter-jkpg.se?subject=GDPR%20Förfrågan"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                GDPR-förfrågningar
              </a>
              <a
                href="tel:036712300"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Kundservice
              </a>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center justify-center">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                © {new Date().getFullYear()} KLIPPCENTER | JKPG. Alla rättigheter förbehållna.
              </p>
              <p className="text-gray-500 text-sm">
                Professionell frisörsalong i Jönköping | Barnarpsgatan 3 | 036-712 300
              </p>
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
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