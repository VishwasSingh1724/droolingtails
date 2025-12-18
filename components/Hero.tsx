
import React from 'react';
import { Play, Star, Sparkles, ArrowRight } from 'lucide-react';
import { BoneIcon, PawIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center bg-[#fffcf0] overflow-hidden pt-20 pb-12 lg:py-0 selection:bg-[#e2deff] selection:text-[#0d5f73]">
      {/* === BACKGROUND TEXTURE (Subtle Grid) === */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* === DECORATIVE SCRIBBLES === */}
      <svg className="absolute top-20 left-0 w-64 h-64 text-[#ffe7a6] opacity-60 -z-10 animate-pulse" viewBox="0 0 200 200">
         <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-55.5,76.9,-41.2C84.7,-26.9,90.1,-12.2,88.2,1.8C86.3,15.8,77.1,29.1,66.8,40.6C56.5,52.1,45.1,61.8,32.4,69.1C19.7,76.4,5.7,81.4,-7.8,80.3C-21.3,79.2,-34.3,72,-45.6,63.2C-56.9,54.4,-66.5,44,-73.4,31.9C-80.3,19.8,-84.5,6,-82.9,-7.1C-81.3,-20.2,-73.9,-32.6,-64.1,-43.3C-54.3,-54,-42.1,-63,-29.3,-70.2C-16.5,-77.4,-3.1,-82.8,10.1,-81.4C23.3,-80,45.7,-76.3,45.7,-76.3Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-96 h-96 text-[#c7f5ff] opacity-60 -z-10" viewBox="0 0 200 200">
         <path fill="currentColor" d="M38.9,-64.6C51.9,-59.9,64.9,-53.4,73.4,-43.6C82.7,-33.8,87.5,-20.7,85.2,-8.5C82.9,3.7,73.5,15,64.4,25.3C55.3,35.6,46.5,44.9,36.4,52.2C26.3,59.5,14.9,64.8,2.7,60.2C-9.5,55.5,-22.5,41,-33.8,30C-45.1,19,-54.7,11.5,-60.8,-0.1C-66.9,-11.7,-69.5,-27.4,-62.4,-39.8C-55.3,-52.2,-38.5,-61.3,-23.4,-64.5C-8.3,-67.7,25.9,-69.3,38.9,-64.6Z" transform="translate(100 100)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center h-full">
        {/* Image section first on mobile, second on desktop */}
        <div className="order-1 lg:order-2 lg:col-span-4 relative h-[500px] lg:h-[700px] flex items-center justify-center z-10">
            <img 
               src="/assets/hero-2.jpg" 
               alt="Happy Dog" 
               className="w-full h-full object-contain scale-[2] origin-center -translate-x-[17%] sm:translate-x-0 transition-transform"
            />
        </div>
        {/* Text section second on mobile, first on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
           <div className="mb-6 transform -rotate-2 hover:rotate-2 transition-transform cursor-pointer">
              <span className="inline-block bg-[#0d5f73] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest shadow-[4px_4px_0px_0px_rgba(219,161,53,1)] border-2 border-transparent hover:border-[#dba135] transition-all uppercase">
                Warning: Causes Zoomies 🚀
              </span>
           </div>

           <h1 className="relative font-black brand-font text-[#0d5f73] tracking-tight z-20 text-left flex flex-col items-start leading-[0.85]">
              <span className="block text-[14vw] lg:text-[8rem] xl:text-[9.5rem] relative z-10 text-[#0d5f73]">
                BEST PART IS
              </span>
              <span className="block text-[9vw] lg:text-[5.5rem] xl:text-[6.5rem] mt-2 lg:mt-4 text-[#dba135] drop-shadow-sm">
                  IT'S POOCH APPROVED
              </span>
              <svg className="absolute top-[48%] left-0 w-[60%] h-8 text-[#ffe7a6] -z-10 mix-blend-multiply opacity-80" viewBox="0 0 300 20" preserveAspectRatio="none">
                 <path d="M0 10 Q 150 20 300 10" stroke="currentColor" strokeWidth="15" fill="none" />
              </svg>
           </h1>

           <p className="mt-8 text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
              Gourmet treats baked with <span className="font-bold text-[#eb2f5f]">love</span>, science, and a little bit of magic. Your best friend deserves a seat at the table.
           </p>

           <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
              <button className="relative group">
                 <div className="absolute inset-0 bg-[#0d5f73] rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                 <div className="relative bg-[#eb2f5f] text-white px-8 py-4 rounded-2xl font-black text-lg border-2 border-[#0d5f73] flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform">
                    GRAB A BOX <ArrowRight strokeWidth={3} />
                 </div>
              </button>

              <button className="group flex items-center gap-3 px-6 py-3 rounded-full hover:bg-white hover:shadow-lg transition-all border-2 border-transparent hover:border-[#ffe7a6]">
                 <div className="w-12 h-12 bg-[#c7f5ff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play fill="#0d5f73" className="text-[#0d5f73] ml-1 w-5 h-5" />
                 </div>
                 <div className="text-left">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Watch Video</p>
                    <p className="font-bold text-[#0d5f73]">See How It's Made</p>
                 </div>
              </button>
           </div>
           
           <div className="mt-12 flex items-center gap-4 p-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-sm transform rotate-1 hover:rotate-0 transition-transform w-fit">
              <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="user" />
                     </div>
                  ))}
              </div>
              <div className="pr-4">
                 <div className="flex items-center gap-1">
                    <Star size={14} className="fill-[#dba135] text-[#dba135]" />
                    <Star size={14} className="fill-[#dba135] text-[#dba135]" />
                    <Star size={14} className="fill-[#dba135] text-[#dba135]" />
                    <Star size={14} className="fill-[#dba135] text-[#dba135]" />
                    <Star size={14} className="fill-[#dba135] text-[#dba135]" />
                 </div>
                 <p className="text-xs font-bold text-gray-500"><span className="text-[#0d5f73] font-black">2,500+</span> Tails Wagging</p>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-[#ff5454] text-white py-3 overflow-hidden transform rotate-1 scale-110 border-t-4 border-white shadow-lg z-20">
         <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 font-black text-lg uppercase tracking-widest">
                    <Sparkles size={16} /> Freshly Baked <span className="text-[#ffd9d9]">•</span> 
                    Human Grade <span className="text-[#ffd9d9]">•</span> 
                    No Preservatives
                </div>
            ))}
         </div>
      </div>

      <style>{`
        .animate-marquee { animation: marquee 20s linear infinite; }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
