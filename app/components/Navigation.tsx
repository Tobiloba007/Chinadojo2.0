"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import { IoCloseOutline } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'


interface Props {
    aboutTab: string,
    blogTab: string,
    shippingTab: string,
    servicesTab: string,
}

const Navigation = ({aboutTab, blogTab, servicesTab, shippingTab}: Props) => {
    const [open, setOpen] = useState<boolean>(false)

    const navigation = [
        {
            id: 1,
            name: 'About us',
            link: '/about',
            active: aboutTab
        },
        {
            id: 2,
            name: 'Services',
            link: '/services',
            active: servicesTab
        },
        {
            id: 3,
            name: 'Shipping tools',
            link: '/shipping',
            active: shippingTab
        },
        {
            id: 4,
            name: 'Blog',
            link: '/blog',
            active: blogTab
        },
        {
            id: 5,
            name: 'Rate',
            link: '/',
            hash: 'rates-section'
        },
    ]


     const [isSticky, setIsSticky] = useState<boolean>(false);

     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 50) {
           setIsSticky(true);
         } else {
           setIsSticky(false);
         }
       };

       window.addEventListener('scroll', handleScroll);

       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);


  return (
    <main className='relative flex items-center justify-center w-full h-full inter md:px-8 lg:px-12 xl:px-28'>

        <div className={`flex flex-col items-center w-full py-5 z-50 md:rounded-2xl md:py-2.5 md:shadow-sm md:border-[0.5px] lg:flex-row lg:justify-between 
                        lg:px-5 lg:h-max lg:py-2 lg:rounded-xl lg:bg-white xl:py-3 xl:rounded-2xl
            ${open ? 'bg-[#EEF2F6] fixed top-0 h-full md:w-[91.6%] justify-start md:h-full md:mt-12 lg:relative' : 'bg-transparent md:bg-white'}
            ${isSticky ? `fixed top-0 mt-0 mx-auto w-[100%] z-50 transition duration-1000 ease-linear rounded-2xl py-[7px] shadow-sm border-[0.5px]
                         bg-white md:top-0 md:mt-0 md:inset-x-7 md:w-[calc(100%-4rem)] lg:inset-x-7 lg:w-[calc(100%-6rem)] xl:inset-x-7 xl:w-[calc(100%-14rem)]`
                        : 'md:mt-6 lg:mt-5 xl:mt-7'}
            `}>

            <div className='flex items-center justify-between w-full px-5 lg:px-0 lg:w-max'>
                <Link href={'/'}>
                   <Image className='h-[43] w-[169px] xl:h-[55px] xl:w-[210px]'
                   src={logo}
                   alt='logo'
                   />
                </Link>

                {
                  open 
                  ?
                  <IoCloseOutline onClick={()=>setOpen(false)}
                  className='text-black text-3xl cursor-pointer lg:hidden' /> 
                  :
                  <LuMenu onClick={()=>setOpen(true)}
                  className='text-black text-3xl cursor-pointer lg:hidden' />

                }   
            </div>


            <div className={`flex flex-col items-center justify-start mt-20 text-[#0F131B] md:mt-16 lg:gap-7 lg:mt-0 xl:gap-10
                ${open ? 'flex lg:flex-row' : 'hidden lg:flex lg:flex-row'}`}>
                   {navigation.map((item)=>(
                      <Link key={item?.id} 
                      style={{ color: item.active }} 
                      className={`text-sm font-normal py-8 md:text-[15px] lg:text-xs lg:py-0 xl:text-[14px]`} 
                      href={
                        item?.hash
                          ? { pathname: item.link, hash: item.hash }
                          : item.link
                      }
                    //   scroll={true}
                      >
                          {item?.name}
                      </Link>
                   ))}
            </div>

 
           <div className={`flex items-center justify-center mt-16 lg:mt-0 
            ${open ? 'flex lg:flex-row' : 'hidden lg:flex lg:flex-row'}`}>
                <Link className='text-sm font-medium text-[#273F2B] bg-secondary rounded-lg py-2.5 px-10 md:text-[15px] lg:px-6 lg:text-xs lg:py-1.5 xl:text-[14px] 
                                 xl:py-2 xl:px-7 xl:rounded-[10px]'
                href={{ pathname: '/', hash: 'contact' }}
                >
                     Contact Us
                </Link>
           </div>
           
        </div>

    </main>
  )
}

export default Navigation
