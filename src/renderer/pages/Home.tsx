import React from "react";
import { inc, dec } from "../features/counterSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function Home() {
  const value = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Home</h2>
      <p>
        Counter: <b>{value}</b>
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => dispatch(dec())}>-</button>
        <button onClick={() => dispatch(inc())}>+</button>
      </div>
      <p style={{ marginTop: 16 }}>
        Preload API ping: <code>{window.api?.ping?.() ?? "no api"}</code>
      </p>
    </div>
  );
}
