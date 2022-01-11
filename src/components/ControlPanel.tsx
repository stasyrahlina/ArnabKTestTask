import React, { useContext, useState } from 'react';
import { unsubscribeFunk } from '../Api';
import { ContextApp, ContextType } from '../context';

import { 
  ButtonContainer,
  CustomButton,
} from '../styles';

const ControlPanel: React.FC<{
  subscribeFunc: ()=>void
}> = ({subscribeFunc}) => {
  const [subscribed, setSubscribed] = useState<boolean>(true)
  const { dispatch } = useContext<ContextType>(ContextApp)

  const switchSubscription = ():void => {
    if (subscribed) {
      unsubscribeFunk();
    } else {
      subscribeFunc();
    }

    setSubscribed(!subscribed);
  };
  
  const handleClick = ():void => {
    if (dispatch) {
      dispatch({type: 'deleteAll'})
    } else {
      console.log('Error: Context empty')
    }
  }

  return (
    <ButtonContainer>
      <CustomButton data-testid='stop-button' primary onClick={() => switchSubscription()}>{subscribed ? 'Stop' : 'Start'}</CustomButton>
      <CustomButton data-testid='clear-button' primary onClick={handleClick}>Clear</CustomButton>
    </ButtonContainer>
  )
}

export default ControlPanel
