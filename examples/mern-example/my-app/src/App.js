import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // subscribe to the state present in store
  // now the ctr variable is subscribed to the counter present in the state of counterReducer
  const ctr = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

export default App;
