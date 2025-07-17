import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}

function App() {
  const [status, setStatus] = useState('Not Delivered');
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>React Hooks</h1>

      <div>
        <p>Package Status: {status}</p>
        <button onClick={() => setStatus('Devlivered')}>Deliver</button>
      </div>

      <div>
        <label>
          {checked ? 'checked' : 'not checked'}
          <input
            type="checkbox"
            value={checked}
            onChange={() => setChecked(checked => !checked)}
          />
        </label>
      </div>

      <div>
        <StarRating totalStars={5} />
      </div>
    </div>
  );
}

export default App;
