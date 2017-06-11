// import React from 'react';
import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scale = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

export const ShowWrapper = styled.div`
  animation: ${show} 1s ease-out, ${scale} 0.5s ease-out;
  display: flex;
  flex-wrap: wrap;
  flex: 0;
`;

export const ColorWrapper = styled.div`
  animation: ${show} 1s ease-out;
  background-color: rgb(177, 232, 252);
  width: 100vw;
  min-height: 100vh;
  padding: 0 4vmin;
  display: flex;
  justify-content: center;
  align-items: center;
`;
