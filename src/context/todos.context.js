import React, { createContext, useReducer } from 'react';
import reducer from '../reducer/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', completed: false},
  { id: 2, task: 'Release lady bugs into garden', completed: true}
];

export const TodosContext = createContext();
export const Dispatchcontext = createContext()

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(reducer, defaultTodos)
  return (
    <TodosContext.Provider value={ todos }>
      <Dispatchcontext.Provider value={ dispatch }>
      {props.children}
      </Dispatchcontext.Provider>
    </TodosContext.Provider>
  )
}

