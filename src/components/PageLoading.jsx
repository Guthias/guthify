import React from 'react';
import styled from 'styled-components';
import { expand } from '../styles/animation';

const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  user-select: none;
  background-color: rgb(4, 104, 191);
  color: white;
  display: flex;
  gap: 10px;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    width: 20px;
    height: 20px;
    animation: ${expand} infinite 1s;
  }

  div:nth-child( 1 ) {
    animation-delay: 0.1s;
  }

  div:nth-child( 2 ) {
    animation-delay: 0.2s;
  }

  div:nth-child( 3 ) {
    animation-delay: 0.3s;
  }
`;

export default function PageLoading() {
  return (
    <Loading>
      <div />
      <div />
      <div />
    </Loading>
  );
}
