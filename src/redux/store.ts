// istanbul ignore file

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export default configureStore({
  reducer: todoReducer
})