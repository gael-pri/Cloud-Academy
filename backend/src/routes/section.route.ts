import express from "express";
import { getSection, getSectionChapter }  from "../controllers/section.controller";

const router = express.Router();

router.get("/", getSection);
router.get("/:id", getSectionChapter);

export default router;