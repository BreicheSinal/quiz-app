import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { setQuizData } from "./redux/users/quizSlice";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import "./styles/App.css";
import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz/:quizIndex" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
