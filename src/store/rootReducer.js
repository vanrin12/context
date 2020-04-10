import counterReducer from "./counterReducer";
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return (state = {}, action) => {
    const nextState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      // Get the current key name
      const key = reducerKeys[i];

      // Get the current reducer
      const reducer = reducers[key];

      // Get the the previous state
      const previousStateForKey = state[key];

      // Get the next state by running the reducer
      const nextStateForKey = reducer(previousStateForKey, action);

      // Update the new state for the current reducer
      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}

export default combineReducers({
  counter: counterReducer,
});
