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
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </>
  );
}

function Item(props) {
  return (
    <li key={props.item.objectID}>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span> - {props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

function List() {
  return (
    <ul>
      {list.map(item => {
        return <Item item={item} />;
      })}
    </ul>
  );
}

function App() {
  return (
    <section>
      <h1>{getGreeting(welcome)}</h1>

      <Search />

      <List />
    </section>
  );
}

export default App;
