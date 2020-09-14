import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles({
  size: {
    height: 48,
    width: '100%',
  },
});

const InputField = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        error={props.errorTitle}
        value={props.val}
        className={classes.size}
        id={props.id}
        label={props.label}
        onChange={props.fnChange}
      />
      {props.errorTitle && (
        <FormHelperText id='component-error-text'>Invalid Field</FormHelperText>
      )}
    </>
  );
};

export { InputField };
