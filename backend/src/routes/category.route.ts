import express from "express";
import { getCategory, getCategorySection }  from "../controllers/category.controller";

const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getCategorySection);

export default router;