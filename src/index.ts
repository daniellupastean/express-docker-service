import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from TypeScript + Docker!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/error", (req, res) => {
  res.status(500).send("Internal Server Error");
});

app.get("/not-found", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
