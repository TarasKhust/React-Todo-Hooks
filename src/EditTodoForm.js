import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';

const EditTodoForm = ({id, task, toggleEditForm}) => {
  const { editTodo } = useContext(TodosContext)
  const [value, handleChange, reset] = useInputState(task);
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          editTodo(id, value);
          reset();
          toggleEditForm();
        }}style={{marginLeft: '1rem', width: '50%'}}
      >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus
        />
      </form>
    </div>
  );
};

export default EditTodoForm;
