import React from 'react'
import t from 'prop-types'
import { Container } from './styles'

const ChoosePizzaFlavours = ({ location }) => {
  console.log(location.state)
  return (<h1>Escolha até {location.state.slices} sabores</h1>)
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
