import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/userSlice';
import sessionReducer from './session/sessionSlice';
import todosReducer from './toDoData/todoSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    session: sessionReducer,
    todos: todosReducer,
  },
  //desvtools habilitar
  devTools: true,
});
