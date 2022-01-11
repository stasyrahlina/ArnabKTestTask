import React, { useContext } from 'react';
import { ContextApp, ContextType } from '../context';
import { Message } from '../Api'

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { 
  CustomButton,
  CustomCardActions,
  StyledCard,
} from '../styles'

const Card: React.FC<{ msg: Message }> = ({ msg }) => {
  const { dispatch } = useContext<ContextType>(ContextApp)
  
  if (!msg) return null
  
  const handleClick = ():void => {
    if (dispatch) {
      dispatch({type: 'deleteSingle', payload: msg.message})
    } else {
      console.log('Error: Context empty')
    }
  }

  return (
    <StyledCard data-testid='card' type={msg.priority} >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {msg.message}
        </Typography>
      </CardContent>
      <CustomCardActions>
        <CustomButton onClick={handleClick}>Clear</CustomButton>
      </CustomCardActions>
    </StyledCard>
  )
}

export default Card
