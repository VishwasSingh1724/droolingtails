

import React, { useEffect, useRef, useState, useMemo } from "react";
import { BoneIcon, PawIcon } from "./Icons";
import { Star, Heart, Gift, Cloud } from "lucide-react";
import c1 from "@/assets/c1.jpeg";
import c2 from "@/assets/c2.jpeg";
import c3 from "@/assets/c3.jpeg";
import c4 from "@/assets/c4.jpeg";
import c5 from "@/assets/c5.jpeg";
import c6 from "@/assets/c6.jpeg";
import c7 from "@/assets/c7.jpeg";
import c8 from "@/assets/c8.jpeg";
import c9 from "@/assets/c9.png";
import c10 from "@/assets/c10.png";
import c11 from "@/assets/c11.png";
import c12 from "@/assets/c12.png";

type GalleryItemType = 'photo' | 'decoration';

interface GalleryItem {
  type: GalleryItemType;
  imageUrl?: string;
  title?: string;
  date?: string;
  rotation?: string;
  sticker?: string;
  icon?: React.ReactNode;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { 
    type: 'photo', 
    imageUrl: c1, 
    title: "Jojo", 
    date: "Sep 12", 
    rotation: "rotate-2", 
    sticker: "👑" 
  },
  { 
    type: 'photo', 
    imageUrl: c2, 
    title: "Cutie", 
    date: "Oct 04", 
    rotation: "-rotate-3", 
    sticker: "❤️" 
  },
  { 
    type: 'photo', 
    imageUrl: c3, 
    title: "Sweetie", 
    date: "Aug 22", 
    rotation: "rotate-1", 
    sticker: "🦴" 
  },
  { 
    type: 'photo', 
    imageUrl: c4, 
    title: "Jerry", 
    date: "Nov 15", 
    rotation: "-rotate-2", 
    sticker: "🎉" 
  },
  { 
    type: 'photo', 
    imageUrl: c5, 
    title: "Simba", 
    date: "Dec 01", 
    rotation: "rotate-3", 
    sticker: "⭐" 
  },{ 
    type: 'photo', 
    imageUrl: c6, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "👑"
  },
  { 
    type: 'photo', 
    imageUrl: c7, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "🎉"  
  },{ 
    type: 'photo', 
    imageUrl: c8, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "🦴" 
  },{ 
    type: 'photo', 
    imageUrl: c9, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "❤️" 
  },{ 
    type: 'photo', 
    imageUrl: c10, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "🐾" 
  },{ 
    type: 'photo', 
    imageUrl: c11, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "⭐" 
  },
  { 
    type: 'photo', 
    imageUrl: c12, 
    title: "Yoshi", 
    date: "Jan 10", 
    rotation: "-rotate-1", 
    sticker: "🐾" 
  }
];

const CakeGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dynamicHeight, setDynamicHeight] = useState(2000);

  const ropePath = useMemo(() => {
     let path = "M0,8";
     const totalSegments = 100; 
     const segmentWidth = 100;
     for (let i = 0; i < totalSegments; i++) {
        const x = (i + 1) * segmentWidth;
        if (i === 0) {
            path += ` Q 50,12 100,8`;
        } else {
            path += ` T ${x},8`;
        }
     }
     return path;
  }, []);

  useEffect(() => {
    const calculateDimensions = () => {
      if (!scrollRef.current) return;
      
      // We set width to max-content so the DOM calculates the natural size of the flex container
      // including all cards, gaps, and padding.
      const scrollWidth = scrollRef.current.scrollWidth;
      const horizontalScrollDistance = Math.max(0, scrollWidth - window.innerWidth);
      const totalHeight = horizontalScrollDistance + window.innerHeight;
      
      setDynamicHeight(totalHeight);
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    // Extra nudge after a small delay to handle any late-rendering layout shifts
    const timeout = setTimeout(calculateDimensions, 200);
    return () => {
        window.removeEventListener("resize", calculateDimensions);
        clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = scrollRef.current.scrollWidth - window.innerWidth;
      const totalScrollableHeight = containerRect.height - viewportHeight;
      const scrolled = -containerRect.top;
      
      if (scrolled < 0) {
        scrollRef.current.style.transform = `translateX(0px)`;
        return;
      }

      const percentage = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      const translateX = scrollableDistance * percentage;
      scrollRef.current.style.transform = `translateX(-${translateX}px)`;
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dynamicHeight]);

  return (
    <section ref={containerRef} style={{ height: `${dynamicHeight}px` }} className="relative bg-white z-20">
      <div className="sticky top-16 h-screen overflow-hidden flex flex-col justify-center bg-white">
        
        {/* === Background Atmosphere === */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-[10%] opacity-10 animate-float" style={{ animationDuration: '8s' }}>
               <PawIcon width={128} height={128} className="text-[#c7f5ff]" />
            </div>
            <div className="absolute top-40 right-[15%] opacity-10 animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}>
               <PawIcon width={96} height={96} className="text-[#ffd9d9]" />
            </div>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#ffe7a6]/50 to-transparent blur-3xl opacity-60"></div>
        </div>

        <div className="absolute top-8 left-0 w-full text-center z-10 px-4">
           <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-[#ffe7a6] shadow-sm px-6 py-2 rounded-full mb-2 transform -rotate-1">
             <span className="text-xs md:text-sm font-black text-[#dba135] uppercase tracking-widest flex items-center gap-2">
                <PawIcon width={14} height={14} className="fill-currentColor" /> Gallery <PawIcon width={14} height={14} className="fill-currentColor" />
             </span>
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-[#0d5f73] brand-font drop-shadow-sm leading-tight">
             Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb2f5f] to-[#dba135]">Fame</span>
           </h2>
        </div>

        {/* The horizontal scrolling container - width: max-content ensures it's only as wide as content */}
        <div 
            ref={scrollRef} 
            style={{ width: 'max-content' }}
            className="flex items-start pl-[10vw] pr-[20vw] pt-[32vh] h-full gap-8 md:gap-16 relative"
        >
          
          {/* Rope Path - synchronized with parent width */}
          <div className="absolute top-[17vh] left-0 h-4 z-0 origin-left w-full">
             <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <path d={ropePath} fill="none" stroke="#dba135" strokeWidth="3" strokeLinecap="round" />
             </svg>
          </div>

          {GALLERY_ITEMS.map((item, index) => {
            const isSmall = index % 2 !== 0; 
            const cardWidth = isSmall ? 'w-44 md:w-52' : 'w-64 md:w-72';
            const baseStringHeightVh = isSmall ? 13 : 15; 
            const verticalShift = isSmall ? '-3vh' : '0vh';

            return (
                <div 
                    key={index} 
                    className={`relative flex-none ${cardWidth} group perspective-1000 transition-all duration-300`} 
                    style={{ 
                        transformOrigin: `50% calc(-${baseStringHeightVh}vh)`, 
                        marginTop: verticalShift,
                        animation: `sway ${4 + index * 0.7}s ease-in-out infinite alternate` 
                    }}
                >
                    {/* The String */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#dba135]/40 z-0 origin-bottom" 
                        style={{ height: `calc(${baseStringHeightVh}vh)`, top: `calc(-${baseStringHeightVh}vh)` }}
                    ></div>
                    
                    {/* The Clip */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-4 h-10 z-20 flex flex-col items-center" 
                        style={{ top: `calc(-${baseStringHeightVh}vh - 5px)` }}
                    >
                        <div className="w-full h-full bg-[#dba135] rounded-sm shadow-md border border-[#0d5f73]/20"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 w-5 h-2 bg-[#ffe7a6] rounded-full shadow-inner border border-[#dba135]/40"></div>
                    </div>

                    {/* The Polaroid Card */}
                    <div className={`bg-white p-3 ${isSmall ? 'pb-6' : 'pb-8'} shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] transform ${item.rotation} transition-all duration-300 hover:scale-105 hover:z-50 hover:rotate-0 hover:shadow-2xl border-4 border-white`}>
                        <div className="aspect-[4/5] overflow-hidden mb-3 bg-gray-100 relative shadow-inner">
                            <img 
                                src={item.imageUrl} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                                loading="lazy" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="text-center relative">
                            <h3 className={`${isSmall ? 'text-lg' : 'text-2xl'} font-bold text-[#0d5f73] brand-font leading-none transform -rotate-1`}>
                                {item.title}
                            </h3>
                        </div>
                        <div className={`absolute -top-3 -right-3 ${isSmall ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-xl'} bg-[#ffe7a6] rounded-full flex items-center justify-center shadow-md border-2 border-white transform rotate-12 group-hover:scale-125 transition-transform`}>
                            {item.sticker}
                        </div>
                    </div>
                </div>
            );
          })}
          
           <div className="relative flex-none w-32 h-32 flex items-center justify-center mt-10">
               <div className="text-center opacity-40">
                   <PawIcon width={48} height={48} className="text-[#dba135] mb-2 mx-auto" />
                   <span className="font-bold text-[#0d5f73] text-sm tracking-widest uppercase">Fin</span>
               </div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes sway {
          0% { transform: rotate(-1.5deg); }
          100% { transform: rotate(1.5deg); }
        }
      `}</style>
    </section>
  );
};

export default CakeGallery;
