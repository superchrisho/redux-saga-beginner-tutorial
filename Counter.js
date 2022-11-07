import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const value = useSelector((state) => state.counter.value);

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch(INCREMENT_ASYNC())}>
          Increment after 1 second
        </button>
        <button
          onClick={() => {
            dispatch(INCREMENT());
          }}>
          Increment
        </button>
        <button onClick={() => dispatch(DECREMENT())}>Decrement</button>
        <hr />
      </div>
      <div style={{ marginTop: "1rem" }}>Clicked: {value} times</div>
    </>
  );
};

export default Counter;
