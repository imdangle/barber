import React from 'react'
import { IconButton, Box } from '@mui/material'
import { FaFacebookMessenger } from 'react-icons/fa' // Icon Messenger
import { SiZalo } from 'react-icons/si' // Icon Zalo

interface SocailMediaProps {
  sx?: object
}

export const SocailMedia = (props: SocailMediaProps): React.JSX.Element => {
  const { sx, ...otherProps } = props

  return (
    <Box
      sx={{
        position: 'relative',
        ...sx // Spread sx if passed as a prop
      }}
      {...otherProps}
    >
      {/* Messenger and Zalo Icons */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          zIndex: 9999
        }}
      >
        {/* Messenger Icon */}
        <IconButton
          href="https://m.me/dickiesbarbershop.vn" // Change to your Messenger link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#0078FF',
            '&:hover': {
              backgroundColor: '#005BB5',
              boxShadow: '0px 0px 10px 5px rgba(0, 120, 255, 0.6)' // Hover effect - glowing
            },
            padding: 2,
            borderRadius: '50%',
            animation: 'scale 1s infinite alternate' // Phóng to và thu nhỏ icon
          }}
        >
          <FaFacebookMessenger size={30} color="white" />
        </IconButton>

        {/* Zalo Icon */}
        <IconButton
          href="https://zalo.me/0931189480" // Change to your Zalo link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#1E8E3E',
            '&:hover': {
              backgroundColor: '#155D30',
              boxShadow: '0px 0px 10px 5px rgba(30, 142, 62, 0.6)' // Hover effect - glowing
            },
            padding: 2,
            borderRadius: '50%',
            animation: 'scale 1s infinite alternate' // Phóng to và thu nhỏ icon
          }}
        >
          <SiZalo size={30} color="white" />
        </IconButton>
      </Box>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes scale {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </Box>
  )
}

export default SocailMedia
