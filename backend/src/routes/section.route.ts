import express from "express";
import { sectionChapterList, sectionList, postSection, sectionUpdate }  from "../controllers/section.controller";

const router = express.Router();

router.get("/", sectionList);
router.get("/:id", sectionChapterList);
router.post("/ecrire", postSection);
router.put("/update/:id", sectionUpdate);

export default router;