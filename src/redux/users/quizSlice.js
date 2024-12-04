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
    },
  },
});

export const { setQuizData, selectedAns, incrementQsIndex, incrementScore } =
  quizSlice.actions;

export default quizSlice;
