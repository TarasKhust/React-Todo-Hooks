import React from 'react';
import { hot } from 'react-hot-loader';
import TodoApp from './TodoApp';

function App() {
    return (
      <div>
        <TodoApp/>
      </div>
    );
  }

export default hot(module)(App);
