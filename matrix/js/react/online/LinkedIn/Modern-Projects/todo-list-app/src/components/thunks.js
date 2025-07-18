import axios from 'axios';
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from './loadingSlice';
import { todosUpdated } from './todoSlice';

function loadTodos() {
  return async function (dispatch) {
    dispatch(loadingStarted());

    try {
      const response = await axios.get('/api/todos');
      const todos = response.data;
      dispatch(loadingCompleted(todos));
    } catch (error) {
      dispatch(loadingFailed(error));
    }
  };
}

function createTodo(newTodoText) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post('/api/todos', { text: newTodoText });
      const newTodo = response.data;
      const updatedTodos = getState().todos.value.concat(newTodo);
      dispatch(todosUpdated(updatedTodos));
    } catch (error) {
      console.log(error);
    }
  };
}

function deleteTodo(todoId) {
  return async function (dispatch, getState) {
    try {
      await axios.delete('/api/todos/' + todoId);
      const updatedTodos = getState().todos.value.filter(
        todo => todo.id !== todoId
      );
      dispatch(todosUpdated(updatedTodos));
    } catch (error) {
      console.log(error);
    }
  };
}

function markTodoAsComplete(todoId) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.put('/api/todos/' + todoId, {
        isCompleted: true,
      });
      const updatedTodo = response.data;
      const updatedTodos = getState().todos.value.map(todo =>
        todo.id === todoId ? updatedTodo : todo
      );
      dispatch(todosUpdated(updatedTodos));
    } catch (error) {
      console.log(error);
    }
  };
}

export { loadTodos, createTodo, deleteTodo, markTodoAsComplete };
