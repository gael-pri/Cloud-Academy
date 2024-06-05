import express from "express";
import { getSection }  from "../controllers/section.controller";

const router = express.Router();

router.get("/", getSection);

export default router;