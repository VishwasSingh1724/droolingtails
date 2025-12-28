
import React from 'react';
import { Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { PawIcon } from './Icons';

const InfoSection: React.FC = () => {
  return (
    <section className="relative w-full pt-40 pb-24 bg-[#fffcf0] overflow-hidden min-h-[600px]">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg 
            className="relative block w-full h-[80px] md:h-[120px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,96C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
      </div>


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">
          
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(13,95,115,0.1)] border-2 border-[#ffe7a6] transform -rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff5454] shadow-sm border-2 border-white z-20"></div>
                
                <div className="flex items-center gap-3 mb-6 border-b-2 border-dashed border-gray-100 pb-4">
                    <div className="bg-[#ffe7a6] p-3 rounded-xl text-[#dba135]">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-[#0d5f73] brand-font">Working Hours</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Time to visit</p>
                    </div>
                </div>

                <div className="space-y-4 font-bold text-gray-600">
                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                        <span>Mon - Fri:</span>
                        <span className="text-[#dba135] bg-[#ffe7a6] px-2 py-1 rounded-md">12pm - 08pm</span>
                    </div>
                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform delay-75">
                        <span>Saturday:</span>
                        <span className="text-[#dba135] bg-[#ffe7a6] px-2 py-1 rounded-md">12pm - 08pm</span>
                    </div>
                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform delay-150">
                        <span>Sunday:</span>
                        <span className="text-[#dba135] bg-[#ffe7a6] px-2 py-1 rounded-md">12pm - 08pm</span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-gray-100 text-center">
                     <p className="text-sm font-bold text-gray-400 flex items-center justify-center gap-2">
                        <span className="text-2xl animate-bounce">🐕</span> Open all week!
                     </p>
                </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center relative z-20 order-first lg:order-none mb-12 lg:mb-0">
             <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center mb-6">
                 <div className="absolute inset-0 border-4 border-dashed border-[#dba135]/40 rounded-full animate-spin-slow"></div>
                 <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
                     <img 
                        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1769&auto=format&fit=crop" 
                        alt="Mascot"
                        className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                     />
                 </div>
                 <div className="absolute -bottom-2 bg-[#0d5f73] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border-2 border-white">
                    Pooch Approved!
                 </div>
             </div>

             <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <PawIcon className="w-6 h-6 text-[#0d5f73]" />
                    <h2 className="text-3xl font-black brand-font text-[#0d5f73]">Drooling <span className="text-[#dba135]">TAILS</span></h2>
                </div>
                <p className="text-gray-500 font-bold max-w-[200px] mx-auto leading-tight">
                    The Best Part, It is Pooch Approved!
                </p>
                
                <div className="flex justify-center gap-4 mt-4 text-2xl">
                    <span className="hover:-translate-y-2 transition-transform custom-cursor-pointer" title="Lavender Treat">🟣</span>
                    <span className="hover:-translate-y-2 transition-transform custom-cursor-pointer delay-75" title="Cupcake">🧁</span>
                    <span className="hover:-translate-y-2 transition-transform custom-cursor-pointer delay-150" title="Cake">🎂</span>
                </div>
             </div>
          </div>

          <div className="flex justify-center lg:justify-start">
             <div className="bg-[#ffd9d9] w-full max-w-sm rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(235,47,95,0.15)] border-2 border-[#ffd9d9] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="text-center mb-6">
                    <div className="inline-block bg-white p-3 rounded-full shadow-sm mb-3">
                        <Send className="text-[#eb2f5f] ml-1" size={24} />
                    </div>
                    <h3 className="text-xl font-black text-[#0d5f73] brand-font">Join the Club</h3>
                    <p className="text-sm font-bold text-gray-500 mt-1">Get updates & birthday treats! 🎉</p>
                </div>

                <div className="space-y-3">
                    <input 
                        type="tel" 
                        placeholder="Enter phone number" 
                        className="w-full bg-white border-2 border-[#ffd9d9] rounded-xl px-4 py-3 text-[#0d5f73] font-bold placeholder-gray-300 focus:outline-none focus:border-[#eb2f5f] transition-colors text-center"
                    />
                    <button className="w-full bg-[#eb2f5f] hover:bg-[#ff5454] text-white font-bold py-3 rounded-xl shadow-lg shadow-[#ffd9d9] transition-all transform hover:scale-[1.02] active:scale-95">
                        Subscribe
                    </button>
                </div>
                
                <div className="mt-6 flex justify-center gap-4">
                    <a href="#" className="bg-white p-2 rounded-full text-gray-400 hover:text-[#eb2f5f] hover:shadow-md transition-all">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-gray-400 hover:text-[#0d5f73] hover:shadow-md transition-all">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-gray-400 hover:text-[#e2deff] hover:shadow-md transition-all">
                        <Twitter size={18} />
                    </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
