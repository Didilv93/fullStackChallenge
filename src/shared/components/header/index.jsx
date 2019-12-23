import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { selectTitle } from '../../util/enum';

const Headler = props => {
    const title = selectTitle(props.pathName);
    return (
        <Grid item>
          <Typography variant="h4">
            {title}
          </Typography>
        </Grid>
    );
}

export default Headler;