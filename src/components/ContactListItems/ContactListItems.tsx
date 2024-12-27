import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import theme from '../ThemeRegistry/theme'

export const ContactListItems = (): React.JSX.Element => {
  return (
    <List
      sx={{
        maxWidth: 360,
        bgcolor: 'transparent'
      }}
    >
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <LocalPhoneIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'SỐ ĐIỆN THOẠI'}
          secondary={'093.119.0480'}
        />
      </ListItem>
      <Divider
        variant={'inset'}
        component={'li'}
      />
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <FmdGoodIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'CHI NHÁNH 1'}
          secondary={'109 Lê Lợi, Phường 4, Quận Gò Vấp, Ho Chi Minh City, VietNam'}
        />
      </ListItem>
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <FmdGoodIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'CHI NHÁNH 2'}
          secondary={'176 Đồng Đen , TP.Hồ Chí Minh, VietNam'}
        />
      </ListItem>
      <Divider
        variant={'inset'}
        component={'li'}
      />
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <AccessTimeIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'HOẠT ĐỘNG'}
          secondary={'08:30 - 20:30'}
        />
      </ListItem>
    </List>
  )
}
export default ContactListItems
