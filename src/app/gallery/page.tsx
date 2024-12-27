import React from 'react'
import Hero from '@/components/Hero'
import aboutBgcImage from './backgroundHeader.jpg'
import ImageMasonry from '@/components/ImageMasonry'
import fs from 'fs'
import path from 'path'
import sizeOf from 'image-size'
export const Gallery = (): React.JSX.Element => {
  const imagesDir = path.join(process.cwd(), 'public/ImagesGallery')
  const imageList = fs.readdirSync(imagesDir).map(file => {
    const dimensions = sizeOf(path.join(imagesDir, file))
    return {
      img: `/ImagesGallery/${file}`,
      title: path.basename(file, path.extname(file)),
      width: dimensions.width,
      height: dimensions.height
    }
  })
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
        header={'HÌNH ẢNH'}
      />
      <ImageMasonry imageList={imageList}/>
    </>
  )
}

export default Gallery
