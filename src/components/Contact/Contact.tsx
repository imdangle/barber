'use client'
import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import theme from '../ThemeRegistry/theme'
import ContactListItems from '../ContactListItems'
import MapLocation from '../MapLocation'
import SocailMedia from '../SocialMedia/SocialMedia'

interface contactProps {
  sx?: object
}

export const Contact = (props: contactProps): React.JSX.Element => {
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
        <Grid
          container
          sx={{
            [theme.breakpoints.up('md')]: {
              '& .MuiGrid-root:first-child': {
                flexBasis: '40%'
              },
              '& .MuiGrid-root:last-child': {
                flexBasis: '60%',
                maxWidth: '60%'
              }
            }
          }}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <ContactListItems/>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}

          >
            <MapLocation/>
          </Grid>
        </Grid>
      </Container>
      <SocailMedia/>
    </Box>
  )
}

export default Contact
