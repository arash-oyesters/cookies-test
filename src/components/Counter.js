import moment from "moment/moment";
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../Redux/counter/counterreducer";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <p>{count}</p>
      <button
        onClick={() => handleIncrement(1)}
        style={{
          border: "none",
          padding: "10px",
          marginRight: "20px",
        }}
      >
        increase
      </button>
      <button
        onClick={() => handleDecrement(1)}
        style={{
          border: "none",
          padding: "10px",
        }}
      >
        decrease
      </button>
      <p>
        Demo for Moment.js : <b>{moment().format("MMMM Do YYYY, h:mm:ss a")}</b>
      </p>
    </div>
  );
};

export default Counter;
