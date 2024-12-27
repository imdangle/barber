import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface openingOursProps {
  sx?: object
  sxGradient?: object
  header?: string
  text?: string
  buttonText?: string
}

const pricesListArray = [
  {
    id: 1,
    name: 'CẮT TÓC',
    price: '80.000'
  },
  {
    id: 2,
    name: 'UỐN PHỒNG',
    price: '300.000'
  },
  {
    id: 3,
    name: 'UỐN RUFFLED, WAVY, CURLY',
    price: '450.000'
  },
  {
    id: 4,
    name: 'UỐN PREMLOCK',
    price: '800.000 - 1.200.000'
  },
  {
    id: 5,
    name: 'DREADLOCK',
    price: '100.000 - 150.000'
  },
  {
    id: 6,
    name: 'DUỖI TÓC',
    price: '350.000 - 500.000'
  },
  {
    id: 7,
    name: 'ÉP SIDE',
    price: '200.000'
  },
  {
    id: 8,
    name: 'NHUỘM ĐEN',
    price: '250.000'
  },
  {
    id: 9,
    name: 'NHUỘM MÀU',
    price: '300.000'
  },
  {
    id: 10,
    name: 'TÂY LẦN 1',
    price: '250.000'
  },
  {
    id: 11,
    name: 'TÂY LẦN 2',
    price: '200.000'
  },
  {
    id: 12,
    name: 'TÂY LẦN 3',
    price: '150.000'
  },
  {
    id: 13,
    name: 'NHUỘM TRẮNG BẠCH KIÊM',
    price: '600.000 - 900.000'
  },
  {
    id: 14,
    name: 'XẢ THẲNG TÓC UỐN',
    price: '100.000'
  }
]
const pricesListRelaxArray = [
  {
    id: 1,
    name: 'COMBO 1',
    price: '120.000'
  },
  {
    id: 2,
    name: 'COMBO 2',
    price: '230.000'
  },
  {
    id: 3,
    name: 'COMBO 3',
    price: '380.000'
  },
  {
    id: 4,
    name: 'CẠO MẶT THƯỜNG',
    price: '20.000'
  },
  {
    id: 5,
    name: 'CẠO KHĂN NÓNG',
    price: '60.000'
  },
  {
    id: 7,
    name: 'LẤY RÁY TAI',
    price: '60.000'
  },
  {
    id: 8,
    name: 'LỘT MỤN',
    price: '40.000'
  },
  {
    id: 9,
    name: 'TẨY TẾ BÀO CHẾT',
    price: '30.000'
  },
  {
    id: 10,
    name: 'ĐÁNH MẮT',
    price: '50.000'
  },
  {
    id: 11,
    name: 'MASSAGE MẶT',
    price: '40.000'
  },
  {
    id: 12,
    name: 'MASSAGE CỔ, VAI, GÁY',
    price: '50.000'
  },
  {
    id: 13,
    name: 'GỘI ĐẦU',
    price: '60.000'
  },
  {
    id: 14,
    name: 'ĐẮP MẶT NẠ',
    price: '30.000'
  }
]

const buttonsArray = [
  {
    buttonName: 'CẮT - HÓA CHẤT',
    id: 1
  },
  {
    buttonName: 'THƯ GIÃN',
    id: 2
  }
  // {
  //   buttonName: 'HAIRSTYLE'
  // },
  // {
  //   buttonName: 'HAIRCUT'
  // },
  // {
  //   buttonName: 'MUSTACHE'
  // }
]

export const PriceList = (props: openingOursProps): React.JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  const [isService, setIsService] = React.useState<number>(1)

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
            marginBottom: '30px',
            [theme.breakpoints.up('md')]: {
              marginBottom: '60px'
            }
          }}
          variant={'h2'}
          fontWeight={theme.typography.fontWeightBold}
        >
          Bảng &#160;
          <Box
            sx={{
              color: theme.palette.primary.main
            }}
            component={'span'}
          >giá
          </Box>
        </Typography>
        <Container
          maxWidth={'sm'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '30px'
          }}
        >
          {
            buttonsArray.map((button) => {
              return (
                <Button
                  sx={{
                    fontSize: '14px',
                    padding: '0px',
                    minWidth: '0px',
                    color: isService === button.id ? '#A27B5C' : 'white',
                    [theme.breakpoints.up('md')]: {
                      fontSize: '18px'
                    }
                  }}
                  onClick={() => { setIsService(button.id) }} // wrap the function call in an anonymous function with braces
                  variant={'text'}
                  key={button.buttonName}
                >
                  {button.buttonName}
                </Button>
              )
            })
          }
        </Container>
        <Grid
          container
          gap={'30px'}
          sx={{
            [theme.breakpoints.up('md')]: {
              '& .MuiGrid-root': {
                flexBasis: '47%',
                margin: 'auto'
              }
            }

          }}
        >
          {
            pricesListArray.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderBottom: '1px solid #A27B5C'
                  }}
                  hidden={isService !== 1}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      fontWeight={theme.typography.fontWeightMedium}
                      variant={'h5'}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      fontWeight={theme.typography.fontWeightMedium}
                      variant={'h5'}
                    >
                       {item.price} VNĐ
                    </Typography>
                  </Box>
                </Grid>
              )
            })
          }
          {
            pricesListRelaxArray.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderBottom: '1px solid #A27B5C'
                  }}
                  hidden={isService !== 2}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      fontWeight={theme.typography.fontWeightMedium}
                      variant={'h5'}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      fontWeight={theme.typography.fontWeightMedium}
                      variant={'h5'}
                    >
                       {item.price} VNĐ
                    </Typography>
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default PriceList
