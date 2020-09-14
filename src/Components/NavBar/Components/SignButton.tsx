import React from 'react';
import Button from '@material-ui/core/Button';
import { LIST_LOGIN } from '../../../const/const';

const SignButton = (props: any) => {
  return (
    <Button
      key={`LOGIN`}
      className={props.classes}
      onClick={() => props.fn(LIST_LOGIN.url)}
    >
      {LIST_LOGIN.name}
    </Button>
  );
};

export default SignButton;
