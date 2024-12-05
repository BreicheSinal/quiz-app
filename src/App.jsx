import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { setQuizData } from "./redux/users/quizSlice";
import { quizData } from "./data/data";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import "./styles/App.css";
import "./styles/index.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuizData(quizData));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizIndex" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
