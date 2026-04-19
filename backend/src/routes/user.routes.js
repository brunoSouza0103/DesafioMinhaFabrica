import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", verifyToken, userController.getAll);
router.post("/", verifyToken, userController.create);
router.put("/:id", verifyToken, userController.update);
router.delete("/:id", verifyToken, userController.remove);

export default router;