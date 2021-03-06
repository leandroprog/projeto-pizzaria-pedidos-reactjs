import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import App from './app'
import AuthProvider from 'contexts/auth'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

function Root () {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </MuiThemeProvider>
  )
}

export default hot(module)(Root)
