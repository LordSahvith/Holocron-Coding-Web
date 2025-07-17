import './App.css';
import State from './components/State';
import Effect from './components/Effect';
import Reducer from './components/Reducer';
import Ref from './components/Ref';
import CustomHook from './components/Custom';
import Context from './components/Context';
import Fetch from './components/Fetch';

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
      <hr />
      <CustomHook />
      <hr />
      <Context />
      <hr />
      <Fetch login="lordsahvith" />
    </div>
  );
}

export default App;
