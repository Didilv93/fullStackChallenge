import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import Header from '../../../../shared/components/header';
import FinalRankProcessingManager from '../finalRankProcessingManager';
import FinalRanking from './finalRanking';

const FinalRankProcessing = props => {
  const [dataBase, setDataBase] = useState([]);
  const [loadingButton, setLoadingButton] = useState(false);

  const updateRanking = async () => {
    setLoadingButton(true);
    const { finalRank } = await FinalRankProcessingManager.listPlayListFinalClassification();
    setDataBase([...finalRank]);
    setLoadingButton(false);
  };

  return (
    <Grid container direction='column' spacing={2}>
      <Header pathName={props.location.pathname} />
      <FinalRanking updateRanking={updateRanking} loadingButton={loadingButton} data={dataBase} />
    </Grid>
  );
};

export default FinalRankProcessing;
