import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { Container, GitHubButton } from './styles'
import { ReactComponent as Logo } from 'assets/logo-react-zzaria.svg'
import { AuthContext } from 'contexts/auth'

const Login = () => {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Logo style={{ width: '100%' }} />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>Entrar com GitHub</GitHubButton>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Login
