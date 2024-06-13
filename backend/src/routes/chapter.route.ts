import express from "express";
import { chapterArticlesList, chapterList, chapterUpdate, postChapter }  from "../controllers/chapter.controller";

const router = express.Router();

router.get("/", chapterList);
router.get("/:id", chapterArticlesList);
router.post("/ecrire", postChapter);
router.put("/update/:id", chapterUpdate);

export default router;