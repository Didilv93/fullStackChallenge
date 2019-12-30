import React from 'react';

import { DialogContentText, DialogActions, DialogContent, Dialog } from '@material-ui/core';
import Button from '../button';
import { makeStyles } from '@material-ui/core/styles';

const DialogComponent = ({ open, handleClose, onClick, text, textButton }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.dialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={onClick} text={textButton} />
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles(theme => ({
  dialogActions: {
    justifyContent: 'space-around'
  },
  dialog: {
    padding: theme.spacing(3)
  }
}));

export default DialogComponent;
