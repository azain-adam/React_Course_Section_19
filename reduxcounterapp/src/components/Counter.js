import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const handleIncrement = () => {
    dispatch(counterActions.handleIncrement());
  };
  const handleDecrement = () => {
    dispatch(counterActions.handleDecrement());
  };

  const handleIncrease = () => {
    dispatch(counterActions.handleIncrease(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.handleToggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrease}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
