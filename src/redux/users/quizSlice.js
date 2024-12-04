import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialState: {
    questionIndex: 0,
    selectedAns: [],
    score: 0,
    data: [],
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
});

export default quizSlice;
