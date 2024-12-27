'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import theme from '../ThemeRegistry/theme'
import { Button, Container, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

interface heroProps {
  sx?: Record<string, unknown>
  sxGradient?: Record<string, unknown>
  sxH1?: Record<string, unknown>
  sxText?: Record<string, unknown>
  header?: string
  text?: string
  buttonText?: string
}

export const Hero = (props: heroProps): JSX.Element => {
  const {
    sx,
    sxGradient,
    sxH1,
    sxText,
    header,
    text,
    buttonText,
    ...otherProps
  } = props

  const path = usePathname()

  const [open, setOpen] = useState(false) // Để quản lý trạng thái của modal

  return (
    <Box
      position={'relative'}
      component={'div'}
      sx={{
        ...sx

      }}
      {...otherProps}
    >
      <Box
        position={'absolute'}
        sx={{
          ...sxGradient
        }}
      >
      </Box>
      <Container
        maxWidth={'lg'}
      >
        <Typography
          variant={'h1'}
          fontWeight={theme.typography.fontWeightBold}
          sx={{
            ...sxH1
          }}
          position={'relative'}
        >
          {header}
        </Typography>
        <Typography
          variant={'body1'}
          color={theme.palette.text.secondary}
          sx={{
            ...sxText
          }}
          position={'relative'}
        >
          {text}
        </Typography>
        {
          (path === '/')

            ? (
              <Button
                sx={{
                  fontWeight: theme.typography.fontWeightBold
                }}
                variant={'contained'}
                onClick={() => { setOpen(true) }}
              >
                {buttonText}
              </Button>
              )
            : null
        }
        <Dialog open={open}
          onClose={() => { setOpen(false) }}
        >
          <DialogTitle style={{ color: 'black' }}>Đăng ký lịch</DialogTitle>
          <DialogContent>
            <p style={{ color: 'black' }} >Đây là nội dung cho khách điền thông tin.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { setOpen(false) }} color='primary'>
              Đóng
            </Button>
            <Button onClick={() => { setOpen(false) }} color='primary'>
              Đăng ký
            </Button>
          </DialogActions>
        </Dialog>
      </Container>

    </Box>
  )
}

export default Hero
