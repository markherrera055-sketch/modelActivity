import express from "express";
import { studentcontroller } from "../controllers/studentcontroller.js";
const router = express.Router();

router.post("/", studentcontroller.insert);
router.get("/getstudent", studentcontroller.all);
router.get("/getId/:id", studentcontroller.getById)

export default router;