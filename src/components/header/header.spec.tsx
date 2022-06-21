import { render, screen } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import store from '../../redux/store';
import Header from '.'

describe('Header', () => {
  it('should mount component', () => {
    render(<Header />);
    expect(screen).toBeDefined();
  });

  it('should fill text input', () => {
    render(<Header />);
    const input = screen.getByRole('textbox') as HTMLInputElement
    userEvent.type(input, 'Todo1');
    expect(input.value).toBe('Todo1');
  });

  it('should try add without fill text input', () => {
    render(<Header />);
    const [btn] = screen.getAllByRole('button');
    userEvent.click(btn);
    const {todos} = store.getState();
    expect(todos.length).toBe(0);
  });

  it('should add a Todo', () => {
    render(<Header />);
    const input = screen.getByRole('textbox') as HTMLInputElement
    const btn = screen.getByRole('button')
    userEvent.type(input, 'Todo1')
    userEvent.click(btn)
    const { todos } = store.getState()
    expect(todos[0]?.title).toBe('Todo1')
  });
});