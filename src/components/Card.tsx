import { useContext } from 'react';
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
  const Context = useContext<ContextType | null>(ContextApp)
  
  if (!Context || !msg) return null
  
  const { dispatch } = Context
  
  return (
    <StyledCard type={msg.priority} >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {msg.message}
        </Typography>
      </CardContent>
      <CustomCardActions>
        <CustomButton onClick={() => dispatch({type: 'deleteSingle', payload: msg.message}) }>Clear</CustomButton>
      </CustomCardActions>
    </StyledCard>
  )
}

export default Card
