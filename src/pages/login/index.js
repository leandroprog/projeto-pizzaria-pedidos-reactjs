import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { Container, GitHubButton } from './styles'
import firebase from 'services/firebase'
import { ReactComponent as Logo } from 'assets/logo-react-zzaria.svg'

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
