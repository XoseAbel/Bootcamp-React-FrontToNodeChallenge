import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { lime, red } from '@material-ui/core/colors';
import { Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setUser, toggleLogged } from '../../../Redux/session/sessionSlice';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const useStyles = makeStyles({
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 5,
  },
  buttonCancell: {
    backgroundColor: lime[700],
    color: lime[100],
    margin: 5,
    '&:hover': {
      color: lime[800],
    },
  },
  buttonLogOut: {
    backgroundColor: red[700],
    color: red[100],
    margin: 5,
    '&:hover': {
      color: red[800],
    },
  },
});

export function SimpleDialog(props: any) {
  const classes = useStyles();

  const dispatch = useDispatch();
  //logOut nuestro usuario
  const logOut = () => {
    dispatch(toggleLogged());
    Cookies.set('id', '');
    dispatch(setUser(null));
    addHistory('/');
  };

  //usehistory para modificar la ruta en nuestro NavBar
  let history = useHistory();
  const addHistory = (url: string) => {
    history.push(url);
  };

  return (
    <Dialog
      onClose={props.closeFn}
      aria-labelledby='simple-dialog-title'
      open={props.open}
    >
      <Typography className={classes.text} variant='h6'>
        Se quiere desconectar?
      </Typography>
      <Button className={classes.buttonCancell} onClick={props.closeFn}>
        Cancelar
      </Button>
      <Button className={classes.buttonLogOut} onClick={logOut}>
        Desconectar
      </Button>
    </Dialog>
  );
}
