import React from 'react'
import { GoCheckCircle } from 'react-icons/go'


const HomeSection4 = () => {

    const data = [
        {
            id: 1,
            title: `Seamless Delivery Service`,
            desc: `Your orders are shipped promptly and effectively by our knowledgeable logistics staff, guaranteeing that you receive your orders on time and in good condition.`,
        },
        {
            id: 2,
            title: `Affordable Prices`,
            desc: `We provide affordable shipping costs to every location, guaranteeing that you get the most for your money.`,
        },
        {
            id: 3,
            title: `Professionalism`,
            desc: `Our staff members have undergone extensive training to handle your services using the most recent technology and the best standards in the business.`,
        },
        {
            id: 4,
            title: `Excellent Customer service`,
            desc: `The satisfaction of our customers is crucial to us because they are the reason we are in business.`,
        },
    ]


  return (
      <main className='flex flex-col items-start justify-between w-full bg-white px-5 pt-16 md:flex-row md:items-center md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
          
          <div className='flex flex-col items-start w-full md:w-[35%] lg:w-[40%]'>
              <div className='flex flex-col items-start clash'>
                  <h3 className='text-texts text-[15px] font-normal md:font-medium lg:text-base xl:text-xl'>
                      Why Choose Us
                  </h3>
                  <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                   xl:text-4xl xl:leading-[44px] xl:mt-5'>
                      Why you should<br />use our services
                  </h3>
              </div>

              <div className='mt-5 inter xl:mt-7'>
                  <p className='text-texts text-[13px] leading-5 lg:text-sm lg:leading-6 xl:text-[17px] xl:leading-8'>
                      Our unshakable dedication to ethics serves as the cornerstone of everything we do. We are able to establish confidence with our clients
                      and business partners and foster enduring relationships because of this devotion.
                  </p>
              </div>
          </div>

          

          <div className='flex flex-col items-start justify-start w-full inter bg-[#F8F5FE] border-[1px] border-[#E9ECF6] shadow-xl rounded-lg mt-8 p-6 gap-5 
                          md:flex-row md:flex-wrap md:w-[60%] md:justify-between md:gap-4 md:mt-0 md:p-5 lg:w-[53%] lg:mt-28 xl:mt-24 xl:w-[50%]'>
              {data.map((item) => (
              <div key={item.id} className='flex flex-col items-start md:max-w-44 lg:max-w-[45%] xl:max-w-[45%]'>
                  <div className='flex items-center justify-start md:items-start'>
                      <GoCheckCircle className='text-[#7346F1] text-sm md:text-base xl:text-lg' />
                      <p className='text-sm text-texts font-medium ml-2.5 w-full md:ml-2 lg:font-semibold lg:text-sm xl:text-[15px]'>
                          {item.title}
                      </p>
                  </div>
                  <p className='text-texts text-[11px] mt-1.5 leading-5 md:leading-[18px] xl:text-xs xl:leading-[21px]'>
                      {item.desc}
                  </p>
              </div>
                ))}
          </div>


    </main>
  )
}

export default HomeSection4
