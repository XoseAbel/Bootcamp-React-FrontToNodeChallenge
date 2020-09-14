import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  //identificador de nuestro feature, si hubiese varios actions se discriminan por el name
  name: 'users',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  //reducer que tienen definidas todas las actions
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    toggleLoading: state => {
      state.isLoading = !state.isLoading;
    },
    saveUsers: (state, action) => {
      const newUsers = action.payload;
      state.data = newUsers;
    },
  },
});

export const { setError, toggleLoading, saveUsers } = userSlice.actions;

export default userSlice.reducer;
