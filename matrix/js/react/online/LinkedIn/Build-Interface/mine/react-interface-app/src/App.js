import { BiArchive } from "react-icons/bi";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">Your Appointments</h1>
      <BiArchive />
      <Search />
    </div>
  );
}

export default App;
