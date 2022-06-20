import React from 'react';
import { useTodoInfos } from '../../hooks/useTodosInfos';
import { Container, Info, Span } from './styles';

const TodosInfos: React.FC = () => {
  const { finalized, length } = useTodoInfos();

  return (
    <Container>
      <Info>Total: <Span>{length}</Span></Info>
      <Info>Finalized: <Span done>{finalized}</Span></Info>
    </Container>
  )
}

export default TodosInfos;