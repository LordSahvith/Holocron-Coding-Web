import { useState } from 'react';

function NewTodoForm({ onCreateClicked }) {
  const [inputText, setInputText] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onCreateClicked(inputText);
        setInputText('');
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
