'use client'
import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string
//     }
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string
//     }
//   }
// }

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#A27B5C'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: '#DCD7C9',
      disabled: 'rgba(0, 0, 0, 0.1)'
    },
    background: {
      paper: '#D9D9D9',
      default: '#2C3639'
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontWeightBold: '700',
    fontWeightMedium: '500',
    fontWeightRegular: '400',
    fontWeightLight: '300',
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '42px'
    },
    h3: {
      fontSize: '38px'
    },
    h4: {
      fontSize: '32px'
    },
    h5: {
      fontSize: '20px'
    },
    body1: {
      fontSize: '18px',
      letterSpacing: '0.3px'
    },
    body2: {
      fontSize: '17px'
    },
    button: {
      fontSize: '16px'
    },
    fontFamily: roboto.style.fontFamily
  }
})

export default responsiveFontSizes(theme)
