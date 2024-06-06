import express from "express";
import { getSectionChapter }  from "../controllers/section.controller";

const router = express.Router();

router.get("/:id", getSectionChapter);

export default router;