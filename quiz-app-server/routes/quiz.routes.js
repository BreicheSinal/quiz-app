import express from "express";
import { getQuizzes } from "../controllers/quiz.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/quizzes", authMiddleware, getQuizzes);

export default router;
