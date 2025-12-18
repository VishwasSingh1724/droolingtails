
import React from 'react';
import { BoneIcon, PawIcon } from './Icons';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative w-full pt-32 pb-32 bg-white overflow-hidden">
      
      {/* Wavy Transition from Hero (Cream to White) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
            className="relative block w-full h-[80px] md:h-[150px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path 
                fill="#fffcf0" 
                fillOpacity="1" 
                d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-40 left-10 opacity-5 transform -rotate-12">
        <BoneIcon className="w-48 h-48 text-[#dba135]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 transform rotate-12">
        <PawIcon className="w-64 h-64 text-[#0d5f73]" />
      </div>
      
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none hidden md:block opacity-20" viewBox="0 0 800 400">
         <path d="M100,100 C300,50 500,350 700,300" fill="none" stroke="#dba135" strokeWidth="4" strokeDasharray="12 12" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-32 relative">
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#ffe7a6] text-[#dba135] px-4 py-1 rounded-full text-sm font-bold rotate-[-3deg] shadow-sm border border-[#dba135]/20">
            Since 2024
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#0d5f73] mb-8 brand-font relative inline-block">
            About the <span className="text-[#ff5454] underline decoration-wavy decoration-[#c7f5ff] underline-offset-8">Bakery</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
             Drooling Tails was started by a <span className="text-[#ff5454] font-bold bg-[#ffd9d9] px-2 rounded-lg transform -skew-x-6 inline-block">fussy eater</span> and a <span className="text-[#eb2f5f] font-bold bg-[#e2deff] px-2 rounded-lg transform skew-x-6 inline-block">clumsy hooman</span>. We simply want to make the most droolicious stuff for your pooch!
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto min-h-[600px] md:min-h-[500px]">
          
          <div className="relative md:absolute md:top-0 md:left-10 lg:left-20 flex flex-col items-center md:items-start group mb-20 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-700 hover:scale-105 hover:rotate-2">
               <div className="absolute inset-0 bg-[#ffe7a6] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-6 opacity-60 group-hover:rotate-12 transition-all duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=1362&auto=format&fit=crop" 
                 alt="Chef Nemo" 
                 className="relative w-full h-full object-cover rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] shadow-2xl border-4 border-white"
               />
            </div>

            <div className="relative mt-4 md:-ml-8 z-20 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0d5f73] brand-font transform -rotate-3 bg-white px-6 py-2 shadow-lg inline-block border-2 border-[#ffe7a6] rounded-lg">
                Chef Nemo
              </h3>
              <div className="mt-2 transform rotate-2">
                <span className="bg-[#dba135] text-white font-bold text-lg px-4 py-1 rounded-sm shadow-md inline-block uppercase tracking-widest">
                  Head Baker
                </span>
              </div>
            </div>
          </div>

          <div className="relative md:absolute md:top-40 md:right-10 lg:right-20 flex flex-col items-center md:items-end group">
             <div className="relative mb-4 md:-mr-8 z-20 text-center md:text-right order-2 md:order-1">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0d5f73] brand-font transform rotate-2 bg-white px-6 py-2 shadow-lg inline-block border-2 border-[#ffd9d9] rounded-lg">
                Clumsy Hooman
              </h3>
              <p className="font-bold text-gray-400 text-sm mt-1 mr-2 transform rotate-2">(Saurabhi Deokar)</p>
              <div className="mt-1 transform -rotate-1">
                <span className="bg-[#eb2f5f] text-white font-bold text-lg px-4 py-1 rounded-sm shadow-md inline-block uppercase tracking-widest">
                  Assistant Baker
                </span>
              </div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 order-1 md:order-2 transition-transform duration-700 hover:scale-105 hover:-rotate-2">
               <div className="absolute inset-0 bg-[#ffd9d9] rounded-[66%_34%_35%_65%_/_58%_34%_66%_42%] -rotate-6 opacity-60 group-hover:-rotate-12 transition-all duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1588514494194-43cb5f47d33d?q=80&w=1936&auto=format&fit=crop" 
                 alt="Saurabhi" 
                 className="relative w-full h-full object-cover rounded-[56%_44%_35%_65%_/_58%_54%_46%_42%] shadow-2xl border-4 border-white"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
