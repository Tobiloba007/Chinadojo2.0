"use client"
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Faq = () => {
    
    const faqData = [
        {
            id: 1,
            question: `What types of goods can you ship to my country?`,
            answer: `We can ship a wide range of goods, from electronics and clothing to furniture and machinery. However, there are certain restrictions on prohibited and restricted items. 
                     Please refer to our customer service  for more information.`,
        },
        {
            id: 2,
            question: `How much does shipping cost?`,
            answer: `Shipping costs are calculated based on the weight, dimensions, and destination of your shipment. You can get an accurate shipping quote by using our online shipping calculator or contacting our customer service.`,
        },
        {
            id: 3,
            question: `How long does shipping take?`,
            answer: `Shipping times vary depending on the destination country, shipping method, and customs clearance procedures.
                     We offer different shipping services ranging from air to sea to express shipping.
                     Air shipping  services can deliver your goods within 7-15  days. For sea shipping, it may take 50-70 business days and express takes 2-5 days.
                    `,
        },
        {
            id: 4,
            question: `What customs duties and taxes will I have to pay?`,
            answer: `Import duties and taxes are determined by the customs authorities of the destination country.  These charges are typically paid by the recipient upon delivery.`,
        },
        {
            id: 5,
            question: `What documents are required for customs clearance?`,
            answer: `The specific documents required for customs clearance may vary depending on the nature of your shipment and the destination country. However, common documents include a commercial invoice, packing list, and possibly a certificate of origin.`,
        },
        {
            id: 6,
            question: `How should I package my items for shipping?`,
            answer: `It's important to package your items securely to prevent damage during transit. We recommend using sturdy boxes, bubble wrap, and packing tape.`,
        },
        {
            id: 7,
            question: `What if my shipment is damaged during transit?`,
            answer: `If your shipment is damaged during transit, please contact our customer service immediately. We will investigate the incident and take appropriate action immediately.`,
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
