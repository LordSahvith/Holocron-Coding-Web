import { useState } from 'react';
import './App.css';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = function (event) {
    setSearchTerm(event.target.value);

    // Callback Handler for App Component
    onSearch(event);
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

  // callback handler for Search Component
  const handleSearch = function (event) {
    console.log(event.target.value);
  };

  return (
    <section>
      <h1>My Hacker Stories</h1>

      {/* pass callback handler to Search Component */}
      <Search onSearch={handleSearch} />

      <List list={stories} />
    </section>
  );
}

export default App;
