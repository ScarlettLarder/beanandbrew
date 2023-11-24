import type { Metadata } from 'next'
import { Aleo } from 'next/font/google'
import './globals.css'

const aleo = Aleo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <header className='bg-beangreen bg-[url("/Header_bg.svg")] bg-center bg-cover left-0 right-0 sticky'>
          <div className='justify-between flex mx-10'>
            <div className='py-5 text-3xl'>
              <a href='/' className='hover:text-lightbeangreen duration-100 ease-in-out'>Bean and Brew</a>
            </div>
            <div>
              <div className='py-6 text-2xl '>
                <a href='/products' className='hover:text-lightbeangreen duration-100 ease-in-out mr-5'>Products</a>
                <a href='/pick-up' className='hover:text-lightbeangreen duration-100 ease-in-out mr-5'>Pick-up</a>
                <a href='/booking' className='hover:text-lightbeangreen duration-100 ease-in-out mr-5'>Booking</a>
                <a href='/login' className='hover:text-lightbeangreen duration-100 ease-in-out mr-5'>Login</a>
              </div>
            </div>
          </div>
        </header>
        {children}</body>
    </html>
  )
}
