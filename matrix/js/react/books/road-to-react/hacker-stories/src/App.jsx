import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getGreeting({ greeting, title }) {
  return `${greeting} ${title}`;
}

const numbers = [1, 2, 3, 4];

const exponentialNumbers = numbers.map(number => {
  return number * number;
});

console.log(exponentialNumbers);

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

function App() {
  return (
    <section>
      <h1>{getGreeting(welcome)}</h1>

      <ul>
        {list.map(item => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default App;
