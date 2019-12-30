import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableBody, TableCell, TableRow, Table, Paper } from '@material-ui/core';

import TableFooter from './tableFooter';

const CustomPaginationActionsTable = ({ data, hasPagination, Card, action, disableActions }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const rows = data ? data.sort((a, b) => (a.calories < b.calories ? -1 : 1)) : [];

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='custom pagination table'>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map(row => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row' className={classes.tableCell}>
                <Card {...row} action={action} disableActions={disableActions} />
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 61 * emptyRows }}>
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
        {hasPagination && (
          <TableFooter
            setRowsPerPage={setRowsPerPage}
            setPage={setPage}
            rows={rows}
            rowsPerPage={rowsPerPage}
            page={page}
          />
        )}
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 500
  },
  tableCell: {
    padding: '0px'
  }
});

export default CustomPaginationActionsTable;
