import express from "express";
import { usercontroller } from "../controllers/usercontroller.js";
const router = express.Router();

router.post("/", usercontroller.insert);
router.get("/getuser", usercontroller.all);
router.get("/getId/:id", usercontroller.getById)

export default router;