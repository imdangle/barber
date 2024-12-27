import React from 'react'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import aboutBgcImage from './backgroundHeader.jpg'

export const ContactPage = (): React.JSX.Element => {
  return (
    <>
      <Hero
        sx={{
          backgroundImage: `url(${aboutBgcImage.src})`,
          width: '100%',
          height: '40vh',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
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
          textAlign: 'center'
        }}
        header={'LIÊN HỆ'}
      />
      <Contact/>
    </>
  )
}

export default ContactPage
