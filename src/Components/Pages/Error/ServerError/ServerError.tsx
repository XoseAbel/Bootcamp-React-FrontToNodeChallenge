import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
  },
});

function ServerError() {
  const classes = useStyles();
  return (
    <div>
      <h2>500 - Server Error</h2>
      <Link className={classes.button} to='/'>
        <Button variant='outlined' color='secondary'>
          Go to Main Page
        </Button>
      </Link>
    </div>
  );
}

export { ServerError };
