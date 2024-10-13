import Image from 'next/image'
import React from 'react'
import test1 from '../assets/images/testimonial.jpg'
import test2 from '../assets/images/test.jpg'

const AboutSection1 = () => {

    const ourPictures = [
        {
          id: 1,
          avatar1: test1,
          avatar2: test2,
        },
        {
          id: 2,
          avatar1: test1,
          avatar2: test2,
        },
        {
          id: 3,
          avatar1: test1,
          avatar2: test2,
        },
        {
          id: 4,
          avatar1: test1,
          avatar2: test2,
        },
      ];

  return (
    <main className='flex flex-col items-start w-full bg-white px-5 pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
        <div className='flex flex-col items-start w-full clash'>
            <h3 className='text-texts text-[15px] font-normal md:font-medium lg:text-base xl:text-xl'>
                About Us
            </h3>
            <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                             xl:text-4xl xl:leading-[44px] xl:mt-5'>
                Who we are
            </h3>
        </div>

        <div className='flex items-start justify-between flex-wrap w-full mt-8 md:justify-start max-w-screen-xl md:gap-7 lg:gap-14 xl:gap-28'>
            {ourPictures.map((item) => (
            <div key={item.id} className={`relative flex items-center justify-start gap-0 w-[33%] h-44 ${item.id % 2 !== 0 && 'mt-14 lg:mt-16 xl:mt-20'} md:w-[22%] md:h-40 lg:h-48 lg:w-[18%] xl:h-[235px] xl:w-[18%]`}>
                <Image className='h-20 w-20 rounded-full object-cover absolute left-0 bottom-0 md:h-[85px] md:w-[85px] lg:h-[95px] lg:w-[95px] xl:h-[120px] xl:w-[120px]'
                src={item.avatar1}
                alt='our_image'
                loading='lazy'
                />

                <Image className='h-20 w-20 rounded-full object-cover absolute right-0 top-0 md:h-[85px] md:w-[85px] lg:h-[95px] lg:w-[95px] xl:h-[120px] xl:w-[120px]'
                src={item.avatar2}
                alt='our_image'
                loading='lazy'
                />
            </div>
            ))
            }

        </div>

        <div className='w-full mt-16 lg:w-[85%] lg:mt-24 xl:w-[85%] xl:mt-28'>
            <p className='text-texts text-[13px] font-normal leading-6 w-full text-start lg:text-[15px] lg:leading-7 xl:text-[17px]'>
               Chinadojo’s goal is to link Chinese suppliers with businesses all over the world. 
               <br />
               <br />
               We have the resources and know-how to streamline every stage of your supply chain, from sourcing to final doorstep delivery, with locations in Mainland China, Hong Kong, and Nigeria.
               <br />
               <br />
               For our clients, we want the process to proceed as smoothly, stress-free, and profitably as possible. We are dedicated to providing top-notch service and assisting our clients in succeeding.
               <br />
               <br />
               With our team of seasoned logistics experts and cutting-edge technology, we are committed to delivering excellence in every aspect of our service. We provide Procurement, Payment to Chinese suppliers, Supplier and product sourcing, Air cargo and sea cargo.
               <br />
               <br />
               Whether you are a small business or a multinational corporation, we are committed to providing you with exceptional shipping services that surpass your expectations.
            </p>


        </div>

    </main>
  )
}

export default AboutSection1
