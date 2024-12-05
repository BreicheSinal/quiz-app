import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionIndex: 0,
  selectedAns: [],
  score: 0,
  totalScore: 0,
  data: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData: (state, action) => {
      const quizData = action.payload;
      return {
        ...state,
        data: quizData,
      };
    },

    selectedAns: (state, action) => {
      const selected = action.payload;
      return {
        ...state,
        selectedAns: selected,
      };
    },

    incrementQsIndex: (state) => {
      state.questionIndex += 1;
    },

    incrementScore: (state) => {
      state.score += 10;
      state.totalScore += 10;
    },

    resetQuiz: (state) => {
      state.questionIndex = 0;
      state.selectedAns = [];
      state.score = 0;
    },
  },
});

export const {
  setQuizData,
  selectedAns,
  incrementQsIndex,
  incrementScore,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice;
