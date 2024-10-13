"use client"
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Faq = () => {
    
    const faqData = [
        {
            id: 1,
            question: `What is the shipping rate`,
            answer: `You can reach out to any of our amazing customer representative for current exchange and shipping rates.`,
        },
        {
            id: 2,
            question: `How long does it get to Nigeria`,
            answer: `Normal goods will take 10 days and Hong Kong and sensitive items (battery liquid and powder items) would take 20 days delivery.(Not working days), Sea cargo duration is within 2-3 months.`,
        },
        {
            id: 3,
            question: `Do you pickup package in China`,
            answer: `We don't offer this service yet, But your supplier can deliver the goods to our China warehouse, Kindly reach out to our customer representative to get our address card.`,
        },
        {
            id: 4,
            question: `Do you consolidate`,
            answer: `Yes, we always consolidate and guess what, it is free. Our consolidation services saves you cost and also helps optimize and maximize your shipping experience.`,
        },
        {
            id: 5,
            question: `How do i know if a supplier is legit`,
            answer: `You can check the store profile, reviews from previous buyers, ask for real time picture or video of the items and most important, try the supplier with a sample order first to see the supplier reliability.`,
        },
        {
            id: 6,
            question: `Their calculation is different from ours`,
            answer: `The prices on the website are mostly just the price, local logistics to deliver it to your agent are not included.`,
        },
    ]


    const [open, setOpen] = useState<number | null>(null);
    
    const handleOpen = (item: number) => {
        setOpen(open === item ? null : item);
    }

  return (
    <main className='flex flex-col items-center w-full bg-[#F7F7F7] px-5 py-16 md:px-8 md:pt-20 md:pb-10 lg:px-12 lg:pt-24 lg:pb-12 xl:px-28 xl:pt-32 xl:pb-12'>
        <div className='flex flex-col items-center w-full'>
              <div className='flex flex-col items-center clash'>
                  <h3 className='text-texts text-[15px] font-normal md:font-medium lg:text-base xl:text-xl'>
                      FAQ
                  </h3>
                  <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                   xl:text-4xl xl:leading-[44px] xl:mt-5'>
                      Frequently Asked Questions
                  </h3>
              </div>
          </div>


          <div className='w-full columns-1 mt-10 max-w-[1024px] break-inside-avoid md:mt-12 md:columns-2 lg:columns-2 lg:mt-16 xl:gap-6 xl:mt-20'>
                {faqData.map((item) => (
                <div key={item.id} className='flex flex-col items-center w-full bg-white rounded-xl p-4 break-inside-avoid mb-6 md:mb-10 lg:px-6 xl:mb-11 xl:px-7 hover:bg-[#eaeaea]'>
                    <div onClick={()=>handleOpen(item.id)}
                    className='flex items-center justify-between w-full cursor-pointer'>
                        <p className='text-[#474040] text-[13px] font-semibold lg:text-sm xl:text-base'>
                           {item.question}
                        </p>

                        <div className='flex items-center justify-center p-0.5 rounded-full bg-[#D9D9D9] md:p-1 xl:p-1'>
                            {
                              open === item.id ?
                              <IoIosArrowUp className='text-sm lg:text-base xl:text-xl' />
                              :
                              <IoIosArrowDown className='text-sm lg:text-base xl:text-xl' /> 
                            }
                        </div>
                    </div>

                    {open === item.id &&
                       (
                       <div>
                           <hr className='mt-2.5' />
                           <p className='text-[#474040] text-xs font-normal mt-4 leading-6 xl:text-[15px] xl:leading-7'>
                              {item.answer}
                           </p>
                       </div>
                       )
                    }

                </div>
                ))}
          </div>
      
    </main>
  )
}

export default Faq
