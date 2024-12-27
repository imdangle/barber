import React from 'react'
import { Box, Container, Typography } from '@mui/material'

export const Loading = (): React.JSX.Element => {
  return (
    <Box>
      <Container
        sx={{
          textAlign: 'center',
          padding: '100px 0px'
        }}
      >
        <Typography
          variant={'h1'}
        >
          LOADING...
        </Typography>
      </Container>
    </Box>
  )
}
export default Loading
