import express from "express";

import categoryRoutes from "./category.route";
import sectionRoutes from "./section.route";

const router = express.Router();

router.use('/category', categoryRoutes);
router.use('/section', sectionRoutes);

router.get('/', (req, res) => {
    console.log('Mon index');
    res.send('Hello index');
})

export default router;