import express from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.name}`);
});

app.listen(8000, () => {
  console.log("Server is listening on port: 8000");
});
