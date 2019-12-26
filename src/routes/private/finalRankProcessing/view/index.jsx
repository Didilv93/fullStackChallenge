import { Grid } from '@material-ui/core';
import React from 'react';

import { Redirect } from 'react-router-dom';

import Header from '../../../../shared/components/header';

const FinalRankProcessing = props => {
  const [test, settest] = React.useState(false);

  return (
    <Grid container spacing={2}>
      <Header pathName={props.location.pathname} />
      <button onClick={() => settest(true)}>redirect</button>
      {test && <Redirect to='/sugestoes' />}
    </Grid>
  );
};

export default FinalRankProcessing;
