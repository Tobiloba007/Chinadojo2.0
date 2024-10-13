import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import BrowseNews from '../blog/BrowseNews'
import News from '../assets/images/news.jpg'
import Image from 'next/image'
import { IoBookOutline, IoTimeOutline } from 'react-icons/io5'


const page = () => {
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#1A8F98'} aboutTab={'#0F131B'} servicesTab={'#0F131B'} shippingTab={'#0F131B'}  />

      <div className='flex flex-col items-start w-full bg-white px-5 pt-16 max-w-screen-xl md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
        <p className='text-[16px] text-[#130F26] font-medium text-start w-full font-sans pt-2 md:pt-3 md:text-[18px] lg:text-[22px] xl:text-[28px] xl:pt-4'>
              {/* {data.title} */}
              News Title
         </p>

         <Image className='mt-7 rounded-xl h-[250px] object-cover w-full md:h-[325px] md:rounded-[20px] lg:h-[425px] lg:rounded-[22px] xl:h-[600px] xl:rounded-[26px] xl:mt-10' 
        //  src={builder.image(data.mainImage.asset._ref).url()} 
        src={News}
         alt='news_image' 
         loading='lazy' 
         />


         <hr className='border-[1px] border-[#D0D5DD] opacity-50 w-full mt-5 md:mt-6 lg:mt-7 lg:w-[90%] xl:mt-8' />

         <div className='flex items-center justify-between w-full text-[#7B8794] mt-4 mb-3 md:mb-0 lg:mb-2 lg:mt-7 lg:w-[90%] xl:mt-9 xl:mb-3'>
             <div className='flex items-center justify-start w-[70%] md:w-[50%]'>
                <div className='flex justify-start items-center'>
                    <IoTimeOutline className='text-base md:text-lg xl:text-xl' />
                    <p className='text-[10px] font-normal text-start pl-1.5 pt-[2px] lg:text-[11px] xl:text-sm'>
                         {/* {moment(data.publishedAt).format('D MMMM, YYYY')} */}
                         12/10/2024
                    </p>
                </div>
             </div>

             <div className='flex justify-end items-center w-[35%] md:w-[50%]'>
                 <div className='flex justify-end items-center'>
                     <IoBookOutline className='text-base xl:text-xl' />
                     <p className='text-[10px] font-normal pl-1.5 pt-[2px] lg:text-[11px] xl:text-sm'>
                         {/* {data.readngTime} read */}
                         30 minutes read
                     </p>
                 </div>
              </div>
         </div>
        </div>

      <BrowseNews />
      <Footer />
      
    </main>
  )
}

export default page
