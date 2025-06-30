import { useState } from 'react';
import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getGreeting({ greeting, title }) {
  return `${greeting} ${title}`;
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = function (event) {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> - {item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
}

function List({ list }) {
  return (
    <ul>
      {list.map(item => {
        return <Item key={item.objectID} item={item} />;
      })}
    </ul>
  );
}

function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <section>
      <h1>{getGreeting(welcome)}</h1>

      <Search />

      <List list={stories} />
    </section>
  );
}

export default App;
