import React, { useState, useCallback, useContext } from 'react'
import { AppBar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core'

import { AuthContext } from 'contexts/auth'

import { LogoContainer, Logo, Toolbar } from './styles'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { logout, user } = useContext(AuthContext)

  const handleOpenMenu = useCallback((e) => {
    setAnchorElement(e.target)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorElement(null)
  }, [])

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Typography color='inherit'>Olá {user.displayName.split(' ')[0]} =)</Typography>
        <IconButton color='inherit' onClick={handleOpenMenu}>
          <span className='material-icons'>
            account_circle
          </span>
        </IconButton>
        <Menu
          open={!!anchorElement} onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Main
