import { Grid } from '@material-ui/core';
import React from 'react';

import Header from '../../../../shared/components/header';
import Table from '../../../../shared/components/table';
import CardMusic from '../../../../shared/components/cardMusic';

const playlist = [
  {
    id: '6DCZcSspjsKoFjzjrWoCd',
    name: "God's Plan",
    artists: 'Drake',
    genre: 'Hip-Hop/Rap',
    danceability: 0.754,
    energy: 0.449,
    key: 7,
    loudness: -9.211,
    mode: 1,
    speechiness: 0.109,
    acousticness: 0.0332,
    instrumentalness: 0.0000829,
    liveness: 0.552,
    valence: 0.357,
    tempo: 77.169,
    duration_ms: 198973,
    time_signature: 4
  },
  {
    id: '3ee8Jmje8o58CHK66QrVC',
    name: 'SAD!',
    artists: 'XXXTENTACION',
    genre: 'Hip-Hop/Rap',
    danceability: 0.74,
    energy: 0.613,
    key: 8,
    loudness: -4.88,
    mode: 1,
    speechiness: 0.145,
    acousticness: 0.258,
    instrumentalness: 0.00372,
    liveness: 0.123,
    valence: 0.473,
    tempo: 75.023,
    duration_ms: 166606,
    time_signature: 4
  },
  {
    id: '0e7ipj03S05BNilyu5bRz',
    name: 'rockstar (feat. 21 Savage)',
    artists: 'Post Malone',
    genre: 'Hip-Hop/Rap',
    danceability: 0.587,
    energy: 0.535,
    key: 5,
    loudness: -6.09,
    mode: 0,
    speechiness: 0.0898,
    acousticness: 0.117,
    instrumentalness: 0.0000656,
    liveness: 0.131,
    valence: 0.14,
    tempo: 159.847,
    duration_ms: 218147,
    time_signature: 4
  },
  {
    id: '3swc6WTsr7rl9DqQKQA55',
    name: 'Psycho (feat. Ty Dolla $ign)',
    artists: 'Post Malone',
    genre: 'Hip-Hop/Rap',
    danceability: 0.739,
    energy: 0.559,
    key: 8,
    loudness: -8.011,
    mode: 1,
    speechiness: 0.117,
    acousticness: 0.58,
    instrumentalness: 0,
    liveness: 0.112,
    valence: 0.439,
    tempo: 140.124,
    duration_ms: 221440,
    time_signature: 4
  },
  {
    id: '2G7V7zsVDxg1yRsu7Ew9R',
    name: 'In My Feelings',
    artists: 'Drake',
    genre: 'Hip-Hop/Rap',
    danceability: 0.835,
    energy: 0.626,
    key: 1,
    loudness: -5.833,
    mode: 1,
    speechiness: 0.125,
    acousticness: 0.0589,
    instrumentalness: 0.00006,
    liveness: 0.396,
    valence: 0.35,
    tempo: 91.03,
    duration_ms: 217925,
    time_signature: 4
  },
  {
    id: '7dt6x5M1jzdTEt8oCbisT',
    name: 'Better Now',
    artists: 'Post Malone',
    genre: 'Hip-Hop/Rap',
    danceability: 0.68,
    energy: 0.563,
    key: 10,
    loudness: -5.843,
    mode: 1,
    speechiness: 0.0454,
    acousticness: 0.354,
    instrumentalness: 0,
    liveness: 0.136,
    valence: 0.374,
    tempo: 145.028,
    duration_ms: 231267,
    time_signature: 4
  },
  {
    id: '58q2HKrzhC3ozto2nDdN4',
    name: 'I Like It',
    artists: 'Cardi B',
    genre: 'Hip-Hop/Rap',
    danceability: 0.816,
    energy: 0.726,
    key: 5,
    loudness: -3.998,
    mode: 0,
    speechiness: 0.129,
    acousticness: 0.099,
    instrumentalness: 0,
    liveness: 0.372,
    valence: 0.65,
    tempo: 136.048,
    duration_ms: 253390,
    time_signature: 4
  },
  {
    id: '7ef4DlsgrMEH11cDZd32M',
    name: 'One Kiss (with Dua Lipa)',
    artists: 'Calvin Harris',
    genre: 'Dance/Electronic',
    danceability: 0.791,
    energy: 0.862,
    key: 9,
    loudness: -3.24,
    mode: 0,
    speechiness: 0.11,
    acousticness: 0.037,
    instrumentalness: 0.0000219,
    liveness: 0.0814,
    valence: 0.592,
    tempo: 123.994,
    duration_ms: 214847,
    time_signature: 4
  },
  {
    id: '76cy1WJvNGJTj78UqeA5z',
    name: 'IDGAF',
    artists: 'Dua Lipa',
    genre: 'Pop',
    danceability: 0.836,
    energy: 0.544,
    key: 7,
    loudness: -5.975,
    mode: 1,
    speechiness: 0.0943,
    acousticness: 0.0403,
    instrumentalness: 0,
    liveness: 0.0824,
    valence: 0.51,
    tempo: 97.028,
    duration_ms: 217947,
    time_signature: 4
  },
  {
    id: '08bNPGLD8AhKpnnERrAc6',
    name: 'FRIENDS',
    artists: 'Marshmello',
    genre: 'Dance/Electronic',
    danceability: 0.626,
    energy: 0.88,
    key: 9,
    loudness: -2.384,
    mode: 0,
    speechiness: 0.0504,
    acousticness: 0.205,
    instrumentalness: 0,
    liveness: 0.128,
    valence: 0.534,
    tempo: 95.079,
    duration_ms: 202621,
    time_signature: 4
  },
  {
    id: '1rfofaqEpACxVEHIZBJe6',
    name: 'Havana',
    artists: 'Camila Cabello',
    genre: 'Pop',
    danceability: 0.765,
    energy: 0.523,
    key: 2,
    loudness: -4.333,
    mode: 1,
    speechiness: 0.03,
    acousticness: 0.184,
    instrumentalness: 0.0000356,
    liveness: 0.132,
    valence: 0.394,
    tempo: 104.988,
    duration_ms: 217307,
    time_signature: 4
  }
];

const UserSuggestion = ({ location }) => {
  return (
    <Grid container direction='column' spacing={2}>
      <Header pathName={location.pathname} />
      <Grid item>
        <Grid container direction='row' spacing={3}>
          <Grid xs={6} item>
            <Table data={playlist} hasPagination card={CardMusic} />
          </Grid>
          <Grid xs={6} item>
            <Table card={CardMusic} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserSuggestion;
