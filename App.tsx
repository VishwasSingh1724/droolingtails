import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import CakeGallery from './components/CakeGallery';
import Testimonials from './components/Testimonials';
import ChefChat from './components/ChefChat';
import InfoSection from './components/InfoSection';
import JoinThePack from './components/JoinThePack';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import CustomCakeSection from './components/CustomCakeSection';

function App() {
  return (
    <div className="bg-[#fffcf0] text-gray-800 font-sans selection:bg-orange-200">
      
      {/* 
        LAYER 1: SCROLLING WRAPPER (z-10)
        - Contains Main Content and PreFooter
        - mb-[50vh]: Creates the gap at the very end to reveal the Fixed Footer
      */}
      <div className="relative z-10 mb-[50vh]">
        
        {/* 
          LAYER 1.1: MAIN CONTENT (z-30)
          - The "Top Curtain"
          - Lifts up to reveal PreFooter
          - mb-[50vh]: Creates the gap to reveal PreFooter (which is pulled into this gap)
          - rounded-b-[3rem]: The visual "card" effect
          - Removed shadow as requested to match colors seamlessly
        */}
        <div className="relative z-30 bg-[#fffcf0] mb-[50vh] rounded-b-[3rem]">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <AboutUs />
            <CakeGallery />
            <Products />
            <CustomCakeSection />
            <Testimonials />
            <InfoSection />
            <JoinThePack />
          </main>
        </div>

        {/* 
          LAYER 1.2: PRE-FOOTER (z-20)
          - The "Middle Curtain"
          - sticky bottom-0: Stays fixed at bottom of viewport while Main Content slides over it
          - -mt-[50vh]: Pulls it up into the margin space of Main Content
          - h-[50vh]: Matches the height of the reveal
        */}
        <div className="sticky bottom-0 z-20 h-[50vh] -mt-[50vh]">
          <PreFooter />
        </div>

      </div>
      
      {/* 
        LAYER 0: FIXED FOOTER (z-0)
        - The "Bottom Layer"
        - Always fixed at bottom
        - Revealed when the Scrolling Wrapper (Layer 1) moves up
      */}
      <Footer />
      
      <ChefChat />
    </div>
  );
}

export default App;