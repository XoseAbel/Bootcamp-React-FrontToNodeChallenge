import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
  },
});

function BadRequest() {
  const classes = useStyles();
  return (
    <div>
      <h2>400 - Bad Request</h2>
      <Link className={classes.button} to='/'>
        <Button variant='outlined' color='secondary'>
          Go to Main Page
        </Button>
      </Link>
    </div>
  );
}

export { BadRequest };
