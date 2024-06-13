import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Category } from "../db/entities/category";
import { Section } from "../db/entities/section";

// Afficher toutes les categories
const categoryList = async (req: Request, res: Response) => {
      try {
            const categories: Category[] = await dataSource.manager.find(Category);
            res.status(200).send(categories);
      } catch (e) {
            res.status(500).send({ message: 'Error fetching categories', error: e });
            //next(e)
      } 
}

// Afficher les sections d'une categorie
const categorySectionList = async (req: Request, res: Response): Promise<void> => {
      try {
            const id: number = parseInt(req.params.id);
            const sections: Section[] = await Section.find({ where: { categoryId: id } });
            res.status(200).send(sections);
      } catch (e) {
            res.status(500).send({ message: 'Error fetching sections of this category', error: e });
      }
 }

// Update une categorie
const categoryUpdate = async (req: Request, res: Response) => {
      try {
            const id = parseInt(req.params.id);
            const categoryRepository = dataSource.getRepository(Category);
            const category = await categoryRepository.findOne({ where: { id: id } });

            const { name, description } = req.body;

            if (!category) {
                  return res.status(404).send({ message: 'Category not found' });
            }
                
            category.name = name;
            category.description = description;

            const updated = await Category.save(category);
            res.status(200).send(updated);
      } catch (e) {
            res.status(500).send({ message: 'Error updating category', error: e });
      }
}

export { categoryList, categorySectionList, categoryUpdate };