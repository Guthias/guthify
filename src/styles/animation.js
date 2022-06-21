import { keyframes } from 'styled-components';

export const expand = keyframes`
   0% {
    height: 20px;
  }

  50% {
    height: 70px;
  }

  100% {
    height: 20px;
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;
