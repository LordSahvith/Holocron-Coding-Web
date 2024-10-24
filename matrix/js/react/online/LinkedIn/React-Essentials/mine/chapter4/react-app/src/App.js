import "./App.css";

const cities = ["Tokyo", "SLC", "Las Vegas"];

const [firstCity, secondCity] = cities;

console.log(firstCity, secondCity);

function App({ library }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello From {library}</h1>
      </header>
    </div>
  );
}

export default App;
