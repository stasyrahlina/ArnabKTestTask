import React, { useReducer, useState, useEffect } from 'react';
import { Message, subscribeFunk, unsubscribeFunk } from './Api';

import Column from './components/Column';
import Popup from './components/Popup';
import { ContextApp, initialState, messagesReducer } from './context';

import './reset.css';
import { 
  AppContainer,
  AppTitle,
  Header,
  ButtonContainer,
  MessageContainer,
  CustomButton,
  FullScreenDivider,
} from './styles';

const App: React.FC<{}> = () => {
  const [subscribed, setSubscribed] = useState<boolean>(true)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  const subscribeToUpdates = ():void => {
    subscribeFunk((message: Message) => {
      dispatch({type: 'update', payload: message});
      
      if (message.priority === 0) {
        setShowPopup(true)
      }
    })
  };
  
  useEffect(() => {
    subscribeToUpdates()
    return subscribeToUpdates;
  }, []);

  const switchSubscription = ():void => {
    if (subscribed) {
      unsubscribeFunk();
    } else {
      subscribeToUpdates();
    }

    setSubscribed(!subscribed);
  };

  return (
    <ContextApp.Provider value={{dispatch, state}}>
      <AppContainer>
        <Popup open={showPopup} onClose={() => setShowPopup(false)}/>
        <Header>
          <AppTitle>Coding Challenge</AppTitle>
          <FullScreenDivider />
        </Header>
        <ButtonContainer>
          <CustomButton primary onClick={() => switchSubscription()}>{subscribed ? 'Stop' : 'Start'}</CustomButton>
          <CustomButton primary onClick={() => dispatch({type: 'deleteAll'})}>Clear</CustomButton>
        </ButtonContainer>
        <MessageContainer>
          <Column title='Error Type 1' messages={state.filter((message: Message) => message.priority === 0).reverse()} />
          <Column title='Warning Type 2' messages={state.filter((message: Message) => message.priority === 1).reverse()} />
          <Column title='Info Type 3' messages={state.filter((message: Message) => message.priority === 2).reverse()} />
        </MessageContainer>
      </AppContainer>
    </ContextApp.Provider>
  );
}

export default App;
