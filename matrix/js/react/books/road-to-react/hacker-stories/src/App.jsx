import { useState, useEffect, useReducer } from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './components/List';
import useStorageState from './lib/helper';
import { initialStories } from './lib/data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useStorageState('search', '');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function getAsyncStories() {
    return new Promise(resolve =>
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
    );
  }

  function storiesReducer(state, action) {
    switch (action.type) {
      case 'SET_STORIES':
        return action.payload;
      case 'REMOVE_STORY':
        return state.filter(
          story => action.payload.objectID !== story.objectID
        );
      default:
        throw new Error();
    }
  }

  const [stories, dispatchStories] = useReducer(storiesReducer, []);

  useEffect(() => {
    setIsLoading(true);

    getAsyncStories()
      .then(result => {
        dispatchStories({
          type: 'SET_STORIES',
          payload: result.data.stories,
        });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
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

      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </section>
  );
}

export default App;
