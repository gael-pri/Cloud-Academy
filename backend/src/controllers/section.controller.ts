import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Section } from "../db/entities/section";

// Afficher toutes les annonces
const getSection = async (req: Request, res: Response) => {

      // Afficher les sections
      //const sections: Section[] = await dataSource.manager.find(Section);
      res.send("hello section");

}

export { getSection };