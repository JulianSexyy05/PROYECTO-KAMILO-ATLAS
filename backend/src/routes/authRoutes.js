import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { authLimiter } from "../middlewares/rateLimitMiddleware.js";
import { registerValidators, loginValidators } from "../validators/authValidators.js";

const router = Router();

router.post("/register", authLimiter, registerValidators, authController.register);
router.post("/login", authLimiter, loginValidators, authController.login);
router.get("/me", authMiddleware, authController.me);

export default router;
