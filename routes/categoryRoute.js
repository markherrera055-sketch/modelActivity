import express from "express";
import { categorycontroller } from "../controllers/categorycontroller.js";
const router = express.Router();

router.post("/", categorycontroller.insert);
router.get("/getcategory", categorycontroller.all);
router.get("/getId/:id", categorycontroller.getById)

export default router;