import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", verifyToken, (req, res) => {
  res.json({ users: 0, products: 0 });
});

export default router;