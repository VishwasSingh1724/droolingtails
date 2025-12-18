
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BoneIcon, PawIcon } from './Icons';

const TESTIMONIALS = [
  {
    id: 1,
    petName: 'BRUNO',
    ownerName: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop',
    text: "The custom cake for Bruno's birthday was absolutely amazing! He loved every bite and the presentation was beautiful.",
    rating: 5,
  },
  {
    id: 2,
    petName: 'BELLA',
    ownerName: 'Rahul Mehta',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
    text: "Best pet treats in Mumbai! Bella goes crazy for the peanut butter cookies. Highly recommend Drooling Tails!",
    rating: 5,
  },
  {
    id: 3,
    petName: 'MAX',
    ownerName: 'Anjali Desai',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop',
    text: "The premium hamper was perfect for Max's adoption anniversary. Quality products and fast delivery in Kandivali!",
    rating: 5,
  },
  {
    id: 4,
    petName: 'COCO',
    ownerName: 'Amit Varma',
    image: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=1362&auto=format&fit=crop',
    text: "Coco usually has a sensitive stomach, but these treats were gentle and she absolutely adored them.",
    rating: 5,
  },
  {
    id: 5,
    petName: 'LUNA',
    ownerName: 'Siddharth R.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
    text: "Luna's tail didn't stop wagging! The treat box is such a great idea. We love the variety.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  
  // Create a triple-extended array for infinite looping
  const extendedItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const totalItems = TESTIMONIALS.length;
  
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive update for visible cards
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // Seamless jump back to middle set
    if (currentIndex >= totalItems * 2) {
      setCurrentIndex(currentIndex - totalItems);
    }
    // Seamless jump forward to middle set
    else if (currentIndex < totalItems) {
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  const itemWidthPercent = 100 / visibleItems;

  return (
    <section className="relative w-full pt-32 pb-48 bg-white overflow-hidden">
      {/* Wave Transition Header */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
            className="relative block w-full h-[100px] md:h-[150px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path 
                fill="#fffcf0" 
                fillOpacity="1" 
                d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#0d5f73] brand-font mb-4">
            Happy <span className="text-[#ff5454]">Paws</span>
          </h2>
          <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto flex items-center justify-center gap-2">
             Don't just take our word for it - hear from our happy customers! <BoneIcon className="w-6 h-6 text-[#dba135] fill-[#dba135]" />
          </p>
        </div>

        {/* Carousel Outer Container */}
        <div className="relative mx-auto max-w-[1400px]">
          
          {/* Navigation Controls: Side Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white border-4 border-[#0d5f73] p-3 rounded-full text-[#0d5f73] hover:bg-[#0d5f73] hover:text-white transition-all shadow-xl active:scale-90 transform -translate-x-2 md:-translate-x-6 lg:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white border-4 border-[#0d5f73] p-3 rounded-full text-[#0d5f73] hover:bg-[#0d5f73] hover:text-white transition-all shadow-xl active:scale-90 transform translate-x-2 md:translate-x-6 lg:translate-x-12"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden py-12">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]' : 'transition-none'}`}
              onTransitionEnd={handleTransitionEnd}
              style={{ 
                transform: `translateX(-${currentIndex * itemWidthPercent}%)` 
              }}
            >
              {extendedItems.map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  className="flex-none w-full lg:w-1/3 px-4"
                >
                  {/* ORIGINAL CARD DESIGN */}
                  <div className="relative mt-4 ml-8 md:ml-12 group">
                    {/* Popout Image Pill */}
                    <div className="absolute -left-10 md:-left-16 top-10 w-32 h-44 md:w-40 md:h-52 z-20">
                      <div className="relative w-full h-full transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                           <img 
                              src={t.image} 
                              alt={t.petName} 
                              className="w-full h-full object-cover rounded-[100px] border-4 border-white shadow-lg"
                          />
                          <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md z-30 transform rotate-12 border border-gray-100">
                              <PawIcon className="w-6 h-6 text-[#0d5f73] fill-[#0d5f73]" />
                          </div>
                      </div>
                    </div>

                    {/* Neo-Brutalist Card Body */}
                    <div className="bg-white border-2 border-black rounded-[2rem] p-6 pl-24 md:pl-32 shadow-[8px_8px_0px_0px_rgba(13,95,115,1)] flex flex-col min-h-[350px] transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_rgba(13,95,115,1)] group-hover:-translate-y-1">
                      <div className="mb-4">
                          <h3 className="text-2xl font-black text-[#eb2f5f] brand-font uppercase tracking-wide leading-none">
                              {t.petName}
                          </h3>
                          <p className="text-sm font-bold text-[#0d5f73] mt-1">
                              Pet parent- {t.ownerName}
                          </p>
                          <div className="flex gap-1 mt-1">
                               {[...Array(t.rating)].map((_, i) => (
                                  <BoneIcon key={i} className="w-4 h-4 text-[#dba135] fill-[#dba135]" />
                               ))}
                          </div>
                      </div>

                      <div className="w-full h-0.5 bg-gray-200 mb-4 rounded-full"></div>

                      <p className="text-gray-600 font-medium text-base leading-relaxed italic flex-grow">
                          "{t.text}"
                      </p>
                      
                      <div className="flex gap-1.5 mt-6 opacity-20">
                          <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
