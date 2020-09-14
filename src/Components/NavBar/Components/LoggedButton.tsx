import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { selectSession } from '../../../Redux/session/selectors';
import { SimpleDialog } from './Dialog';

const LoggedButton = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleDialog = () => {
    setOpen(!open);
  };
  //selector para pintar el nombre en el boton
  const user = useSelector(selectSession);

  return (
    <>
      <Button className={props.classes} onClick={handleDialog}>
        {user.name}
      </Button>
      {open && <SimpleDialog open={open} closeFn={handleDialog} />}
    </>
  );
};

export default LoggedButton;
