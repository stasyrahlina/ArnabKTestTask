import React, { useContext } from 'react';
import { Message } from '../Api';
import { ContextApp, ContextType } from '../context';

import Column from './Column';

import { MessageContainer } from '../styles';

const MessagesGrid: React.FC<{}> = () => {
  const { state } = useContext<ContextType>(ContextApp)

  return (
    <MessageContainer>
      <Column title='Error Type 1' messages={state?.filter((message: Message) => message.priority === 0).reverse()} />
      <Column title='Warning Type 2' messages={state?.filter((message: Message) => message.priority === 1).reverse()} />
      <Column title='Info Type 3' messages={state?.filter((message: Message) => message.priority === 2).reverse()} />
    </MessageContainer>
  )
}

export default MessagesGrid
