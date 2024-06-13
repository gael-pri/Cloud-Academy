import express from "express";
import cors from "cors";
import router from "./routes";

import dataSource from "./db/typeORMConfig";
import "reflect-metadata";

const app = express();
const port = process.env.PORT || 2900;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app
    .listen(port, async () => {
      await dataSource
    .initialize()
    .then(() => {
      console.log('Server launch on http://localhost:' + port);
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err)
    })
});