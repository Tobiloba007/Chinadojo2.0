"use client"

import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import BlogPreview from './BlogPreview'
import BrowseNews from './BrowseNews'
import Footer from '../components/Footer'
import { PulseLoader } from 'react-spinners'
import sanityClient from '../../blogClient'



const Blog = () => {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => { 
    sanityClient.fetch(
        `
        *[_type == 'post']{
            ...,
            content[]->{
                ...,
            }
          }
        `
    )
    .then((data) => {
        setStories(data);
        setLoading(false);
        // console.log(data, 'STORIES');
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setLoading(false);
      });
},[])

if (loading) {
    return (
    <div className='flex items-center justify-center h-screen w-full'>
      <PulseLoader
        size={15} // size of the loader (in pixels)
        color={'#1A8F98'} // color of the loader
        loading={true} // boolean to show/hide the loader
      />
    </div>
  );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const heading = 'Browse Our must-read news and update'

  return (
    <main className="flex flex-col items-start justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#1A8F98'} aboutTab={'#0F131B'} servicesTab={'#0F131B'} shippingTab={'#0F131B'}  />
      <BlogPreview data={stories[0]} />
      <BrowseNews title={heading} />
      <Footer />
    </main>
  )
}

export default Blog
