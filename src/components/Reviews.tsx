import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Marcus Johansson",
      rating: 5,
      text: "Fantastisk service på KLIPPCENTER! Personalen är verkligen professionell och lyssnar på vad man vill ha. Har gått hit i över ett år och har aldrig blivit besviken. Rekommenderar starkt!",
      service: "Herrklippning",
      date: "1 vecka sedan"
    },
    {
      name: "Anna Lindberg",
      rating: 5,
      text: "Bästa frisörsalongen i Jönköping! De förstod exakt vad jag ville ha och resultatet blev bättre än jag hade förväntat mig. Kommer definitivt tillbaka!",
      service: "Damklippning",
      date: "2 veckor sedan"
    },
    {
      name: "Erik Nilsson",
      rating: 5,
      text: "Professionell service från början till slut. Bokningssystemet är smidigt och kvaliteten på klippningen är alltid toppklass. Perfekt läge på Barnarpsgatan!",
      service: "Herrklippning",
      date: "1 månad sedan"
    },
    {
      name: "Lisa Andersson",
      rating: 5,
      text: "Tog med min son för barnklippning och personalen var så tålmodig och snäll. Han var inte rädd alls och resultatet blev perfekt! Tack KLIPPCENTER!",
      service: "Barnklippning",
      date: "3 veckor sedan"
    },
    {
      name: "David Karlsson",
      rating: 5,
      text: "Centralt beläget och fantastisk service. Personalen är kunnig och salongen har en så professionell atmosfär. Rekommenderar starkt!",
      service: "Herrklippning",
      date: "2 månader sedan"
    },
    {
      name: "Emma Petersson",
      rating: 5,
      text: "Så nöjd med min nya frisyr! Personalen är kunnig och salongen har en så mysig atmosfär. Rekommenderar starkt alla i Jönköping!",
      service: "Damklippning",
      date: "1 månad sedan"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          index < rating ? 'text-blue-400 fill-current' : 'text-gray-300'
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

  return (
    <section className="py-16 md:py-20 bg-gray-50 pb-20 lg:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Vad Våra Kunder Säger
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Läs vad våra nöjda kunder tycker om vår service. Din tillfredsställelse 
            är vår högsta prioritet.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 md:mb-12 max-w-2xl mx-auto text-center shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4">
            <span className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 md:mb-0 md:mr-4">4.8</span>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600 text-sm md:text-base">Baserat på 200+ recensioner</p>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Över 95% av våra kunder rekommenderar oss till vänner och familj
          </p>
          
          {/* Review Platform Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openGoogleReviews}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-sm md:text-base"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Läs Google Reviews
            </button>
            <button
              onClick={openBokaDirectReviews}
              className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-sm md:text-base"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Besök Vår Bokningssida
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mr-3 flex-shrink-0" />
                <div className="flex items-center">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base">
                "{review.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</h4>
                    <p className="text-xs md:text-sm text-blue-600">{review.service}</p>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 ml-2 flex-shrink-0">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-black rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Bli Vår Nästa Nöjda Kund</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Upplev skillnaden med professionell service och exceptionell kvalitet
            </p>
            <button 
              onClick={() => document.getElementById('tjanster')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Boka Din Tid Nu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;