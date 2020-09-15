import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

export default function SkeletonRow(props: any) {
  const { qty } = props;
  const arr = Array.from({ length: qty });

  return (
    <TableBody>
      {arr.map((row: any, index: number) => (
        <TableRow key={'ske' + index}>
          <TableCell component='th' scope='row'>
            <Skeleton animation='wave' />
          </TableCell>
          <TableCell>
            <Skeleton animation='wave' />
          </TableCell>
          <TableCell>
            <Skeleton animation='wave' />
          </TableCell>
          <TableCell>
            <Skeleton animation='wave' />
          </TableCell>
          <TableCell>
            <Skeleton animation='wave' />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
