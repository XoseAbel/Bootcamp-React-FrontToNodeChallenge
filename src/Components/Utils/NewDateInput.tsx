import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 8,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

const NewDateInput = (props: any) => {
  //desextructuramos props
  const { label, fnChange, value } = props;
  // obtenemos estilos CSS
  const classes = useStyles();

  const handleDateChange = (event: any) => {
    fnChange(event.target.value);
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        id='date'
        label={label}
        type='date'
        onChange={handleDateChange}
        value={value}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export { NewDateInput };
