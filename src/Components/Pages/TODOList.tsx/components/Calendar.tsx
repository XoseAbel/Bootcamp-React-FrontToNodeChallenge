import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList } from '../../../../Redux/toDoData/selectors';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { dropDate } from '../../../../Redux/toDoData/todoSlice';

const Calendar = () => {
  //selector para la lista de todos
  const todoList = useSelector(selectTodoList);
  //dispatch para actualziar Redux
  const dispatch = useDispatch();

  //funcion para actualizar fechas al desplazar eventos
  const handleDateClick = (event: any) => {
    const payload = {
      index: event.event._def.publicId,
      delta: event.delta.days,
    };
    dispatch(dropDate(payload));
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      editable={true}
      locale={esLocale}
      eventDrop={handleDateClick}
      initialView='dayGridMonth'
      events={todoList}
    />
  );
};
export { Calendar };
