import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Dickies Barber Shop',
  description: 'Dickies Barber Shop',
  // icons: {
  //   icon: icon.src,
  //   shortcut: icon.src,
  //   apple: icon.src
  // }
  icons: 'logo3.png'
}

export const RootLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <html lang={'vi'}>
      {/* <head >
        <link rel="icon" href="/logo3.png" type="image/x-icon" sizes="16x16"></link>
      </head> */}
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <NavBar/>
            {children}
            <Analytics />
            <Footer/>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
export default RootLayout
