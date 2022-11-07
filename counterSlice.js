import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    INCREMENT(state) {
      state.value = state.value + 1;
    },
    DECREMENT(state) {
      state.value = state.value - 1;
    },
    // this dispatch is used to trigger the async increment saga
    INCREMENT_ASYNC() {},
  },
});

const { reducer, actions } = counterSlice;

// !exp action creators exported
export const { INCREMENT, DECREMENT, INCREMENT_ASYNC } = actions;

export default reducer;
