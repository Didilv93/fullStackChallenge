import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const CardMusic = music => {
  const classes = useStyles();

  const { name, artists, genre, action, disableActions } = music;

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
      onClick={action && !disableActions ? () => action(music) : undefined}
    >
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='button'>{name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Artista: {artists}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant='caption'>Gênero: {genre}</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1)
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

export default CardMusic;
