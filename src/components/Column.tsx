import React from 'react';
import { Message } from '../Api'

import Card from './Card'

import { 
  StyledColumn,
  ColumnTitle,
  ColumnCount,
  Messages,
} from '../styles'

const Column: React.FC<{
  title: string
  messages?: Message[]
}> = ({ title, messages = [] }) => {
  return (
    <StyledColumn>
      <ColumnTitle>{title}</ColumnTitle>
      <ColumnCount>Count: {messages.length || 0}</ColumnCount>
      <Messages data-testid={title}>
        {messages.map(message => <Card key={message.message} msg={message}/>)}
      </Messages>
    </StyledColumn>
  )
}

export default Column
