import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Chapter } from "../db/entities/chapter";
import { Section } from "../db/entities/section";

// Afficher les sections
const getSection = async (req: Request, res: Response) => {
      const sections: Section[] = await dataSource.manager.find(Section);
      res.send(sections);
}

// Afficher tous les chapitres d'une section
const getSectionChapter = async (req: Request, res: Response) => {
      const id: string = req.params.id;
      const chapters: Chapter[] = await Chapter.find({
            where: { sectionId: id }
          });
      res.send(chapters);
}

export { getSection, getSectionChapter };