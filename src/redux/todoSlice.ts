// istanbul ignore file

import { IState, ActionPayload } from './types';
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

export const todoSlice = createSlice<IState, SliceCaseReducers<IState>>({
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
    clear: (state: IState) => {
      state.todos = [];
    },
  }
})


export const { addTodo, finishTodo, removeTodo, saveTodo, clear } = todoSlice.actions

export default todoSlice.reducer