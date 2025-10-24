/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google"
import "./globals.css";
import ReduxWrapper from "./reduxWrapper";
import Head from 'next/head';
import Script from 'next/script';

const clash_display = localFont({
  src: "./fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  weight: "100 900",
});

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "Chinadojo",
  description: "Grow your business with our logistics service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxWrapper>
      <html lang="en">
         <Head>
           <noscript>
             <img
               height="1"
               width="1"
               style={{ display: 'none' }}
               src="https://www.facebook.com/tr?id=1267725807273799&ev=PageView&noscript=1"
               alt=""
             />
           </noscript>
         </Head>
         <body
           className={`${clash_display.variable} ${inter_init.variable} antialiased`}
         >
           {children}
           <Script id="meta-pixel" strategy="afterInteractive">
             {`
               !function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '1267725807273799');
               fbq('track', 'PageView');
             `}
           </Script>
         </body>
       </html>
    </ReduxWrapper>
  );
}
