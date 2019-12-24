import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Grid, Typography } from '@material-ui/core';

const CardMusic = ({ name, artists, genre }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction='row' justify='space-between'>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Grid container direction='row' spacing={1}>
              <Grid item>
                <StarBorderIcon color='primary' />
              </Grid>
              <Grid item>
                <Typography>{name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{artists}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>{genre}</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(242, 242, 242, 0.2)'
    }
  }
}));

export default CardMusic;
