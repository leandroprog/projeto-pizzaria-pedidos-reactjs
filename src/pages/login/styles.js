import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Container = styled.div`
  padding: 20px;
`

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 20px;
    padding: 15px;
    text-transform: none;
  }

`
