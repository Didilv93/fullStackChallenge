import { Grid } from '@material-ui/core';
import React from 'react';

import Header from '../../../../shared/components/header';

const FinalRankProcessing = props => {
  return (
    <Grid container spacing={2}>
      <Header pathName={props.location.pathname} />
    </Grid>
  );
};

export default FinalRankProcessing;
