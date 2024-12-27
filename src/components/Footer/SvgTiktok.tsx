import * as React from 'react'
import SvgIcon from '@mui/material/SvgIcon'

export default function SvgTiktok (): React.JSX.Element {
  return (
    <SvgIcon
      fontSize={'large'}
      sx={{
        marginRight: '10px'
      }}
    >
      <svg
        fontSize={'large'}
        xmlns={'http://www.w3.org/2000/svg'}
        width={'30'}
        height={'30'}
        viewBox={'0 0 24 24'}
      >
        <path
          fill={'currentColor'}
          d={'M21,7H20a4,4,0,0,1-4-4H12V14.5a2.5,2.5,0,1,1-4-2V8.18a6.5,6.5,0,1,0,8,6.32V9.92A8,8,0,0,0,20,11h1Z'}
        />
      </svg>
    </SvgIcon>
  )
}
