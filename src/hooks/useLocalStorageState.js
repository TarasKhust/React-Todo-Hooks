import { useState, useEffect } from 'react'

const UseLocalStorageState = (key, defaulVal) => {
  const [state, setState] = useState(() => {
    let val;
    try{
      val = JSON.parse(window.localStorage.getItem(key) || String(defaulVal))
    }
    catch (e) {
      val = defaulVal;
    }
    return val
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
};

export default UseLocalStorageState;
