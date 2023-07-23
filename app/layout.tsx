'use client'

import { Nunito } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/app/components/navbar/Navbar'
import NavbarModal from '@/app/components/modals/NavbarModal'
import Footer from './components/sections/Footer'

const font = Nunito ({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`dark:bg-[rgb(36,36,36,36)] ${font.className}`}>
      <ThemeProvider enableSystem={true} attribute="class">
        <NavbarModal label={''} page={''}/>
        <Navbar /> 
        <div>
          {children}
        </div>
        <Footer/>
      </ThemeProvider>
     </body>
    </html>
  )
}
