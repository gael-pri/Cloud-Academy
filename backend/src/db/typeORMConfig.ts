import path from "path";
import { DataSource } from "typeorm";

import { Category } from "./entities/category";
import { Section } from "./entities/section";
import { Chapter } from "./entities/chapter";
import { Article } from "./entities/article";
import { Tag } from "./entities/tag";

const dbPath = path.resolve(__dirname, "cloudAcademy.sqlite");

export const dataSource = new DataSource({
  type: "sqlite",
  database: dbPath,
  entities: ["./entities/*.ts"],
  synchronize: true,
});

export default dataSource;