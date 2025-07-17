import { useRef, useState } from 'react';

function Ref() {
  const soundRef = useRef();
  const colorRef = useRef();

  const submitRef = function (event) {
    event.preventDefault();
    const soundVal = soundRef.current.value;
    const colorVal = colorRef.current.value;
    console.log(`${soundVal} sounds like ${colorVal}`);
    soundRef.current.value = '';
    colorRef.current.value = '#000000';
  };

  const [sound, setSound] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = function (event) {
    event.preventDefault();
    console.log(`${sound} sounds like ${color}`);
    setSound('');
    setColor('#000000');
  };

  return (
    <section>
      <h2>useRef()</h2>
      <form onSubmit={submitRef}>
        <input ref={soundRef} type="text" placeholder="Sound..." />
        <input ref={colorRef} type="color" />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={submit}>
        <input
          value={sound}
          type="text"
          placeholder="Sound..."
          onChange={e => setSound(e.target.value)}
        />
        <input
          value={color}
          type="color"
          onChange={e => setColor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default Ref;
