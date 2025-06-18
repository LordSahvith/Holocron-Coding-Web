const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const PORT = process.env.PORT || 8000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to Express');
});

app.use('/api/tasks', require('./routes/taskRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is up on port 8000`));
