import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="mb-4 px-4 py-2 bg-green-400 text-white font-bold text-lg rounded-sm"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increment By 5
      </button>
      <br />
      <button
        className="mb-4 px-4 py-2 bg-green-400 text-white font-bold text-lg rounded-sm"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <div>
        <h1 className=" text-xl font-extrabold">{count}</h1>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-red-400 text-white font-bold text-lg rounded-sm"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
