import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Conteiner } from './styles'

import Header from 'components/Header'
import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('pages/choose-pizza-flavours'))

const Main = () => {
  return (
    <>
      <Header />
      <Conteiner>
        <Suspense fallback='Carregando...'>
          <Switch>
            <Route path={HOME} exact component={ChoosePizzaSize} />
            <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
          </Switch>
        </Suspense>
      </Conteiner>
    </>
  )
}

export default Main
