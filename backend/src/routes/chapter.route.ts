import express from "express";
import { getChapter }  from "../controllers/chapter.controller";

const router = express.Router();

router.get("/", getChapter);

export default router;