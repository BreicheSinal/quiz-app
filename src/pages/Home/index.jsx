import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";

const Home = () => {
  const navigate = useNavigate();

  const score = useSelector((state) => state.quizState.score);
  const quizData = useSelector((state) => state.quizState.data);

  const navigateToQuiz = (index) => {
    navigate(`/quiz/${index}`, { state: { quizIndex: index } });
  };

  return (
    <div>
      <h1>WELCOME MATE!</h1>
      <p>Total Score:{score}</p>
      <div>
        {quizData.map((quiz, index) => (
          <div key={index}>
            <button onClick={() => navigateToQuiz(index)}>{quiz.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
