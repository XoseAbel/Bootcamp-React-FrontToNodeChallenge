import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import lime from '@material-ui/core/colors/lime';
import { LIST_ROUTES_NAVBAR } from '../../const/const';
import { useHistory } from 'react-router-dom';
import SignButton from './Components/SignButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectSessionLogged } from '../../Redux/session/selectors';
import LoggedButton from './Components/LoggedButton';
import ToDoButton from './Components/ToDoButton';
import Cookies from 'js-cookie';
import { setUser, toggleLogged } from '../../Redux/session/sessionSlice';
import { connectWithApi } from '../../api/connectWithApi';
import { USERS_URL, GET } from '../../api/const';

const useStyles = makeStyles({
  nav: {
    width: '100%',
    flexGrow: 1,
  },
  color: {
    backgroundColor: lime[700],
  },
  button: {
    color: lime[200],
    marginRight: 10,
  },
  buttonLeft: {
    color: lime[200],
    marginRight: 10,
    marginLeft: 'auto',
  },
});

const NavBar = () => {
  //selector de logged
  const isLogged = useSelector(selectSessionLogged);
  //obtenemos dispatch
  const dispatch = useDispatch();

  //generamos Estilos de CSS
  const classes = useStyles();

  //usehistory para modificar la ruta en nuestro NavBar
  let history = useHistory();
  const addHistory = (url: string) => {
    history.push(url);
  };

  const userCookie = Cookies.get('id');

  useEffect(() => {
    if (userCookie) {
      // console.log(userCookie);
      getUserPerId(userCookie);
    }
  }, []);

  //funcion que llama a la API para get per ID
  const getUserPerId = async (id: string) => {
    try {
      const { data } = await connectWithApi(`${USERS_URL}/${id}`, GET);
      // console.log(data);
      dispatch(setUser(data));
      dispatch(toggleLogged());
    } catch (error) {
      Cookies.set('id', '');
    }
  };

  return (
    <div className={classes.nav}>
      <AppBar position='static' className={classes.color}>
        <Toolbar>
          {
            <>
              {LIST_ROUTES_NAVBAR.map((value: any, index: number) => (
                <Button
                  key={`option${index}`}
                  className={classes.button}
                  onClick={() => addHistory(value.url)}
                >
                  {value.name}
                </Button>
              ))}
              {isLogged ? (
                <>
                  <ToDoButton
                    classes={classes.buttonLeft}
                    fn={addHistory}
                  ></ToDoButton>
                  <LoggedButton classes={classes.button}></LoggedButton>
                </>
              ) : (
                <SignButton classes={classes.buttonLeft} fn={addHistory} />
              )}
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { NavBar };
