import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getGreeting({ greeting, title }) {
  return `${greeting} ${title}`;
}

function App() {
  return (
    <section>
      <h1>{getGreeting(welcome)}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </section>
  );
}

export default App;
