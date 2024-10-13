"use client"

import React, { useState } from 'react'
import CBM from './CBM'
import LandingPrice from './LandingPrice'

const ShippingContents = () => {
    const [active, setActive] = useState<number>(1)

    const tabs = [
        {
            id: 1,
            title: 'CBM Calculator',
        },
        {
            id: 2,
            title: 'Landing Price Calculator',
        },
    ]

    const handleTab = (item: number) => {
        setActive(item)
    }

  return (
    <main className='flex flex-col items-center w-full bg-white px-5 pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>

        <div className='flex items-center justify-between w-full md:w-[50%] lg:w-[40%] xl:w-[35%] max-w-screen-xl'>
            {tabs.map((item) => (
            <p key={item.id} onClick={()=>handleTab(item.id)}
            style={{color: active === item.id ? `#1A8F98` : `#333636`}}
            className={`text-sm font-medium cursor-pointer md:text-[15px] xl:text-lg`}>
                {item.title}
            </p>
            ))}
        </div>


        { 
          active === 1 ?
          <div className='flex items-center justify-center w-full'>
            <CBM />
          </div>
          :active === 2 &&
          <div className='flex items-center justify-center w-full'>
             <LandingPrice />
          </div>
        }

    </main>
  )
}

export default ShippingContents
