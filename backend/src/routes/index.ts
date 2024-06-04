import express from "express";

import categoryRoutes from "./category.route";

const router = express.Router();

router.use('/category', categoryRoutes);

router.get('/', (req, res) => {
    console.log('Mon index');
    res.send('Hello');
})

export default router;