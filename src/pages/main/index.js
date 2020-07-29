import React, { useState, useCallback, useContext } from 'react'
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid,
  withStyles

} from '@material-ui/core'

import { AuthContext } from 'contexts/auth'

import { Conteiner, LogoContainer, Logo, Toolbar, Divider, PizzaGrid, PaperPizza, Pizza, PizzaText, Title } from './styles'

const Spacer = withStyles((theme) => ({
  main: theme.mixins.toolbar
}))(({ classes }) => <div className={classes.main} />)

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { logout, user } = useContext(AuthContext)
  const userName = user.displayName.split(' ')[0]
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
          <Typography color='inherit'>Olá {userName} =)</Typography>
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

      <Conteiner>
        <Grid container direction='column' alignItems='center'>

          <Title variant='h3'>O vai ser hoje, {userName} =)</Title>
          <Title variant='h4'>Escolha o tamanho da pizza</Title>
        </Grid>

        <PizzaGrid container spacing={2}>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <PaperPizza>
                <Pizza><PizzaText>{pizza.size}cm</PizzaText></Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>{pizza.slices} fatias, {pizza.flavours} sabores</Typography>
              </PaperPizza>
            </Grid>
          ))}
        </PizzaGrid>
      </Conteiner>
    </>
  )
}

const pizzaSizes = [{
  id: 1,
  name: 'pequena',
  size: 28,
  slices: 2,
  flavours: 1
},
{
  id: 2,
  name: 'Média',
  size: 30,
  slices: 6,
  flavours: 2
},
{
  id: 3,
  name: 'Grande',
  size: 32,
  slices: 8,
  flavours: 3
}]

export default Main
