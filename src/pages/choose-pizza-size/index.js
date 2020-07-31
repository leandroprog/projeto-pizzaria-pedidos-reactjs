import React, { useContext } from 'react'
import {
  Typography,
  Grid,
  Card
} from '@material-ui/core'

import { AuthContext } from 'contexts/auth'

import { Divider, PizzaGrid, Pizza, PizzaText, CardActionArea } from './styles'
import pizzaSizes from 'fake-data/pizza-sizes'

import { H3, H4, HeaderContent } from 'components/ui'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

import { singularOrPlural } from 'utils'

const ChoosePizzaSize = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <HeaderContent>
        <H3>O vai ser hoje, {user.firstName} =)</H3>
        <H4 variant='h4'>Escolha o tamanho da pizza</H4>
      </HeaderContent>

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

export default ChoosePizzaSize
