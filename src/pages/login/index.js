import React from 'react'
import { Grid } from '@material-ui/core'

import { Container, GitHubButton } from './styles'

import { ReactComponent as Logo } from 'assets/logo-react-zzaria.svg'

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={5}>
      <Grid item>
        <Logo style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <GitHubButton variant='contained' fullWidth>Entrar com GitHub</GitHubButton>
      </Grid>
    </Grid>
  </Container>
)

export default Login
