import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Category } from "../db/entities/category";
import { Section } from "../db/entities/section";

// Afficher toutes les categories
const getCategory = async (req: Request, res: Response) => {
      const categories: Category[] = await dataSource.manager.find(Category);
      res.send(categories);
}

// Afficher toutes les sections d'une categorie
const getCategorySection = async (req: Request, res: Response) => {
      const id: string = req.params.id;
      const sections: Section[] = await Section.find({
            where: { categoryId: id }
          });
      res.send(sections);
}

export { getCategory, getCategorySection };