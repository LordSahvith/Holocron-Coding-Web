import { useTrees } from '../main';

function Context() {
  const { trees } = useTrees();

  return (
    <section>
      <h2>useContext()</h2>
      <ul>
        {trees.map(tree => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </section>
  );
}

export default Context;
