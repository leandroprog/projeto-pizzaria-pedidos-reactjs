import React, { useContext } from 'react'
import {
  Typography,
  Grid,
  Card
} from '@material-ui/core'

import { AuthContext } from 'contexts/auth'

import { Divider, PizzaGrid, Pizza, PizzaText, Title, CardActionArea } from './styles'
import pizzaSizes from 'fake-data/pizza-sizes'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

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
            <Card>
              <CardActionArea to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: pizza
              }}
              >
                <Pizza><PizzaText>{pizza.size}cm</PizzaText></Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>{pizza.slices} {singularOrPlural(pizza.flavours, 'fatia', 'fatias')}, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardActionArea>
            </Card>
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
