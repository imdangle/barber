'use client'
import React from 'react'
import Hero from '@/components/Hero'
import bgc from '../../public/ImagesGallery/0G2A9783.jpg.webp'
import OpeningOurs from '@/components/OpeningOurs'
import PriceList from '@/components/PriceList'
import OurServices from '@/components/OurServices'
import Photos from '@/components/Photos'
import theme from '@/components/ThemeRegistry/theme'
import SocailMedia from '@/components/SocialMedia/SocialMedia'

export const Home = (): React.JSX.Element => {
  return (
    <>
      <Hero
        sx={{
          backgroundImage: `url(${bgc.src})`,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          backgroundPosition: 'top 10% right 35%', // Di chuyển hình nền sang phải 10%
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center'
        }}
        sxGradient={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
          'linear-gradient(0deg, #2C3639 0%, rgba(1, 1, 1, 0.4) 100%);'
        }}
        sxH1={{
          [theme.breakpoints.up('md')]: {
            marginBottom: '20px'
          },
          marginBottom: '20px'
        }}
        sxText={{
          [theme.breakpoints.up('md')]: {
            width: '500px',
            marginBottom: '20px'
          },
          width: 'auto',
          marginBottom: '20px'
        }}
        header={'Xin chào!'}
        text={'Xin chào chúng tôi là Dickies Barber Shop, nơi mang đến những trải nghiệm dịch vụ cắt tóc chuyên nghiệp.'}
        buttonText={'Đặt lịch'}
      />
      <OpeningOurs/>
      <PriceList/>
      <OurServices/>
      <Photos/>
      <SocailMedia/>
    </>
  )
}
export default Home
