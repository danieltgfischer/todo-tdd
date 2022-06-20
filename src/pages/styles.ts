import styled, { createGlobalStyle } from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #010409;
  height: 100%;
  width: 100%;
`;

export const ListSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family:  Roboto, sans-serif;
  }
  #root {
    height: 100vh;
  }
  button {
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
  input {
    outline: none;
  }
`