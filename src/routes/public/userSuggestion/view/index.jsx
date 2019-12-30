import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import _ from 'lodash';

import Header from '../../../../shared/components/header';
import { filterByText } from '../../../../shared/utils/filters';
import UserSuggestionManager from '../userSuggestionManager';
import Dialog from '../../../../shared/components/dialog';
import Suggestion from './suggestion';
import UserAccess from './userAccess';

const UserSuggestion = ({ location }) => {
  const [userDates, setUserDates] = useState({ nickname: '', favoriteSongs: [] });
  const [loadingButton, setLoadingButton] = useState(false);
  const [userVotedSongs, setUserVotedSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [redirectTo, setRedirectTo] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataBase, setDataBase] = useState([]);
  const [filter, setFilter] = useState('');

  const nonVotingUser =
    userDates.nickname && (!userDates.favoriteSongs || userDates.favoriteSongs.length === 0);

  useEffect(() => {
    const newFilteredData = filterByText(['name', 'artists', 'genre'], dataBase, filter);

    setFilteredData([...newFilteredData]);
  }, [filter, dataBase]);

  const selectMusic = (music, index) => {
    const newBase = dataBase.filter(item => item.id !== music.id);
    setDataBase([...newBase]);
    setSelectedSongs([...selectedSongs, { ...music, rankingValue: selectedSongs.length + 1 }]);
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

  const verifyNickname = async nickname => {
    setLoadingButton(true);
    const { user } = await UserSuggestionManager.getUser(nickname);
    if (user) {
      setUserDates({ nickname: user.nickname, favoriteSongs: user.favoriteSongs || [] });
    }
    const { playlist } = await UserSuggestionManager.listSongs();
    const newDataBase = _.orderBy(playlist, ['name'], ['asc']);
    setDataBase([...newDataBase]);
    if (user.favoriteSongs && user.favoriteSongs.length > 0) {
      setUserVotedSongs(
        user.favoriteSongs.map(song => ({
          ...newDataBase.find(item => item.id === song.id),
          rankingValue: song.rankingValue
        }))
      );
    }
    setLoadingButton(false);
  };

  const registerUserVote = async favoriteSongs => {
    if (favoriteSongs && userDates.nickname && nonVotingUser) {
      setLoadingButton(true);
      await UserSuggestionManager.registerUserVote(
        userDates.nickname,
        favoriteSongs.map(item => ({ id: item.id, rankingValue: item.rankingValue }))
      );
      setLoadingButton(false);
    }
    setOpenDialog(true);
  };

  const onCloseModal = () => {
    setOpenDialog(false);
    setRedirectTo(true);
  };

  return (
    <Grid container direction='column' spacing={2}>
      <Header pathName={location.pathname} />
      {!nonVotingUser ? (
        <UserAccess
          nicknameRegistered={userDates.nickname}
          verifyNickname={verifyNickname}
          selectedSongs={userVotedSongs}
          loading={loadingButton}
        />
      ) : (
        <Suggestion
          removeSelectedMusic={removeSelectedMusic}
          handleChangeFilter={handleChangeFilter}
          registerUserVote={registerUserVote}
          selectedSongs={selectedSongs}
          loadingButton={loadingButton}
          selectMusic={selectMusic}
          dataBase={dataBase}
          data={filteredData}
          filter={filter}
        />
      )}
      <Dialog
        text='Recebemos suas indicações com sucesso!'
        handleClose={onCloseModal}
        onClick={onCloseModal}
        textButton='Voltar'
        open={openDialog}
      />
      {redirectTo && <Redirect to='/' />}
    </Grid>
  );
};

export default UserSuggestion;
