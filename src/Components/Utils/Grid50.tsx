import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  marginPaper: {
    padding: '5px',
    margin: 5,
  },
});

const Grid50 = (props: any) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Paper className={classes.marginPaper}>{props.children}</Paper>
    </Grid>
  );
};

export { Grid50 };
