
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const increment =() =>{
  return {
    type: INCREMENT_COUNTER,
    payload: 1
  };
}
export const incrementAsync = () => dispatch => {
    setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(increment());
      }, 1000);
}


export const incrementIfOdd = () => {
    return (dispatch, getState) => {
      const { countReducer } = getState();
  
      if (countReducer % 2 === 0) {
        return;
      }
  
      dispatch(increment());
    };
  }

export const decrementAsync = () => dispatch => dispatch({ type: 'DECREMENT' });