import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import lime from '@material-ui/core/colors/lime';
import { connectWithApi } from '../../../api/connectWithApi';
import { TBody } from './components/TBody';
import { THead } from './components/THead';
import { useHistory } from 'react-router-dom';
import { TitleColor } from '../../Utils/TitleColor';
import { Grid, Container, TableContainer } from '@material-ui/core';
import { RefreshButton } from '../../Utils/RefreshButton';
import { GET, USERS_URL } from '../../../api/const';
import {
  selectUsers,
  selectUsersLoading,
  selectUsersError,
} from '../../../Redux/users/selectors';
import {
  setError,
  saveUsers,
  toggleLoading,
} from '../../../Redux/users/userSlice';

const useStyles = makeStyles({
  colorText: {
    marginTop: 5,
    width: '100%',
    color: lime[700],
  },
  marginContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const ListUsers = () => {
  //selectores de REDUX
  const isLoading = useSelector(selectUsersLoading);
  const detailError = useSelector(selectUsersError);
  const listUsers = useSelector(selectUsers);
  //dispatch de actions
  const dispatch = useDispatch();

  //funcion que llama a la API
  const callApi = async () => {
    try {
      dispatch(toggleLoading());
      // const result = await connectWithApi('/hola', GET);
      const result = await connectWithApi(USERS_URL, GET);
      dispatch(saveUsers(result.data));
    } catch (error) {
      if (error === 404) {
        addHistory('/*');
      }
      dispatch(setError({ code: error.code, message: error.message }));
    } finally {
      dispatch(toggleLoading());
    }
  };
  //al construir nuestro componente llamamos a la API
  useEffect(() => {
    callApi();
  }, []);

  //usehistory para modificar la ruta
  let history = useHistory();
  const addHistory = (url: string) => {
    history.push(url);
  };

  //extraemos nuestro estilo
  const classes = useStyles();
  return (
    <Container className={classes.marginContainer}>
      <TitleColor text={'List Active Users'} />
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <THead />
          {isLoading ? (
            <p>Cargando....</p>
          ) : (
            listUsers && <TBody data={listUsers}></TBody>
          )}
        </Table>
      </TableContainer>
      {detailError && (
        <Grid container direction='column' justify='center' alignItems='center'>
          <h5>Code: {detailError.code}</h5>
          <h5>Message: {detailError.message}</h5>
          <RefreshButton fn={callApi} />{' '}
        </Grid>
      )}
    </Container>
  );
};

export { ListUsers };
