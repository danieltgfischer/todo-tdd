import { useCallback } from 'react';
import * as Types from '../../redux/types';
import { useDispatch } from 'react-redux';
import { finishTodo, removeTodo } from '../../redux/todoSlice';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { FaTrashAlt } from 'react-icons/fa';
import { Container, Title, ControlView } from './styles';

const Todo: React.FC<Types.Todo> = ({ title, id, done, save }) => {
  const dispatch = useDispatch();

  const handleFinishTodo = useCallback(() => {
    dispatch(finishTodo({ title, id, done, save }))
  }, [dispatch, title, id, done, save]);

  const handleDeleteTodo = useCallback(() => {
    dispatch(removeTodo({ title, id, done, save }))
  }, [dispatch, done, id, save, title]);

  return (
    <Container key={id} {...{ done, save }}>
      <Title done={done}>{title}</Title>
      <ControlView>
        <button onClick={handleFinishTodo}>
          {done ? (
            <ImCheckboxChecked size={20} color="#0a8f1c" />
          ) : (
            <ImCheckboxUnchecked size={20} color="#f0f6fc" />
          )}
        </button>
        <button onClick={handleDeleteTodo}>
          <FaTrashAlt
            size={20}
            color="#b61515"
          />
        </button>
      </ControlView>
    </Container>
  )
}

export default Todo