import React, {useState} from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import uniqid from 'uniqid';
import {
  Button,
  Container,
  Text,
  TextInput,
} from './styles';

const Header: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = useCallback(() => {
      if(value ==='') return;
      dispatch(addTodo({
        id: uniqid(),
        title: value,
        done: false,
        save: false,
      }));
      setValue('');
  }, [dispatch, setValue, value])

  return (
    <Container>
      <TextInput value={value} onChange={({target}) => setValue(target.value)} />
      <Button onClick={handleAddTodo}>
        <Text>Add</Text>
      </Button>
    </Container>
  )
}

export default Header;