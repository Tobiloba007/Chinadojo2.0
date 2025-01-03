import React from 'react'
import logo from '../assets/images/logo2.png'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from 'next/link';



const Footer = () => {

   const socials = [
      {
         id: 1,
         icon: <FaTwitter className='text-xs text-white xl:text-base' /> ,
         link: `https://x.com/chinadojo1688?s=21&t=HGoX0yHzBN1HaRY7_0r9dw`
      },
      {
         id: 2,
         icon: <FaFacebookF className='text-xs text-white xl:text-base' />,
         link: ``
      },
      {
         id: 3,
         icon: <FaInstagram className='text-xs text-white xl:text-base' />,
         link: `https://www.instagram.com/chinadojologistics/profilecard/?igsh=NGFocHpkMDcyemRq`
      },
      {
         id: 4,
         icon: <FaLinkedinIn className='text-xs text-white xl:text-base' />,
         link: `https://www.linkedin.com/in/chinadojo1688`
      },
   ]


   const links = [
      {
         id: 1,
         link: 'Service',
         path: '/services'
      },
      {
         id: 2,
         link: 'Blog',
         path: '/blog'
      },
      {
         id: 3,
         link: 'About us',
         path: '/about'
      },
   ]


   const contacts = [
      {
         id: 1,
         desc: `5, Yenusa Adeniji off John Olugbo Street, Ikeja, Lagos, Nigeria.`,
      },
      {
         id: 2,
         desc: `info@chinadojo.org`,
      },
      {
         id: 3,
         desc: `+234 (0) 704 083 1673`,
      },
      {
         id: 4,
         desc: `+86 195 8746 4415`,
      },
   ]


  return (
    <main className='flex flex-col items-center w-full inter bg-white pt-36 md:pt-40 lg:pt-40 xl:pt-44'>

      <div className='relative flex flex-col items-center w-full'>
         {/* CALL TO ACTION */}
         <div className='absolute -top-14 flex flex-col items-center justify-center rounded-md w-[90%] h-60 bg-[#1A8F98] md:w-[91%] lg:h-72 xl:w-[85%] 2xl:w-[87%] xl:h-80 2xl:h-96'>
               <p className='text-xl text-white font-bold text-center md:text-2xl xl:text-3xl'>
                  Ready to Get Started?
               </p>
               <p className='text-[11px] text-white font-light text-center mt-2 w-[80%] md:text-sm md:w-[65%] md:font-extralight lg:w-[50%] xl:text-base xl:w-[40%] 2xl:w-[45%]'>
                  If you have any questions or need clarification, feel free to reach out. Let us know what you&apos;re looking for, and we&apos;ll respond promptly.
               </p>
               <a 
               href='https://api.whatsapp.com/send?phone=2348142154108&text=Hello%20ChinaDojo'
               target="_blank"
               rel="noopener noreferrer"
               className='text-[11px] text-white font-light text-center py-2.5 rounded-3xl bg-[#09CA4B] hover:bg-secondary mt-6 px-8 md:text-sm xl:text-base xl:px-10 xl:py-3 xl:mt-7'>
                    Contact us
               </a>
         </div>



         {/* ACTUAL FOOTER */}
         <div className='flex flex-col items-start w-full pt-36 pb-4 bg-[#12141D] px-5 mt-20 md:px-8 lg:px-12 xl:px-28 xl:mt-32 2xl:mt-56'>

               <div className='flex flex-col items-start w-full mt-5 md:flex-row md:justify-between md:flex-wrap md:mt-10 lg:mt-12 xl:gap-6 xl:mt-16'>
                  {/* LOGO AND SOCIALS */}
                  <div className="flex flex-col items-start mb-9">
                     <Link href={"/"}>
                         <Image className='h-[43] w-[169px] xl:h-[55px] xl:w-[210px]'
                         src={logo}
                         alt='logo' 
                         />
                     </Link>
                     <div className='flex items-center justify-start mt-7 gap-3 xl:mt-9 xl:gap-4'>
                        {socials.map((item) => (
                        <a key={item.id}
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center justify-center p-2 rounded-full bg-[#4B4B4B] hover:bg-primary xl:p-2.5'>
                           {item.icon}
                        </a>
                        ))}
                     </div>
                  </div>

                  {/* QUICK LINKS */}
                  <div className="flex flex-col items-start mb-9">
                     <p className='text-[14px] font-semibold text-white pb-0.5 xl:text-[17px]'>
                        Quick links
                     </p>

                     <div className='flex flex-col items-start'>
                        {links.map((item) => (
                        <Link 
                        key={item.id} 
                        href={item.path}
                        className='text-xs text-[#B9B3B3] font-normal mt-4 xl:text-[14px] xl:mt-6'>
                            {item?.link}
                        </Link>
                        ))}
                     </div>
                  </div>

                  {/* CONTACT AND ADDRESS */}
                  <div className="flex flex-col items-start mb-9">
                     <p className='text-[14px] font-semibold text-white pb-0.5 xl:text-[17px]'>
                        Contact
                     </p>

                     <div className='flex flex-col items-start'>
                        {contacts.map((item) => (
                        <p key={item.id} className='text-xs text-[#B9B3B3] font-normal mt-4 max-w-44 leading-5 xl:text-[14px] xl:mt-6'>
                            {item.desc}
                        </p>
                        ))}
                     </div>
                  </div>

                  {/* SUBSCRIBE TO NEWSLETTER */}
                  <div className="flex flex-col items-start mb-9 w-full md:w-72 lg:w-60 xl:w-80 2xl:w-96">
                     <p className='text-[14px] font-semibold text-white pb-0.5 xl:text-[17px]'>
                        Subscribe to Newsletter
                     </p>

                     <div className='flex items-center justify-start h-10 mt-4 w-[80%] md:w-full xl:mt-6 xl:h-[52px]'>
                        <input className='h-full w-[60%] text-[#8A8A8A] text-[11px] font-light bg-white px-4 placeholder:text-[#8A8A8A] rounded-l-md outline-primary
                                          xl:text-[13px] xl:px-5 xl:rounded-l-lg'
                        type='email'
                        placeholder='Enter email address'
                         />

                         <button className='text-center text-white text-xs font-semibold w-[40%] h-full bg-primary rounded-r-md xl:text-base xl:rounded-r-lg'
                         title='Join'
                         type='submit'
                         >
                           Join
                         </button>
                     </div>
                  </div>


               </div>

               <hr className='mt-0 w-full border-[#8A8A8A] md:mt-5 lg:mt-12 xl:mt-20' />

               <p className='text-[11px] text-white font-light pt-6 pb-2 text-center w-full xl:text-[13px] xl:pt-8 xl:pb-3'>
                  © Copyright 2024, All Rights Reserved by chinadojo
               </p>

         </div>


         </div>
    </main>
  )
}

export default Footer
