import express from "express";
import { categoryList, categorySectionList, categoryUpdate }  from "../controllers/category.controller";

const router = express.Router();

router.get("/", categoryList);
router.get("/:id", categorySectionList);
router.put("/update/:id", categoryUpdate);

export default router;