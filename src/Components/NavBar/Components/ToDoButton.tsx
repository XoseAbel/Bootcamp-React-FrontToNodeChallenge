import React from 'react';
import Button from '@material-ui/core/Button';
import { LIST_TODO } from '../../../const/const';

const ToDoButton = (props: any) => {
  return (
    <Button
      key={`LOGIN`}
      className={props.classes}
      onClick={() => props.fn(LIST_TODO.url)}
    >
      {LIST_TODO.name}
    </Button>
  );
};

export default ToDoButton;
