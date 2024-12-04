import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import "./styles/App.css";
import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
