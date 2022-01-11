import React, { useReducer, useState, useEffect } from 'react';
import { Message, subscribeFunk } from './Api';
import { ContextApp, initialState, messagesReducer } from './context';

import Popup from './components/Popup';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import MessagesGrid from './components/MessagesGrid';

import './reset.css';
import { AppContainer } from './styles';

const App: React.FC<{}> = () => {
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

  return (
    <ContextApp.Provider value={{dispatch, state}}>
      <AppContainer>
        <Popup open={showPopup} onClose={() => setShowPopup(false)}/>
        <Header />
        <ControlPanel subscribeFunc={subscribeToUpdates} />
        <MessagesGrid />
      </AppContainer>
    </ContextApp.Provider>
  );
}

export default App;
