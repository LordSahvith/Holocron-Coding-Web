import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: 'take out garbage', isCompleted: true, id: 0 },
    { text: 'Make dinner', isCompleted: true, id: 1 },
  ]);

  const [incompleteTodos, setIncompleteTodos] = useState([
    { text: 'Paint the house', isCompleted: false, id: 0 },
  ]);

  function markTodoAsComplete(text) {
    setIncompleteTodos(incompleteTodos.filter(todo => todo.text !== text));
    setCompletedTodos([
      ...completedTodos,
      {
        ...incompleteTodos.find(todo => todo.text === text),
        isCompleted: true,
      },
    ]);
  }

  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter(todo => todo.text !== text));
  }

  function createTodo(text) {
    setIncompleteTodos([
      ...incompleteTodos,
      { text, isCompleted: false, id: incompleteTodos.length },
    ]);
  }

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
        onCompletedClicked={markTodoAsComplete}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo}
      />
    </>
  );
}

export default App;
