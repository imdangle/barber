import React from 'react'
import { ImageListItem, ImageList } from '@mui/material'

import photoSection from './photoSection.jpg'
import photoSection1 from './photoSection1.jpg'
import photoSection2 from './photoSection2.jpg'
import photoSection3 from './photoSection3.jpg'
import photoSection4 from './photoSection4.jpg'
import photoSection5 from './photoSection5.jpg'
import useBreakpoint from '@/helpers/useBreakpoint'

interface photoProps {
  sx?: object
}
const itemData = [
  {
    img: photoSection.src,
    title: 'barber'
  },
  {
    img: photoSection1.src,
    title: 'barber'
  },
  {
    img: photoSection2.src,
    title: 'barber'
  },
  {
    img: photoSection3.src,
    title: 'barber'
  },
  {
    img: photoSection4.src,
    title: 'barber'
  },
  {
    img: photoSection5.src,
    title: 'barber'
  }

]

export const Photos = (props: photoProps): React.JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  const breakpoint = useBreakpoint()
  const cols = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 3
  }[breakpoint[0]]

  return (
    <ImageList
      gap={0}
      sx={{ }}
      cols={cols}
      {...otherProps}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading={'lazy'}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Photos
