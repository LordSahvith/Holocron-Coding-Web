import "./App.css";
import { useState, useEffect } from "react";

function GitHubUser({ name, location, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={image} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/LordSahvith")
      .then((response) => response.json())
      // .then((data) => setData(data));
      .then(setData);
  }, []);

  if (data) {
    return (
      <GitHubUser
        name={data.name}
        location={data.location}
        image={data.avatar_url}
      />
    );
  }
}

export default App;
