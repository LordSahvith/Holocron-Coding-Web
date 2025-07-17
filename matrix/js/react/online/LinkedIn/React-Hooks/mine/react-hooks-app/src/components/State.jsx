import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

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

function State() {
  const [status, setStatus] = useState('Not Delivered');
  const [checked, setChecked] = useState(false);
  return (
    <section>
      <h2>useState()</h2>
      <div>
        <p>Package Status: {status}</p>
        <button onClick={() => setStatus('Devlivered')}>Deliver</button>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            value={checked}
            onChange={() => setChecked(checked => !checked)}
          />
          {checked ? 'not checked' : 'checked'}
        </label>
      </div>

      <div>
        <StarRating totalStars={5} />
      </div>
    </section>
  );
}

export default State;
