import React from 'react'
import { Button, Grid } from '@material-ui/core'

import { Container } from './styles'

import { ReactComponent as Logo } from 'assets/logo-react-zzaria.svg'

const Login = () => (
  <Container>
    <Grid container direction='column' alignItems='center' spacing={5}>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Button>Entrar com GitHub</Button>
      </Grid>
    </Grid>
  </Container>
)

export default Login
