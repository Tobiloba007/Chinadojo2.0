"use client"

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Faq from "./home/Faq";
import HomeSection1 from "./home/HomeSection1";
import HomeSection2 from "./home/HomeSection2";
import HomeSection3 from "./home/HomeSection3";
import HomeSection4 from "./home/HomeSection4";
import RatesSection from "./home/RatesSection";
import Testimonials from "./home/Testimonials";


export default function Home() { 
  return (
    <main className="flex flex-col items-center justify-start w-full bg-gradient-to-r from-[#EEF2F6] via-[#FFFFFF] to-[#EEF2F6] 
                    max-w-[1680px] mx-auto bg-gradient-to-t from-transparent to-[#EEF2F6] via-[#FFFFFF] h-screen">

      <Navigation 
      blogTab={'#0F131B'} 
      aboutTab={'#0F131B'} 
      servicesTab={'#0F131B'} 
      shippingTab={'#0F131B'} 
      />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <div id="rates-section">
         <RatesSection />
      </div>
      <Testimonials />
      <Faq />
      <div className="w-full" id="contact">
        <Footer />
      </div>
      
    </main>
  );
}
