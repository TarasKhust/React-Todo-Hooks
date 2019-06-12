import React from 'react';
import useInputState from './hooks/useInputState'

export default function InputText () {
  const [email, updateEmail, resetEmail] = useInputState()

  return (
    <div>
      <h1>This input value...{email}</h1>
      <input type="text" value={email} onChange={updateEmail}/>
      <button onClick={resetEmail}>Submit</button>
    </div>
  )
}
