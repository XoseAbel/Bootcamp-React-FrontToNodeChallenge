import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  //identificador de nuestro feature, si hubiese varios actions se discriminan por el name
  name: 'session',
  initialState: {
    isLogged: false,
    user: null,
    error: null,
  },

  //reducer que tienen definidas todas las actions
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    toggleLogged: state => {
      state.isLogged = !state.isLogged;
    },
    setUser: (state, action) => {
      const newUser = action.payload;
      state.user = newUser;
    },
  },
});

export const { toggleLogged, setError, setUser } = sessionSlice.actions;

export default sessionSlice.reducer;
