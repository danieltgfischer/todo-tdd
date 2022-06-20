import { useSelector } from 'react-redux';
import { IState } from '../redux/types';

type UseTodoInfos = {
  length: number;
  finalized: number;
}

export const useTodoInfos = (): UseTodoInfos => {
  const { todos } = useSelector((state:IState) => state);
  return  {
    length: todos.length,
    finalized: todos.filter(todo => todo.done).length
  }
}

