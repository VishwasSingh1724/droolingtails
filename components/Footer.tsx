
import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { PawIcon } from './Icons';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[50vh] bg-[#fffcf0] text-[#0d5f73] z-0 flex flex-col justify-center items-center overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none">
         <svg 
          className="relative block w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          >
          <g transform="scale(1,-1) translate(0,-320)">
              <path 
                  fill="#ffd9d9" 
                  fillOpacity="1" 
                  d="M0,0 L0,100 C160,220 320,40 480,140 C640,240 800,80 960,180 C1120,280 1280,60 1440,320 L1440,0 Z"
              ></path>
          </g>
      </svg>
      </div>

      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 whitespace-nowrap opacity-5 select-none z-0">
          <span className="text-[20vw] font-black brand-font text-[#0d5f73]">WOOF!</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-between py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 flex-grow">
            
            <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-2 mb-2">
                    <PawIcon width={32} height={32} className="text-[#ff5454]" />
                    <h2 className="text-3xl font-black brand-font text-[#0d5f73]">Drooling <span className="text-[#dba135]">TAILS</span></h2>
                </div>
                <p className="text-[#0d5f73] font-bold text-lg leading-relaxed">
                    Making tails wag, one treat at a time. 
                    <br />Come visit us for a sniff!
                </p>
                <div className="flex gap-4 pt-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#ff5454] hover:text-white text-[#0d5f73] transition-all">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#0d5f73] hover:text-white text-[#0d5f73] transition-all">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#c7f5ff] hover:text-[#0d5f73] text-[#0d5f73] transition-all">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 text-left md:text-right">
                <div className="space-y-4">
                    <h4 className="text-[#ff5454] font-black uppercase tracking-widest text-sm">Menu</h4>
                    <ul className="space-y-2 font-bold text-[#0d5f73]">
                        <li><a href="#" className="hover:text-[#ff5454] hover:underline decoration-wavy decoration-[#ff5454]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#ff5454] hover:underline decoration-wavy decoration-[#ff5454]">Our Menu</a></li>
                        <li><a href="#" className="hover:text-[#ff5454] hover:underline decoration-wavy decoration-[#ff5454]">Reviews</a></li>
                        <li><a href="#" className="hover:text-[#ff5454] hover:underline decoration-wavy decoration-[#ff5454]">Contact</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-[#eb2f5f] font-black uppercase tracking-widest text-sm">Legal</h4>
                     <ul className="space-y-2 font-bold text-[#0d5f73]">
                        <li><a href="#" className="hover:text-[#eb2f5f]">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#eb2f5f]">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-[#eb2f5f]">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#0d5f73] text-sm font-bold opacity-70">
                &copy; 2024 Drooling Tails. Built with <span className="text-[#ff5454]">♥</span> for pets.
            </p>
            
            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-sm font-black text-[#0d5f73] hover:text-[#dba135] transition-colors"
            >
                Back to Top
                <div className="w-8 h-8 rounded-full border-2 border-[#0d5f73] flex items-center justify-center group-hover:bg-[#0d5f73] group-hover:text-white transition-all">
                    <ArrowUp size={16} />
                </div>
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
