import express from "express";
import { getChapter, getSpecifiqChapter, getArticlesChapter }  from "../controllers/chapter.controller";

const router = express.Router();

router.get("/", getChapter);
router.get("/:id", getArticlesChapter);


export default router;