import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/slices/counter";
import "./App.css";

function App() {

  const {counter}=useSelector(state=>state.counter);
  const dispatch = useDispatch();



  return (
    <>
      
      <h1>Toolkit-Redux</h1>
          count is {counter}
      <div className="card">

        <button onClick={() =>dispatch(increment())}>
          increment
        </button>
        <button onClick={() =>dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() =>dispatch(incrementByAmount(7))}>
          increment by 2
        </button>
        
      </div>
    </>
  );
}

export default App;
