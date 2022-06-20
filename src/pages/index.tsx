import { useSelector } from 'react-redux';
import { IState } from '../redux/types';
import Header from '../components/header';
import Todo from '../components/todo';
import TodosInfos from '../components/todosInfos';
import { 
  Container,
  GlobalStyle,
  ListSection,
 } from './styles';

export default function App() {
  const { todos } = useSelector((state: IState) => state);

  return (
    <Container>
      <GlobalStyle />
      <ListSection>
        <Header />
        <TodosInfos />
        {todos.map(todo => <Todo key={todo.id} {...todo} />)}
      </ListSection>
    </Container>
  );
}

