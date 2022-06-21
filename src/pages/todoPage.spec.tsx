import { render, screen } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import store from '../redux/store';
import Page from '.'
import { addTodo, clear } from '../redux/todoSlice';
import uniqid from 'uniqid';
import { act } from 'react-dom/test-utils';

const todo = {
  title: 'Aprender TDD',
  id:  uniqid(),
  save: false,
  done: false,
}

const todo2 = {
  title: 'Aprender Clean Code',
  id:  uniqid(),
  save: false,
  done: false,
}



describe('Todo page', () => {
  beforeEach(() => {
    store.dispatch(addTodo(todo))
  })
  afterEach(() => {
    act(() => {
      store.dispatch(clear(null))
    });
  })
  it('should mount component', () => {
    render(<Page />);
    expect(screen).toBeDefined();
  });

  it('should mark todo as done', () => {
    render(<Page />);
    const [_, btn] = screen.getAllByRole('button');
    userEvent.click(btn);
    const { todos } = store.getState();
    expect(todos[0].done).toBeTruthy();
  });

  it('should delete a Todo', () => {
    render(<Page />);
    const btns = screen.getAllByRole('button');
    const deleteBtn = btns[2];
    userEvent.click(deleteBtn);
    const { todos } = store.getState();
    expect(todos.length).toBe(0);
  });

  it('should display total and finalized correctly', () => {
    store.dispatch(addTodo(todo2))
    
    render(<Page />);
    const [_,btn, ] = screen.getAllByRole('button');
    userEvent.click(btn);
    const total = screen.getByText('2')
    const finalized = screen.getByText('1')

    expect(total).toBeInTheDocument();
    expect(finalized).toBeInTheDocument();
  });

});