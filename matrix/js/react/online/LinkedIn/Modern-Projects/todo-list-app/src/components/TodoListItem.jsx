import { useDispatch } from 'react-redux';
import { markTodoAsComplete } from './todoSlice';
import { deleteTodo } from './thunks';
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 10px;
  ${props => !props.$completed && 'background: gray;'}
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  padding: 16px;
`;

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardContainer $completed={todo.isCompleted}>
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
    </CardContainer>
  );
}

export default TodoListItem;
