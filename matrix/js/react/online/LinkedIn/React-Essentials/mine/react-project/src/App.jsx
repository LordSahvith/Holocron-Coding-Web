import './App.css';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>We serve the most delicious food around.</h2>
    </header>
  );
}

const items = ['Ham Sandwich', 'Ramen', 'Tuna Sandwich', 'Sloppy Joes'];

const itemsObject = items.map((item, i) => ({
  id: i,
  title: item,
}));

function Menu({ menuItems }) {
  return (
    <ul>
      {menuItems.map(({ id, title }) => (
        <li key={id} style={{ listStyleType: 'none' }}>
          {title}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <Header title="Lord Savith's Kitchen" />
      <Menu menuItems={itemsObject} />
    </>
  );
}

export default App;
