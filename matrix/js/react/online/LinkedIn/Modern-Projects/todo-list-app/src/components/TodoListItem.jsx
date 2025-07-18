import { useDispatch } from 'react-redux';
import { markTodoAsComplete, deleteTodo } from './todoSlice';

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.text))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsComplete(todo.text))}>
          Mark as Completed
        </button>
      )}
    </div>
  );
}

export default TodoListItem;
