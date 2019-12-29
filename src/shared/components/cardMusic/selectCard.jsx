import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const SelectCard = music => {
  const classes = useStyles();

  const { name, artists, index, action, disableActions } = music;

  const arrClassNameContainer = [classes.container];
  if (action) {
    arrClassNameContainer.push(!disableActions ? classes.actionBehavior : classes.disableActions);
  }

  return (
    <Grid
      className={arrClassNameContainer.join(' ')}
      container
      direction='row'
      justify='space-between'
      alignItems='center'
      onClick={action && !disableActions ? () => action(music) : undefined}
    >
      <Grid item>
        <Grid container direction='row' alignItems='center' spacing={1}>
          <Grid item>
            <StarBorderIcon color='primary' />
          </Grid>
          <Grid item>
            <Typography variant='button'>{`${index + 1}º - ${name}`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant='caption'>Artista: {artists}</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    minHeight: '60px'
  },
  actionBehavior: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(242, 242, 242, 0.2)'
    }
  },
  disableActions: {
    backgroundColor: 'rgba(242, 242, 242, 0.5)'
  }
}));

export default SelectCard;
