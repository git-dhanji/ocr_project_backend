import express from "express";

const app = express();
const port = 3000 || "env variable ";

app.get("/", (req, res) => {
  res.send("Chalo aaj kuch karte hai ");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
