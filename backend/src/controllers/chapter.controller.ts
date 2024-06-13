import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Chapter } from "../db/entities/chapter";
import { Article } from "../db/entities/article";

// Afficher tous les chapitres
const chapterList = async (req: Request, res: Response) => {
      try {
            const chapters: Chapter[] = await dataSource.manager.find(Chapter);
            res.status(200).send(chapters);
      } catch (e) {
            res.status(500).send({ message: 'Error fetching chapters', error: e });
      }
}

// Afficher les articles d'un chapitre
const chapterArticlesList = async (req: Request, res: Response) => {
      const id: string = req.params.id;
      const articles: Article[] = await Article.find({ where: { chapterId: id } });
      res.send(articles);
}

// Rédiger un nouveau chapitre
const postChapter = async (req: Request, res: Response) => {
      try {
          const { title, description, sectionId } = req.body;
          const chapterRepository = dataSource.getRepository(Chapter);
          const chapter = chapterRepository.create({ title, description, sectionId });
          await chapterRepository.save(chapter);
      } catch (e) {
          console.error('create chapter failed', e);
          res.status(500).send('unexpected error')
      }
  }

// Update un chapitre
const chapterUpdate = async (req: Request, res: Response) => {
      try {
            const id = parseInt(req.params.id);
            const chapterRepository = dataSource.getRepository(Chapter);
            const chapter = await chapterRepository.findOne({ where: { id_chapter: id } });

            const { title, description } = req.body;

            if (!chapter) {
                  return res.status(404).send({ message: 'Chapter not found' });
            }
                
            chapter.title = title;
            chapter.description = description;

            const updated = await Chapter.save(chapter);
            res.status(200).send(updated);
      } catch (e) {
            res.status(500).send({ message: 'Error updating chapter', error: e });
      }
}

// // routes à tester (chapter.queries.js)
// exports.createChapter = (chapter) => {
//       const newChapter = new Chapter({
//             ...chapter,
//             active: chapter.active ? true : false
//       });
//       return newChapter.save()
// };

// exports.searchChapters = (search) => {
//       return Chapter.find({ title: new RegExp(search, 'i')});
//  }

// // dans chapter.controller.js
// // str est le nom de la variable du champ input du formulaire
// exports.searchChapters = async (req, res, next) => {
//       try {
//             const search = req.query.str;
//             const chapters = await searchChapters(search);
//       } catch(e) {
//             next(e)
//       }
// }

export { chapterList, chapterArticlesList, chapterUpdate, postChapter };