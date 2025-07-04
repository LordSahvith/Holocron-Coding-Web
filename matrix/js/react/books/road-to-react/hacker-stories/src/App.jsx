import InputWithLabel from './components/InputWithLabel';
import List from './components/List';
import useStorageState from './lib/helper';
import { stories } from './lib/data';
import './App.css';

function App() {
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
