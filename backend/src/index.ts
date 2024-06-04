import express from "express";
import router from "./routes";

const app = express();
const port = process.env.PORT || 2900;

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
