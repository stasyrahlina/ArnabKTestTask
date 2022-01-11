import styled from '@emotion/styled'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

export const AppContainer = styled('div')`
  position: relative;
  width: 70%;
  max-width: 1280px;
  min-width: 800px;
  margin: 0 auto;
`
export const AppTitle = styled('h1')`
  margin: 10px 0;
`
export const StyledHeader = styled('header')`
`
export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 50px;
`
export const MessageContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
export const StyledColumn = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  flex-basis: 20%;
`
export const ColumnTitle = styled('h2')`
`
export const ColumnCount = styled('span')`
`
export const Messages = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  gap: 10px;
`
export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "primary"
})<{primary?: boolean }>`
  color: black;
  background-color: ${({ primary }) => primary ? '#88FCA3' : 'transparent'};
  padding: 5px 20px;
`
export const CustomCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`
export const FullScreenDivider = styled(Divider)`
  position: absolute;
  left: -30%;
  width: 100vw;
`
export const StyledCard = styled(Card)<{type: number}>`
  background-color: ${({ type }) => {
    switch (type) {
      case 0: 
        return '#F56236'
      case 1: 
        return '#FCE788'
      case 2: 
        return '#88FCA3'
      default: 
        return '#FFFFFF'
    }
  }};
`
