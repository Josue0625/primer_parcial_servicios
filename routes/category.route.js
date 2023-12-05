import { Router } from "express";
import { getAll } from "../controllers/category.controller.js";
import { getCategoryAllValidator } from "../validators/category.validator.js";
import { validate } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/", validate(getCategoryAllValidator) ,  getAll ) 

export default router;