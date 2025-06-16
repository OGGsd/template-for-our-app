import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Anna Lindberg",
      rating: 5,
      text: "Fantastisk service på KLIPPCENTER! Lotta är verkligen professionell och lyssnar på vad man vill ha. Har gått hit i över två år och har aldrig blivit besviken. Rekommenderar starkt!",
      service: "Damklippning",
      date: "1 vecka sedan"
    },
    {
      name: "Maria Johansson",
      rating: 5,
      text: "Bästa frisörsalongen i Jönköping! Caroline förstod exakt vad jag ville ha med min färgning och resultatet blev bättre än jag hade förväntat mig. Kommer definitivt tillbaka!",
      service: "Färgning & Slingor",
      date: "2 veckor sedan"
    },
    {
      name: "Sofia Andersson",
      rating: 5,
      text: "Emelie är grym på blonda hår! Hon fick mitt hår att se så naturligt och vackert ut. Professionell service från början till slut. Perfekt läge på Barnarpsgatan!",
      service: "Blond färgning",
      date: "1 månad sedan"
    },
    {
      name: "Emma Petersson",
      rating: 5,
      text: "Tog med min dotter för barnklippning och personalen var så tålmodig och snäll. Hon var inte rädd alls och resultatet blev perfekt! Tack KLIPPCENTER!",
      service: "Barnklippning",
      date: "3 veckor sedan"
    },
    {
      name: "Linda Karlsson",
      rating: 5,
      text: "Annelie är fantastisk! Hon håller sig alltid uppdaterad med nya tekniker och produkter. Centralt beläget och fantastisk service. Rekommenderar starkt!",
      service: "Klippning & Styling",
      date: "2 månader sedan"
    },
    {
      name: "Camilla Nilsson",
      rating: 5,
      text: "Så nöjd med min nya frisyr! Personalen är kunnig och salongen har en så mysig atmosfär. Helhetskoncept med kläder och accessoarer är ett plus. Rekommenderar alla i Jönköping!",
      service: "Damklippning",
      date: "1 månad sedan"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${
          index < rating ? 'text-primary fill-current' : 'text-gray-300'
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
    <section className="py-12 md:py-16 lg:py-20 bg-white pb-16 md:pb-20 lg:pb-16">
      <div className="container mx-auto px-3 md:px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark mb-3 md:mb-4 lg:mb-6">
            Vad Våra Kunder Säger
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-2 md:px-4">
            Läs vad våra nöjda kunder tycker om vår service. Din tillfredsställelse 
            är vår högsta prioritet.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-soft-green rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto text-center shadow-lg border border-soft-green">
          <div className="flex flex-col md:flex-row items-center justify-center mb-3 md:mb-4">
            <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-dark mb-2 md:mb-0 md:mr-4">4.9</span>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-1 md:mb-2">
                {renderStars(5)}
              </div>
              <p className="text-tertiary text-xs md:text-sm lg:text-base">Baserat på 150+ recensioner</p>
            </div>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-tertiary mb-4 md:mb-6">
            Över 98% av våra kunder rekommenderar oss till vänner och familj
          </p>
          
          {/* Review Platform Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={openGoogleReviews}
              className="bg-primary hover:bg-secondary text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-xs md:text-sm lg:text-base"
            >
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Läs Google Reviews
            </button>
            <button
              onClick={openBokaDirectReviews}
              className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-xs md:text-sm lg:text-base"
            >
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Besök Vår Bokningssida
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-soft-green">
              <div className="flex items-center mb-3 md:mb-4">
                <Quote className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary mr-2 md:mr-3 flex-shrink-0" />
                <div className="flex items-center">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <p className="text-tertiary mb-3 md:mb-4 lg:mb-6 leading-relaxed italic text-xs md:text-sm lg:text-base">
                "{review.text}"
              </p>
              
              <div className="border-t border-soft-green pt-3 md:pt-4">
                <div className="flex justify-between items-start">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-dark text-xs md:text-sm lg:text-base">{review.name}</h4>
                    <p className="text-xs md:text-sm text-primary">{review.service}</p>
                  </div>
                  <span className="text-xs md:text-sm text-tertiary ml-2 flex-shrink-0">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="bg-dark rounded-xl md:rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Bli Vår Nästa Nöjda Kund</h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 md:mb-6">
              Upplev skillnaden med professionell service och exceptionell kvalitet
            </p>
            <button 
              onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-secondary text-white px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
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