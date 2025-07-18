import { useDispatch } from 'react-redux';
import { markTodoAsComplete } from './todoSlice';
import { deleteTodo } from './thunks';

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsComplete(todo.id))}>
          Mark as Completed
        </button>
      )}
    </div>
  );
}

export default TodoListItem;
