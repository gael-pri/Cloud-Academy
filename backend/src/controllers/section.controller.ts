import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Section } from "../db/entities/section";
import { Chapter } from "../db/entities/chapter";

// Afficher les sections
const sectionList = async (req: Request, res: Response) => {
      try {
            const sections: Section[] = await dataSource.manager.find(Section);
            res.status(200).send(sections);
      } catch (e) {
            res.status(500).send({ message: 'Error fetching sections', error: e });
      }
}

// Afficher tous les chapitres d'une section
const sectionChapterList = async (req: Request, res: Response) => {
      try {
            const id: string = req.params.id;
            const chapters: Chapter[] = await Chapter.find({ where: { sectionId: id } });
            res.status(200).send(chapters);
      } catch (e) {
            res.status(500).send({ message: 'Error fetching chapters of this section', error: e });
      }
}

// Rédiger une nouvelle section
const postSection = async (req: Request, res: Response) => {
      try {
          const { name, categoryId } = req.body;
          const sectionRepository = dataSource.getRepository(Section);
          const section = sectionRepository.create({ name, categoryId });
          await sectionRepository.save(section);
      } catch (e) {
          console.error('create chapter failed', e);
          res.status(500).send('unexpected error')
      }
  }

// Update une section
const sectionUpdate = async (req: Request, res: Response) => {
      try {
            const id = parseInt(req.params.id);
            const sectionRepository = dataSource.getRepository(Section);
            const section = await sectionRepository.findOne({ where: { id_section: id } });

            const { name } = req.body;

            if (!section) {
                  return res.status(404).send({ message: 'Section not found' });
            }
                
            section.name = name;

            const updated = await Section.save(section);
            res.status(200).send(updated);
      } catch (e) {
            res.status(500).send({ message: 'Error updating section', error: e });
      }
}

export { sectionList, sectionChapterList, postSection, sectionUpdate };