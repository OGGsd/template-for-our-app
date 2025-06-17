import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Camera, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const PremiumGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/467557892_1109769721157662_1599765407150624323_n-yozQket8AfqAoLwNGGaA111ii9AjwJ.jpg",
      alt: "Professionell damklippning - KLIPPCENTER | JKPG expertarbete",
      category: "Damklippning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/467693322_1109769724490995_6501380672227294028_n-vgXAzdAKodC0wn0agNewH4rLisw669.jpg",
      alt: "Modern styling och klippning - professionell frisörtjänst",
      category: "Styling"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/470049398_1127609459373688_4444315445942757206_n-8bWahkpMkpnZ3Ar1CgeUFDOR4oVBNH.jpg",
      alt: "Elegant uppsättning och styling - KLIPPCENTER | JKPG",
      category: "Uppsättning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/487477104_1219691720165461_1040846155795453199_n-ek9jFR0hmgLy4Sb75yCUpiXiHURXLz.jpg",
      alt: "Professionell färgning och klippning - expertresultat",
      category: "Färgning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/487820992_1218722283595738_2381392643848690262_n-4GQgY2URDu400Hp6VBD4WblUJh5lhf.jpg",
      alt: "Modern damfrisyr - KLIPPCENTER | JKPG professionella tjänster",
      category: "Damklippning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/487877965_1219691943498772_779446924058318466_n-7lDEcOis785ismiper5lvPOwmaT8wk.jpg",
      alt: "Klassisk klippning och styling - professionell kvalitet",
      category: "Klippning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/488074617_1218721910262442_6788717672047599204_n-ePS3yXg5p42xe0qpUlJ0bUqXkD2Buo.jpg",
      alt: "Elegant frisyr och professionell styling",
      category: "Styling"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/488162243_1219223146878985_1494249517233060685_n-N09GovvVGEOL3gqcGj60Hm3szszOai.jpg",
      alt: "Modern klippning - KLIPPCENTER | JKPG expertis",
      category: "Klippning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/488505260_1219223180212315_4515604660057616653_n-1VNqlv3F3hFM3BXWMJ1SPrTuiKT2ly.jpg",
      alt: "Professionell damklippning och färgning",
      category: "Färgning"
    },
    {
      src: "https://mnep11uygvxnyj6a.public.blob.vercel-storage.com/rgtr/489433521_1224223603045606_2025676566452142179_n-qrKNPsqTLudRpQYlgqig7f1Rz6CnW5.jpg",
      alt: "Elegant styling och professionell frisörtjänst - KLIPPCENTER | JKPG",
      category: "Styling"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="galleri" className="py-20 lg:py-32 bg-gradient-to-br from-light-green to-soft-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-13.8-11.2-25-25-25S0 36.2 0 50s11.2 25 25 25 25-11.2 25-25zm25 0c0-13.8-11.2-25-25-25S25 36.2 25 50s11.2 25 25 25 25-11.2 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-xl">
            <Camera className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent">
            Vårt Arbete
          </h1>
          
          <p className="text-xl md:text-2xl text-tertiary max-w-4xl mx-auto leading-relaxed">
            Se exempel på vårt professionella hantverk. Varje klippning är unikt anpassad 
            efter kundens önskemål och ansiktsform. Från klassiska stilar till moderna trends.
          </p>
        </motion.div>

        {/* Gallery Grid - Full Width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-500 aspect-square"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-sm">{image.category}</p>
                  <p className="text-xs opacity-90">KLIPPCENTER | JKPG</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Vill Du Ha En Liknande Frisyr?</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Visa oss din favoritbild från galleriet när du bokar din tid, så hjälper vi dig att skapa din drömfrisyr
              </p>
              <Button 
                variant="premium"
                size="xl"
                onClick={() => document.getElementById('behandlingar')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Boka Din Tid Nu
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:bg-white/10 z-10 w-12 h-12"
              >
                <X className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 z-10 w-12 h-12"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 z-10 w-12 h-12"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
              
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-3xl"
              />
              
              <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <p className="font-bold text-lg">KLIPPCENTER | JKPG</p>
                <p className="text-sm opacity-90 mb-2">{galleryImages[selectedImage].category}</p>
                <p className="text-xs opacity-75">
                  {selectedImage + 1} av {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PremiumGallery;