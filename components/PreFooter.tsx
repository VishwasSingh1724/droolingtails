
import React from 'react';

const PreFooter: React.FC = () => {
  return (
    <section className="relative w-full h-[50vh] bg-[#fffcf0] flex flex-col items-start justify-end overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-[80%] overflow-hidden leading-[0] z-10 pointer-events-none">
            <svg 
            className="relative block w-full h-full" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            >
                <path 
                    fill="#ffd9d9" 
                    fillOpacity="1" 
                    d="M0,0 L0,100 C160,220 320,40 480,140 C640,240 800,80 960,180 C1120,280 1280,60 1440,320 L1440,0 Z"
                ></path>
            </svg>
        </div>

        <div className="relative z-20 text-left px-6 md:px-12 w-full pb-0 md:pb-2">
             <h2 className="text-[14vw] md:text-[13vw] font-black brand-font text-[#0d5f73] leading-[0.8] tracking-tighter opacity-100 transform hover:scale-[1.01] transition-transform duration-700 select-none">
                DROOLING <br className="lg:hidden" />
                <span className="text-[#ff5454]">TAILS</span>
             </h2>
        </div>
    </section>
  );
};

export default PreFooter;
