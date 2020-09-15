import React from 'react';
import { MenuItem, Select } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  size: {
    height: 48,
    width: '100%',
  },
});

const SelectInput = (props: any) => {
  const classes = useStyles();
  return (
    <Select
      value={props.val}
      className={classes.size}
      name={props.id}
      onChange={props.fnChange}
    >
      {props.option.map((condition: any, index: number) => (
        <MenuItem key={'condition' + index} value={condition}>
          {condition}
        </MenuItem>
      ))}
    </Select>
  );
};

export { SelectInput };
