import React from 'react';
import '@testing-library/jest-dom'
import {render, waitFor} from '@testing-library/react'
import renderer from 'react-test-renderer';

import App from '../App';
import Card from '../components/Card';
import Header from '../components/Header';
import ControlPanel from '../components/ControlPanel';

test('renders learn react link', () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});

test('Header rendered header text', () => {
  const {getByTestId} = render(<Header />);
    expect(getByTestId('app-title')).toBeInTheDocument();
});

test('ControlPanel rendered buttons', () => {
  const {getByTestId} = render(<ControlPanel subscribeFunc={()=>{}} />);
    expect(getByTestId('stop-button')).toBeInTheDocument();
    expect(getByTestId('clear-button')).toBeInTheDocument();
});

test('Messages are rendered for error type', async () => {
  const {queryByTestId } = render(<App />);
    await waitFor(() => {
      expect(queryByTestId('card')).not.toEqual(null);
    })
})

it('Card snapshot', () => {
  const tree = renderer
    .create(<Card msg={
      {
        message: 'some string',
        priority: 0
      }
    } />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Header snapshot', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('ControlPanel snapshot', () => {
  const tree = renderer
    .create(<ControlPanel subscribeFunc={()=>{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
