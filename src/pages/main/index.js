import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { ReactComponent as Logo } from 'assets/logo-react-zzaria.svg'

const Main = () => (
  <AppBar>
    <Toolbar>
      <Logo />
      <IconButton color='inherit'>
        <span className='material-icons'>
          account_circle
        </span>
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Main
