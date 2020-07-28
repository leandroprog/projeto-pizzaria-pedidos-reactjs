import React, { Suspense, lazy, useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App () {
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    firebase.auth().onIdTokenChanged((user) => {
      console.log('usuário logado', user)
      if (user) {
        setUser({
          displayName: user.displayName
        })
      } else {
        setUser(null)
      }
    })
  }, [setUser])

  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route component={MainPage} />
        </Switch>
      </Suspense>

    </>
  )
}

export default App
