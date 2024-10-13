import React from 'react'
import Navigation from '../components/Navigation'
import ServicesSection1 from './ServicesSection1'
import ServicesSection2 from './ServicesSection2'
import Footer from '../components/Footer'


const Services = () => {
  return (
    <main className="flex flex-col items-center justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#0F131B'} aboutTab={'#0F131B'} servicesTab={'#1A8F98'} shippingTab={'#0F131B'}  />
      <ServicesSection1 />
      <ServicesSection2 />
      <Footer />
    </main>
  )
}

export default Services
