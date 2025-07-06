import { useState, useEffect } from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './components/List';
import useStorageState from './lib/helper';
import { initialStories } from './lib/data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useStorageState('search', '');

  const [stories, setStories] = useState([]);

  function getAsyncStories() {
    return new Promise(resolve =>
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
    );
  }

  useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories);
    });
  }, []);

  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

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
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </section>
  );
}

export default App;
