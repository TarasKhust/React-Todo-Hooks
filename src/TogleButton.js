import React from 'react';
import Toggle from './hooks/Toggle'


const TogleButton = () => {
  const [fanny, setFanny] = Toggle(true)

  return (
    <div><h1 onClick={setFanny}>{fanny ? "👍":'👎' }</h1></div>
  )
}

export default TogleButton
