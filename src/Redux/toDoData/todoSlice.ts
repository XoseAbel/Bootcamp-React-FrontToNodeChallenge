import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

interface initiaState {
  data: null | any[];
}

export const todosSlice = createSlice({
  //identificador de nuestro feature, si hubiese varios actions se discriminan por el name
  name: 'todos',
  initialState: {
    data: null,
  } as initiaState,
  //reducer que tienen definidas todas las actions
  reducers: {
    addTodo: (state, action) => {
      let todo = { ...action.payload, id: '0', allDay: true };
      if (state.data) {
        const id = '' + state.data.length;
        todo = { ...todo, id };
      }
      state.data = state.data === null ? [todo] : [...state.data, todo];
    },
    completeTodo: (state, action) => {
      const index = action.payload;
      if (state.data) {
        state.data = state.data.map((todo: any, i: number) =>
          i === index ? { ...todo, completed: true, color: 'green' } : todo
        );
      }
    },

    dropDate: (state, action) => {
      const index = +action.payload.index;
      const delta = action.payload.delta;
      if (state.data) {
        state.data = state.data.map((todo: any, i: number) =>
          i === index
            ? {
                ...todo,
                start: moment(todo.start).add(delta, 'd').format('YYYY-MM-DD'),
                end: moment(todo.end).add(delta, 'd').format('YYYY-MM-DD'),
              }
            : todo
        );
      }
    },
  },
});

export const { addTodo, completeTodo, dropDate } = todosSlice.actions;

export default todosSlice.reducer;
