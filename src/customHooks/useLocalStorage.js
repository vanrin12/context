import { useEffect, useReducer } from "react";

/**
 * Custom hook
 * Used to persist the state to localStorage
 * @param {string} keyLocalStorage: key of localStorage
 * @param {object} reducer: Root reducer (in useReducer)
 * @param {object} initialState: Initial state
 * @param {array} blacklist: Keys of reducer that don't want to persist
 */
const useLocalStorage = (
  keyLocalStorage,
  reducer,
  initialState,
  blacklist = []
) => {
  const [state, dispatch] = useReducer(
    reducer,
    (() => {
      try {
        const local = JSON.parse(window.localStorage.getItem(keyLocalStorage));
        if (local && Object.keys(local).length > 0) {
          return {
            ...initialState,
            ...local,
          };
        }

        return initialState;
      } catch (error) {
        // Return default state if JSON parsing fails
        return initialState;
      }
    })()
  );

  useEffect(() => {
    const stateClone = { ...state };
    for (let i = 0, { length } = blacklist; i < length; i += 1) {
      const key = blacklist[i];
      if (Object.prototype.hasOwnProperty.call(stateClone, key)) {
        delete stateClone[key];
      }
    }
    window.localStorage.setItem(keyLocalStorage, JSON.stringify(stateClone));
  });

  return [state, dispatch];
};

export default useLocalStorage;
