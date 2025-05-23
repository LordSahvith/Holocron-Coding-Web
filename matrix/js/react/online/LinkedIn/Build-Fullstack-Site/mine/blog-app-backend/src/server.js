import express from "express";

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
    comments: [],
  },
  {
    name: "learn-node",
    upvotes: 0,
    comments: [],
  },
  {
    name: "learn-mongodb",
    upvotes: 0,
    comments: [],
  },
];

const app = express();
app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((article) => article.name === name);

  if (article) {
    article.upvotes++;
    res.send(
      `The ${name} article now has ${article.upvotes} upvote${
        article.upvotes > 1 ? "s" : ""
      }!`
    );
  } else {
    res.send("That article doesn't exist");
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find((article) => article.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send("That article doesn't exist.");
  }
});

app.listen(8000, () => {
  fetch('https://www.fishwatch.gov/api/species')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the data to the console
  })
  .catch(error => {
    console.error('Error fetching fish species data:', error);
  });cd
  console.log("Server is listening on port: 8000");
});
