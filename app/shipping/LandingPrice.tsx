"use client"

import React, { useState } from 'react'

const LandingPrice = () => {
    const [goods, setGoods] = useState<number | any>();
    const [weight, setWeight] = useState<number | any>();
    const [shipping, setShipping] = useState<number | any>();
    const [clearing, setClearing] = useState<number | any>();
    const [rate, setRate] = useState<number | any>(null);
    const [result, setResult] = useState(false);

    const shippingFee =  ((weight * shipping) * rate).toFixed(1)
    const clearingFee =  (weight * clearing).toFixed(1)
    const landingCost = parseInt(goods) + parseInt(shippingFee) + parseInt(clearingFee)
    
    const calculate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(true);
    }

  return (
    <div className='flex flex-col items-center justify-center w-full mt-12 mb-10 max-w-screen-lg'>

                    {/* SUB-TITLE */}
       <div className='flex items-center justify-center w-full'>
            <h1 className='text-sm text-[#ffffff] font-semibold text-center bg-[#1A8F98] py-3.5 px-10 rounded-lg md:text-[14px] md:py-3 md:px-12 lg:text-sm lg:py-2.5 
                            xl:text-[17px] xl:mb-5 xl:px-16 xl:py-4'>
              LANDING COST CALCULATOR
            </h1>
        </div>

       <div className='flex flex-col items-center justify-center w-full mt-8 md:mt-5 lg:flex-row lg:mt-12'>
                     {/* CALCULATOR */}
        <form onSubmit={calculate}
        className='flex flex-col items-start justify-start h-[31rem] rounded-md w-full bg-[#f1f1f1] px-5 pt-5 md:w-[75vw] md:px-20 lg:w-[43vw] 
        lg:h-[26rem] lg:mr-5 lg:px-7 xl:w-[41vw] xl:h-[28rem]'>
                         {/* Price of Goods */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="goods">
                    Price of Goods (₦)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Price of Goods'
                id="goods"
                value={goods}
                onChange={(e) => setGoods((e.target.value))}
               />
            </div>
                               {/* Weight */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="weight">
                    Weight (kg)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Weight'
                id="weight"
                value={weight}
                onChange={(e) => setWeight((e.target.value))}
               />
            </div>
                                  {/* Shipping Fee */}             
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="shipping">
                    Shipping Fee ($)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Shipping Fee'
                id="shipping"
                value={shipping}
                onChange={(e) => setShipping((e.target.value))}
               />
            </div>
                                    {/* Clearing Fee */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="clearing">
                    Clearing Fee (₦)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Clearing Fee'
                id="clearing"
                value={clearing}
                onChange={(e) => setClearing((e.target.value))}
               />
            </div>
                                     {/* Exchange Rate */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="rate">
                    Exchange Rate
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Exchange Rate'
                id="rate"
                value={rate}
                onChange={(e) => setRate((e.target.value))}
               />
            </div>
                          {/* BUTTON */}     
            <div className='flex items-start justify-start mt-3 lg:mx-20 xl:mx-24'>
                <button type='submit'
                className='text-center text-[13px] font-normal outline-none border-none py-2 px-5 bg-[#1A8F98] text-[#ffff]
                 hover:bg-[#F8C605] hover:text-[#474545] rounded-md lg:px-6 xl:text-[15px]'>
                    CALCULATE
                </button>
            </div>

        </form>
                      {/* LANDING COST */}
        {result ? 
        <div className='flex flex-col items-start justify-start h-64 rounded-md w-full bg-[#f1f1f1] mt-4 px-5 pt-4 md:w-[75vw] md:px-20 md:pt-6
        lg:w-[35vw] lg:mt-0 lg:pt-5 lg:ml-5 lg:px-5 lg:h-72 xl:w-[40vw] xl:pt-7 xl:h-64'>
            <h1 className='font-semibold pb-2 text-lg text-[#1A8F98] md:pb-2 md:text-xl xl:text-xl'>
                Landing Cost
            </h1>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Price of Goods :
                </h1>
                <h1 className='text-[12px] font-bold ml-3 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    {goods}
                </h1>
            </div>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Shipping in (₦) :
                </h1>
                <h1 className='text-[12px] font-bold ml-3 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    ({weight} * {shipping}) * {rate} = {shippingFee} ₦
                </h1>
            </div>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Clearing Total :
                </h1>
                <h1 className='text-[12px] font-bold ml-5 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    {weight} * {clearing} = {clearingFee} ₦
                </h1>
            </div>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Landing Cost :
                </h1>
                <h1 className='text-[12px] font-bold ml-6 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    {goods} + {shippingFee}  + {clearingFee} = {landingCost} ₦
                </h1>
            </div>
        </div> : ''
            }

       </div>

    </div>
  )
}


export default LandingPrice
