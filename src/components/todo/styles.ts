import styled, { css } from 'styled-components';

type TContainer = {
  done: boolean;
  save: boolean;
}

const mixinBorder = css<TContainer>`
  ${({ done, save }) => {
    if(save) return 'border: 1px solid #f9a024;'
    if(done) return 'border: 1px solid #0a8f1c;'
    return 'border: 1px solid #f0f6fc;'
  }}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-start;
  width: 90%;
  height: 50px;
  padding: 5px 10px;
  ${mixinBorder}
  border-radius: 5px;
  margin: 15px 0 0;
  background: #0D1117;

`;

type TTitle = {
  done: boolean;
};

export const Title = styled.p<TTitle>`
  flex:1;
  color:${({ done }) => done?'#0a8f1c': '#f0f6fc'};
  text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
`;

export const ControlView = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;