import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { HEADER } from './header.conts';

const THead = () => {
  return (
    <TableHead>
      <TableRow>
        {HEADER.map((value: string, index: number) => (
          <TableCell key={value + index}>{value}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export { THead };
