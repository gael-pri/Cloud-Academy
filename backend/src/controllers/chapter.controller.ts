import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Chapter } from "../db/entities/chapter";

// Afficher toutes les annonces
const getChapter = async (req: Request, res: Response) => {

      res.send("hello chapter");

}

export { getChapter };