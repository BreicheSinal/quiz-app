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

  const [userAnswer, setUserAnswer] = useState("");
  const [answered, setAnswered] = useState(false);

  if (!quizData || !quizData[quizIndex]) navigate("/");

  const quiz = quizData[quizIndex];

  return (
    <div>
      <h1>{quiz?.title}</h1>
      <h2>Question {qsIndex + 1}</h2>
      <p>{quiz?.questions[qsIndex].question}</p>
    </div>
  );
};

export default Quiz;
