import express from "express";
import { getTag }  from "../controllers/tag.controller";

const router = express.Router();

router.get("/", getTag);

export default router;