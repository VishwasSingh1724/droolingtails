
import React from 'react';
import { Camera, Heart, MessageCircle } from 'lucide-react';
import { PawIcon } from './Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';



const BASE_SOCIAL_POSTS = [
    { id: 1, img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=600&auto=format&fit=crop", likes: "1.2k" },
    { id: 2, img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop", likes: "856" },
    { id: 3, img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop", likes: "2.1k" },
    { id: 4, img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop", likes: "940" },
    { id: 5, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop", likes: "1.5k" },
    { id: 6, img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop", likes: "3.2k" }
];

// Triple the posts to ensure a perfectly seamless loop without content gaps
const SOCIAL_POSTS = [...BASE_SOCIAL_POSTS, ...BASE_SOCIAL_POSTS, ...BASE_SOCIAL_POSTS];

const JoinThePack: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ffd9d9] pt-12 pb-12 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
            <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#fffcf0" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>

        <div className="container mx-auto px-4 relative z-20">
            
            <div className="flex flex-col items-center text-center mb-8">
                <div className="inline-block bg-[#0d5f73] text-white px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-3 shadow-sm transform -rotate-2">
                    #DroolingTails
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#0d5f73] brand-font mb-2">
                    Join the <span className="text-white drop-shadow-md">PACK</span>
                </h2>
                <p className="text-lg text-[#eb2f5f] font-bold max-w-2xl leading-tight">
                    Share your pup's happy moments with us! 
                    <br/> We feature our favorites every "Woofing Wednesday".
                </p>
                <div className="mt-4">
                    <button className="bg-[#0d5f73] text-white px-6 py-2 rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#ff5454] transition-colors shadow-lg active:scale-95">
                        <Camera size={18} /> Follow on Instagram
                    </button>
                </div>
            </div>

            <div className="relative w-full py-4">
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  slidesPerView="auto"
                  spaceBetween={24}
                  loop={true}
                  speed={6000}
                  autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
                  freeMode={{ enabled: true, momentum: false }}
                  allowTouchMove={true}
                  className="join-the-pack-swiper"
                  style={{ width: '100%' }}
                  onInit={swiper => {
                    if (swiper && swiper.wrapperEl) {
                      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
                    }
                  }}
                  onTouchEnd={swiper => {
                    if (swiper && swiper.wrapperEl) {
                      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
                    }
                  }}
                >
                  {SOCIAL_POSTS.map((post, i) => (
                    <SwiperSlide key={`${post.id}-${i}`} style={{ width: 256, height: 288 }}>
                      <div className="relative w-64 h-64 group cursor-grab active:cursor-grabbing">
                        <div className="absolute inset-0 bg-white p-2 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-2">
                          <div className="w-full h-full rounded-xl overflow-hidden relative">
                            <img src={post.img} alt="Dog" className="w-full h-full object-cover pointer-events-none" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2">
                              <div className="flex items-center gap-2 font-bold">
                                <Heart className="fill-white" size={20} /> {post.likes}
                              </div>
                              <div className="flex items-center gap-2 font-bold">
                                <MessageCircle size={20} /> 14
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
        </div>

        <div className="absolute bottom-6 left-6 text-[#0d5f73] opacity-10 transform -rotate-12 pointer-events-none">
            <PawIcon width={96} height={96} />
        </div>
        <div className="absolute top-32 right-6 text-white opacity-10 transform rotate-12 pointer-events-none">
            <PawIcon width={80} height={80} />
        </div>

        <style>{`
          .join-the-pack-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
    </section>
  );
};

export default JoinThePack;
