import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';

const useStyles = makeStyles({
  colorText: {
    marginTop: 5,
    width: '100%',
    color: lime[700],
  },
});

interface propsInterface {
  text: string;
}

const TitleColor = ({ text }: propsInterface) => {
  //extraemos nuestro estilo
  const classes = useStyles();
  return (
    <Typography
      variant='h4'
      align='center'
      gutterBottom={true}
      className={classes.colorText}
    >
      {text}
    </Typography>
  );
};

export { TitleColor };
