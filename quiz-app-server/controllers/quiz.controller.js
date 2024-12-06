import { Quiz } from "../models/quiz.model.js";
import { quizData } from "../data/data.js";

export const seedQuizzes = async (req, res) => {
  try {
    await Quiz.deleteMany({});

    const quizzes = await Quiz.insertMany(quizData);

    res.status(200).send({ message: "Quizzes seeded successfully!", quizzes });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error seeding quizzes", error: error.message });
  }
};
