import { IState, ActionPayload } from './types';
import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state: IState, { payload }: ActionPayload) => {
      state.todos = [...state.todos, payload];
    },
    removeTodo: (state: IState, { payload }: ActionPayload) => {
      state.todos = state.todos.filter(todo => todo.id !== payload.id)
    },
    finishTodo: (state: IState, { payload }: ActionPayload) => {
      state.todos.forEach(todo => {
        if (todo.id === payload.id) 
          todo.done = !todo.done
        
      })
    },
    saveTodo: (state: IState, { payload }: ActionPayload) => {
      state.todos.forEach(todo => {
        if (todo.id === payload.id)
          todo.save = !todo.save
      })
    },
  }
})


export const { addTodo, finishTodo, removeTodo, saveTodo } = todoSlice.actions

export default todoSlice.reducer