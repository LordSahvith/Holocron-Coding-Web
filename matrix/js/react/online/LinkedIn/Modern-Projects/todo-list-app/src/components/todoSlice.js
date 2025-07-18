import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [
      {
        text: 'Go to the store',
        isCompleted: true,
      },
      {
        text: 'New Todo',
        isCompleted: false,
      },
    ],
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
      const text = action.payload;
      const todo = state.value.find(todo => todo.text === text);
      todo.isCompleted = true;
    },
    deleteTodo: (state, action) => {
      const text = action.payload;
      state.value = state.value.filter(todo => todo.text !== text);
    },
  },
});

export { todoSlice };
export const { createTodo, markTodoAsComplete, deleteTodo } = todoSlice.actions;
