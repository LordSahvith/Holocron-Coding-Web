import "./App.css";
import { useState, useEffect } from "react";

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}`;

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
};

function Lift({ name, evelavtionGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {evelavtionGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://snowtooth.moonhighway.com/", options)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  console.log(data);

  return (
    <div>
      {data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          evelavtionGain={lift.evelavtionGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;
