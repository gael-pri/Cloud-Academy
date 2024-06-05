import { Request, Response } from "express";
import dataSource from "../db/typeORMConfig";
import { Article } from "../db/entities/article";

const getArticle = async (req: Request, res: Response) => {

      const ads = "Hello article";
      res.send(ads);
}

export { getArticle };