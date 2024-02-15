import { useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <button>Increment</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button>Decrement</button>
    </>
  );
};

export default Counter;
