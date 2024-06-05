import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Tag } from "../db/entities/tag";

// Afficher toutes les annonces
const getTag = async (req: Request, res: Response) => {

      // Afficher les sections
      //const sections: Section[] = await dataSource.manager.find(Section);
      res.send("hello tag");

}

export { getTag };