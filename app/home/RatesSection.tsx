"use client"
import React, { useEffect, useState } from 'react'

const RatesSection = () => {
    // const [getRates, setGetRates] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => { 
    //     sanityClient.fetch(
    //         `
    //         *[_type == 'rateInformation']{
    //             ...,
    //             content[]->{
    //                 ...,
    //             }
    //           }
    //         `
    //     )
    //     .then((data) => {
    //         setGetRates(data);
    //         setLoading(false);
    //         // console.log(data, 'RATES');
    //       })
    //       .catch((err) => {
    //         setError(err);
    //         console.log(err);
    //         setLoading(false);
    //       });
    // },[])

    // if (loading) {
    //     return <p>Loading...</p>;
    //   }
    
    //   if (error) {
    //     return <p>Error: {error.message}</p>;
    //   }

    const getRates = [
        {
            id: 1,
            section: {
                sectionTitle: 'Air Cargo',
                rateOptions: [
                    {
                        _key: '987f6543d467dd',
                        type: 'Normal goods (Above 10kg)',
                        rate: '$7.2',
                        clearingFee: '₦850',
                        duration: '10 days'
                    },
                    {
                        _key: 'dnuy654323456',
                        type: 'Normal goods (Below 10kg)',
                        rate: '$7.4',
                        clearingFee: '₦850',
                        duration: '10 Days'
                    },
                ]
            }
        },
        {
            id: 2,
            section: {
                sectionTitle: 'Air Cargo',
                rateOptions: [
                    {
                        _key: '987f6543d467dd',
                        type: 'Normal goods (Above 10kg)',
                        rate: '$7.2',
                        clearingFee: '₦850',
                        duration: '10 days'
                    },
                    {
                        _key: 'dnuy654323456',
                        type: 'Normal goods (Below 10kg)',
                        rate: '$7.4',
                        clearingFee: '₦850',
                        duration: '10 Days'
                    },
                ]
            }
        },
        {
            id: 3,
            section: {
                sectionTitle: 'Air Cargo',
                rateOptions: [
                    {
                        _key: '987f6543d467dd',
                        type: 'Normal goods (Above 10kg)',
                        rate: '$7.2',
                        clearingFee: '₦850',
                        duration: '10 days'
                    },
                    {
                        _key: 'dnuy654323456',
                        type: 'Normal goods (Below 10kg)',
                        rate: '$7.4',
                        clearingFee: '₦850',
                        duration: '10 Days'
                    },
                ]
            }
        },
        {
            id: 4,
            section: {
                sectionTitle: 'Air Cargo',
                rateOptions: [
                    {
                        _key: '987f6543d467dd',
                        type: 'Normal goods (Above 10kg)',
                        rate: '$7.2',
                        clearingFee: '₦850',
                        duration: '10 days'
                    },
                    {
                        _key: 'dnuy654323456',
                        type: 'Normal goods (Below 10kg)',
                        rate: '$7.4',
                        clearingFee: '₦850',
                        duration: '10 Days'
                    },
                ]
            }
        },
    ]


  return (
    <main className='flex flex-col items-center w-full bg-white px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-28 xl:py-36'>
          <div className='flex flex-col items-center w-full max-w-4xl'>
              <div className='flex flex-col items-start clash'>
                  <h3 className='text-texts text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                                   xl:text-4xl xl:leading-[44px] xl:mt-5'>
                      Our  Rates Today
                  </h3>
              </div>

              <div className='mt-3 inter w-[90%] md:mt-5 md:w-[50%]'>
                  <p className='text-texts text-[13px] leading-5 text-center w-full lg:text-sm lg:leading-6 xl:text-[17px] xl:leading-8'>
                      Although rates are variable and may differ from published rates, they are updated daily.
                  </p>
              </div>
          </div>



          <table className='flex flex-col items-center justify-start w-[90vw] mt-5 md:w-full xl:mt-10'>
            <thead>
                <tr className='clash w-[80vw] font-semibold bg-[#F8C605] h-14 lg:h-16 xl:h-20'>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg xl:text-[16px]' scope='col'>Type</th>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 xl:text-[16px]' scope='col'>Rate</th>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 xl:text-[16px]' scope='col'>Clearing Fee</th>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg xl:text-[16px]' scope='col'>Duration</th>
                </tr>
            </thead>

            {getRates.map((item) => {
                return(
            <tbody key={item.id} className='mt-2.5'>
                <tr className='clash w-[80vw] bg-[#c0bebe] h-10 mt-5 lg:h-16 xl:h-20'>
                    <td className='text-center text-[16px] font-semibold w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[18px] lg:text-[20px] lg:font-bold xl:text-[25px]'>{item.section.sectionTitle}</td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                </tr>

                {item.section.rateOptions.map((item) => (
                <tr key={item._key} className='w-[80vw] h-14 odd:bg-[#efefef] even:bg-white lg:h-16 xl:h-20'>
                    <td className='text-center text-[10px] w-24 pl-3 md:text-[12px] md:w-40 lg:w-44 xl:w-60 rounded-l-lg lg:font-bold xl:text-[16px]'>{item.type}</td>
                    <td className='text-center text-[10px] w-24 md:text-[12px] md:w-40 lg:w-44 xl:w-60 lg:font-bold xl:text-[16px]'>{item.rate}</td>
                    <td className='text-center text-[10px] w-24 md:text-[12px] md:w-40 lg:w-44 xl:w-60 lg:font-bold xl:text-[16px]'>{item.clearingFee}</td>
                    <td className='text-center text-[10px] w-24 md:text-[12px] md:w-40 lg:w-44 xl:w-60 rounded-r-lg lg:font-bold xl:text-[16px]'>{item.duration}</td>
                </tr>
                ))}
            </tbody>
                )
            })}
            
        </table>


    </main>
  )
}

export default RatesSection
