'use client'
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import theme from '../ThemeRegistry/theme'
import Image from 'next/image'
import aboutImg from './about.jpg'
import SocailMedia from '../SocialMedia/SocialMedia'

interface newStyleProps {
  sx?: object
}

export const NewStyle = (props: newStyleProps): JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
        sx={{
          paddingTop: '40px',
          paddingBottom: '40px',
          [theme.breakpoints.up('md')]: {
            paddingTop: '80px',
            paddingBottom: '80px'
          }
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '60px'
          }}
          variant={'h2'}
          fontWeight={theme.typography.fontWeightBold}
        >
          Chào mừng đến với
          <Box
            sx={{
              color: theme.palette.primary.main
            }}
            component={'span'}
          > Dickies Barber Shop
          </Box>
        </Typography>
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            sx={{
              order: '2',
              [theme.breakpoints.up('md')]: {
                order: '0'
              }
            }}
            md={6}
            xs={12}
          >
            <Typography
              sx={{
                textAlign: 'center',
                marginBottom: '30px'
              }}
              variant={'h2'}
              fontWeight={theme.typography.fontWeightBold}
            >
              Phong cách
              <Box
                sx={{
                  color: theme.palette.primary.main
                }}
                component={'span'}
              > hoàn hảo&nbsp;
              </Box>
              mới của
              <Box
                sx={{
                  color: theme.palette.primary.main
                }}
                component={'span'}
              > bạn
              </Box>
            </Typography>
            <Typography
              variant={'body1'}
              color={theme.palette.text.secondary}
            >
              Chào mừng bạn đến với Dickies Barber Shop! Chúng tôi tự hào sở hữu đội ngũ thợ cắt tóc chuyên nghiệp, luôn tận tâm mang đến cho bạn những trải nghiệm cắt tóc tuyệt vời và phong cách ấn tượng. Hãy để chúng tôi giúp bạn trở nên tự tin hơn với kiểu tóc hoàn hảo!
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Box
              position={'relative'}
              sx={{
                [theme.breakpoints.up('md')]: {
                  width: '90%',
                  '&::after': {
                    position: 'absolute',
                    top: '-30px',
                    left: '30px',
                    content: '""',
                    height: '100%',
                    width: '100%',
                    border: '2px solid #A27B5C',
                    zIndex: '-1'
                  }
                }
              }}
            >
              <Image
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: '100%'
                }}
                priority={true}
                src={aboutImg}
                alt={'picture of author'}
              />
            </Box>

          </Grid>
        </Grid>
      </Container>
      <SocailMedia/>
    </Box>
  )
}

export default NewStyle
