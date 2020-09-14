import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
  },
  margin: {
    margin: 15,
  },
});

function NotFound() {
  const classes = useStyles();
  return (
    <Grid className={classes.margin}>
      <h2>404 - Not Found</h2>
      <Link className={classes.button} to='/'>
        <Button variant='outlined' color='secondary'>
          Go to Main Page
        </Button>
      </Link>
    </Grid>
  );
}

export { NotFound };
