import { useState, useEffect } from 'react';

function Effect() {
  const [name, setName] = useState('Bobby');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`User: ${admin ? 'admin' : 'not admin'}`);
  }, [admin]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <section>
      <h2>useEffect()</h2>
      <p>Congratulations {name}</p>
      <button onClick={() => setName('Dean')}>Change Name</button>
      <p>{admin ? 'logged in' : 'logged out'}</p>
      <button onClick={() => setAdmin(true)}>Log In</button>

      {data ? (
        <div>
          <ul>
            {data.map(user => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
          <button onClick={() => setData([])}>Remove Data</button>
        </div>
      ) : (
        <p>No Users</p>
      )}
    </section>
  );
}

export default Effect;
