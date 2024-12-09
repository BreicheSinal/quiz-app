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

export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz data", error });
  }
};
