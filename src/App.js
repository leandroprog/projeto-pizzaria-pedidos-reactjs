import React, { Suspense, lazy, useEffect, useContext, useState } from 'react'
import t from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

import { HOME, LOGIN } from 'routes'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { user, setUser } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user && {
        ...user,
        firstName: user.displayName.split(' ')[0]
      })
      setDidCheckUserIn(true)
    })
  }, [setUser])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (user && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }
  if (!user && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path={LOGIN} component={Login} />
          <Route component={MainPage} />
        </Switch>
      </Suspense>

    </>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
