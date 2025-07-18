import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: (state, action) => {
      state.value = [
        ...state.value,
        {
          text: action.payload,
          isCompleted: false,
        },
      ];
    },
    markTodoAsComplete: (state, action) => {
      const id = action.payload;
      const todo = state.value.find(todo => todo.id === id);
      todo.isCompleted = true;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter(todo => todo.id !== id);
    },
    todosUpdated: (state, action) => {
      const updatedTodos = action.payload;
      state.value = updatedTodos;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadingCompleted, (state, action) => {
      state.value = action.payload;
    });
  },
});

export { todoSlice };
export const { createTodo, markTodoAsComplete, deleteTodo, todosUpdated } =
  todoSlice.actions;
