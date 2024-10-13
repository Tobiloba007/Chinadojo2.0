import React from 'react'
import Navigation from '../components/Navigation'
import AboutSection1 from './AboutSection1'
import AboutSection2 from './AboutSection2'
import Footer from '../components/Footer'


const About = () => {
  return (
    <main className="flex flex-col items-center justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#0F131B'} aboutTab='#1A8F98' servicesTab={'#0F131B'} shippingTab={'#0F131B'} />
      <AboutSection1 />
      <AboutSection2 />
      <Footer />
    </main>
  )
}

export default About
