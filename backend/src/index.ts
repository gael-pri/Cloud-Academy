import express from "express";
import router from "./routes";
import fs from "fs";
import db from "./db/sqliteConfig";

import dataSource from "./db/typeORMConfig";
import "reflect-metadata";
// import { Category } from "./db/entities/category";
// import { Section } from "./db/entities/section";
// import { Tag } from "./db/entities/tag";
// import { Chapter } from "./db/entities/chapter";
// import { Article } from "./db/entities/article";

const app = express();
const port = process.env.PORT || 2900;

app.use(express.json());
app.use("/", router);

 const sqlContent: string = fs.readFileSync('./src/db/queries.sql', { encoding: 'utf-8'});

 db.exec(sqlContent, (err) => {
     if (err) {
      console.error("Error executing the SQL script:", err.message);
    } else {
      console.log("Database initialized successfully.");
     }
   });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//  async function cleanDB() {
//    await dataSource.manager.clear(Category);
//   await dataSource.manager.clear(Section);
//    await dataSource.manager.clear(Chapter);
//    await dataSource.manager.clear(Article);
//   await dataSource.manager.clear(Tag);
//  }
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
    //await cleanDB();
});