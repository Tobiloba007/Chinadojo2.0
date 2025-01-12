import Image from 'next/image'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
// import image5 from '../assets/images/image5.png'
// import image6 from '../assets/images/image7.png'
// import image7 from '../assets/images/image6.png'
import { GoDotFill } from 'react-icons/go'
import { LiaStarSolid } from 'react-icons/lia'
import { PiCheckCircleLight } from 'react-icons/pi'



const HomeSection1 = () => {

    const slidingImages = [
        {
            id: 1,
            image: image1,
            title: 'Shipping'
        },
        {
            id: 2,
            image: image2,
            title: 'Warehousing'
        },
        {
            id: 3,
            image: image3,
            title: 'Sorting'
        },
        {
            id: 4,
            image: image4,
            title: 'Home delivery'
        },
        // {
        //     id: 5,
        //     image: image5,
        //     title: 'Door to door delivery'
        // },
        // {
        //     id: 6,
        //     image: image7,
        //     title: 'Air cargo'
        // },
        // {
        //     id: 3,
        //     image: image6,
        //     title: 'Air cargo'
        // },
    ]


  return (
      <main className='flex flex-col items-center justify-start w-full pt-24 max-w-[1680px] mx-auto md:pt-20'>
          
          {/* INTRODUCTION MESSAGES */}
        <div className='flex flex-col items-center w-full px-5 max-w-[1440px] mx-auto'>
            <h1 className='clash text-center text-texts font-semibold text-2xl md:w-[60%] md:text-3xl lg:w-[60%] lg:text-[38px] lg:leading-[45px] xl:w-[55%] 
                           xl:text-[50px] xl:leading-[62px]'>
                GROW YOUR <span className='text-secondary'>BUSINESS</span> WITH OUR <span className='text-secondary'>LOGISTICS</span> SERVICE 
            </h1>
            
            <p className='inter text-center text-texts font-normal text-[11px] mt-3.5 leading-[22px] md:w-[60%] lg:w-[48%] lg:text-xs lg:leading-[22px] xl:w-[45%] 
                          xl:text-[15px] xl:leading-[26px] xl:mt-4'>
                Discover a transformative partnership that will boost your business with secure China transactions, premium product sourcing, expert manufacturing, 
                and fast, dependable air and sea shipping.
            </p>

            <a
            href='https://wa.link/gqhss7'
            target="_blank"
            rel="noopener noreferrer"
            className='bg-primary text-white rounded-lg py-2 px-8 text-[11px] mt-7 lg:font-meidium lg:py-2.5 xl:mt-8 xl:py-3 xl:px-12 xl:text-sm xl:rounded-xl'
            title='Contact us'>
                Contact us
            </a>
        </div>
    
          
           {/* SLIDING IMAGES */}
        <div className='flex items-center w-full overflow-hidden'>

        <div className='animate-loop-scroll flex items-center justify-start mt-20 pl-1.5 gap-3 scrollbar-hidden md:mt-20 md:px-2 md:gap-4 
                        lg:gap-[17px] lg:px-2 xl:px-3 xl:mt-28 xl:gap-6'>
            {slidingImages.map((item) => (
              <div key={item.id} className='sliding-images relative w-[260px] h-[130px] max-w-none flex-shrink-0 lg:h-full lg:w-[275px] xl:w-[400px]'>
                  <Image className='w-full h-full object-cover rounded-[10px] lg:rounded-xl xl:rounded-[18px]'
                  src={item.image}
                  alt='sliding_image'
                  height={300}
                  width={400}
                  quality={90}
                  loading="lazy"
                  objectFit='cover'
                  />

                  <div className='flex items-center justify-start w-full absolute top-3 left-3 xl:left-4 xl:top-4'>
                       <GoDotFill className='text-white text-sm mr-1 lg:text-base lg:mr-1.5 xl:text-lg xl:mr-2.5' />
                       <p className='inter text-center text-white font-normal text-[10px] lg:text-[11px] xl:text-[13px]'>
                           {item.title}
                       </p>
                  </div>
              </div>
            ))}

          </div>

        <div className='animate-loop-scroll flex items-center justify-start mt-20 px-1.5 gap-3 scrollbar-hidden md:mt-20 md:px-2 md:gap-4 
                        lg:gap-[17px] lg:px-2 xl:px-3 xl:mt-28 xl:gap-6' aria-hidden="true">
            {slidingImages.map((item) => (
              <div key={item.id} className='sliding-images relative w-[260px] h-[130px] max-w-none flex-shrink-0 lg:h-full lg:w-[275px] xl:w-[400px]'>
                  <Image className='w-full h-full object-cover rounded-[10px] lg:rounded-xl xl:rounded-[18px]'
                  src={item.image}
                  alt='sliding_image'
                  quality={90}
                  loading="lazy"
                  objectFit='cover'
                  />

                  <div className='flex items-center justify-start w-full absolute top-3 left-3 xl:left-4 xl:top-4'>
                       <GoDotFill className='text-white text-sm mr-1 lg:text-base lg:mr-1.5 xl:text-lg xl:mr-2.5' />
                       <p className='inter text-center text-white font-normal text-[10px] lg:text-[11px] xl:text-[13px]'>
                           {item.title}
                       </p>
                  </div>
              </div>
            ))}

          </div>

          </div>
          

          
           {/* RATINGS */}
          <div className='flex items-start justify-center flex-wrap gap-10 w-full px-5 inter mt-12 md:mt-14 md:gap-7 xl:mt-20 xl:gap-11'>
              <div className='flex items-center justify-start'>
                  <p className='text-[#888888] text-2xl font-light lg:text-[25px] xl:text-3xl'>
                      4,9
                  </p>
                  <div className='ml-3 lg:ml-3.5 xl:ml-4'>
                       <p className='text-[#888888] text-[10px] font-thin lg:text-[11px] xl:text-sm'>
                          Customer Satisfaction
                      </p>
                      <div className='flex items-center gap-1 mt-0.5'>
                         {Array(5).fill(1).map((_, index) => (
                         <LiaStarSolid key={index} className='text-[9px] text-[#888888] lg:text-[11px] xl:text-sm' />
                         ))}
                      </div>
                  </div>
              </div>

              <div className='flex items-center justify-start'>
                  <p className='text-[#888888] text-2xl font-light lg:text-[25px] xl:text-3xl'>
                      4,8
                  </p>
                  <div className='ml-3 lg:ml-3.5 xl:ml-4'>
                       <p className='text-[#888888] text-[10px] font-thin lg:text-[11px] xl:text-sm'>
                          Process Optimization
                      </p>
                      <div className='flex items-center gap-1 mt-0.5'>
                         {Array(5).fill(1).map((_, index) => (
                         <LiaStarSolid key={index} className='text-[9px] text-[#888888] lg:text-[11px] xl:text-sm' />
                         ))}
                      </div>
                  </div>
              </div>

              <div className='flex items-center justify-start'>
                  <PiCheckCircleLight className='text-[#888888] text-2xl font-light xl:text-4xl' />
                  <div className='ml-3 lg:ml-3.5 xl:ml-4'>
                       <p className='text-[#888888] text-[10px] font-thin lg:text-[11px] xl:text-sm'>
                           Security
                      </p>
                      <div className='flex items-center gap-1 mt-0.5'>
                         {Array(5).fill(1).map((_, index) => (
                         <LiaStarSolid key={index} className='text-[9px] text-[#888888] lg:text-[11px] xl:text-sm' />
                         ))}
                      </div>
                  </div>
              </div>
          </div>  


    </main>
  )
}

export default HomeSection1
