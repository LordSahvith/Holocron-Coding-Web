import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

function TodoList() {
  const todos = useSelector(state => state.todos.value);
  const completedTodos = todos.filter(todo => todo.isCompleted);
  const incompleteTodos = todos.filter(todo => !todo.isCompleted);

  return (
    <div>
      <h1>My TODOs</h1>

      <NewTodoForm />

      <h2>Completed:</h2>
      {completedTodos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}

      <h2>Incomplete:</h2>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
