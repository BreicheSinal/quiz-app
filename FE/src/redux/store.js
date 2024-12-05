import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./users/quizSlice";

const store = configureStore({
  reducer: {
    quizState: quizSlice.reducer,
  },
});

export default store;
