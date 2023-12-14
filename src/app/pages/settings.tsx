import React from 'react';
import NotificationsForm from '../components/notifications/form';
import { Typography } from '@mui/material';

const SettingsPage: React.FC = () => {
  return (
    <>
      <Typography variant="body1">Specify the frequency in which you want to receive notifications</Typography>
      <NotificationsForm />
    </>
  );
};

export default SettingsPage;
