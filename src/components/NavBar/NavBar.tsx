'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import theme from '../ThemeRegistry/theme'
import icon from './images/Asset 3.png'

const pages = [
  {
    name: 'Thông tin',
    page: 'about'
  },
  {
    name: 'Hình ảnh',
    page: 'gallery'
  },
  {
    name: 'Liên hệ',
    page: 'contact'
  }
]

function ResponsiveAppBar (): React.JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position={'static'}>
      <Container maxWidth={'lg'}>
        <Toolbar disableGutters>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              alignItems: 'center'
            }}
          >
            <img
              srcSet={`${icon.src}`}
              src={`${icon.src}`}
              alt={icon.src}
              loading={'lazy'}
              width={65}
              height={65}
            />&nbsp;
            <Typography
              variant={'h6'}
              noWrap
              component={'a'}
              href={'/'}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#F9A731',
                textDecoration: 'none'
              }}
            >
              DICKIES
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((item) => (
              <Button
                variant={'text'}
                key={item.page}
                href={item.page.toLocaleLowerCase()}
                onClick={handleCloseNavMenu}
                color={'secondary'}
                sx={{
                  padding: '20px 40px',
                  display: 'block',
                  '&:hover': {
                    color: 'black'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}
          >
            <IconButton
              size={'large'}
              aria-label={'account of current user'}
              aria-controls={'menu-appbar'}
              aria-haspopup={'true'}
              onClick={handleOpenNavMenu}
              color={'inherit'}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id={'menu-appbar'}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiMenu-paper': {
                  width: '100%',
                  color: theme.palette.common.black
                }

              }}
            >
              {pages.map((item) => (
                <MenuItem
                  component={'a'}
                  key={item.page}
                  onClick={handleCloseNavMenu}
                  href={item.page.toLocaleLowerCase()}
                >
                  <Typography textAlign={'center'}>{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}
          >
            <img
              srcSet={`${icon.src}`}
              src={`${icon.src}`}
              alt={icon.src}
              loading={'lazy'}
              width={65}
              height={65}
              style={{ display: 'flex' }}
            />&nbsp;
            <Typography
              variant={'h5'}
              noWrap
              component={'a'}
              href={'/'}
              sx={{
                mt: 2,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#F9A731',
                textDecoration: 'none'
              }}
            >
              DICKIES
            </Typography>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
