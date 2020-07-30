import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Conteiner } from './styles'

import Header from 'components/Header'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))

const Main = () => {
  return (
    <>
      <Header />
      <Conteiner>
        <Suspense fallback='Carregando...'>
          <Switch>
            <Route path='/' exact component={ChoosePizzaSize} />
          </Switch>
        </Suspense>
      </Conteiner>
    </>
  )
}

export default Main
