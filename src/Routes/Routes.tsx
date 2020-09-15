import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListUsers } from '../Components/Pages/ListUsers';
import { AddNewUser } from '../Components/Pages/AddNewUser';
import { NotFound } from '../Components/Pages/Error/NotFound/NotFound';
import { Statistics } from '../Components/Pages/Statistics';
import { LoginUser } from '../Components/Pages/LoginUser';
import { TODOList } from '../Components/Pages/TODOList.tsx';
import { FormValidationSchema } from '../Components/Pages/FormValidationSchema';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <ListUsers />
      </Route>
      <Route exact path='/newUser'>
        <AddNewUser />
      </Route>
      <Route exact path='/validationSchema'>
        <FormValidationSchema />
      </Route>
      <Route exact path='/statistics'>
        <Statistics />
      </Route>
      <Route exact path='/login'>
        <LoginUser />
      </Route>
      <Route exact path='/todo'>
        <TODOList />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export { Routes };
