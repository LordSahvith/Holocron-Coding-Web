import { useState } from 'react';
import './App.css';

function Header({ title }) {
  const [status, setStatus] = useState(true);

  const toggleRestaurant = () => {
    setStatus(!status);
  };

  return (
    <header>
      <h1>{title}</h1>
      <h2>We serve the most delicious food around.</h2>
      <p>The restaurant is currently {status ? 'open' : 'closed'}</p>
      <button onClick={toggleRestaurant}>
        {status ? 'Close' : 'Open'} Restaurant
      </button>
    </header>
  );
}

const items = [
  'Coffee',
  'Bacon & Eggs',
  'Ham Sandwich',
  'Ramen',
  'Tuna Sandwich',
  'Sloppy Joes',
];

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
    // React Fragment doesn't add anything to the DOM, just a react quirk
    <>
      <Header title="Lord Savith's Kitchen" />
      <main>
        <img
          src="https://picsum.photos/id/42/200/300"
          alt="Coffee Shop Table with two coffee cups."
        />
        <Menu menuItems={itemsObject} />
      </main>
    </>
  );
}

export default App;
