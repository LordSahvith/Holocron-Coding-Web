import { useFetch } from './useFetch';

function Fetch({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <section>
      <h2>Custom: useFetch()</h2>

      {data && (
        <>
          <img src={data.avatar_url} alt={data.login} />
          <div>
            <h3>{data.login}</h3>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
          </div>
        </>
      )}
    </section>
  );
}

export default Fetch;
