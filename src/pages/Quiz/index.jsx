import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setQuizData,
  selectedAns,
  incrementQsIndex,
  incrementScore,
} from "../../redux/users/quizSlice";

const Quiz = () => {
  const { quizIndex } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizData = useSelector((state) => state.quizState.data);
  const qsIndex = useSelector((state) => state.quizState.questionIndex);
  const score = useSelector((state) => state.quizState.score);
  const selectedAnswer = useSelector((state) => state.quizState.selectedAns);

  const [userAnswer, setUserAnswer] = useState("");
  const [answered, setAnswered] = useState(false);

  if (!quizData || !quizData[quizIndex]) navigate("/");

  const quiz = quizData[quizIndex];

  const checkAns = (option) => {
    if (!answered) {
      setUserAnswer(option);
      setAnswered(true);
      if (option === quiz.questions[qsIndex].correctAnswer) {
        dispatch(incrementScore());
      }
      dispatch(selectedAns([...selectedAnswer, option]));
    }
  };

  const checkTxtAns = () => {
    if (!answered) {
      setAnswered(true);
      if (
        userAnswer.toLowerCase() ===
        quiz.questions[qsIndex].correctAnswer.toLowerCase()
      ) {
        dispatch(incrementScore());
      }
      dispatch(selectedAns([...selectedAnswer, userAnswer]));
    }
  };

  const nxtQs = () => {};

  return (
    <div>
      <h1>{quiz?.title}</h1>
      <h2>Question {qsIndex + 1}</h2>
      <p>{quiz?.questions[qsIndex].question}</p>
      {quiz?.questions[qsIndex].type === "mcq" ? (
        <div>
          {quiz?.questions[qsIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => checkAns(option)}
              disabled={answered}
              style={{
                backgroundColor:
                  answered &&
                  option === userAnswer &&
                  option === quiz?.questions[qsIndex].correctAnswer
                    ? "green"
                    : answered &&
                      option === userAnswer &&
                      option !== quiz?.questions[qsIndex].correctAnswer
                    ? "red"
                    : "white",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={answered}
            placeholder="Type Here...."
          />
          <button
            onClick={checkTxtAns}
            disabled={answered || !userAnswer.trim()}
          >
            Submit
          </button>
        </div>
      )}

      {answered ? (
        <button onClick={nxtQs}>Next Question</button>
      ) : (
        <button disabled>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
