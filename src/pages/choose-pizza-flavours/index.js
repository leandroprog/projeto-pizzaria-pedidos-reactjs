import React from 'react'
import t from 'prop-types'
import { Img } from './styles'
import { Grid, Card, Typography } from '@material-ui/core'
import { H3, HeaderContent, PizzaGrid, Divider } from 'components/ui'
import { singularOrPlural } from 'utils'
import { Redirect } from 'react-router-dom'
import { HOME } from 'routes'

import pizzaFlavours from 'fake-data/pizza-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state
  return (
    <>
      <HeaderContent>
        <H3>Escolha até {flavours} {' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}
        </H3>
      </HeaderContent>
      <PizzaGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Img src={pizza.image} alt={pizza.name} />
              <Divider />
              <Typography>
                {pizza.name}
              </Typography>
              <Typography>
                {pizza.value[id]}
              </Typography>
            </Card>
          </Grid>
        ))}
      </PizzaGrid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
