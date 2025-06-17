'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Scissors, Calendar, Phone, Home, Users, Camera, Heart, Sparkles } from 'lucide-react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScrollLock = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScrollLock as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScrollLock as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm py-2 md:py-3 lg:py-4' : 'bg-transparent py-3 md:py-4 lg:py-6'
      }`}>
        <div className="w-full px-3 md:px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
              <Scissors className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-white">
              <span className="font-bold text-sm md:text-lg lg:text-xl block leading-tight">KLIPPCENTER</span>
              <span className="text-xs md:text-sm text-primary font-medium">| JKPG</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('hem')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Hem
            </button>
            <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Om Oss
            </button>
            <button onClick={() => scrollToSection('frisor')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Våra Frisörer
            </button>
            <button onClick={() => scrollToSection('behandlingar')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Behandlingar
            </button>
            <button onClick={() => scrollToSection('galleri')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Galleri
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Kontakt
            </button>
            <button 
              onClick={() => scrollToSection('behandlingar')}
              className="bg-primary hover:bg-secondary text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
            >
              Boka Tid
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-sm">
            <div className="w-full px-3 md:px-4 py-4 md:py-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <button 
                  onClick={() => scrollToSection('hem')} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                >
                  <Home className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                  <span className="font-medium text-xs md:text-sm">Hem</span>
                </button>
                <button 
                  onClick={() => scrollToSection('om-oss')} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                >
                  <Users className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                  <span className="font-medium text-xs md:text-sm">Om Oss</span>
                </button>
                <button 
                  onClick={() => scrollToSection('frisor')} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                  <span className="font-medium text-xs md:text-sm">Frisörer</span>
                </button>
                <button 
                  onClick={() => scrollToSection('galleri')} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors p-3 md:p-4 rounded-lg hover:bg-white/10"
                >
                  <Camera className="w-4 h-4 md:w-5 md:h-5 mb-1 md:mb-2" />
                  <span className="font-medium text-xs md:text-sm">Galleri</span>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <button 
                  onClick={() => scrollToSection('behandlingar')}
                  className="flex flex-col items-center bg-primary hover:bg-secondary text-white p-3 md:p-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm">Boka Tid</span>
                </button>
                <button 
                  onClick={callPhone}
                  className="flex flex-col items-center bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm">Ring Oss</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div
        ref={sectionRef}
        className='transition-colors duration-700 ease-in-out overflow-x-hidden w-full'
      >
        <section className='relative flex flex-col items-center justify-start min-h-[100dvh] w-full'>
          <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
            <motion.div
              className='absolute inset-0 z-0 h-full w-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <img
                src={bgImageSrc}
                alt='Background'
                className='w-full h-full object-cover object-center'
              />
              <div className='absolute inset-0 bg-black/10' />
            </motion.div>

            <div className='w-full flex flex-col items-center justify-start relative z-10'>
              <div id="hem" className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
                <div
                  className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl'
                  style={{
                    width: `${mediaWidth}px`,
                    height: `${mediaHeight}px`,
                    maxWidth: '95vw',
                    maxHeight: '85vh',
                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {mediaType === 'video' ? (
                    mediaSrc.includes('youtube.com') ? (
                      <div className='relative w-full h-full pointer-events-none'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={
                            mediaSrc.includes('embed')
                              ? mediaSrc +
                                (mediaSrc.includes('?') ? '&' : '?') +
                                'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                              : mediaSrc.replace('watch?v=', 'embed/') +
                                '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                                mediaSrc.split('v=')[1]
                          }
                          className='w-full h-full rounded-xl'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>

                        <motion.div
                          className='absolute inset-0 bg-black/30 rounded-xl'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    ) : (
                      <div className='relative w-full h-full pointer-events-none'>
                        <video
                          src={mediaSrc}
                          poster={posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload='auto'
                          className='w-full h-full object-cover rounded-xl'
                          controls={false}
                          disablePictureInPicture
                          disableRemotePlayback
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>

                        <motion.div
                          className='absolute inset-0 bg-black/30 rounded-xl'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    )
                  ) : (
                    <div className='relative w-full h-full'>
                      <img
                        src={mediaSrc}
                        alt={title || 'Media content'}
                        className='w-full h-full object-cover rounded-xl'
                      />

                      <motion.div
                        className='absolute inset-0 bg-black/50 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )}

                  <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                    {date && (
                      <p
                        className='text-2xl text-blue-200'
                        style={{ transform: `translateX(-${textTranslateX}vw)` }}
                      >
                        {date}
                      </p>
                    )}
                    {scrollToExpand && (
                      <p
                        className='text-blue-200 font-medium text-center'
                        style={{ transform: `translateX(${textTranslateX}vw)` }}
                      >
                        {scrollToExpand}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                    textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  }`}
                >
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200 transition-none'
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {firstWord}
                  </motion.h2>
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-200 transition-none'
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </motion.h2>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                  <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <motion.section
                className='flex flex-col w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            </div>
          </div>
        </section>

        {/* Bottom Navigation for Mobile/Tablet - PWA Style */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-sm border-t border-gray-800 z-40">
          <div className="grid grid-cols-5 h-14 md:h-16">
            <button 
              onClick={() => scrollToSection('hem')}
              className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span className="text-xs font-medium">Hem</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('frisor')}
              className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
            >
              <Users className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span className="text-xs font-medium">Team</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('behandlingar')}
              className="flex flex-col items-center justify-center bg-primary text-white hover:bg-secondary transition-colors duration-300 relative"
            >
              <div className="absolute -top-1 md:-top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <span className="text-xs font-bold mt-1 md:mt-2">Boka</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('galleri')}
              className="flex flex-col items-center justify-center text-white hover:text-primary transition-colors duration-300 active:bg-white/10"
            >
              <Camera className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span className="text-xs font-medium">Galleri</span>
            </button>
            
            <button 
              onClick={callPhone}
              className="flex flex-col items-center justify-center text-white hover:text-green-400 transition-colors duration-300 active:bg-white/10"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mb-1" />
              <span className="text-xs font-medium">Ring</span>
            </button>
          </div>
        </div>

        {/* Add bottom padding for mobile to account for bottom navigation */}
        <div className="lg:hidden h-14 md:h-16"></div>
      </div>
    </>
  );
};

export default ScrollExpandMedia;