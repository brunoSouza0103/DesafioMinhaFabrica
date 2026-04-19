import { Router } from "express";
import * as productController from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", verifyToken, productController.getAll);
router.post("/", verifyToken, productController.create);
router.put("/:id", verifyToken, productController.update);
router.delete("/:id", verifyToken, productController.remove);

export default router;