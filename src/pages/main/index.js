import React, { useContext } from 'react'
import {
  Typography,
  Grid
} from '@material-ui/core'

import { AuthContext } from 'contexts/auth'

import { Conteiner, Divider, PizzaGrid, PaperPizza, Pizza, PizzaText, Title } from './styles'

import Header from 'components/Header'

const Main = () => {
  const { user } = useContext(AuthContext)
  const userName = user.displayName.split(' ')[0]

  return (
    <>
      <Header />
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
                <Typography>{pizza.slices} {singularOrPlural(pizza.flavours, 'fatia', 'fatias')}, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </PaperPizza>
            </Grid>
          ))}
        </PizzaGrid>
      </Conteiner>
    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
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
