"use client"

import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import BrowseNews from '../BrowseNews'
import Image from 'next/image'
import { IoBookOutline, IoTimeOutline } from 'react-icons/io5'
import sanityClient from '../../../blogClient'
import { PulseLoader } from 'react-spinners'
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment'
import BlockContent from "@sanity/block-content-to-react"
import { usePathname } from 'next/navigation'




interface BlogPost {
    slug: { current: string };
    mainImage: { asset: { _ref: string } };
    title: string;
    body: { children: { text: string }[] }[];
    publishedAt: string;
    readngTime: string;
}

// interface BlockContentProps {
//   blocks: any[];
//   projectId: string;
//   dataset: string;
//   serializers: {
//     types: {
//       heading: (props: { children: React.ReactNode }) => JSX.Element;
//       link: (props: { children: React.ReactNode; node: { url: string; children: { text: string }[] } }) => JSX.Element;
//     };
//     mark: {
//       bold: (props: { children: React.ReactNode }) => JSX.Element;
//     };
//     text: (props: { children: React.ReactNode }) => JSX.Element;
//     list: (props: { children: React.ReactNode }) => JSX.Element;
//     listItem: (props: { children: React.ReactNode }) => JSX.Element;
//   };
//   imageOptions: {
//     fit: string;
//     [key: string]: string | number | { w: number; h: number };
//   };
// }


interface SerializersProps {
  children: React.ReactNode;
  node?: {
    url: string;
    children: { text: string }[];
  };
  href?: string;
}



const Page = () => {
  const [story, setStory] = useState<BlogPost | any>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null);
   
  const pathname = usePathname();
  const slug = pathname.split('/').pop();


  useEffect(() => { 
    sanityClient.fetch(
        `
        *[slug.current == "${slug}"]{
            ...,
            content[]->{
                ...,
            }
          }
        `
    )
    .then((data) => {
      setStory(data[0]);
        setLoading(false);
        // console.log(data[0], 'STORIES');
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setLoading(false);
      });
},[slug])


if (loading) {
    return (
    <div className='flex items-center justify-center h-screen w-full'>
      <PulseLoader
        size={15} // size of the loader (in pixels)
        color={'#1A8F98'} // color of the loader
        loading={true} // boolean to show/hide the loader
      />
    </div>
  );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const builder = imageUrlBuilder(sanityClient);


  const heading = 'Check Related Articles and News'


  return (
    <main className="flex flex-col items-start justify-start w-full h-screen bg-[#FFFFFF] max-w-[1680px] mx-auto">
      <Navigation blogTab={'#1A8F98'} aboutTab={'#0F131B'} servicesTab={'#0F131B'} shippingTab={'#0F131B'}  />

      <div className='flex flex-col items-start w-full bg-white px-5 pt-16 max-w-screen-xl md:px-8 md:pt-20 lg:px-12 lg:pt-24 xl:px-28 xl:pt-36'>
        <p className='text-[16px] text-[#130F26] font-medium text-start w-full font-sans pt-2 md:pt-3 md:text-[18px] lg:text-[22px] xl:text-[28px] xl:pt-4'>
              {story?.title}
         </p>

         <Image className='mt-7 rounded-xl h-[250px] object-cover w-full md:h-[325px] md:rounded-[20px] lg:h-[425px] lg:rounded-[22px] xl:h-[600px] 
                           xl:rounded-[26px] xl:mt-10' 
         src={builder.image(story?.mainImage?.asset?._ref)?.url()} 
         width={800}
         height={600}
         quality={90}
         loading='lazy' 
         alt={story?.title}
         />


         <hr className='border-[1px] border-[#D0D5DD] opacity-50 w-full mt-5 md:mt-6 lg:mt-7 lg:w-[90%] xl:mt-8' />

         <div className='flex items-center justify-between w-full text-[#7B8794] mt-4 mb-3 md:mb-0 lg:mb-2 lg:mt-7 lg:w-[90%] xl:mt-9 xl:mb-3'>
             <div className='flex items-center justify-start w-[70%] md:w-[50%]'>
                <div className='flex justify-start items-center'>
                    <IoTimeOutline className='text-base md:text-lg xl:text-xl' />
                    <p className='text-[10px] font-normal text-start pl-1.5 pt-[2px] lg:text-[11px] xl:text-sm'>
                         {moment(story?.publishedAt).format('D MMMM, YYYY')}
                    </p>
                </div>
             </div>

             <div className='flex justify-end items-center w-[35%] md:w-[50%]'>
                 <div className='flex justify-end items-center'>
                     <IoBookOutline className='text-base xl:text-xl' />
                     <p className='text-[10px] font-normal pl-1.5 pt-[2px] lg:text-[11px] xl:text-sm'>
                         {story?.readngTime} read
                     </p>
                 </div>
              </div>
         </div>

         <BlockContent
              blocks={story?.body}
              projectId="5dpr21dm"
              dataset="blog"
              serializers={{
                types: {
                  heading: (props: SerializersProps) => (
                    <h2 className="text-2xl font-bold">{props.children}</h2>
                  ),
                },
                mark: {
                  bold: (props: SerializersProps) => (
                    <span className="font-bold text-red-500">{props.children}</span>
                  ),
                },
                text: (props: SerializersProps) => (
                  <span className="text-[11px] text-[#7B8794] leading-6 pt-1.5 text-start md:leading-[23px] lg:text-xs lg:leading-6 
                                   xl:pt-2 xl:text-base xl:leading-8">
                    {props.children}
                    </span>
                ),
                list: ({ children }: SerializersProps) => (
                  <ul className="text-[11px] text-[#7B8794] font-normal list-decimal leading-6 ml-4 pt-1.5 text-start w-full md:leading-[23px] lg:text-xs lg:leading-6 
                                 xl:pt-2 xl:text-base xl:leading-8">
                    {children}
                  </ul>
                ),
                listItem: ({ children }: SerializersProps) => (
                  <li className="text-[11px] text-[#7B8794] font-normal leading-6 pt-1.5 text-start w-full md:leading-[23px] lg:text-xs lg:leading-6 
                                  xl:pt-2 xl:text-base xl:leading-8">
                    {children}
                  </li>
                ),
                type: {
                  link: ({ children, href }: SerializersProps) => {
                    return <a href={href}className='text-red-600'>{children}</a>;
                  },
                },
                type2: {
                  link: (props: any) => {
                    const href = props.node.url;
                    return (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <span style={{ textDecoration: 'underline' }}>
                          {props.node.children[0].text}
                        </span>
                      </a>
                    );
                  },
                },
                
               }}
               imageOptions={{
                fit: 'max',
                w: window.innerWidth > 768 ? 650 : 350,
                h: window.innerWidth > 768 ? 700 : 400,
              }}
            />
        </div>

      <BrowseNews title={heading} />
      <Footer />
      
    </main>
  )
}

export default Page