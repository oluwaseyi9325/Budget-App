import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload })
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.todos.find(t => t.id === id)
      if (todo) todo.text = text
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
