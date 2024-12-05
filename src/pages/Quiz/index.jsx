import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Quiz = () => {
  const { quizIndex } = useParams();

  const dispatch = useDispatch();

  const quizData = useSelector((state) => state.quizState.data);
  const qsIndex = useSelector((state) => state.quizState.questionIndex);
  const score = useSelector((state) => state.quizState.score);
  const selectedAns = useSelector((state) => state.quizState.selectedAns);

  return <div></div>;
};

export default Quiz;
