'use client'
import * as React from 'react'
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface openingOursProps {
  sx?: object
}

const openingHoursArray = [
  {
    nameOfDay: 'CẢ TUẦN',
    hours: '08:30 - 20:30'
  }
  // {
  //   nameOfDay: 'TUESDAY',
  //   hours: '8:00 - 16:00'
  // },
  // {
  //   nameOfDay: 'WEDNESDAY',
  //   hours: '8:00 - 16:00'
  // },
  // {
  //   nameOfDay: 'THURSDAY',
  //   hours: '8:00 - 16:00'
  // },
  // {
  //   nameOfDay: 'FRIDAY',
  //   hours: '8:00 - 16:00'
  // },
  // {
  //   nameOfDay: 'SATURDAY / SUNDAY',
  //   hours: '8:00 - 16:00'
  // }
]

export const OpeningOurs = (props: openingOursProps): React.JSX.Element => {
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
          Chào mừng bạn đến với
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
          spacing={'30px'}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
              variant={'body1'}
              color={theme.palette.text.secondary}
            >
              Dickies Barber Shop nằm tại các con đường lớn, vị trí đắc địa dễ dàng tìm thấy. Với không gian nội thất tối giản nhưng tinh tế, chúng tôi luôn tạo ra một không gian thoải mái, dễ chịu để khách hàng có thể thư giãn và tận hưởng dịch vụ. Đội ngũ nhân viên của chúng tôi luôn nhiệt tình, thân thiện, sẵn sàng mang đến trải nghiệm tốt nhất và tạo ra năng lượng tích cực cho mọi khách hàng. Bên cạnh đó, Dickies Barber Shop cũng thường xuyên tổ chức các chương trình ưu đãi hấp dẫn, quà tặng và voucher tri ân khách hàng như một lời cảm ơn chân thành vì sự yêu mến và ủng hộ của các bạn.
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <Box
              borderRadius={theme.shape.borderRadius}
              sx={{
                border: '2px solid #A27B5C',
                padding: '10px 0px',
                width: '100%',
                [theme.breakpoints.up('md')]: {
                  padding: '20px 0px'
                }
              }}
            >
              <Typography
                variant={'h3'}
                fontWeight={theme.typography.fontWeightBold}
                sx={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  padding: '10px 10px'
                }}
              >
                THỜI GIAN MỞ CỬA
              </Typography>
              <Grid
                container
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                >
                  <List
                    sx={{
                      paddingTop: '0px',
                      paddingBottom: '0px'
                    }}
                  >
                    {
                  openingHoursArray.map((day) => {
                    const {
                      nameOfDay,
                      hours
                    } = day
                    return (
                      <ListItem
                        key={nameOfDay}
                      >
                        <ListItemText
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: theme.typography.fontWeightMedium
                            }
                          }}
                          primary={nameOfDay}
                        />
                        <ListItemText
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: theme.typography.fontWeightMedium
                            },
                            textAlign: 'end'
                          }}
                          primary={hours}
                        />
                      </ListItem>
                    )
                  })
                    }
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OpeningOurs
