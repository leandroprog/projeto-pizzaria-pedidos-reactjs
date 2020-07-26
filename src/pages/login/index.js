import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Button } from '@material-ui/core'

import { Container, GitHubButton } from './styles'

import firebase from 'firebase'

import { ReactComponent as Logo } from 'assets/logo-react-zzaria.svg'

const firebaseConfig = {
  apiKey: 'AIzaSyDVj5h0WspihtzXgi5AwmB0U7Blgy_h0-k',
  authDomain: 'projeto-pizzaria-126f6.firebaseapp.com',
  databaseURL: 'https://projeto-pizzaria-126f6.firebaseio.com',
  projectId: 'projeto-pizzaria-126f6',
  storageBucket: 'projeto-pizzaria-126f6.appspot.com',
  messagingSenderId: '976720996792',
  appId: '1:976720996792:web:534f908676c96ddb65474d',
  measurementId: 'G-QN8FQ0TFR6'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const Login = () => {
  const [user, setUser] = useState(null)

  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const handleLogout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      setUser(null)
    })
  }, [])

  useEffect(() => {
    firebase.auth().onIdTokenChanged((user) => {
      console.log(user)
      if (user) {
        setUser({
          displayName: user.displayName
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Logo style={{ width: '100%' }} />
        </Grid>
        {user && (
          <>
            <pre>{user.displayName}</pre>
            <Button variant='contained' onClick={handleLogout}>Sair</Button>
          </>
        )}

        {!user && (
          <Grid item xs={12} container justify='center'>
            <GitHubButton onClick={handleLogin}>Entrar com GitHub</GitHubButton>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Login
