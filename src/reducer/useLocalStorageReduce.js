import { useReducer, useEffect } from 'react';

const UseLocalStorageReducer = (key, defaulVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaulVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaulVal));
    } catch (e) {
      val = defaulVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};

export default UseLocalStorageReducer;
