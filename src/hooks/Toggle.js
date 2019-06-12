import {useState} from 'react';

const Toggle = (initialValue = false) => {
  const [state, setValue] = useState(initialValue)
  const toggle = () => {
    setValue(!state)
  }
  return [state, toggle]
}

export default Toggle
