import express from "express";
import { getArticle, postArticle }  from "../controllers/article.controller";

const router = express.Router();

router.get("/", getArticle);
router.post("/ecrire", postArticle);

export default router;