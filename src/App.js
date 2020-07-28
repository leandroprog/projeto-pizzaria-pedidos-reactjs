import React, { Suspense, lazy, useEffect, useContext, useState } from 'react'
import t from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { user, setUser, logout } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('usuário logado', user)
      setUser(user)
      setDidCheckUserIn(true)
    })

    window.logout = logout
  }, [logout, setUser])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (user && location.pathname === '/login') {
    return <Redirect to='/' />
  }
  if (!user && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

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

App.prototypes = {
  location: t.object.isRequired
}

export default App
