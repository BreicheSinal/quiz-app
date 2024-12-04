import { Provider } from "react-redux";
import "./styles/App.css";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Routes></Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
