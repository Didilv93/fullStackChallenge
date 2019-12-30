import { Grid, Typography, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import { DefaultCard, SelectCard } from '../../../../shared/components/cardMusic';
import Button from '../../../../shared/components/button';
import Table from '../../../../shared/components/table';

const Suggestion = ({
  removeSelectedMusic,
  handleChangeFilter,
  registerUserVote,
  selectedSongs,
  loadingButton,
  selectMusic,
  dataBase,
  filter,
  data
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item>
        <Typography variant='subtitle1'>
          Sugira suas 5 músicas favoritas e torça para serem selecionadas para tocar na nossa rádio!
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={filter}
          onChange={handleChangeFilter}
          className={classes.input}
          variant='outlined'
          placeholder='Buscar por nome, artista ou gênero da música'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='Search'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item>
        <Grid container direction='row' spacing={3}>
          <Grid xs={6} item>
            <Table
              data={data}
              hasPagination
              Card={DefaultCard}
              action={selectMusic}
              disableActions={selectedSongs.length >= 5}
            />
          </Grid>
          <Grid xs={6} item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Table data={selectedSongs} Card={SelectCard} action={removeSelectedMusic} />
              </Grid>
              <Grid className={classes.button} item>
                <Button
                  disabled={selectedSongs.length !== 5}
                  onClick={() => registerUserVote(selectedSongs)}
                  text='Enviar músicas favoritas'
                  loading={loadingButton}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  input: {
    width: '100%',
    backgroundColor: '#fff'
  },
  button: {
    marginLeft: 'auto',
    position: 'relative'
  }
});

export default Suggestion;
