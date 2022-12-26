import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  color: white;
  line-height: 8vh;
  letter-spacing: 2px;
`;

const Header = styled.header`
    height: 8vh;
    width: 100vw;
    background-color: #222831;
`;

export default function Top() {
  return (
    <Header>
        <Title>BedNews</Title>
    </Header>
  )
}
