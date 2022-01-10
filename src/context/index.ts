import React, { Dispatch } from 'react';
import { Message } from './../Api';

export const initialState:  Message[] | [] = [];

type ActionType = 
| {type: 'update', payload: Message}
| {type: 'deleteAll'}
| {type: 'deleteSingle', payload: string}

export interface ContextType {
  dispatch: Dispatch<ActionType>
  state: Message[]
}

export const ContextApp = React.createContext<ContextType | null>(null);

export const messagesReducer = (state: Message[] | [] , action: ActionType) => {
  switch (action.type) {
    case 'update': {
      return [ ...state, action.payload ]
    }
    case 'deleteAll': {
      return []
    }
    case 'deleteSingle': {
      return state.filter(message => action.payload !== message.message )
    }
    default: {
      return state
    }
  }
}

