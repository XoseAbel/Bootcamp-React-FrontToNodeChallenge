import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  marginPaper: {
    padding: '5px',
    margin: 5,
  },
});

const Grid33 = (props: any) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4}>
      <Paper className={classes.marginPaper}>{props.children}</Paper>
    </Grid>
  );
};

export { Grid33 };
