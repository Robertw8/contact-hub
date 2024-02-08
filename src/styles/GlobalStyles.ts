import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Roboto from '../assets/fonts/Roboto-Regular.ttf';

const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }

  body {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: #22223b;
    color: #09bc8a;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  address {
    font-style: normal;
  }
`;

const Container = styled.div<{ margin?: number }>`
  max-width: 1180px;
  margin: ${({ margin }) => margin} auto;
  padding: 16px;

  @media screen and (max-width: 1080px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 375px;
  }
`;

export { GlobalStyles, Container };
