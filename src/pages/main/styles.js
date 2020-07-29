import styled from 'styled-components'
import { Toolbar as MaterialToolbar, Divider as MaterialDivider, Paper, Typography } from '@material-ui/core'

import { ReactComponent as logo } from 'assets/logo-react-zzaria.svg'

export const Conteiner = styled.div`
  padding: 80px 20px 20px;
`

export const LogoContainer = styled.div`
flex-grow: 1;
`

export const Logo = styled(logo)`
  width: 200px;
  height: 50px;
  & path {
    fill: #fff;
  }
  & line {
    stroke: #fff
  }
`

export const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

export const PaperPizza = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

export const Pizza = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after{
    content: '';
    background: #ccc;
    position: absolute;
    transform: rotate(45deg)
  }

  &::before{
    height: 1px;
    width: 160px;
  }
  &::after{
    height: 160px;
    width: 1px;
  }
`

export const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  height: 80px;
  border-radius: 80%;
  background: #FFF;
  display: flex;
  justify-content: center;
  width: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
`
