import { useEffect, useState } from 'react';
import './App.css';

function InputWithLabel({
  id,
  value,
  type = 'text',
  isFocused,
  onInputChange,
  children,
}) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}
      />
    </>
  );
}

function Item({ item }) {
  return (
    <li>
      <a href={item.url}>{item.title}</a> - {item.author} {item.num_comments}{' '}
      {item.points}
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

function useStorageState(key, initialState) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
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

  const [searchTerm, setSearchTerm] = useStorageState('search', '');

  const handleSearch = function (event) {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search</strong>:&nbsp;
      </InputWithLabel>

      <hr />

      <List list={searchedStories} />
    </section>
  );
}

export default App;
