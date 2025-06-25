import './App.css';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>We serve the most delicious food around.</h2>
    </header>
  );
}

function App() {
  return <Header title="Lord Savith's Kitchen" />;
}

export default App;
