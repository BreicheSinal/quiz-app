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
  },
});

export default quizSlice;