import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputField } from '../../Utils/InputField';
import { Container, Button } from '@material-ui/core';
import { Grid50 } from '../../Utils/Grid50';
import lime from '@material-ui/core/colors/lime';
import { TitleColor } from '../../Utils/TitleColor';
import { connectWithApi } from '../../../api/connectWithApi';
import { POST, LOGIN_URL, USERS_URL, GET } from '../../../api/const';
import { ResultLoginUser } from './components/ResultLoginUser';
import { useDispatch } from 'react-redux';
import {
  toggleLogged,
  setUser,
  setError,
} from '../../../Redux/session/sessionSlice';
import Cookies from 'js-cookie';

const useStyles = makeStyles({
  marginContainer: {
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
  },
});

const LoginUser = () => {
  const dispatch = useDispatch();

  //states component
  const [loginUser, setLoginUser] = useState<any>();
  const [showResult, setShowResult] = useState<boolean>(false);

  //handle update about inputs
  const updateNewUser = (event: any, key: string) => {
    const updatedUser = {
      ...loginUser,
      [key]: event.target.value,
    };
    setLoginUser(updatedUser);
  };

  //funcion que llama a la API para login
  const submitLoginUser = async () => {
    try {
      const resultId = await connectWithApi(LOGIN_URL, POST, loginUser);
      // console.log(resultId);
      Cookies.set('id', resultId.id);
      await getUserPerId(resultId.id);
      setShowResult(true);
    } catch (error) {
      setShowResult(true);
      dispatch(setError({ code: error.code, message: error.message }));
    }
  };

  //funcion que llama a la API para get per ID
  const getUserPerId = async (id: string) => {
    try {
      const { data } = await connectWithApi(`${USERS_URL}/${id}`, GET);
      // console.log(data);
      dispatch(setUser(data));
      dispatch(toggleLogged());
    } catch (error) {
      dispatch(setError({ code: error.code, message: error.message }));
    }
  };

  const classes = useStyles();

  return (
    <Container className={classes.marginContainer}>
      <TitleColor text={'Login User'} />
      {!showResult && (
        <>
          <Grid50>
            <InputField
              id='email'
              label='Email'
              fnChange={(event: any) => updateNewUser(event, 'email')}
            />
            <InputField
              id='password'
              label='Password'
              fnChange={(event: any) => updateNewUser(event, 'password')}
            />
          </Grid50>
          <Button
            variant='contained'
            className={classes.color}
            onClick={submitLoginUser}
          >
            Login User
          </Button>
        </>
      )}
      {showResult && <ResultLoginUser refreshFn={() => setShowResult(false)} />}
    </Container>
  );
};

export { LoginUser };
