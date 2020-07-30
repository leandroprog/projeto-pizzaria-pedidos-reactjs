import styled from 'styled-components'
import { Divider as MaterialDivider, Paper, Typography, Grid } from '@material-ui/core'

export const Conteiner = styled.div`
  padding: 80px 20px 20px;
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
  min-width: 250px;
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
export const PizzaGrid = styled(Grid).attrs({
  container: true,
  spacing: 4
})`
padding: 20px;
`

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})`
`