import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./users/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
