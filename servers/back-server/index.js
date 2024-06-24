const express = require("express");
const app = express();
const router = express.Router();

app.use(`${__dirname}/../backend/src`, router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(2900);
