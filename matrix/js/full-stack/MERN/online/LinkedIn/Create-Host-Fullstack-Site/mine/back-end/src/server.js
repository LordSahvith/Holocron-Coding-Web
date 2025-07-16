import express from 'express';
import colors from 'colors';

const articleInfo = [
  { name: 'learn-react', upvotes: 0, comments: [] },
  { name: 'learn-node', upvotes: 0, comments: [] },
  { name: 'learn-mongodb', upvotes: 0, comments: [] },
];

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params;
  const article = articleInfo.find(article => article.name === name);

  article.upvotes += 1;

  res.json(article);
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = articleInfo.find(article => article.name === name);

  article.comments.push({
    postedBy,
    text,
  });

  res.json(article);
});

const PORT = 8000;
app.listen(PORT, () => {
  const SERVER_URL = `http://localhost:${PORT}/`.underline.bold;
  console.log(`Server is running: ${SERVER_URL}`.blue);
});
