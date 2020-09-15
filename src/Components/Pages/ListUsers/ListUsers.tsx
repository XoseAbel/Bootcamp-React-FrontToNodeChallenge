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
import SkeletonRow from './components/Skeleton';
import { SelectCondition } from './components/SelectCondition';

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
  const callApi = async (condition: string = '') => {
    try {
      dispatch(toggleLoading());
      const result = await connectWithApi(`${USERS_URL}${condition}`, GET);
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

  //manejamos la seleccion de condiccion
  const handleCondition = (condition: any) => {
    const filter = `?condition=${condition}`;
    callApi(filter);
  };

  //extraemos nuestro estilo
  const classes = useStyles();
  return (
    <Container className={classes.marginContainer}>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Grid item sm={12} md={8}>
          <TitleColor text={'List Active Users'} />
        </Grid>
        <Grid item sm={12} md={4}>
          <SelectCondition fnCondition={handleCondition} />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <THead />
          {isLoading ? (
            <SkeletonRow qty={9} />
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
