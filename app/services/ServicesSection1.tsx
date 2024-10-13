import React from 'react'
import icon1 from '../assets/icons/Icon1.svg'
import icon2 from '../assets/icons/Icon2.svg'
import icon3 from '../assets/icons/Icon3.svg'
import icon4 from '../assets/icons/Icon4.svg'
import icon5 from '../assets/icons/Icon5.svg'
import icon6 from '../assets/icons/Icon6.svg'
import Image from 'next/image'



const ServicesSection1 = () => {

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
    <main className='flex flex-col items-start w-full bg-white px-5 pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
        <div className='flex flex-col items-start w-full'>
            <h3 className='clash text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                             xl:text-4xl xl:leading-[44px] xl:mt-5'>
                Our Services
            </h3>
            <p className='inter text-texts text-[13px] font-medium leading-6 w-full text-start mt-4 md:w-[90%] md:mt-5 md:text-xs lg:text-[15px] lg:leading-7 lg:mt-7 
                          lg:font-semibold lg:w-[80%] xl:text-[17px] xl:w-[90%] xl:mt-9 2xl:w-[70%]'>
               At Chinadojo, we take pride in offering excellent shopping and shipping services at competitive prices. Thank you for considering Chinadojo Procurement as your logistics partner.
               <br /> 
               Because we are aware of how crucial timely and dependable shipment is for our clients. To meet your needs, we provide a range of delivery choices
            </p>
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

export default ServicesSection1
