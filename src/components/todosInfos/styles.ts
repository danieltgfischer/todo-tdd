import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0 0;
`;

export const Info = styled.p`
  color: #f0f6fc;
  font-size: 18px;
  margin: 0 15px 0 0;
`;

type TSpan = {
  done?: boolean;
}
export const Span = styled.span<TSpan>`
  color: ${({ done }) => done? '#0a8f1c' : '#f9a024'};
  font-size: 20px;
  font-weight: 600;
`;