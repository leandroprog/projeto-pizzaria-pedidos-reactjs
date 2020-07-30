import React, { useCallback, useContext, useState } from 'react'
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  withStyles

} from '@material-ui/core'

import { LogoContainer, Logo, Toolbar } from './styles'

import { AuthContext } from 'contexts/auth'

const Spacer = withStyles((theme) => ({
  main: theme.mixins.toolbar
}))(({ classes }) => <div className={classes.main} />)

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { logout, user } = useContext(AuthContext)

  const handleOpenMenu = useCallback((e) => {
    setAnchorElement(e.target)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorElement(null)
  }, [])

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography color='inherit'>Olá {user.firstName} =)</Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <span className='material-icons'>account_circle</span>
          </IconButton>
          <Menu
            open={!!anchorElement}
            onClose={handleClose}
            anchorEl={anchorElement}
          >
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />
    </>
  )
}

export default Header
