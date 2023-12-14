import React, { useContext } from 'react';
import NotificationsForm from './form';
import { Dialog, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import { NotificationsContext } from '../../context/notifications';

const NotificationsDialog: React.FC = () => {
  const { notificationsFrequency } = useContext(NotificationsContext);

  return (
    <Dialog open={!notificationsFrequency} fullWidth>
      <DialogTitle>Specify Notifications Configuration</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Specify the frequency in which you want to receive notifications. After setting the default configuration,
          editing will be possible from the settings page
        </DialogContentText>
        <NotificationsForm />
      </DialogContent>
    </Dialog>
  );
};

export default NotificationsDialog;
