import React from 'react';
import styled from 'styled-components';
import { rotate } from '../styles/animation';

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > div {
    animation: ${rotate} infinite 1s;
    width: 10em;
    height: 10em;
    border-radius: 50%;
    border: 1em solid;
    border-color: #147fdd transparent #147fdd transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: 7em;
      height: 7em;
      border-radius: 50%;
      border: 1em solid;
      border-color: transparent #147fdd transparent #147fdd;
    }
  }
`;

export default function LocalLoading() {
  return (
    <Loading>
      <div>
        <div />
      </div>
    </Loading>
  );
}
