import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

import { NicknamesCard, FinalRankingCard } from '../../../../shared/components/cardMusic';
import Button from '../../../../shared/components/button';
import Table from '../../../../shared/components/table';

const FinalRanking = ({ updateRanking, loadingButton, data }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item>
        <Typography variant='subtitle1'>
          Atualize a lista, para visualizar as músicas mais votadas pelos ouvintes!
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' spacing={3}>
          <Grid xs={8} item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Table data={data} Card={FinalRankingCard} action={users => setUsers(users)} />
              </Grid>
              <Grid className={classes.button} item>
                <Button
                  onClick={() => updateRanking()}
                  text='Atualizar Classificação'
                  loading={loadingButton}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.listNicknames} xs={4} item>
            {users.map(item => (
              <NicknamesCard key={item.nickname} nickname={item.nickname} />
            ))}
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
  },
  listNicknames: {
    maxHeight: '366px',
    overflowY: 'auto'
  }
});

export default FinalRanking;
