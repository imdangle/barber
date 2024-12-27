import React from 'react'
import { Box } from '@mui/material'

export const MapLocation = (): JSX.Element => {
  return (
    <Box>
      <iframe
        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9019487436285!2d106.68299337570352!3d10.818815258409007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529901fe5a463%3A0xd41087d38f99b3eb!2sDickies%20Barber%20Shop!5e0!3m2!1svi!2s!4v1734794701463!5m2!1svi!2s'}
        style={{
          border: '0',
          width: '100%',
          height: '300px'
        }}
        allowFullScreen={true}
        loading={'lazy'}
        referrerPolicy={'no-referrer-when-downgrade'}
      >
      </iframe>
      <iframe
        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2827708915424!2d106.64035297570334!3d10.789641158948482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38750b3549%3A0xa15ebf9f8aef784d!2sDICKIES%20BARBER%20SHOP%20-%20T%C3%A2n%20B%C3%ACnh!5e0!3m2!1svi!2s!4v1734794609073!5m2!1svi!2s'}
        style={{
          border: '0',
          width: '100%',
          height: '300px'
        }}
        allowFullScreen={true}
        loading={'lazy'}
        referrerPolicy={'no-referrer-when-downgrade'}
      >
      </iframe>
    </Box>
  )
}

export default MapLocation
