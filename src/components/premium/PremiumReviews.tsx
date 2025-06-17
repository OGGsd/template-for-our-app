import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ExternalLink, Heart, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumReviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reviews = [
    {
      name: "Anna Lindberg",
      rating: 5,
      text: "Fantastisk service på KLIPPCENTER! Lotta är verkligen professionell och lyssnar på vad man vill ha. Har gått hit i över två år och har aldrig blivit besviken. Rekommenderar starkt!",
      service: "Damklippning",
      date: "1 vecka sedan",
      avatar: "AL"
    },
    {
      name: "Maria Johansson",
      rating: 5,
      text: "Bästa frisörsalongen i Jönköping! Caroline förstod exakt vad jag ville ha med min färgning och resultatet blev bättre än jag hade förväntat mig. Kommer definitivt tillbaka!",
      service: "Färgning & Slingor",
      date: "2 veckor sedan",
      avatar: "MJ"
    },
    {
      name: "Sofia Andersson",
      rating: 5,
      text: "Emelie är grym på blonda hår! Hon fick mitt hår att se så naturligt och vackert ut. Professionell service från början till slut. Perfekt läge på Barnarpsgatan!",
      service: "Blond färgning",
      date: "1 månad sedan",
      avatar: "SA"
    },
    {
      name: "Emma Petersson",
      rating: 5,
      text: "Tog med min dotter för barnklippning och personalen var så tålmodig och snäll. Hon var inte rädd alls och resultatet blev perfekt! Tack KLIPPCENTER!",
      service: "Barnklippning",
      date: "3 veckor sedan",
      avatar: "EP"
    },
    {
      name: "Linda Karlsson",
      rating: 5,
      text: "Annelie är fantastisk! Hon håller sig alltid uppdaterad med nya tekniker och produkter. Centralt beläget och fantastisk service. Rekommenderar starkt!",
      service: "Klippning & Styling",
      date: "2 månader sedan",
      avatar: "LK"
    },
    {
      name: "Camilla Nilsson",
      rating: 5,
      text: "Så nöjd med min nya frisyr! Personalen är kunnig och salongen har en så mysig atmosfär. Helhetskoncept med kläder och accessoarer är ett plus. Rekommenderar alla i Jönköping!",
      service: "Damklippning",
      date: "1 månad sedan",
      avatar: "CN"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const openGoogleReviews = () => {
    window.open('https://www.google.com/search?q=KLIPPCENTER+JKPG+reviews', '_blank');
  };

  const openBokaDirectReviews = () => {
    window.open('https://cliento.com/business/klippcenter-i-jonkoping-ab-klippcenter/#service', '_blank');
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
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 lg:px-6 max-w-[98%] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full mb-6 shadow-xl">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent">
            Vad Våra Kunder Säger
          </h2>
          
          <p className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed">
            Läs vad våra nöjda kunder tycker om vår service. Din tillfredsställelse 
            är vår högsta prioritet.
          </p>
        </motion.div>

        {/* Overall Rating - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="flex flex-col lg:flex-row items-center justify-center mb-8">
                <div className="text-center lg:text-left mb-6 lg:mb-0 lg:mr-12">
                  <span className="text-6xl lg:text-8xl font-bold text-dark block">4.9</span>
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-tertiary">Baserat på 150+ recensioner</p>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="text-xl text-tertiary mb-6 max-w-md">
                    Över 98% av våra kunder rekommenderar oss till vänner och familj
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="salon"
                      onClick={openGoogleReviews}
                      className="group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Läs Google Reviews
                    </Button>
                    <Button
                      variant="outline"
                      onClick={openBokaDirectReviews}
                      className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Besök Vår Bokningssida
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reviews Grid - Full Width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <Quote className="w-6 h-6 text-primary opacity-50" />
                    </div>
                  </div>
                  
                  <p className="text-tertiary mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  
                  <div className="border-t border-soft-green pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-dark">{review.name}</h4>
                        <p className="text-sm text-primary font-medium">{review.service}</p>
                      </div>
                      <span className="text-xs text-tertiary">{review.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <Card className="bg-gradient-to-r from-dark to-gray-800 border-0 shadow-3xl">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Bli Vår Nästa Nöjda Kund</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Upplev skillnaden med professionell service och exceptionell kvalitet
              </p>
              <Button 
                variant="premium"
                size="xl"
                onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <ThumbsUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Boka Din Tid Nu
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumReviews;