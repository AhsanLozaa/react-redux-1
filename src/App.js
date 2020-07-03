import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, studentJob, resetJOb} from './actions';


function App() {
  const counter = useSelector(state => state.myCount);
  const job = useSelector(state => state.job);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{counter}</h1>
      <h1>{job}</h1>
      <button onClick = {() => dispatch(increment())}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      <button onClick = {() => dispatch(studentJob())}>?</button>
      <button onClick = {() => dispatch(resetJOb())}>~</button>
    </div>
  );
}

export default App;
