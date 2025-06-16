import React, { useState, useEffect } from 'react';
import { Scissors, Instagram, Facebook, Phone, Mail, MapPin, Download, Shield } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';

const Footer = () => {
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
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: #10b981;
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          z-index: 9999;
          font-family: Inter, sans-serif;
          font-weight: 500;
          animation: slideIn 0.3s ease-out;
        ">
          ✅ App installerad! Hitta den på din hemskärm.
        </div>
        <style>
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        </style>
      `;
      document.body.appendChild(successMsg);
      
      setTimeout(() => {
        if (successMsg.parentNode) {
          successMsg.remove();
        }
      }, 5000);
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
      // Show fallback instructions
      const instructions = 'Installera appen manuellt:\n\n1. Tryck på menyknappen i din webbläsare\n2. Välj "Lägg till på startskärmen"\n3. Följ instruktionerna';
      alert(instructions);
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
      <footer className="bg-black text-white">
        {/* PWA Install Banner - Only show if not installed and install prompt is available */}
        {showInstallButton && !isInstalled && (
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl">
              <div className="flex items-center text-center sm:text-left">
                <Download className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">📱 Installera vår app för snabbare bokning och offline-tillgång!</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Installera Nu
                </button>
                <button
                  onClick={() => setShowInstallButton(false)}
                  className="bg-transparent border border-black text-black px-3 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300 text-sm"
                >
                  Senare
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
          {/* Main Footer Content - Centered Layout */}
          <div className="text-center mb-12">
            {/* Brand Section */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src="/Logo.jpg" alt="KLIPPCENTER | JKPG logotyp" className="w-12 h-12 md:w-16 md:h-16 rounded-lg" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">KLIPPCENTER | JKPG</h2>
                <p className="text-gray-400 text-sm">En frisör mitt i Jönköping</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              Professionell frisörsalong som kombinerar traditionellt hantverk med modern stil. 
              Vi skapar den perfekta looken för dig på Barnarpsgatan 3 i Jönköping.
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center space-x-4 mb-8">
              <a 
                href="https://www.instagram.com/klippcenter_jkpg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-500 p-3 md:p-4 rounded-full transition-colors duration-300"
                aria-label="Följ oss på Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a 
                href="https://www.facebook.com/klippcenter?locale=sv_SE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-500 p-3 md:p-4 rounded-full transition-colors duration-300"
                aria-label="Följ oss på Facebook"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Footer Grid - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Snabblänkar</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('hem')}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    Hem
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('om-oss')}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    Om Oss
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('tjanster')}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    Tjänster
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('galleri')}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    Galleri
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Kontakt</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex flex-col items-center">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 mb-2 text-blue-400" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">Barnarpsgatan 3</p>
                    <p className="text-gray-300 text-sm md:text-base">553 16 Jönköping</p>
                  </div>
                </li>
                <li className="flex flex-col items-center">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mb-2 text-blue-400" />
                  <a 
                    href="tel:036712300" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    036-712 300
                  </a>
                </li>
                <li className="flex flex-col items-center">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mb-2 text-blue-400" />
                  <a 
                    href="mailto:info@klippcenter-jkpg.se" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base break-all"
                  >
                    info@klippcenter-jkpg.se
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Öppettider</h3>
              <div className="space-y-2 text-sm md:text-base">
                <div>
                  <p className="text-gray-300">Måndag - Fredag</p>
                  <p className="text-blue-400 font-semibold">08:00 - 17:00-20:00</p>
                </div>
                <div>
                  <p className="text-gray-300">Lönelördagen</p>
                  <p className="text-blue-400 font-semibold">09:00 - 15:00</p>
                </div>
                <div>
                  <p className="text-gray-300">Söndag</p>
                  <p className="text-red-400 font-semibold">Stängt</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Side by Side Buttons */}
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('tjanster')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Scissors className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Boka Tid Nu
              </button>
              
              {/* PWA Install Button - Always visible if not installed */}
              {!isInstalled && (
                <button
                  onClick={handleInstallClick}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center text-base md:text-lg border border-gray-600 hover:border-blue-500"
                  title="Installera appen för snabbare åtkomst och offline-funktioner"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Installera Appen
                </button>
              )}
              
              {/* Show installed status */}
              {isInstalled && (
                <div className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg inline-flex items-center">
                  <span className="mr-2">✅</span>
                  App Installerad
                </div>
              )}
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
              >
                <Shield className="w-4 h-4 mr-2" />
                Integritetspolicy
              </button>
              <span className="hidden sm:block text-gray-600">•</span>
              <a
                href="mailto:info@klippcenter-jkpg.se?subject=GDPR%20Förfrågan"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
              >
                GDPR-förfrågningar
              </a>
              <span className="hidden sm:block text-gray-600">•</span>
              <a
                href="tel:036712300"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
              >
                Kundservice
              </a>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base mb-2">
              © {new Date().getFullYear()} KLIPPCENTER | JKPG. Alla rättigheter förbehållna.
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Professionell frisörsalong i Jönköping | Barnarpsgatan 3 | 036-712 300
            </p>
          </div>
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

export default Footer;