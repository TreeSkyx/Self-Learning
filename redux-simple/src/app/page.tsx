"use client";
import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./redux/features/counter/counterSlice";
import phase from "react-html-parser";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-5">
      <div className="font-bold text-2xl">Count by Redux Toolkit</div>
      <div className="font-bold text-xl">{count}</div>
      <button
        className="bg-blue-500 rounded-full p-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 rounded-full p-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className=" bg-teal-500 rounded-full p-2"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
      <button
        className=" bg-cyan-500 rounded-full p-2"
        onClick={() => dispatch(decrementByAmount(2))}
      >
        Decrement by 2
      </button>
      HTML Phaser
    </main>
  );
}
