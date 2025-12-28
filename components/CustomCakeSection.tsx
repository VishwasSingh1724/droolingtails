import React, { useState } from 'react';
import { ChefHat, Sparkles, Wand2, Flag, Flame } from 'lucide-react';
import { PawIcon } from './Icons';

type Flavor = 'peanut' | 'carrot' | 'redvelvet' | 'banana';
type Frosting = 'pink' | 'white' | 'choco' | 'teal';
type Topping = 'none' | 'sprinkles' | 'bones' | 'berries';
type Topper = 'none' | 'candle' | 'flag' | 'paw';

const CustomCakeSection: React.FC = () => {
  // Selection State
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>('banana');
  const [selectedFrosting, setSelectedFrosting] = useState<Frosting>('pink');
  const [selectedTopping, setSelectedTopping] = useState<Topping>('berries');
  const [selectedTopper, setSelectedTopper] = useState<Topper>('candle');

  // Display State (Baked Result)
  const [bakedFlavor, setBakedFlavor] = useState<Flavor | 'plain'>('plain');
  const [bakedFrosting, setBakedFrosting] = useState<Frosting | 'plain'>('plain');
  const [bakedTopping, setBakedTopping] = useState<Topping>('none');
  const [bakedTopper, setBakedTopper] = useState<Topper>('none');
  
  const [isBaking, setIsBaking] = useState(false);

  // Trigger the "Bake" animation
  const handleBake = () => {
    setIsBaking(true);
    setTimeout(() => {
        setBakedFlavor(selectedFlavor);
        setBakedFrosting(selectedFrosting);
        setBakedTopping(selectedTopping);
        setBakedTopper(selectedTopper);
        setIsBaking(false);
    }, 800);
  };

  // --- STYLING MAPS ---
  const flavorColors: Record<Flavor | 'plain', string> = {
    plain: 'bg-[#fef3c7] from-[#fef3c7] to-[#fde68a]', // Vanilla-ish
    peanut: 'bg-[#d97706] from-[#d97706] to-[#b45309]',   
    carrot: 'bg-[#fb923c] from-[#fb923c] to-[#ea580c]',   
    redvelvet: 'bg-[#be123c] from-[#be123c] to-[#9f1239]',
    banana: 'bg-[#fcd34d] from-[#fcd34d] to-[#fbbf24]',   
  };

  const frostingColors: Record<Frosting | 'plain', string> = {
    plain: 'hidden', 
    pink: 'bg-[#f472b6]',     
    white: 'bg-[#f1f5f9]',    
    choco: 'bg-[#5c2e14]',    
    teal: 'bg-[#2dd4bf]',     
  };

  // Helper to render scalloped frosting edge
  const renderScallops = (colorClass: string, count: number, widthClass: string = "w-4") => (
     <div className="absolute bottom-0 left-0 w-full translate-y-[50%] flex justify-between px-[2px]">
        {[...Array(count)].map((_, i) => (
           <div key={i} className={`relative ${widthClass} h-4 rounded-full ${colorClass} -ml-[1px] -mr-[1px]`}>
              {/* If Berry topping is selected, put a dot on every other scallop */}
              {bakedTopping === 'berries' && i % 2 === 0 && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-sm z-20 border border-red-600"></div>
              )}
           </div>
        ))}
     </div>
  );

  return (
    <section className="relative w-full pt-8 pb-32 bg-[#fffcf0] overflow-hidden">
      
      {/* Background: Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
             <div className="inline-block relative">
                 <h2 className="text-3xl md:text-5xl font-black text-[#333] brand-font relative z-10 transform -rotate-1">
                    Chef Nemo's <br className="md:hidden"/>
                    <span className="text-orange-500 underline decoration-wavy decoration-teal-300 decoration-4 underline-offset-4">Design Station</span>
                 </h2>
             </div>
             <p className="mt-4 text-lg font-bold text-gray-400 font-mono">
                // Customize every layer, then click BAKE!
             </p>
        </div>

        {/* === MAIN WORKSPACE === */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16">

            {/* --- LEFT COLUMN: FLAVOR & TOPPINGS --- */}
            <div className="w-full lg:w-1/4 flex flex-col gap-8 order-2 lg:order-1">
                
                {/* Step 1: Flavor */}
                <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200/50 backdrop-blur-sm rotate-2 shadow-sm z-10"></div>
                    <div className="bg-[#fef9c3] p-5 shadow-lg shadow-yellow-900/5 border border-yellow-100">
                        <h3 className="text-xl font-black text-gray-800 brand-font mb-3">1. Base</h3>
                        <div className="space-y-2 font-bold text-gray-600 text-sm">
                            {[
                                { id: 'banana', label: 'Banana Split' },
                                { id: 'peanut', label: 'Peanut Butter' },
                                { id: 'carrot', label: 'Carrot Crunch' },
                                { id: 'redvelvet', label: 'Red Velvet' }
                            ].map((opt) => (
                                <button 
                                    key={opt.id}
                                    onClick={() => setSelectedFlavor(opt.id as Flavor)}
                                    className={`w-full text-left px-3 py-2 rounded border transition-all flex items-center justify-between ${
                                        selectedFlavor === opt.id 
                                        ? 'border-orange-500 bg-orange-50 text-orange-700' 
                                        : 'border-transparent hover:bg-yellow-200/50'
                                    }`}
                                >
                                    {opt.label}
                                    {selectedFlavor === opt.id && <span className="text-orange-500 text-xs">●</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Step 3: Toppings */}
                <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-blue-200/50 backdrop-blur-sm -rotate-1 shadow-sm z-10"></div>
                    <div className="bg-blue-50 p-5 shadow-lg shadow-blue-900/5 border border-blue-100">
                        <h3 className="text-xl font-black text-gray-800 brand-font mb-3">3. Decorations</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { id: 'none', label: 'None' },
                                { id: 'berries', label: 'Berries' },
                                { id: 'sprinkles', label: 'Confetti' },
                                { id: 'bones', label: 'Bones' }
                            ].map((opt) => (
                                <button 
                                    key={opt.id}
                                    onClick={() => setSelectedTopping(opt.id as Topping)}
                                    className={`px-2 py-2 rounded text-xs font-bold border transition-all ${
                                        selectedTopping === opt.id 
                                        ? 'bg-blue-200 border-blue-400 text-blue-900' 
                                        : 'bg-white border-transparent hover:border-blue-200'
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            {/* --- CENTER: THE CAKE DISPLAY --- */}
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center order-1 lg:order-2 mt-8 lg:mt-0 perspective-1000">
                 
                 {/* Fancy Plate */}
                 <div className="relative w-80 h-80 flex items-center justify-center">
                     {/* Shadow */}
                     <div className="absolute bottom-8 w-64 h-8 bg-black/10 rounded-[50%] blur-md"></div>
                     {/* Plate */}
                     <div className="absolute bottom-10 w-72 h-16 bg-white rounded-[50%] shadow-[0_4px_0_#e2e8f0] border border-gray-100 z-0"></div>

                     {/* THE CAKE CONTAINER */}
                     <div className={`relative w-full h-full z-10 flex flex-col items-center justify-end pb-14 transition-all duration-500 origin-bottom ${isBaking ? 'scale-95 animate-pulse' : 'hover:-translate-y-1'}`}>
                         
                         {/* Baking Effect */}
                         {isBaking && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center">
                                <Sparkles className="text-yellow-400 w-32 h-32 animate-spin opacity-80" />
                            </div>
                         )}

                         

                         {/* === TOP TIER === */}
                         <div className="relative w-36 h-16 -mb-1 z-20">
                            {/* Sponge Body */}
                            <div className={`absolute bottom-0 w-full h-full rounded-xl bg-gradient-to-r ${flavorColors[bakedFlavor].replace('bg-', 'from-').split(' ')[1]} via-white/20 to-black/5`}></div>
                            <div className={`absolute bottom-0 w-full h-full rounded-xl ${flavorColors[bakedFlavor]} opacity-90`}></div>
                            
                            {/* Frosting Cap */}
                            <div className={`absolute top-0 left-0 w-full h-8 z-30 ${bakedFrosting === 'plain' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                                <div className={`w-full h-full rounded-t-xl ${frostingColors[bakedFrosting].split(' ')[0]} relative`}>
                                     {renderScallops(frostingColors[bakedFrosting].split(' ')[0], 7, 'w-6')}
                                </div>
                            </div>
                         </div>

                         {/* === BOTTOM TIER === */}
                         <div className="relative w-56 h-20">
                            {/* Sponge Body */}
                            <div className={`absolute bottom-0 w-full h-full rounded-2xl bg-gradient-to-r ${flavorColors[bakedFlavor].replace('bg-', 'from-').split(' ')[1]} via-white/20 to-black/5`}></div>
                            <div className={`absolute bottom-0 w-full h-full rounded-2xl ${flavorColors[bakedFlavor]} opacity-90`}></div>
                            
                            {/* Frosting Cap */}
                            <div className={`absolute top-0 left-0 w-full h-8 z-20 ${bakedFrosting === 'plain' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                                <div className={`w-full h-full rounded-t-xl ${frostingColors[bakedFrosting].split(' ')[0]} relative`}>
                                     {renderScallops(frostingColors[bakedFrosting].split(' ')[0], 10, 'w-6')}
                                </div>
                            </div>

                             {/* Plain/Base Texture overlay if plain */}
                             <div className="absolute inset-0 rounded-2xl opacity-10 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>
                         </div>

                         {/* === TOPPERS (On Top Tier) === */}
                         {bakedTopper !== 'none' && (
                             <div className="absolute top-[40%] z-40 transform -translate-y-full">
                                 {bakedTopper === 'candle' && (
                                     <div className="flex gap-2">
                                         {[...Array(3)].map((_, i) => (
                                             <div key={i} className={`flex flex-col items-center ${i === 1 ? '-mt-2' : ''}`}>
                                                 <div className="w-1 h-3 bg-yellow-400 rounded-full animate-bounce shadow-[0_0_5px_orange]"></div>
                                                 <div className="w-1.5 h-8 bg-stripes-candle rounded-sm border border-black/5"></div>
                                             </div>
                                         ))}
                                         <style>{`.bg-stripes-candle { background: repeating-linear-gradient(45deg, #fce7f3, #fce7f3 3px, #f472b6 3px, #f472b6 6px); }`}</style>
                                     </div>
                                 )}
                                 {bakedTopper === 'flag' && (
                                     <div className="flex flex-col items-center transform -rotate-3 origin-bottom">
                                         <div className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-sm shadow-sm border border-orange-600">HAPPY DAY</div>
                                         <div className="w-0.5 h-10 bg-gray-400"></div>
                                     </div>
                                 )}
                                 {bakedTopper === 'paw' && (
                                     <div className="flex flex-col items-center">
                                          <div className="bg-teal-500 text-white p-1.5 rounded-full shadow-sm border-2 border-white">
                                              <PawIcon className="w-6 h-6 fill-white" />
                                          </div>
                                          <div className="w-0.5 h-6 bg-gray-300"></div>
                                     </div>
                                 )}
                             </div>
                         )}

                         {/* === SURFACE TOPPINGS (Sprinkles/Bones) === */}
                         {bakedTopping !== 'none' && bakedTopping !== 'berries' && (
                            <div className="absolute inset-0 pointer-events-none z-30">
                                {bakedTopping === 'sprinkles' && [...Array(15)].map((_, i) => (
                                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-80" style={{ 
                                        backgroundColor: ['#f87171', '#fbbf24', '#60a5fa'][i % 3],
                                        top: `${30 + Math.random() * 40}%`, 
                                        left: `${20 + Math.random() * 60}%`
                                    }}></div>
                                ))}
                                {bakedTopping === 'bones' && [...Array(6)].map((_, i) => (
                                    <div key={i} className="absolute w-3 h-1.5 bg-white rounded-full transform rotate-45 shadow-sm" style={{ 
                                        top: `${30 + Math.random() * 40}%`, 
                                        left: `${25 + Math.random() * 50}%`
                                    }}></div>
                                ))}
                            </div>
                         )}

                     </div>
                 </div>

                 {/* ACTION BUTTON */}
                 <div className="mt-4 relative z-40">
                    <button 
                        onClick={handleBake}
                        disabled={isBaking}
                        className="group relative inline-flex items-center justify-center active:scale-95 transition-transform"
                    >
                        <div className="absolute inset-0 bg-orange-700 rounded-full translate-y-2 group-hover:translate-y-3 transition-transform"></div>
                        <div className="relative bg-orange-500 hover:bg-orange-400 text-white font-black text-xl py-4 px-10 rounded-full shadow-lg border-b-4 border-orange-700 active:border-b-0 active:translate-y-2 transition-all flex items-center gap-3">
                            {isBaking ? <Wand2 className="animate-spin" size={24} /> : <ChefHat size={24} />}
                            <span>{isBaking ? 'Mixing...' : 'Bake It!'}</span>
                        </div>
                    </button>
                    <p className="mt-4 text-xs font-bold text-gray-400 font-mono text-center">
                        {bakedFlavor === 'plain' ? '// PREVIEW READY' : '// YUMMY!'}
                    </p>
                 </div>

            </div>


            {/* --- RIGHT COLUMN: FROSTING & TOPPER --- */}
            <div className="w-full lg:w-1/4 flex flex-col gap-8 order-3">
                
                {/* Step 2: Frosting */}
                <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-pink-200/50 backdrop-blur-sm -rotate-1 shadow-sm z-10"></div>
                    <div className="bg-white p-5 shadow-lg shadow-gray-200 border border-gray-100" style={{ clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)'}}>
                        <h3 className="text-xl font-black text-gray-800 brand-font mb-3">2. Icing</h3>
                        <div className="grid grid-cols-4 gap-2">
                            {[
                                { id: 'pink', color: 'bg-pink-400' },
                                { id: 'white', color: 'bg-slate-100 border border-gray-200' },
                                { id: 'choco', color: 'bg-[#5c2e14]' },
                                { id: 'teal', color: 'bg-teal-400' }
                            ].map((opt) => (
                                <button 
                                    key={opt.id}
                                    onClick={() => setSelectedFrosting(opt.id as Frosting)}
                                    className={`h-10 rounded-full shadow-sm hover:scale-105 transition-transform flex items-center justify-center ${opt.color} ${
                                        selectedFrosting === opt.id ? 'ring-2 ring-offset-2 ring-orange-300' : ''
                                    }`}
                                >
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Step 4: Topper */}
                <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-green-200/50 backdrop-blur-sm rotate-2 shadow-sm z-10"></div>
                    <div className="bg-green-50 p-5 shadow-lg shadow-green-900/5 border border-green-100">
                        <h3 className="text-xl font-black text-gray-800 brand-font mb-3">4. Topper</h3>
                        <div className="space-y-2">
                             {[
                                { id: 'none', label: 'No Topper', icon: null },
                                { id: 'candle', label: 'Candles', icon: <Flame size={14} className="text-orange-500" /> },
                                { id: 'flag', label: 'Flag', icon: <Flag size={14} className="text-red-500" /> },
                                { id: 'paw', label: 'Paw Badge', icon: <PawIcon className="w-4 h-4 text-teal-500" /> }
                            ].map((opt) => (
                                <button 
                                    key={opt.id}
                                    onClick={() => setSelectedTopper(opt.id as Topper)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm font-bold border transition-all ${
                                        selectedTopper === opt.id 
                                        ? 'bg-green-100 border-green-300 text-green-800' 
                                        : 'bg-white border-transparent hover:border-green-200'
                                    }`}
                                >
                                    {opt.icon && <span>{opt.icon}</span>}
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default CustomCakeSection;