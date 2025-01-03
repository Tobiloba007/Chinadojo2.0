import Image from 'next/image'
import React from 'react'
import img1 from '../assets/images/testimony1.jpg'
import img2 from '../assets/images/testimony2.jpg'
import img3 from '../assets/images/testimony3.jpg'
import img4 from '../assets/images/testimony4.jpg'
import img5 from '../assets/images/testimony5.jpg'
import { PiStarFill } from 'react-icons/pi'


const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            comments: `The staff are always online to reply and to comfirm your order and most importantly my goods has never arrived in a bad condition I recommend chinadojo procurement agency if you want to ship phones laptops from China to Nigeria .`,
            image: img1,
            name: `Barbra Ivieh Omoregie`
        },
        {
            id: 2,
            comments: `They are always available for calls and your items will never get missing and if it gets missing they will refund you. They are the best Procurement Agency I have ever worked with.`,
            image: img2,
            name: `Adefuye oluwaseun`
        },
        {
            id: 3,
            comments: `Chinadojo is the best company to ship from China We at Togo use chinadojo to ship our goods from China and we have never had any bad experience using them`,
            image: img3,
            name: `Comlane Rene`
        },
        {
            id: 4,
            comments: `The Delivery was fast I have to commend Chinadojo logistics on this💯 I will definitely use your service again.... Because shipping company has shown me shenge on deliveries 🙏`,
            image: img4,
            name: `Oghenerukewe Efemuaye`
        },
        {
            id: 5,
            comments: `Chinadojo handles all my transactions smoothly they are very reliable, accessible and friendly they are good in all aspects from payment, procurement and shipping There customer service is topnotch.`,
            image: img5,
            name: `Jumia Oziama`
        },
        
    ]


  return (
    <main className='flex flex-col items-center w-full bg-[#F7F7F7] px-5 pt-16 md:px-8 md:pt-16 lg:px-12 lg:pt-20 xl:px-28 xl:pt-28'>
        <div className='flex flex-col items-center w-full'>
              <div className='flex flex-col items-center clash'>
                  <h3 className='text-texts text-[15px] font-normal md:font-medium lg:text-base xl:text-xl'>
                          Testimonials
                  </h3>
                  <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                   xl:text-4xl xl:leading-[44px] xl:mt-5'>
                      What our clients say
                  </h3>
              </div>
          </div>


          <div className='columns-1 gap-4 mt-4 md:mt-10 md:columns-2 lg:columns-3 lg:mt-12 xl:gap-6 xl:mt-16'>
            {testimonials.map((item) => (
              <div key={item.id} className='bg-white rounded-xl py-5 px-4 break-inside-avoid mb-5 xl:mb-6'>
                   <p className='text-[#707070] text-[12px] leading-6 xl:text-sm xl:leading-7'>
                    {item.comments}
                   </p>

                   <div className='flex items-center justify-start w-full mt-9'>
                      <Image className='h-11 w-11 rounded-full object-cover shadow-lg xl:h-12 xl:w-12'
                      src={item.image}
                      alt='testimonials_image'
                      loading='lazy'
                      />

                      <div className='flex flex-col items-start ml-2.5'>
                        <p className='text-xs text-black xl:text-base'>
                            {item.name}
                        </p>
                        <div className='flex items-center gap-0.5 mt-1'>
                         {Array(5).fill(1).map((_, index) => (
                         <PiStarFill key={index} className='text-[11px] text-[#FFC250] lg:text-[11px] xl:text-sm' />
                         ))}
                        </div>
                      </div>
                   </div>
              </div>
             ))}
          </div>
      
    </main>
  )
}

export default Testimonials
