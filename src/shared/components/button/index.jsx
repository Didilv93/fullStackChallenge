import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';

const ButtonComponent = ({ loading, text, disabled, onClick }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      <Button
        disabled={disabled}
        onClick={onClick}
        variant='contained'
        disableElevation
        color='primary'
      >
        {text}
      </Button>
    </React.Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

export default ButtonComponent;
