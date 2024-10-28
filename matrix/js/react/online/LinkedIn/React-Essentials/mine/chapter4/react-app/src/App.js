import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  console.log(checked);

  return (
    <div className="App">
      <header className="App-header">
        <input
          id="check"
          type="checkbox"
          value={checked}
          onChange={setChecked}
        />
        <label htmlFor="check">{checked ? "checked" : "not checked"}</label>
      </header>
    </div>
  );
}

export default App;
