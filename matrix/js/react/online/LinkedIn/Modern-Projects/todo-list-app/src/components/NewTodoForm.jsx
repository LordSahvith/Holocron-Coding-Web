import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './todoSlice';

function NewTodoForm() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setInputText('');
        dispatch(createTodo(inputText));
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={event => setInputText(event.target.value)}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
}

export default NewTodoForm;
