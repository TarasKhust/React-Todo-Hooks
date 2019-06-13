import React, { createContext } from 'react';
import reducer from '../reducer/todo.reducer';
import UseLocalStorageReducer from '../reducer/useLocalStorageReduce';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', completed: false },
  { id: 2, task: 'Release lady bugs into garden', completed: true }
];

export const TodosContext = createContext();
export const Dispatchcontext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = UseLocalStorageReducer(
    'todos',
    defaultTodos,
    reducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <Dispatchcontext.Provider value={dispatch}>
        {props.children}
      </Dispatchcontext.Provider>
    </TodosContext.Provider>
  );
}
