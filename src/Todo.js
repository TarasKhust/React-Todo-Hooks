import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Toggle from './hooks/Toggle';
import EditTodoForm from './EditTodoForm';

const Todo = ({ task, completed, id, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = Toggle(false)

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>:
        <>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label="Edit" onClick={toggle}>
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
      </>
        }
    </ListItem>
  );
};

export default Todo;
