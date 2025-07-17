import './App.css';
import State from './components/State';
import Effect from './components/Effect';
import Reducer from './components/Reducer';
import Ref from './components/Ref';

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      <State />
      <hr />
      <Effect />
      <hr />
      <Reducer />
      <hr />
      <Ref />
    </div>
  );
}

export default App;
