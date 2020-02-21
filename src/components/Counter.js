import React from 'react'
import { connect } from "react-redux";
import { incrementAsync, decrementAsync, incrementIfOdd } from '../actions/handleClick'
const Counter = ({ count, handleDecrementClick, handleIncrementClick, handleIncrementIfOddClick }) => {
    return (
      <div className="App">
        <header className="App-header">
          {count}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={handleDecrementClick}>Decrement</button>
          <button onClick={handleIncrementClick}>Increment</button>
          <button onClick={handleIncrementIfOddClick}>Increment if odd</button>
        </header>
      </div>
    );
  };

export default connect(
    state => ({
      count: state.countReducer
    }),
    dispatch => ({
      handleIncrementClick: () => dispatch(incrementAsync()),
      handleDecrementClick: () => dispatch(decrementAsync()),
      handleIncrementIfOddClick: () => dispatch(incrementIfOdd())
    })
  )(Counter);
  