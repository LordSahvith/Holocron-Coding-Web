import { createSelector } from '@reduxjs/toolkit';

function getTodos(state) {
  return state.todos.value;
}

function getTodosLoading(state) {
  return !state.loading.value.completed;
}

const getCompletedTodos = createSelector([getTodos], todos =>
  todos.filter(todo => todo.isCompleted)
);

const getIncompleteTodos = createSelector([getTodos], todos =>
  todos.filter(todo => !todo.isCompleted)
);

export { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos };
