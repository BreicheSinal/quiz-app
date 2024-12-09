import { setQuizData } from "../users/quizSlice";
import { useNavigate } from "react-router-dom";

export const loadQuizzes = () => async (dispatch) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:8080/quizzes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      navigate("/login");
      return;
    }

    const data = await response.json();
    dispatch(setQuizData(data));
  } catch (error) {
    console.log("Error fetching quizzes:", error.message);
  }
};
