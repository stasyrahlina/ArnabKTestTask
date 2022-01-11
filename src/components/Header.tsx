import React from 'react';

import {
  AppTitle,
  StyledHeader,
  FullScreenDivider
} from '../styles';

const Header: React.FC<{}> = () => {
  return  (
    <StyledHeader>
      <AppTitle data-testid='app-title'>Coding Challenge</AppTitle>
      <FullScreenDivider />
    </StyledHeader>
  )
}

export default Header
