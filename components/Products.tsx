
import React from 'react';
import { ShoppingBag, Plus, Heart } from 'lucide-react';
import { BoneIcon } from './Icons';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  theme: 'magenta' | 'gold' | 'teal' | 'lavender';
  rotate: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Custom Cakes',
    category: 'Personalized',
    price: '₹899',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1625596704787-82d2c67425e4?q=80&w=1000&auto=format&fit=crop',
    theme: 'magenta',
    rotate: '-rotate-1',
  },
  {
    id: 2,
    name: 'Gourmet Treats',
    category: 'Healthy treats',
    price: '₹299',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1518914781460-a3daa430f9db?q=80&w=1000&auto=format&fit=crop',
    theme: 'gold',
    rotate: 'rotate-1',
  },
  {
    id: 3,
    name: 'Premium Hampers',
    category: 'Gift sets',
    price: '₹1499',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1549488497-6571597843d1?q=80&w=1000&auto=format&fit=crop',
    theme: 'teal',
    rotate: '-rotate-2',
  },
  {
    id: 4,
    name: 'Treat Boxes',
    category: 'Subscription',
    price: '₹599',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=1000&auto=format&fit=crop',
    theme: 'lavender',
    rotate: 'rotate-2',
  },
];

const THEME_STYLES = {
  magenta: {
    bg: 'bg-[#ffd9d9]',
    shadow: 'bg-[#eb2f5f]',
    button: 'bg-[#eb2f5f] hover:brightness-90 shadow-[#ffd9d9]',
    text: 'text-[#eb2f5f]',
    border: 'border-[#ffd9d9]',
    sticker: 'bg-[#ffe7a6] text-[#dba135]',
  },
  gold: {
    bg: 'bg-[#ffe7a6]',
    shadow: 'bg-[#dba135]',
    button: 'bg-[#dba135] hover:brightness-90 shadow-[#ffe7a6]',
    text: 'text-[#dba135]',
    border: 'border-[#ffe7a6]',
    sticker: 'bg-[#c7f5ff] text-[#0d5f73]',
  },
  teal: {
    bg: 'bg-[#c7f5ff]',
    shadow: 'bg-[#0d5f73]',
    button: 'bg-[#0d5f73] hover:brightness-90 shadow-[#c7f5ff]',
    text: 'text-[#0d5f73]',
    border: 'border-[#c7f5ff]',
    sticker: 'bg-[#ffd9d9] text-[#eb2f5f]',
  },
  lavender: {
    bg: 'bg-[#e2deff]',
    shadow: 'bg-[#0d5f73]',
    button: 'bg-[#0d5f73] hover:brightness-90 shadow-[#e2deff]',
    text: 'text-[#0d5f73]',
    border: 'border-[#e2deff]',
    sticker: 'bg-[#eb2f5f] text-white',
  },
};

const Products: React.FC = () => {
  return (
    <section className="pt-48 pb-8 bg-[#fffcf0] relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
            className="relative block w-full h-[100px] md:h-[150px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#dba135]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#eb2f5f]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-[#0d5f73] brand-font mb-6 tracking-tight relative inline-block">
            Benefits that <span className="text-[#ff5454] relative z-10">never quit</span>
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#ffd9d9] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-bold">
            Chef-curated goodies guaranteed to cause excessive tail wagging! 🐕
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
          {PRODUCTS.map((product) => {
            const styles = THEME_STYLES[product.theme];
            
            return (
              <div 
                key={product.id}
                className={`group relative ${product.rotate} hover:rotate-0 transition-transform duration-500`}
              >
                <div className={`absolute inset-0 translate-y-3 translate-x-3 rounded-[2rem] ${styles.shadow} transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-5`}></div>

                <div className="relative bg-white border-4 border-white rounded-[2rem] p-4 h-full flex flex-col shadow-xl transition-transform duration-300 group-hover:-translate-y-2 overflow-hidden">
                  
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#fffcf0] rounded-full shadow-inner border border-gray-200 z-20"></div>

                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className={`absolute top-4 right-4 ${styles.sticker} w-16 h-16 rounded-full flex items-center justify-center font-black text-lg shadow-lg transform rotate-0 group-hover:rotate-[15deg] transition-all duration-300 ease-out z-10 border-2 border-white border-dashed origin-center`}>
                      {product.price}
                    </div>

                    <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform group/btn">
                       <Heart size={20} className="text-gray-300 group-hover/btn:fill-[#ff5454] group-hover/btn:text-[#ff5454] transition-colors" />
                    </button>
                  </div>

                  <div className="flex-1 flex flex-col items-center text-center px-2">
                    <span className={`text-xs font-black tracking-widest uppercase mb-2 ${styles.text} bg-white border ${styles.border} px-3 py-1 rounded-full`}>
                      {product.category}
                    </span>
                    
                    <h3 className="text-2xl font-black text-[#0d5f73] brand-font mb-3 leading-none">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-6 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      <span className="text-xs font-bold text-gray-400 mr-1">Wag Meter:</span>
                      {[...Array(5)].map((_, i) => (
                        <BoneIcon 
                          key={i} 
                          className={`w-4 h-4 ${i < product.rating ? 'text-[#dba135] fill-[#dba135]' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>

                    <button className={`w-full py-4 mt-auto rounded-xl text-white font-black text-lg shadow-lg flex items-center justify-center gap-2 transform transition-all duration-300 active:scale-95 group-hover:shadow-xl ${styles.button}`}>
                       Add to Bowl <Plus strokeWidth={4} size={20} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
            <button className="bg-white border-2 border-[#0d5f73]/20 text-[#0d5f73] font-bold py-4 px-10 rounded-full hover:bg-gray-50 hover:border-[#0d5f73] transition-all flex items-center gap-2 mx-auto shadow-sm hover:shadow-md">
                <ShoppingBag size={20} />
                Explore Full Menu
            </button>
        </div>

      </div>
    </section>
  );
};

export default Products;
