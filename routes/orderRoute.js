import express from "express";
import { ordercontroller } from "../controllers/ordercontroller.js";
const router = express.Router();

router.post("/", ordercontroller.insert);
router.get("/getorder", ordercontroller.all);
router.get("/getId/:id", ordercontroller.getById)

export default router;