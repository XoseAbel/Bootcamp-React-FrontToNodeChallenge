import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface propsInterface {
  data: any[];
}

const TBody = ({ data }: propsInterface) => {
  return (
    <TableBody>
      {data.map((row: any) => (
        <TableRow key={row._id}>
          <TableCell component='th' scope='row'>
            {row._id}
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.surname}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.condition}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export { TBody };
