import { useReducer } from 'react';

const initialState = {
  message: 'hi',
};

function reducer(state, action) {
  switch (action.type) {
    case 'yell':
      return {
        message: `HEY! I JUST SAID ${state.message}`,
      };
    case 'whisper':
      return {
        message: `excuse me, I just said ${state.message}`,
      };
  }
}

function Reducer() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  const [checked, toggle] = useReducer(checked => !checked, false);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h2>useReducer()</h2>
      <button onClick={() => setNumber(1)}>{number}</button>

      <div>
        <label>
          <input type="checkbox" value={checked} onChange={toggle} />
          {checked ? 'not checked' : 'checked'}
        </label>
      </div>

      <div>
        <p>Message: {state.message}</p>
        <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
        <button onClick={() => dispatch({ type: 'whisper' })}>whisper</button>
      </div>
    </section>
  );
}

export default Reducer;
