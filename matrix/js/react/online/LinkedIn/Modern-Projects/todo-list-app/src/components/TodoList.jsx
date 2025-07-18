import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from './selectors';

function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);

  return (
    <div>
      <h1>My TODOs</h1>

      <NewTodoForm />

      {todosAreLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Completed:</h2>
          {completedTodos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}

          <h2>Incomplete:</h2>
          {incompleteTodos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
}

export default TodoList;
