import React from 'react'
import Vision from '../assets/icons/vision.png'
import Mission from '../assets/icons/target.png'
import Values from '../assets/icons/values.png'
import Image from 'next/image'


const AboutSection2 = () => {

    const values = [
        {
            id: 1,
            title: `Customer Centric`,
            desc: `We prioritize your success by simplifying the complexities of international trade.`,
            bgColor: `#FFC250`,
        },
        {
            id: 2,
            title: `Integrity & Transparency`,
            desc: `We build trust through honest communication and clear processes.`,
            bgColor: `#1A8F98`,
        },
        {
            id: 3,
            title: `Global Mindset`,
            desc: `We prioritize your success by simplifying the complexities of international trade.`,
            bgColor: `#FF7222`,
        },
        {
            id: 4,
            title: `Empowerment`,
            desc: `We continuously strive to streamline the buying and shipping experience for maximum ease.`,
            bgColor: `#09CA4B`,
        },
        {
            id: 5,
            title: `Efficiency & Innovation`,
            desc: `We continuously strive to streamline the buying and shipping experience for maximum ease.`,
            bgColor: `#F9AAA6`,
        },
    ]


  return (
    <main className='flex flex-col items-start w-full bg-white px-5 pt-20 pb-12 md:px-8 md:pt-24 lg:px-12 lg:pt-28 lg:pb-20 xl:px-28 xl:pt-40 xl:pb-32 2xl:pt-44 2xl:pb-36'>

        <div className='flex flex-col item-start w-full max-w-screen-lg md:flex-row md:justify-between'>

            <div className='flex flex-col items-start md:w-[40%] xl:w-[35%]'>
                <div className='flex items-center justify-start'>
                    <Image className='w-6 lg:w-8 xl:w-10'
                    src={Vision}
                    alt='icon'
                    />

                    <h3 className='clash text-texts text-lg font-medium pl-2.5 md:font-medium md:text-xl lg:pl-3 lg:text-2xl xl:text-3xl xl:pl-4'>
                        Our Vision
                    </h3>
                </div>
                <p className='inter text-texts text-[13px] font-normal leading-6 mt-2 w-full text-start lg:text-[15px] lg:leading-7 xl:text-[17px] xl:mt-3'>
                     To set a standard of exceptional service by providing effortless international shopping
                     and logistics with premium value.
                </p>
            </div>


            <div className='flex flex-col items-start mt-16 md:mt-0 md:w-[40%] xl:w-[35%]'>
                <div className='flex items-center justify-start'>
                    <Image className='w-6 lg:w-8 xl:w-10'
                    src={Mission}
                    alt='icon'
                    />

                    <h3 className='clash text-texts text-lg font-medium pl-2.5 md:font-medium md:text-xl lg:pl-3 lg:text-2xl xl:text-3xl xl:pl-4'>
                         Our Mission
                    </h3>
                </div>
                <p className='inter text-texts text-[13px] font-normal leading-6 mt-2 w-full text-start lg:text-[15px] lg:leading-7 xl:text-[17px] xl:mt-3'>
                     Bridging the gap between you and your procurement and logistics needs, through our seamless 
                     service with the aim of achieving client satisfaction.
                </p>
            </div>

        </div>


        <div className='flex flex-col items-start w-full pt-20 lg:pt-28 xl:pt-36'>
             <div className='flex items-center justify-start'>
                  <Image className='w-7 lg:w-8 xl:w-10'
                  src={Values}
                  alt='icon'
                  />

                  <h3 className='clash text-texts text-lg font-medium pl-2.5 md:font-medium md:text-xl lg:pl-3 lg:text-2xl xl:text-3xl xl:pl-4'>
                      Our Core Values
                  </h3>
             </div>

             <div className='flex items-center justify-start flex-wrap w-full gap-5 inter mt-7 md:w-[85%] lg:w-[70%] md:gap-6 max-w-screen-md xl:gap-7'>
                  {values.map((item) => (
                  <div key={item.id} style={{ backgroundColor: item.bgColor }} className={`flex flex-col items-start justify-center w-full h-40 px-5 py-2.5 rounded-lg md:w-[45%] md:rounded-xl  
                                                 md:h-44 lg:h-44 lg:w-[45%] lg:px-6 xl:h-52`}>
                      <p className='text-black text-base font-normal md:text-lg lg:text-[19px] xl:text-[23px]'>
                         {item.title}
                      </p>
                      <p className='text-black text-[13px] font-normal pt-3 leading-6 w-[95%] xl:text-[15px] xl:leading-7'>
                         {item.desc}
                      </p>
                  </div>
                  ))
                  }
             </div>
        </div>

    </main>
  )
}

export default AboutSection2
