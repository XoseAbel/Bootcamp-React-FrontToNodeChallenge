import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { lime } from '@material-ui/core/colors';
import { OPTIONS_CONDITION } from '../../../../const/const';

const useStyles = makeStyles({
  color: {
    width: '100%',
    marginTop: 5,
    '& > *': {
      border: '2px solid',
      color: lime[700],
    },
  },
});

const SelectCondition = (props: any) => {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.color} aria-label='select condition'>
      {OPTIONS_CONDITION.map((condition: string) => (
        <Button key={condition} onClick={() => props.fnCondition(condition)}>
          {condition}
        </Button>
      ))}
      <Button onClick={() => props.fnCondition('')}>ALL</Button>
    </ButtonGroup>
  );
};

export { SelectCondition };
