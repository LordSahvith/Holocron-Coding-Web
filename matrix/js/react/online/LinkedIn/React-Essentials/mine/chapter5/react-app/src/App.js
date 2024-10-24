import "./App.css";
import { useRef } from "react";

function App() {
  const textTitle = useRef();
  const hexColor = useRef();

  console.log(textTitle);
  console.log(hexColor);

  const submit = (event) => {
    event.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;

    alert(`${title}, ${color}`);
    textTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={textTitle} type="text" placeholder="Color Title..." />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
