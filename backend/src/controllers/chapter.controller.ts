import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Chapter } from "../db/entities/chapter";
import { Article } from "../db/entities/article";

// Afficher tous les chapitres
const getChapter = async (req: Request, res: Response) => {
      const chapters: Chapter[] = await dataSource.manager.find(Chapter);
      res.send(chapters);
}

// Afficher les chapitres d'une section
const getSpecifiqChapter = async (req: Request, res: Response) => {

      res.send("hello chapter");

}

// Afficher les articles d'un chapitre
const getArticlesChapter = async (req: Request, res: Response) => {
      const id: string = req.params.id;
      const articles: Article[] = await Article.find({
            where: { chapterId: id }
          });
      res.send(articles);
}

export { getChapter, getSpecifiqChapter, getArticlesChapter };