import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadQuizzes } from "../../redux/thunks/quizThunk.js";

import "./style.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalScore = useSelector((state) => state.quizState.totalScore);
  const quizData = useSelector((state) => state.quizState.data);

  useEffect(() => {
    dispatch(loadQuizzes());
  }, [dispatch]);

  const navigateToQuiz = (index) => {
    navigate(`/quiz/${index}`, { state: { quizIndex: index } });
  };

  return (
    <div>
      <h1>WELCOME MATE!</h1>
      <p>Total Score:{totalScore}</p>
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
