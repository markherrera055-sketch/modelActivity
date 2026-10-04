import express from "express";
import { productcontroller } from "../controllers/productcontroller.js";
const router = express.Router();

router.post("/", productcontroller.insert);
router.get("/getproduct", productcontroller.all);
router.get("/getId/:id", productcontroller.getById)

export default router;