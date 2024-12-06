import express from "express";
import { seedQuizzes } from "../controllers/quiz.controller.js";

const router = express.Router();

router.post("/seed-quizzes", seedQuizzes);

export default router;
