import express from "express";
import {devicecontroller} from "../controllers/devicecontroller.js"

const router = express.Router();

router.get("/devices", devicecontroller.all);
router.post("/devices", devicecontroller.insert);
router.get("/devices/:id", devicecontroller.one);
router.put("/devices/:id", devicecontroller.update1);
router.delete("/devices/:id", devicecontroller.delete1);


export default router;