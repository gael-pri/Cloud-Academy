import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Article } from "../db/entities/article";
import { Chapter } from "../db/entities/chapter";

// Afficher les articles d'une section par chapitre
// findbyone(sectionId)
const getArticle = async (req: Request, res: Response) => {
      const id: string = req.params.id;
      const chapters: Chapter[] = await Chapter.find({
            where: { sectionId: id }
          });
      res.send(chapters);
}

// Rédiger un nouvel article
const postArticle = async (req: Request, res: Response) => {
    try {
        const { title, subtitle, description, chapterId } = req.body;
        const articleRepository = dataSource.getRepository(Article);
        const article = articleRepository.create({title, subtitle, description, chapterId });
        await articleRepository.save(article);
    } catch (e) {
        console.error('create article failed', e);
        res.status(500).send('unexpected error')
    }
}

export { getArticle, postArticle };