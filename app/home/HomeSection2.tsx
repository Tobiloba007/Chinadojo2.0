import Link from 'next/link'
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'

const HomeSection2 = () => {
    
    const data = [
        {
            id: 1,
            count: '25+',
            desc: 'Awards won'
        },
        {
            id: 2,
            count: '200K+',
            desc: 'Package Delivered'
        },
        {
            id: 3,
            count: '10+',
            desc: 'Years of Experience'
        },
    ]

    const videoId = 'A6IHZn4WftI'

  return (
      <main className='flex flex-col items-center w-full bg-white px-5 pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
          
          <div className='flex flex-col items-start w-full md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col items-start clash md:w-[42%] xl:w-[37%]'>
                  <h3 className='text-texts text-[15px] font-normal md:font-medium lg:text-base xl:text-xl'>
                      About Us
                  </h3>
                  <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                   xl:text-4xl xl:leading-[44px] xl:mt-5'>
                      Experience World-wide<br />Logistics Services
                  </h3>
              </div>

              <div className='mt-5 inter md:w-[42%] md:mt-10 xl:w-[37%] 2xl:w-[31%]'>
                  <p className='text-texts text-[13px] leading-5 lg:text-sm lg:leading-6 xl:text-[17px] xl:leading-8'>
                      Our commitment to delivering outstanding service is a driving force behind our success and the continued growth and prosperity of our company
                  </p>
              </div>
          </div>


          <div className='flex items-center justify-end w-full mt-5 md:mt-8 lg:mt-10'> 
                 <Link 
                 href={'/services'}
                 className='flex items-center justify-center p-3 bg-primary text-white hover:text-secondary md:p-3.5 lg:p-4 xl:p-5'>
                     <BsArrowDownRight className='text-lg lg:text-2xl xl:text-[26px]' />
                 </Link>
          </div>


          
          <div className='flex flex-col items-center w-full inter mt-10 md:mt-12 lg:flex-row-reverse lg:items-start xl:mt-14 2xl:mt-16'>
              <div className='w-full rounded-xl'>
                  <iframe
                    className="w-full h-72 rounded-lg md:h-96 xl:h-[450px] 2xl:h-[515px]"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
              </div>

              <div className='flex items-center justify-between w-full mt-6 md:mt-8 md:justify-center md:gap-20 lg:mt-0 lg:flex-col lg:items-start lg:w-[60%] lg:gap-16 xl:w-[70%] xl:gap-20 2xl:gap-24'>
                  {data.map((item) => (
                  <div key={item.id} className='flex flex-col items-center lg:items-start'>
                      <p className='text-xl font-sans text-[#888888] opacity-60 md:text-2xl md:font-sans lg:font-semibold xl:text-3xl'>
                          {item.count}
                      </p>
                      <p className='text-[11px] font-light text-[#888888] md:text-xs xl:text-sm'>
                          {item.desc}
                      </p>
                  </div>
                    ))}
              </div>
          </div>


    </main>
  )
}

export default HomeSection2
