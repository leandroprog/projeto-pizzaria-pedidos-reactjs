import React, { useContext } from 'react'
import {
  Typography,
  Grid
} from '@material-ui/core'

import { AuthContext } from 'contexts/auth'

import { Divider, PizzaGrid, PaperPizza, Pizza, PizzaText, Title } from './styles'
import pizzaSizes from 'fake-data/pizza-sizes'

const ChoosePizzaSize = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Grid container direction='column' alignItems='center'>

        <Title variant='h3'>O vai ser hoje, {user.firstName} =)</Title>
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
    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

export default ChoosePizzaSize
