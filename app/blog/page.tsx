import React from 'react'
import Navigation from '../components/Navigation'
import BlogPreview from './BlogPreview'
import BrowseNews from './BrowseNews'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#1A8F98'} aboutTab={'#0F131B'} servicesTab={'#0F131B'} shippingTab={'#0F131B'}  />
      <BlogPreview />
      <BrowseNews />
      <Footer />
    </main>
  )
}

export default Blog
