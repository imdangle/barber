'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { Container, ImageList, ImageListItem } from '@mui/material'
import useBreakpoint from '@/helpers/useBreakpoint'
import Image from 'next/image'
import SocailMedia from '../SocialMedia/SocialMedia'

interface ImageMasonryProps {
  imageList: Array<{ img: string, title: string, height?: any, width?: any }>
}

const ImageMasonry: React.FC<ImageMasonryProps> = ({ imageList }) => {
  const breakpoint = useBreakpoint()
  const cols = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 3
  }[breakpoint[0]]

  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          minHeight: '100%',
          padding: '40px 0px'
        }}
      >
        <ImageList
          variant={'masonry'}
          cols={cols}
          gap={16}
        >
          {imageList.map((item, index) => (
            <ImageListItem
              sx={{
                display: 'flex',
                border: '10px solid #fff',
                boxShadow: '0px 0px 10px #111'
              }}
              key={index}
            >
              <Image
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: 'auto'
                }}
                priority={true}
                src={item.img}
                alt={item.title}
                width={item.width}
                height={item.height}/>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <SocailMedia />
    </Container>
  )
}

export default ImageMasonry
// <-- Thêm một dòng trắng ở dưới dòng cuối cùng của mã
