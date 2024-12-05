import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Quiz = () => {
  const { quizIndex } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizData = useSelector((state) => state.quizState.data);
  const qsIndex = useSelector((state) => state.quizState.questionIndex);
  const score = useSelector((state) => state.quizState.score);
  const selectedAns = useSelector((state) => state.quizState.selectedAns);

  if (!quizData || !quizData[quizIndex]) navigate("/");

  return <div></div>;
};

export default Quiz;
