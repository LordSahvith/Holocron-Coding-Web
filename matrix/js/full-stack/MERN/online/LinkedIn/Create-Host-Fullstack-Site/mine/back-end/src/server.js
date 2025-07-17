import express from 'express';
import { MongoClient } from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';
import 'colors';

const credentials = JSON.parse(fs.readFileSync('./creds.json'));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

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

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    const user = await admin.auth().verifyIdToken(authtoken);
    req.user = user;
    next();
  } else {
    res.sendStatus(400);
  }
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection('Articles').findOne({ name });
  const upvoteIds = article.upvoteIds || [];
  const canUpvote = uid && !upvoteIds.includes(uid);

  if (canUpvote) {
    const updatedArticle = await db.collection('Articles').findOneAndUpdate(
      { name },
      {
        $inc: { upvotes: 1 },
        $push: { upvoteIds: uid },
      },
      {
        returnDocument: 'after',
      }
    );

    res.json(updatedArticle);
  } else {
    res.sendStatus(403);
  }
});

app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text };

  const updatedArticle = await db.collection('Articles').findOneAndUpdate(
    { name },
    {
      $push: { comments: newComment },
    },
    {
      returnDocument: 'after',
    }
  );

  res.json(updatedArticle);
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
