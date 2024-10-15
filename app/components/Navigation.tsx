"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
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


  return (
    <main className='flex items-center justify-center w-full inter md:px-8 lg:px-12 xl:px-28'>

        <div className={`flex flex-col items-center w-full py-5 z-50 md:mt-6 md:rounded-2xl md:py-2.5 md:shadow-sm md:border-[0.5px] lg:flex-row lg:justify-between 
                         lg:px-5 lg:h-max lg:py-2 lg:rounded-xl lg:bg-white lg:mt-5 xl:mt-7 xl:py-3
            ${open ? 'bg-[#EEF2F6] fixed top-0 h-full md:w-[91.6%] justify-start md:h-full md:mt-12 lg:relative' : 'bg-transparent md:bg-white'}`}>

            <div className='flex items-center justify-between w-full px-5 lg:px-0 lg:w-max'>
                <Link href={'/'}>
                   <Image className='h-full'
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
