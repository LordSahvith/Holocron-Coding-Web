import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

function TodoList({
  completedTodos,
  incompleteTodos,
  onCompletedClicked,
  onDeleteClicked,
  onCreateClicked,
}) {
  return (
    <div>
      <h1>My TODOs</h1>

      <NewTodoForm onCreateClicked={onCreateClicked} />

      <h2>Completed:</h2>
      {completedTodos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDeleteClicked={onDeleteClicked}
        />
      ))}

      <h2>Incomplete:</h2>
      {incompleteTodos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompletedClicked={onCompletedClicked}
        />
      ))}
    </div>
  );
}

export default TodoList;
