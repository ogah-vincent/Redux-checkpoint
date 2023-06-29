import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Counter';


function App() {

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h2>Welcome to redux</h2>
      <button onClick={ () => dispatch(increment())}>Increment</button>
      <br></br>
        <span>{count}</span>
      <br></br>
      <button onClick={ () => dispatch(decrement())}>Decrement</button>      
    </div>
  );
}

export default App;
