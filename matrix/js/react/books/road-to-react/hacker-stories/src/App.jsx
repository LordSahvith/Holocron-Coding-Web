import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getGreeting({ greeting, title }) {
  return `${greeting} ${title}`;
}

const list = [
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

function Search() {
  const handleChange = function (event) {
    // synthetic event
    console.log(event);

    // value of target
    console.log(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
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
  return (
    <section>
      <h1>{getGreeting(welcome)}</h1>

      <Search />

      <List list={list} />
    </section>
  );
}

export default App;
