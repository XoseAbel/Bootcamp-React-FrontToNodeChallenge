import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';

const useStyles = makeStyles({
  color: {
    marginTop: 5,
    color: lime[700],
  },
});

interface propsInterface {
  fn: Function;
}

const RefreshButton = ({ fn }: propsInterface) => {
  //extraemos nuestro estilo
  const classes = useStyles();
  return (
    <Button variant='contained' className={classes.color} onClick={() => fn()}>
      Refresh
    </Button>
  );
};

export { RefreshButton };
