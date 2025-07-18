import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodos } from './components/thunks';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
