import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Users, Phone, Mail, MapPin, Calendar, Camera, Bell, Smartphone, FileText, Database, Settings, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const PrivacyPolicyPage = () => {
  const goBack = () => {
    window.history.back();
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-green to-soft-green">
      {/* Header */}
      <motion.header 
        className="bg-white/90 backdrop-blur-sm border-b border-soft-green sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full px-2 sm:px-4 lg:px-6 max-w-[98%] mx-auto py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={goBack}
              className="flex items-center text-dark hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Tillbaka</span>
            </Button>
            
            <div className="flex items-center">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-dark break-words">
                Integritetspolicy
              </h1>
            </div>
            
            <div className="text-xs sm:text-sm text-tertiary">
              Uppdaterad: {new Date().toLocaleDateString('sv-SE')}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.main 
        className="w-full px-2 sm:px-4 lg:px-6 max-w-[98%] mx-auto py-6 sm:py-8 md:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* Introduction */}
          <motion.section variants={itemVariants}>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark">Översikt</h2>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-tertiary leading-relaxed break-words">
                    KLIPPCENTER | JKPG respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
                    Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar din information 
                    när du använder vår webbplats, mobilapp eller besöker vår salong.
                  </p>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 sm:p-6 border-l-4 border-primary">
                    <p className="text-xs sm:text-sm text-dark font-medium break-words">
                      <strong>Kort sammanfattning:</strong> Vi samlar endast in nödvändig information för att tillhandahålla 
                      våra tjänster, delar aldrig dina uppgifter med tredje part för marknadsföring, och du har full kontroll 
                      över dina data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Data Collection */}
          <motion.section variants={itemVariants}>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark">Vilka Uppgifter Vi Samlar In</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-dark flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                      Personuppgifter
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-tertiary">
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">Namn och kontaktuppgifter (telefon, e-post)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">Bokningsinformation och behandlingshistorik</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">Preferenser och specialbehov</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">Betalningsinformation (hanteras säkert)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-dark flex items-center">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                      Teknisk Information
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-tertiary">
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">IP-adress och enhetstyp</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">Webbläsarinformation och cookies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">Användningsstatistik för förbättring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="break-words">PWA-installationsdata</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* How We Use Data */}
          <motion.section variants={itemVariants}>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark">Hur Vi Använder Dina Uppgifter</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      icon: Calendar,
                      title: "Bokningar",
                      desc: "Hantera dina tidsboknningar och påminnelser",
                      color: "from-blue-500 to-cyan-600"
                    },
                    {
                      icon: Phone,
                      title: "Kommunikation",
                      desc: "Kontakta dig angående dina besök",
                      color: "from-green-500 to-emerald-600"
                    },
                    {
                      icon: FileText,
                      title: "Behandlingshistorik",
                      desc: "Föra register över dina behandlingar",
                      color: "from-purple-500 to-indigo-600"
                    },
                    {
                      icon: Bell,
                      title: "Påminnelser",
                      desc: "Skicka bokningspåminnelser via SMS/e-post",
                      color: "from-orange-500 to-red-600"
                    },
                    {
                      icon: Camera,
                      title: "Dokumentation",
                      desc: "Före/efter-bilder (endast med ditt samtycke)",
                      color: "from-pink-500 to-rose-600"
                    },
                    {
                      icon: Shield,
                      title: "Säkerhet",
                      desc: "Skydda mot bedrägerier och missbruk",
                      color: "from-gray-500 to-slate-600"
                    }
                  ].map((purpose, index) => (
                    <motion.div
                      key={purpose.title}
                      className="bg-gradient-to-br from-soft-green to-light-green p-4 sm:p-6 rounded-xl border border-primary/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${purpose.color} rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                        <purpose.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-dark mb-2 text-sm sm:text-base">{purpose.title}</h3>
                      <p className="text-tertiary text-xs sm:text-sm break-words">{purpose.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Your Rights */}
          <motion.section variants={itemVariants}>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark">Dina Rättigheter</h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-tertiary leading-relaxed break-words">
                    Enligt GDPR har du följande rättigheter gällande dina personuppgifter:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      {
                        title: "Rätt till information",
                        desc: "Du har rätt att veta vilka uppgifter vi har om dig"
                      },
                      {
                        title: "Rätt till rättelse",
                        desc: "Du kan begära att vi korrigerar felaktiga uppgifter"
                      },
                      {
                        title: "Rätt till radering",
                        desc: "Du kan begära att vi raderar dina personuppgifter"
                      },
                      {
                        title: "Rätt till begränsning",
                        desc: "Du kan begära att vi begränsar behandlingen"
                      },
                      {
                        title: "Rätt till dataportabilitet",
                        desc: "Du kan få ut dina uppgifter i ett strukturerat format"
                      },
                      {
                        title: "Rätt att invända",
                        desc: "Du kan invända mot viss behandling av dina uppgifter"
                      }
                    ].map((right, index) => (
                      <div key={index} className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-xl border border-primary/20">
                        <h3 className="font-bold text-dark mb-2 text-sm sm:text-base break-words">{right.title}</h3>
                        <p className="text-tertiary text-xs sm:text-sm break-words">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Data Security */}
          <motion.section variants={itemVariants}>
            <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8 text-white">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Datasäkerhet</h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                    Vi tar datasäkerhet på största allvar och använder branschstandarder för att skydda dina uppgifter:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      "SSL-kryptering för all dataöverföring",
                      "Säkra servrar med regelbundna säkerhetsuppdateringar",
                      "Begränsad åtkomst endast för auktoriserad personal",
                      "Regelbundna säkerhetskopior och återställningstester",
                      "Övervakning av obehörig åtkomst 24/7",
                      "GDPR-kompatibla rutiner och processer"
                    ].map((security, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300 break-words">{security}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Information */}
          <motion.section variants={itemVariants}>
            <Card className="bg-gradient-to-br from-primary to-secondary border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8 text-white">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2 sm:mr-3" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Kontakta Oss</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Dataskyddsombud</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white/80 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base break-all">info@klippcenter-jkpg.se</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white/80 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base">036-712 300</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white/80 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base break-words">Barnarpsgatan 3, 553 16 Jönköping</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Tillsynsmyndighet</h3>
                    <div className="space-y-1 sm:space-y-2 text-white/90">
                      <p className="font-medium text-sm sm:text-base">Integritetsskyddsmyndigheten (IMY)</p>
                      <p className="text-xs sm:text-sm break-words">Box 8114, 104 20 Stockholm</p>
                      <p className="text-xs sm:text-sm">Telefon: 08-657 61 00</p>
                      <p className="text-xs sm:text-sm break-all">E-post: imy@imy.se</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
                  <p className="text-xs sm:text-sm text-white/80 break-words">
                    Denna integritetspolicy uppdaterades senast: {new Date().toLocaleDateString('sv-SE')}. 
                    Vi förbehåller oss rätten att uppdatera denna policy vid behov. 
                    Väsentliga ändringar kommer att meddelas via e-post eller på vår webbplats.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Important Notice */}
          <motion.section variants={itemVariants}>
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 shadow-xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark mb-2 text-sm sm:text-base">Viktigt att Veta</h3>
                    <p className="text-xs sm:text-sm text-tertiary leading-relaxed break-words">
                      Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, 
                      tveka inte att kontakta oss. Vi strävar efter att svara på alla förfrågningar inom 30 dagar. 
                      För akuta ärenden, ring oss direkt på 036-712 300.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Back to Top */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <Button
              variant="premium"
              size="xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform rotate-90" />
              Tillbaka till Toppen
            </Button>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default PrivacyPolicyPage;