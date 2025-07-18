import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

function TodoList() {
  const todosAreLoading = useSelector(state => !state.loading.value.completed);
  const todos = useSelector(state => state.todos.value);
  const completedTodos = todos.filter(todo => todo.isCompleted);
  const incompleteTodos = todos.filter(todo => !todo.isCompleted);

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
