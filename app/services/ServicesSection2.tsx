import React from 'react'

const ServicesSection2 = () => {

    const contents = [
        {
            id: 1,
            title: `Timely and effective shipping is ensured by a skilled logistics crew.`,
            desc: `Your orders are shipped promptly and effectively by our knowledgeable logistics staff, guaranteeing that you receive your orders on time and in good condition.`,
        },
        {
            id: 2,
            title: `Competitive rates for shipping to any destination`,
            desc: `We provide affordable shipping costs to every location, guaranteeing that you get the most for your money.`,
        },
        {
            id: 3,
            title: `Customer Satisfaction`,
            desc: `Customer satisfaction is always our primary goal at Chinadojo. We put customers at the heart of every choice we make, and we go above and beyond to make sure they are satisfied with our goods and services. Our clients are the reason we are in business, so their pleasure is extremely important to us.`,
        },
        {
            id: 4,
            title: `Excellent customer care is offered around-the-clock for all shipping-related questions`,
            desc: `Our customer service team is available 24/7 to answer any shipping-related inquiries and provide assistance whenever you need it. Whether you have questions about your order, need help with tracking, or have any other concerns, we’re here to help.`,
        },
        {
            id: 5,
            title: `Full range of shipping options, including air, sea, and ground transportation`,
            desc: `We offer a full range of shipping options, including air, sea, and ground transportation, to meet the diverse needs of our customers. No matter what you’re shipping or where it needs to go, we have a solution that will work for you.`,
        },
        {
            id: 6,
            title: `Internal customs brokerage for efficient shipping abroad`,
            desc: `Our internal customs brokerage facilitates seamless international shipping by managing all the paperwork and processes to assure easy customs clearance. By doing this, you can prevent delays and guarantee that your shipments get to their destination on time.`,
        },
    ]


  return (
    <main className='flex flex-col items-start w-full bg-white px-5 pt-20 pb-12 md:px-8 md:pt-24 lg:px-12 lg:pt-28 lg:pb-20 xl:px-28 xl:pt-40 xl:pb-32 2xl:pt-44 2xl:pb-36'>

        <h3 className='clash text-primary text-xl font-medium mt-2.5 leading-8 md:font-medium md:text-2xl lg:font-semibold lg:text-[26px] lg:mt-3 lg:leading-9 
                             xl:text-4xl xl:leading-[44px] xl:mt-5'>
                Why you should  <br />
                use our Services
        </h3>


        <div className='flex items-center justify-start flex-wrap w-full mt-10 gap-5 lg:gap-6 xl:gap-7 max-w-screen-xl'>
            {contents.map((item) => (
            <div key={item.id} className='flex flex-col items-start justify-start w-full h-80 px-5 pt-7 pb-2.5 bg-[#F5F5F6] rounded-lg md:w-[46%] lg:w-[31%] lg:h-96 
                                          lg:rounded-xl xl:w-[31%] xl:h-[450px] xl:pt-10 xl:pb-3'>
                <p className='text-base font-medium text-black lg:text-lg xl:text-[22px] xl:leading-8'>
                   {item.title}
                </p>
                <p className='text-xs font-normal text-black mt-5 leading-7 lg:text-[13px] xl:mt-7 xl:text-base xl:leading-9'>
                    {item.desc}
                </p>
            </div>
            ))}
        </div>

    </main>
  )
}

export default ServicesSection2
