import { useCallback, useEffect, useReducer, useState } from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './components/List';
import { useStorageState, storiesReducer } from './lib/helper';
import axios from 'axios';
import './App.css';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

function App() {
  const [searchTerm, setSearchTerm] = useStorageState('search', 'react');
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const handleFetchStories = useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = function (event) {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = function () {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  return (
    <section>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button type="button" disabled={!searchTerm} onClick={handleSearchSubmit}>
        Submit
      </button>

      <hr />

      {stories.isError && <p>Something went wrong...</p>}

      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </section>
  );
}

export default App;
