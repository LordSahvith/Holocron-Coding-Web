import { useInput } from './useInput';

function CustomHook() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submitInput = function (event) {
    event.preventDefault();
    console.log(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <section>
      <h2>Custom: useInput()</h2>
      <form onSubmit={submitInput}>
        <input {...titleProps} type="text" placeholder="Sound..." />
        <input {...colorProps} type="color" />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default CustomHook;
