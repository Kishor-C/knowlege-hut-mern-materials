import logo from './logo.svg';
import './App.css';
// two Redux hooks useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
function App() {
  // earlier we created the state, but now we have subscribed to the store having state
  // a counter that is subscribing to the store
  const counter = useSelector((state) => state.counter);
  // a dispatch to dispatch the action to the reducer 
  const dispatch = useDispatch(); // dispatch({type: action.type});
  let increment = () => dispatch({type : 'INCREMENT'});
  let decrement = () => dispatch({type : 'DECREMENT'});
  return (
    <div>
      <h2>React Redux Demo!</h2>
      <h3>Counter: {counter}</h3>
      <div>
        <button onClick = {increment} className = 'btn btn-primary'>Add</button> &nbsp;
        <button onClick = {decrement} className = 'btn btn-primary'>Remove</button>
        
      </div>
    </div>
  );
}

export default App;
