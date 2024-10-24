import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (event) => {
    event.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Color Title..."
      />
      <input
        type="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
