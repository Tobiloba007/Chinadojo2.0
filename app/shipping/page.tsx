import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ShippingContents from './ShippingContents'

const Shippping = () => {
  return (
    <main className="flex flex-col items-center justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#0F131B'} aboutTab={'#0F131B'} servicesTab={'#0F131B'} shippingTab={'#1A8F98'}  />
      <ShippingContents />
      <Footer />
    </main>
  )
}

export default Shippping
