import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { cyan } from '@mui/material/colors'
import { FaBars } from 'react-icons/fa'

export default function ButtonAppBar() {
  const primary = cyan['A200']
  return (
    <div className="header">
      <div className="menu">
        {' '}
        <FaBars />{' '}
      </div>
      <div className="menu">Piha Surf Report</div>
      <div className="menu"></div>
    </div>

    // <Box className="header" sx={{ flexGrow: 1 }}>
    //   <AppBar color="primary" position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Surf Report
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  )
}
