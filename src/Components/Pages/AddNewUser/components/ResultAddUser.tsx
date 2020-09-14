import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { RefreshButton } from '../../../Utils/RefreshButton';

const ResultAddUser = ({ data, refreshFn }: any) => {
  let resultToPrint;
  if (data.code) {
    resultToPrint = (
      <>
        <Typography variant='h6'>Something was wrong</Typography>
        <Typography variant='h6'>Code: {data.code}</Typography>
        <Typography variant='h6'>Message: {data.message}</Typography>
      </>
    );
  }
  if (data.insertedCount) {
    resultToPrint = (
      <>
        <Typography variant='h6'>Added new user</Typography>
        <Typography variant='h6'>New User ID: {data.insertedId}</Typography>
        <Typography variant='h6'>Count: {data.insertedCount}</Typography>
      </>
    );
  }

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      {resultToPrint}
      <RefreshButton fn={refreshFn} />{' '}
    </Grid>
  );
};

export { ResultAddUser };
