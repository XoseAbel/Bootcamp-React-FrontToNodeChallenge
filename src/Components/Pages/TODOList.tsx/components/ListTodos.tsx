import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { selectTodoList } from '../../../../Redux/toDoData/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { ListItemIcon, Typography } from '@material-ui/core';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import { green } from '@material-ui/core/colors';
import { completeTodo } from '../../../../Redux/toDoData/todoSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    eachTodo: {
      width: '100%',
    },
  })
);

const ListTodos = () => {
  const classes = useStyles();
  //generamos selectores
  const todoList = useSelector(selectTodoList);
  //definnimos distapch
  const dispatch = useDispatch();

  //funcion para completar todos
  const completeATodo = (index: number) => {
    dispatch(completeTodo(index));
  };

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='center' gutterBottom={true}>
        My To-Do List
      </Typography>
      <List component='nav' aria-label='todo list'>
        {todoList &&
          todoList.map((todo: any, index: number) => (
            <div key={`todo-${index}`}>
              <Divider />
              <ListItem button>
                <ListItemIcon className={classes.eachTodo}>
                  <ListItemText primary={todo.title} />
                  <AssignmentTurnedInTwoToneIcon
                    style={{
                      color: green[800],
                      fontSize: 30,
                      marginLeft: 'auto',
                    }}
                    onClick={() => completeATodo(index)}
                  />
                </ListItemIcon>
              </ListItem>
            </div>
          ))}
      </List>
    </div>
  );
};
export { ListTodos };
