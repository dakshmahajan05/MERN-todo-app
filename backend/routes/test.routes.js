import { Router } from "express";
import testing from "../controllers/test.controllers.js";
const router = Router()

router.get('/test',testing)

export default router