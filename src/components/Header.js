import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      Bubble Journal App
    </HeaderContainer>
  );
};

export default Header;