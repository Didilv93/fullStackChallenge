import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const FinalRankingCard = music => {
  const classes = useStyles();

  const { name, artists, action, disableActions, index } = music;

  const arrClassNameContainer = [classes.container];
  if (action) {
    arrClassNameContainer.push(!disableActions ? classes.actionBehavior : classes.disableActions);
  }

  return (
    <Grid
      onClick={action && !disableActions ? () => action(music.users) : undefined}
      className={arrClassNameContainer.join(' ')}
      justify='space-between'
      alignItems='center'
      direction='row'
      container
    >
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='button'>{`${index + 1}º - ${name}`}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Artista: {artists}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant='button'>{`${music.users.length} Voto(s)`}</Typography>
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

export default FinalRankingCard;
