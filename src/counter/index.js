import React, { useContext } from "react";
import { StoreContext } from "../store/store";

const Counter = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { count } = state.counter;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          backgroundColor: "green",
          width: "150px",
          fontSize: "16px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <p style={{ width: "100px" }}>{count}</p>
      <button
        style={{
          backgroundColor: "black",
          width: "150px",
          fontSize: "16px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
