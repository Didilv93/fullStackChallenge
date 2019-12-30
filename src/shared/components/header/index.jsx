import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { selectTitle } from '../../utils/enum';

const Headler = props => {
  const title = selectTitle(props.pathName);
  return (
    <Grid item>
      <Typography variant='h5'>{title}</Typography>
    </Grid>
  );
};

export default Headler;
