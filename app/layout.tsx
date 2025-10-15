import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hilink | Travel',
  description: 'Travel UI/UX App for Camping',
    icons: {
    icon: '/favicon.ico',       
    shortcut: '/favicon-16x16.png',     
    apple: '/favicon-32x32.png',       
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
