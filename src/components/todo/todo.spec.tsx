import { render, screen } from '../../utils/test-utils';
import Todo from '.'

const todo =  {
  title: 'Aprender TDD',
  id: '1',
  save: false,
  done: false,
}


describe('Todo', () => {
  it('should mount component', () => {
    render(<Todo{...todo} />);
    expect(screen).toBeDefined();
  });

  it('should display title', () => {
    render(<Todo{...todo} />);
    const title = screen.getByText(todo.title);
    expect(title.textContent).toBe(todo.title);
  });

  it('should mark todo as done', () => {
    render(<Todo{...todo} done />);
    const svgBtn = screen.getByRole('checkbox');
    const title = screen.getByText(todo.title);
    expect(title).toHaveStyle('text-decoration: line-through')
    expect(svgBtn).toHaveStyle('color: #0a8f1c')
  });
});