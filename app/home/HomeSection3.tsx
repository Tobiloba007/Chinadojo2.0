import Image from 'next/image'
import React from 'react'
import icon1 from '../assets/icons/Icon1.png'
import icon2 from '../assets/icons/Icon2.png'
import icon3 from '../assets/icons/Icon3.png'
import icon4 from '../assets/icons/Icon4.png'
import icon5 from '../assets/icons/Icon5.png'
import icon6 from '../assets/icons/Icon6.png'


const HomeSection3 = () => {

    const cards = [
        {
            id: 1,
            title: `Procurement`,
            icon: icon1,
            desc: `Our platform provides complete procurement services for Chinese online stores like AliExpress, Alibaba, and Taobao, handling end-to-end logistics, 
                   shipping, and delivery, allowing you to focus on your business without worrying about the complexities.`,
            bgColor: '#FCCA18'
        },
        {
            id: 2,
            title: `Product Sourcing`,
            icon: icon6,
            desc: `We offer expert sourcing services to help businesses of all sizes find high-quality products from trusted Chinese suppliers. Simply provide us 
                   with a picture and specifications, and we'll manage the entire process for you.`,
            bgColor: '#FF7222'
        },
        {
            id: 3,
            title: `Air & Sea Freight`,
            icon: icon3,
            desc: `We are committed to delivering your package to its destination, no matter the size, with unmatched care and professionalism that sets us apart 
                   from other logistics companies. Your delivery is in safe hands with us.`,
            bgColor: '#C7FBFF'
        },
        {
            id: 4,
            title: `Supplier Verification`,
            icon: icon2,
            desc: `Before entering into financial agreements or contracts with Chinese manufacturers and suppliers, we offer supplier verification services, 
                   allowing businesses to verify their credibility and ensure their reliability and competence.`,
            bgColor: '#09CA4B'
        },
        {
            id: 5,
            title: `Payment to Suppliers`,
            icon: icon4,
            desc: `Regardless of the amount, we offer the best rates and lowest costs. We help businesses make swift payments to their Chinese suppliers through bank 
                   transfers, WeChat, AliPay, and QQ, while accepting payment in Naira.`,
            bgColor: '#1A8F98'
        },
        {
            id: 6,
            title: `Manufacturing`,
            icon: icon5,
            desc: `We offer private label production services for all market segments, whether for personal, organizational, or commercial use. We ensure top-quality 
                   products that meet international industry standards, sourced from reputable suppliers across China.`,
            bgColor: '#F9AAA6'
        },
    ]


  return (
    <main className='flex flex-col items-center w-full bg-white px-5 pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
          <div className='flex flex-col items-start w-full md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col items-start clash md:w-[42%] xl:w-[37%]'>
                  <h3 className='text-texts text-[15px] font-normal md:font-medium lg:text-base xl:text-xl'>
                      Our Services
                  </h3>
                  <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                   xl:text-4xl xl:leading-[44px] xl:mt-5'>
                      Trusted by more <span className='text-[#3AA08D]'>150+</span><br />Partners in China
                  </h3>
              </div>

              <div className='mt-5 inter md:w-[42%] md:mt-10 xl:w-[37%] 2xl:w-[31%]'>
                  <p className='text-texts text-[13px] leading-5 lg:text-sm lg:leading-6 xl:text-[17px] xl:leading-8'>
                      At Chinadojo, we are steadfast in our dedication to providing our customers with quick and dependable fulfillment of our promises.
                  </p>
              </div>
          </div>

          
          <div className='flex flex-col items-center justify-start gap-5 mt-10 md:flex-row md:items-start md:justify-between md:flex-wrap md:gap-0 lg:justify-center 
                          lg:gap-6 xl:mt-14 xl:gap-7 max-w max-w-[1024px]'>
              {cards.map((item) => (
                  <div key={item.id} style={{ backgroundColor: item.bgColor }} className={`flex flex-col items-start justify-start p-4 rounded-3xl min-h-60 md:w-[32%] 
                        md:min-h-80 md:mt-3.5 lg:mt-0 lg:w-72 lg:min-h-72 xl:mt-7 xl:w-80 xl:p-5 xl:min-h-80`}>
                  <div className='flex items-center justify-center h-10 w-10 bg-[#0F131B] rounded-full xl:h-12 xl:w-12'>
                          <Image
                              className='w-5 object-cover xl:w-6'
                              src={item.icon}
                              alt='cards_icon'
                          />
                  </div>

                  <p className='clash text-[#0F131B] text-lg font-medium mt-5 xl:font-semibold xl:text-xl'>
                      {item.title}
                  </p>

                  <p className='inter text-[#292A2E] text-xs font-normal mt-1.5 leading-5 xl:text-[13px] xl:leading-6'>
                       {item.desc}
                  </p>
              </div>
               ))}

          </div>

    </main>
  )
}

export default HomeSection3
