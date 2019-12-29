import { Grid, TextField, IconButton, InputAdornment, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Header from '../../../../shared/components/header';
import Table from '../../../../shared/components/table';
import { DefaultCard, SelectCard } from '../../../../shared/components/cardMusic';
import { filterByText } from '../../../../shared/utils/filters';
import UserSuggestionManager from '../userSuggestionManager';

const UserSuggestion = ({ location }) => {
  const classes = useStyles();

  const [dataBase, setDataBase] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    async function listSongs() {
      const { playlist } = await UserSuggestionManager.listSongs();
      setDataBase(_.orderBy(playlist, ['name'], ['asc']));
    }

    listSongs();
  }, []);

  useEffect(() => {
    const newFilteredData = filterByText(['name', 'artists', 'genre'], dataBase, filter);

    setFilteredData([...newFilteredData]);
  }, [filter, dataBase]);

  const selectMusic = music => {
    const newBase = dataBase.filter(item => item.id !== music.id);

    setDataBase([...newBase]);
    setSelectedSongs([...selectedSongs, music]);
  };

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const removeSelectedMusic = music => {
    const newSelectedSongs = selectedSongs.filter(item => item.id !== music.id);
    const newDataBase = [music, ...dataBase];
    setDataBase(_.orderBy(newDataBase, ['name'], ['asc']));
    setSelectedSongs([...newSelectedSongs]);
  };

  return (
    <Grid container direction='column' spacing={3}>
      <Header pathName={location.pathname} />
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
              data={filteredData}
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
                  variant='contained'
                  color='primary'
                  disableElevation
                >
                  Enviar músicas favoritas
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  input: {
    width: '100%',
    backgroundColor: '#fff'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export default UserSuggestion;
