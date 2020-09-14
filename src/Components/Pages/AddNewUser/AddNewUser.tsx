import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SelectInput } from './components/SelectInput';
import { Grid, Container, Button } from '@material-ui/core';
import { Grid33 } from './components/Grid33';
import lime from '@material-ui/core/colors/lime';
import { TitleColor } from '../../Utils/TitleColor';
import { OPTIONS_CONDITION } from '../../../const/const';
import { newUserInterface } from '../../../const/types';
import { connectWithApi } from '../../../api/connectWithApi';
import { POST, USERS_URL } from '../../../api/const';
import { ResultAddUser } from './components/ResultAddUser';
import { buildObjectProperties } from '../../../auxiliarFuntions/BuildObjectPropertis';
import { InputField } from '../../Utils/InputField';

const useStyles = makeStyles({
  marginContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  align: {
    display: 'flex',
    flexDirection: 'row',
  },
  color: {
    marginTop: 5,
    color: lime[700],
    maxWidth: 200,
  },
});

const AddNewUser = () => {
  const [newUser, setNewUser] = useState<newUserInterface>();
  const [tryAgain, setTryAgain] = useState<boolean>(false);
  const [resultApi, setResultApi] = useState<any>();

  //handle update about inputs
  const updateNewUser = (event: any, key: string) => {
    //pasarle el new user entero, para actualizarlo
    //cambiamos phone a number
    const value = key.includes('phone')
      ? +event.target.value
      : event.target.value;

    const updatedUser = buildObjectProperties(
      key,
      value,
      newUser
    ) as newUserInterface;

    setNewUser(updatedUser);
  };

  //funcion que llama a la API
  const submitNewUser = async () => {
    try {
      const result = await connectWithApi(USERS_URL, POST, newUser);
      setTryAgain(true);
      setResultApi(result);
      console.log(result);
    } catch (error) {
      setTryAgain(true);
      setResultApi({ code: error.code, message: error.message });
    }
  };

  const classes = useStyles();

  return (
    <Container className={classes.marginContainer}>
      <TitleColor text={'Create New User'} />
      {!tryAgain && (
        <>
          <form autoComplete='off ' className={classes.align}>
            <Grid33>
              <InputField
                id='name'
                label='Name'
                fnChange={(event: any) => updateNewUser(event, 'name')}
              />
              <InputField
                id='surname'
                label='Surname'
                fnChange={(event: any) => updateNewUser(event, 'surname')}
              />
            </Grid33>
            <Grid33>
              <InputField
                id='email'
                label='Email'
                fnChange={(event: any) => updateNewUser(event, 'email')}
              />
              <InputField
                id='password'
                label='Password'
                fnChange={(event: any) => updateNewUser(event, 'password')}
              />
            </Grid33>
            <Grid33>
              <SelectInput
                id='condition'
                option={OPTIONS_CONDITION}
                fnChange={(event: any) => updateNewUser(event, 'condition')}
              />
              <Grid container direction='row'>
                <Grid item sm={4}>
                  <InputField
                    id='phone.countryCode'
                    label='Code'
                    fnChange={(event: any) =>
                      updateNewUser(event, 'phone.countryCode')
                    }
                  />
                </Grid>
                <Grid item sm={8}>
                  <InputField
                    id='phone.number'
                    label='Phone Number'
                    fnChange={(event: any) =>
                      updateNewUser(event, 'phone.number')
                    }
                  />
                </Grid>
              </Grid>
            </Grid33>
          </form>
          <Button
            variant='contained'
            className={classes.color}
            onClick={submitNewUser}
          >
            Add User
          </Button>
        </>
      )}
      {tryAgain && resultApi && (
        <ResultAddUser data={resultApi} refreshFn={() => setTryAgain(false)} />
      )}
    </Container>
  );
};

export { AddNewUser };
