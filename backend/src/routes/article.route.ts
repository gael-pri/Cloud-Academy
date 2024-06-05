import express from "express";
import { getArticle }  from "../controllers/article.controller";

const router = express.Router();

router.get("/", getArticle);

export default router;