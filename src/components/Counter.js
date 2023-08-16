import { useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { counterActions } from "../store";



const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
const showCounter=useSelector(state=>state.counter.showCounter)
  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement())
  };

  const payloadHandler = () => {
    // dispatch({ type: "increase" , amount:5 });
    dispatch(counterActions.increase(5))
  };

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={payloadHandler}>increment by 5 </button>
      </div>
      <br/>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
