'use client'
import React from 'react'
import { Box, Container, Grid, Link, MenuItem, Tooltip, Typography } from '@mui/material'
import theme from '../ThemeRegistry/theme'
import SvgFb from './SvgFb'
import SvgTiktok from './SvgTiktok'

interface footerProps {
  sx?: object
}

export const Footer = (props: footerProps): React.JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        bgcolor: theme.palette.common.black,
        padding: '30px 0px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Grid
          container
          sx={{
            textAlign: 'center'
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              TRANG
            </Typography>
            <MenuItem
              sx={{
                justifyContent: 'center'
              }}
              component={'a'}
              href={'about'}
            >
              <Typography
                variant={'body2'}
              >
                THÔNG TIN
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{
                justifyContent: 'center'
              }}
              component={'a'}
              href={'gallery'}
            >
              <Typography
                variant={'body2'}
              >
                HÌNH ẢNH
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{
                justifyContent: 'center'
              }}
              component={'a'}
              href={'contact'}
            >
              <Typography
                variant={'body2'}
              >
                LIÊN HỆ
              </Typography>
            </MenuItem>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              ĐỊA CHỈ
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              CN1: 109 Lê Lợi, Phường 4, Quận Gò Vấp, TP.Hồ Chí Minh
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              CN2: 176 Đồng Đen , TP.Hồ Chí Minh
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              SỐ ĐIỆN THOẠI: 093.119.0480
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              DỊCH VỤ
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              CẮT TÓC
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              THƯ GIÃN
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              HÓA CHẤT
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            gap={2}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              MẠNG XÃ HỘI
            </Typography>
            <Tooltip title="Chi nhánh 1" arrow>
              <Link href="https://www.facebook.com/dickiesbarbershop.vn">
                <SvgFb />
              </Link>
            </Tooltip>

            <Tooltip title="Chi nhánh 2" arrow>
              <Link href="https://www.facebook.com/YeeBeeSeee">
                <SvgFb />
              </Link>
            </Tooltip>
            <Tooltip title="TikTok" arrow>
              <Link
                href={'https://www.tiktok.com/@dickiesbarbershopgovap?_t=8sOc8WXKOkT&_r=1'}
              >
                <SvgTiktok />
              </Link>
            </Tooltip>
            {/* <Link
              href={'https://facebook.com'}
            >
              <SvgX/>
            </Link> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
