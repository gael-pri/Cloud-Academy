import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Chapter } from "../db/entities/chapter";

// Afficher tous les chapitres d'une section
const getSectionChapter = async (req: Request, res: Response) => {
      const id: string = req.params.id;
      const chapters: Chapter[] = await Chapter.find({
            where: { sectionId: id }
          });
      res.send(chapters);
}

export { getSectionChapter };