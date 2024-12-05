import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateToQuiz = () => {
    navigate("/quiz");
    console.log("clicked");
  };
  return (
    <div>
      <h1>WELCOME MATE!</h1>
      <p>Score:</p>
      <button onClick={navigateToQuiz}>Start</button>
    </div>
  );
};

export default Home;
