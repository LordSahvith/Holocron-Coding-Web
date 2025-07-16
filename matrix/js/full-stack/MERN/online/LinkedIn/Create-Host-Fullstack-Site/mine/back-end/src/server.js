import express from 'express';
import { MongoClient, ReturnDocument } from 'mongodb';
import 'colors';

const articleInfo = [
  { name: 'learn-react', upvotes: 0, comments: [] },
  { name: 'learn-node', upvotes: 0, comments: [] },
  { name: 'learn-mongodb', upvotes: 0, comments: [] },
];

const app = express();

app.use(express.json());

let db;

async function connectDB() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  await client.connect();

  db = client.db('Blog-Database');
}

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;

  const article = await db.collection('Articles').findOne({ name });
  res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  const updatedArticle = await db.collection('Articles').findOneAndUpdate(
    { name },
    {
      $inc: { upvotes: 1 },
    },
    {
      returnDocument: 'after',
    }
  );

  res.json(updatedArticle);
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

async function start() {
  await connectDB();

  const PORT = 8000;
  app.listen(PORT, () => {
    const SERVER_URL = `http://localhost:${PORT}/`.underline.bold;
    console.log(`Server is running: ${SERVER_URL}`.blue);
  });
}

start();
