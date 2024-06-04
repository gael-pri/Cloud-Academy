import { Request, Response } from "express";

// Afficher toutes les annonces
const getCategory = async (req: Request, res: Response) => {
      //const ads: Annonces[] = await dataSource.manager.find(Annonces);
      const ads = "Hello category";
      res.send(ads);
}

export { getCategory };