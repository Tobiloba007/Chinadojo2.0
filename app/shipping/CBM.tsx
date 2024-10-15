"use client"

import React, { useState } from 'react'
import { FaEquals } from 'react-icons/fa'


const CBM = () => {
    const [length, setLength] = useState<number | any>();
    const [width, setWidth] = useState<number | any>();
    const [height, setHeight] = useState<number | any>();
    const [result, setResult] = useState<number | string | null>(null);

    const lengthMeter: number = length !== null ? (length / 100) : 0
    const widthMeter: number =  width !== null ? (width / 100) : 0
    const heightMeter: number = height !== null ? (height / 100) : 0
    const cubicMeter: number = lengthMeter * widthMeter * heightMeter;
    const meterCube = cubicMeter.toFixed(5)
    const cubicFeetCal = cubicMeter * 35.3147 
    const cubicFeet = (Math.ceil(cubicFeetCal * 10) / 10).toFixed(1)

    const calculateCubicMeter = () => {
        if (!length || !width || !height) return;
        const calculate = length * width * height / 1000000;
        const cubicResult =  (Math.ceil(calculate * 10) / 10).toFixed(1)
        setResult(cubicResult);
      };


  return (
    <div className='flex flex-col items-center justify-center w-full mt-12 mb-10 max-w-screen-xl'>

                        {/* SUB-TITLE */}
        <div className='flex items-center justify-center w-full'>
            <h1 className='text-sm text-[#ffffff] font-semibold bg-[#1A8F98] py-3.5 px-10 rounded-lg md:text-[14px] md:py-3 md:px-12 lg:text-sm lg:py-2.5 
                            xl:text-[17px] xl:mb-5 xl:px-16 xl:py-4'>
              CUBIC METER CALCULATOR
            </h1>
        </div>
                        
        <div className='flex flex-col items-center justify-center w-full mt-8 md:mt-10 lg:flex-row'>
                         {/* CALCULATOR */}
        <div className='flex flex-col items-start justify-start h-72 rounded-md w-[85vw] bg-[#f1f1f1] px-5 pt-5 md:px-20 lg:w-[62vw] 
        lg:mr-3 xl:px-36'>
                     {/* LENGTH */}
            <div className='flex items-center justify-start w-full my-[10px]'>
               <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-36 pl-5 md:w-44'
                type="number" 
                placeholder='Length'
                id="length"
                value={length}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLength(Number(e.target.value))}
               />
               <h1 className='text-lg ml-2 text-[#646262] xl:text-xl'>cm</h1>
            </div>
                      {/* WIDTH */}
            <div className='flex items-center justify-start w-full my-[10px]'>
               <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-36 pl-5 md:w-44'
                type="number" 
                placeholder='Width'
                id="width"
                value={width}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidth(Number(e.target.value))}
               />
               <h1 className='text-lg ml-2 text-[#646262] xl:text-xl'>cm</h1>
            </div>
                        {/* HEIGHT */}
            <div className='flex items-center justify-start w-full my-[10px]'>
               <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-36 pl-5 md:w-44'
                type="number" 
                placeholder='Height'
                id="height"
                value={height}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value))}
               />
               <h1 className='text-lg ml-2 text-[#646262] xl:text-xl'>cm</h1>
            </div>
            
                          {/* ANSWER */}
            <div className='flex items-center justify-center w-full my-[10px] md:mt-4'>
                <FaEquals 
                onClick={calculateCubicMeter}
                className='text-4xl bg-[#1A8F98] text-[#ffff] py-1 px-1 rounded-md' />

               <input 
                className='border-[0.1em] border-[#1A8F98] rounded-md outline-[#1A8F98] h-10 w-36 pl-4 mx-2 ml-4 md:w-44'
                type="number" 
                value={result === null ? '' : result}
                readOnly
                placeholder='?'
               />

               <h1 className='text-base text-[#646262] md:text-lg xl:text-xl'>cm<sup>3</sup> <small className='text-[10px] md:text-[13px] xl:text-[16px]'>(Cubic Meter)</small></h1>
            </div>
        </div>


                           {/* RESULTS */}
         {length || width || height ?
        <div className='flex flex-col items-start justify-start h-72 rounded-md w-[85vw] bg-[#f1f1f1] mt-4 px-5 pt-6 md:px-20 
        lg:w-[30vw] lg:mt-0 lg:ml-3 lg:px-5 lg:h-60'>
            <h1 className='text-center w-full font-semibold pb-2 text-base text-[#1A8F98] md:pb-2 md:text-xl xl:text-xl'>
                RESULTS
            </h1>

            <h1 className='my-2 text-[16px] md:text-[18px] md:my-3 lg:text-[15px] lg:my-1 xl:text-[17px]'>
                {length} * {width} * {height} cm = <b>{meterCube} m<sup>3</sup></b> = <b>{cubicFeet} ft<sup>3</sup></b>
            </h1>

            <h1 className='my-2 text-[16px] md:text-[18px] md:my-3 lg:text-[15px] lg:my-1 xl:text-[17px]'>
                {length} cm = <b>{lengthMeter} m</b>, {width} cm = <b>{widthMeter} m</b>, {height} cm = <b>{heightMeter} m</b>,
            </h1>

            <h1 className='my-2 text-[16px] md:text-[18px] md:my-3 lg:text-[15px] lg:my-1 xl:text-[17px]'>
                 {lengthMeter} * {widthMeter} * {heightMeter} = <b>{meterCube} cbm</b>
            </h1>
        </div> : ''
             }

        </div>

    </div>
  )
}

export default CBM
