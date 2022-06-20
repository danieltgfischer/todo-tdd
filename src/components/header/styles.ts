import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 20px 0 0;
`;

export const TextInput = styled.input`
  flex:1;
  height: 40px;
  width: 99.5%;
  color: #333;
  font-size: 20px;
  border: 1px solid #f0f6fc;
  border-radius: 5px;
  margin: 0 25px 0 0;
`;



export const Text = styled.p`
  color: #f0f6fc;
  font-size: 18px;
`

export const Button = styled.button`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid #f0f6fc;
  padding: 5px 8px;
  border-radius: 5px;
`;