import React from 'react';
import { Typography, Grid, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const NicknamesCard = ({ nickname }) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableRow}>
      <TableCell component='th' scope='row' className={classes.tableCell}>
        <Grid className={classes.container} alignItems='center' container>
          <Grid item>
            <Typography variant='button'>{nickname}</Typography>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    minHeight: '60px'
  },
  tableCell: {
    padding: '0px',
    border: '1px solid rgba(224, 224, 224, 1)',
    borderTop: 'none',
    display: 'flex',
    width: '100%'
  },
  tableRow: {
    background: '#fff',
    display: 'flex',
    width: '100%'
  }
}));

export default NicknamesCard;
