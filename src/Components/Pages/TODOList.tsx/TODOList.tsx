import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSession } from '../../../Redux/session/selectors';
import { TitleColor } from '../../Utils/TitleColor';
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { buildObjectProperties } from '../../../auxiliarFuntions/BuildObjectPropertis';
import { Grid50 } from '../../Utils/Grid50';
import { InputField } from '../../Utils/InputField';
import { lime } from '@material-ui/core/colors';
import { addTodo } from '../../../Redux/toDoData/todoSlice';
import { ListTodos } from './components/ListTodos';
import { Calendar } from './components/Calendar';
import moment from 'moment';
import { NewDateInput } from '../../Utils/NewDateInput';

const useStyles = makeStyles({
  mainContainer: {
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  color: {
    marginTop: 5,
    color: lime[700],
    maxWidth: 200,
    alignSelf: 'center',
  },
});

const TODOList = () => {
  const classes = useStyles();
  //obtenemos info del usuario
  const userInfo = useSelector(selectSession);
  //generamos estado para crear el TO-DO y verificar Title
  const [toDo, setToDo] = useState({
    title: '',
    start: moment().format('YYYY-MM-DD'),
    end: moment().add(1, 'd').format('YYYY-MM-DD'),
    completed: false,
  });
  const [errorTitle, setErrorTitle] = useState(false);

  //generamos dispatch
  const dispatch = useDispatch();

  //actualizamos el state de nuestro component con los inputs
  const updateToDo = (event: any, key: string) => {
    //si es fecha me quedo con el valor, si es input lo busco en el target
    const value =
      ['start', 'end'].indexOf(key) !== -1
        ? moment(event).format('YYYY-MM-DD')
        : event.target.value;

    const toDoData = buildObjectProperties(key, value, toDo);
    setToDo(toDoData);
  };

  //añadimos a Redux nuestro ToDo
  const submitToDo = () => {
    if (toDo.title) {
      setErrorTitle(false);
      dispatch(addTodo(toDo));
      //reset todo
      setToDo({
        title: '',
        start: moment().format('YYYY-MM-DD'),
        end: moment().add(1, 'd').format('YYYY-MM-DD'),
        completed: false,
      });
    }
    if (!toDo.title) {
      setErrorTitle(true);
    }
  };

  return (
    <Container className={classes.mainContainer}>
      {userInfo && (
        <>
          <TitleColor text={'Welcome to personal area ' + userInfo.name} />
          <Typography variant='h6'>You are: {userInfo.condition}</Typography>
        </>
      )}
      <Grid container direction='row'>
        <Grid50>
          <InputField
            errorTitle={errorTitle}
            val={toDo.title}
            id='title'
            label='Title'
            fnChange={(event: any) => updateToDo(event, 'title')}
          ></InputField>
          <Grid container direction='row' justify='space-between'>
            <NewDateInput
              label='Start Date'
              defaultValue={moment().format('YYYY-MM-DD')}
              fnChange={(event: any) => updateToDo(event, 'start')}
            />
            <NewDateInput
              label='End Date'
              defaultValue={moment().add(1, 'd').format('YYYY-MM-DD')}
              fnChange={(event: any) => updateToDo(event, 'end')}
            />
            <Button
              variant='contained'
              className={classes.color}
              onClick={submitToDo}
            >
              Add To Do
            </Button>
          </Grid>
          <ListTodos />
        </Grid50>
        <Grid50>
          <Calendar />
        </Grid50>
      </Grid>
    </Container>
  );
};
export { TODOList };
