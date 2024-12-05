import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";

const Home = () => {
  const navigate = useNavigate();
  const score = useSelector((state) => state.quizState.score);

  console.log({ score });

  const navigateToQuiz = () => {
    navigate("/quiz");
    console.log("clicked");
  };
  return (
    <div>
      <h1>WELCOME MATE!</h1>
      <p>Score:{score}</p>
      <button onClick={navigateToQuiz}>Start</button>
    </div>
  );
};

export default Home;
