import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/467557892_1109769721157662_1599765407150624323_n-yozQket8AfqAoLwNGGaA111ii9AjwJ.jpg",
      alt: "Professionell damklippning - KLIPPCENTER | JKPG expertarbete"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/467693322_1109769724490995_6501380672227294028_n-vgXAzdAKodC0wn0agNewH4rLisw669.jpg",
      alt: "Modern styling och klippning - professionell frisörtjänst"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/470049398_1127609459373688_4444315445942757206_n-8bWahkpMkpnZ3Ar1CgeUFDOR4oVBNH.jpg",
      alt: "Elegant uppsättning och styling - KLIPPCENTER | JKPG"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/487477104_1219691720165461_1040846155795453199_n-ek9jFR0hmgLy4Sb75yCUpiXiHURXLz.jpg",
      alt: "Professionell färgning och klippning - expertresultat"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/487820992_1218722283595738_2381392643848690262_n-4GQgY2URDu400Hp6VBD4WblUJh5lhf.jpg",
      alt: "Modern damfrisyr - KLIPPCENTER | JKPG professionella tjänster"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/487877965_1219691943498772_779446924058318466_n-7lDEcOis785ismiper5lvPOwmaT8wk.jpg",
      alt: "Klassisk klippning och styling - professionell kvalitet"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/488074617_1218721910262442_6788717672047599204_n-ePS3yXg5p42xe0qpUlJ0bUqXkD2Buo.jpg",
      alt: "Elegant frisyr och professionell styling"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/488162243_1219223146878985_1494249517233060685_n-N09GovvVGEOL3gqcGj60Hm3szszOai.jpg",
      alt: "Modern klippning - KLIPPCENTER | JKPG expertis"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/488505260_1219223180212315_4515604660057616653_n-1VNqlv3F3hFM3BXWMJ1SPrTuiKT2ly.jpg",
      alt: "Professionell damklippning och färgning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/489433521_1224223603045606_2025676566452142179_n-qrKNPsqTLudRpQYlgqig7f1Rz6CnW5.jpg",
      alt: "Elegant styling och professionell frisörtjänst - KLIPPCENTER | JKPG"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galleri" className="py-12 md:py-16 lg:py-20 bg-light-green pb-16 md:pb-20 lg:pb-16">
      <div className="container mx-auto px-3 md:px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark mb-3 md:mb-4 lg:mb-6">
            Vårt Arbete
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed px-2 md:px-4">
            Se exempel på vårt professionella hantverk. Varje klippning är unikt anpassad 
            efter kundens önskemål och ansiktsform. Från klassiska stilar till moderna trends.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square border border-soft-green"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Optimized for 80% size */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 md:p-4">
            <div className="relative w-[95%] h-[95%] md:w-[80%] md:h-[80%] max-w-4xl max-h-4xl">
              <button
                onClick={closeModal}
                className="absolute top-2 md:top-4 right-2 md:right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Stäng galleri"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Föregående bild"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
                aria-label="Nästa bild"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </button>
              
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white bg-black/50 rounded-lg p-2 md:p-3">
                <p className="font-semibold text-xs md:text-sm lg:text-lg">KLIPPCENTER | JKPG</p>
                <p className="text-xs md:text-sm text-gray-200 mt-1">
                  {selectedImage + 1} av {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="bg-dark rounded-xl md:rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Vill Du Ha En Liknande Frisyr?</h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 md:mb-6">
              Visa oss din favoritbild från galleriet när du bokar din tid, så hjälper vi dig att skapa din drömfrisyr
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

export default Gallery;