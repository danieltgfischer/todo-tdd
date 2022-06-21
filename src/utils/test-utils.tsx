import { FC, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import store from '../redux/store';
import { Provider } from 'react-redux';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }