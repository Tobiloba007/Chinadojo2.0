"use client"

import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import { IoTimeOutline } from 'react-icons/io5'
import Image from 'next/image'
import sanityClient from '../../blogClient'
import { PulseLoader } from 'react-spinners'
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment'




interface BlogPost {
    slug: { current: string };
    mainImage: { asset: { _ref: string } };
    title: string;
    body: { children: { text: string }[] }[];
    publishedAt: string;
    readngTime: string;
}

const page = () => {
    const [stories, setStories] = useState<BlogPost[]>([]);
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

    const builder = imageUrlBuilder(sanityClient);

  return (
    <main className="flex flex-col items-start justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#1A8F98'} aboutTab={'#0F131B'} servicesTab={'#0F131B'} shippingTab={'#0F131B'}  />

      <div className='flex flex-col items-start w-full bg-white px-5 pt-16 max-w-screen-2xl md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
          <div className='flex flex-col items-start w-full'>
                <h3 className='clash text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                 xl:text-4xl xl:leading-[44px] xl:mt-5'>
                    News and Updates
                </h3>
            </div>


            <div className='flex flex-col items-start w-full mt-5 md:flex-row md:items-start md:justify-start md:flex-wrap'>
              {stories.map((item) => (
               <Link key={item.slug.current} 
               href={`/blog/${item.slug.current}`} 
               className={`flex flex-col items-start w-full mb-8 shadow md:mr-3 md:w-[31.5%] lg:mr-3.5 lg:w-[31.5%] xl:mr-5`}>
                   <Image className='h-[224px] w-full rounded-t-xl object-cover md:h-40 lg:h-[180px] xl:h-72 xl:rounded-t-2xl'
                   src={builder.image(item.mainImage.asset._ref).url()} 
                   width={100}
                   height={100}
                   loading='lazy'
                   alt='news_image' 
                   />

                   <div className='flex flex-col items-start w-full px-4 pb-3 mt-2 md:px-3 lg:px-4 lg:pb-3.5 xl:px-5 xl:pb-4'>
                      <div className='flex items-center justify-start w-full font-inter mt-2.5'>
                         <div className='flex justify-start items-center'>
                             <IoTimeOutline className='text-lg text-[#7B8794] md:text-base xl:text-xl' />
                             <p className='text-[11px] text-[#7B8794] font-light text-start pl-1.5 pt-[2px] md:font-normal md:text-[10px] xl:text-xs'>
                                 {moment(item.publishedAt).format('D MMMM, YYYY')}
                             </p>
                         </div>
                      </div>

                      <p className='text-lg font-semibold text-[#130F26] mt-3.5 w-[90%] md:text-sm md:leading-[22px] lg:mt-2.5 lg:text-xl'>
                             {`${item.title.substring(0, 30)}...`}
                      </p>

                      <p className='text-xs font-normal text-[#7B8794] mt-2 leading-5 text-start overflow-hidden text-overflow-ellipsis break-words max-w-[50ch] 
                                    md:text-[10px] md:mt-1.5 xl:text-[12px]'>
                              {`${item.body[0].children[0].text.substring(0, 125)}...`}
                          <span className='text-xs text-[#F8C605] pl-2 font-medium md:text-[10px] xl:text-xs'>Read more</span>
                      </p>

                      <hr className='border-[0.5px] border-[#D0D5DD] opacity-40 w-full mt-3 md:mt-2.5' />

                      <div className='flex items-center justify-between w-full mt-3.5 md:mt-2 xl:mt-3.5'>
                          <p className='text-[11px] text-[#7B8794] font-light md:text-[9px] lg:text-[9.5px] lg:font-normal xl:text-[11px]'>
                              {item.readngTime} read
                          </p>
                      </div>

                   </div>
               </Link>
               ))}

           </div>
      </div>

      <Footer />
    </main>
  )
}

export default page
