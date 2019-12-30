import { Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import _ from 'lodash';

import Button from '../../../../shared/components/button';
import SelectCard from '../../../../shared/components/cardMusic/selectCard';
import Table from '../../../../shared/components/table';

const UserAccess = ({ verifyNickname, loading, selectedSongs, nicknameRegistered }) => {
  const [nickname, setNickname] = useState('');

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item>
        <Typography variant='subtitle1'>Seja bem vindo(a), como podemos chama-lo(a)?</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2} direction='row' justify='space-between'>
          <Grid item xs={6}>
            <Grid container spacing={2} direction='column'>
              <Grid item>
                <TextField
                  onChange={event => setNickname(event.target.value)}
                  className={classes.input}
                  variant='outlined'
                  label='Apelido'
                  required
                />
              </Grid>
              <Grid item className={classes.button}>
                <Button
                  disabled={loading || !nickname || nickname.lengt === 0}
                  onClick={() => verifyNickname(nickname)}
                  text='Prosseguir'
                  loading={loading}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            {nicknameRegistered && selectedSongs && selectedSongs.length > 0 && (
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <Typography variant='subtitle1'>{`${_.capitalize(
                    nicknameRegistered
                  )}, já recenemos suas indicações de músicas, como segue abaixo. Agora é só acompanhar nossa programação na rádio!`}</Typography>
                </Grid>
                <Grid item>
                  <Table data={selectedSongs} Card={SelectCard} />
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  input: {
    width: '100%'
  },
  button: {
    marginLeft: 'auto',
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

export default UserAccess;
