import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { RefreshButton } from '../../../Utils/RefreshButton';
import { useSelector } from 'react-redux';
import {
  selectSessionError,
  selectSession,
} from '../../../../Redux/session/selectors';

const ResultLoginUser = ({ refreshFn }: any) => {
  const errorData = useSelector(selectSessionError);
  const userData = useSelector(selectSession);

  let resultToPrint;
  if (errorData) {
    resultToPrint = (
      <>
        <Typography variant='h6'>Something was wrong</Typography>
        <Typography variant='h6'>Code: {errorData.code}</Typography>
        <Typography variant='h6'>Message: {errorData.message}</Typography>
        <RefreshButton fn={refreshFn} />{' '}
      </>
    );
  }
  if (userData) {
    resultToPrint = (
      <>
        <Typography variant='h6'>User logged successfully</Typography>
        <Typography variant='h6'>User ID: {userData._id}</Typography>
        <Typography variant='h6'>User name: {userData.name}</Typography>
      </>
    );
  }

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      {resultToPrint}
    </Grid>
  );
};

export { ResultLoginUser };
