import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google"
import "./globals.css";
import ReduxWrapper from "./reduxWrapper";

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
         <body
           className={`${clash_display.variable} ${inter_init.variable} antialiased`}
         >
           {children}
         </body>
       </html>
    </ReduxWrapper>
  );
}
